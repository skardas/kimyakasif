#!/usr/bin/env python3
"""
Generates the "Obsidian Lab Glass" Kimya 3D app icons (glass flask + gold orbits) and splash screens for:
- Web / PWA (public/icon-192.png, public/icon-512.png, public/apple-touch-icon.png)
- iOS Assets.xcassets (AppIcon-512@2x.png 1024x1024 RGB, Splash 2732x2732 RGB)
- Android mipmap-* icons (legacy, round, adaptive foreground) & 11 drawable splash PNGs
"""

import math
import os
from pathlib import Path
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def lerp_color(c1, c2, t: float):
    t = max(0.0, min(1.0, t))
    return tuple(int(lerp(c1[i], c2[i], t)) for i in range(len(c1)))


def draw_3d_background(width: int, height: int) -> Image.Image:
    """Obsidian Lab Glass icon ground: radial #1B3158 -> #0A1322 -> #05080F lit from upper centre."""
    gw, gh = 256, 256
    grad = Image.new("RGBA", (gw, gh), (10, 19, 34, 255))
    px = grad.load()
    c0, c1, c2 = (27, 49, 88), (10, 19, 34), (5, 8, 15)
    for y in range(gh):
        v = y / (gh - 1)
        for x in range(gw):
            u = x / (gw - 1)
            d = math.hypot((u - 0.48) / 0.9, (v - 0.38) / 0.9)
            col = lerp_color(c0, c1, d / 0.58) if d < 0.58 else lerp_color(c1, c2, (d - 0.58) / 0.42)
            px[x, y] = (*col, 255)
    return grad.resize((width, height), Image.Resampling.BICUBIC)


def _arc_points(x1, y1, rx, ry, phi_deg, large, sweep, x2, y2, steps=24):
    """SVG elliptical arc (endpoint form) -> list of points, excluding the start point."""
    phi = math.radians(phi_deg)
    cp, sp = math.cos(phi), math.sin(phi)
    dx, dy = (x1 - x2) / 2, (y1 - y2) / 2
    x1p, y1p = cp * dx + sp * dy, -sp * dx + cp * dy
    lam = (x1p ** 2) / (rx ** 2) + (y1p ** 2) / (ry ** 2)
    if lam > 1:
        rx, ry = rx * math.sqrt(lam), ry * math.sqrt(lam)
    num = rx ** 2 * ry ** 2 - rx ** 2 * y1p ** 2 - ry ** 2 * x1p ** 2
    den = rx ** 2 * y1p ** 2 + ry ** 2 * x1p ** 2
    co = math.sqrt(max(0.0, num / den)) if den else 0.0
    if large == sweep:
        co = -co
    cxp, cyp = co * rx * y1p / ry, -co * ry * x1p / rx
    cx = cp * cxp - sp * cyp + (x1 + x2) / 2
    cy = sp * cxp + cp * cyp + (y1 + y2) / 2

    def ang(ux, uy, vx, vy):
        a = math.atan2(ux * vy - uy * vx, ux * vx + uy * vy)
        return a

    t1 = ang(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry)
    dt = ang((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry)
    if not sweep and dt > 0:
        dt -= 2 * math.pi
    elif sweep and dt < 0:
        dt += 2 * math.pi
    pts = []
    for i in range(1, steps + 1):
        t = t1 + dt * i / steps
        x, y = rx * math.cos(t), ry * math.sin(t)
        pts.append((cp * x - sp * y + cx, sp * x + cp * y + cy))
    return pts


# Logo geometry in the 0..120 viewBox (matches public/icon.svg and FlaskMark.tsx)
def _flask_outline():
    pts = [(52, 18), (68, 18), (68, 42), (94, 88)]
    pts += _arc_points(94, 88, 9, 9, 0, 0, 1, 85, 102)
    pts += [(35, 102)]
    pts += _arc_points(35, 102, 9, 9, 0, 0, 1, 26, 88)
    pts += [(52, 42)]
    return pts


def _liquid_outline():
    pts = [(41.5, 66), (78.5, 66), (91.1, 88.6)]
    pts += _arc_points(91.1, 88.6, 6.5, 6.5, 0, 0, 1, 85, 98.5)
    pts += [(35, 98.5)]
    pts += _arc_points(35, 98.5, 6.5, 6.5, 0, 0, 1, 28.9, 88.6)
    return pts


def _orbit_half(angle_deg: float, front: bool, steps: int = 64):
    """Half of the rx50/ry17 orbit centred at (60,70), rotated like SVG rotate(angle 60 70).
    front=True -> lower half (passes in front of the glass)."""
    a = math.radians(angle_deg)
    ca, sa = math.cos(a), math.sin(a)
    pts = []
    t0, t1 = (0.0, math.pi) if front else (math.pi, 2 * math.pi)
    for i in range(steps + 1):
        t = t0 + (t1 - t0) * i / steps
        x, y = 50 * math.cos(t), 17 * math.sin(t)
        pts.append((60 + x * ca - y * sa, 70 + x * sa + y * ca))
    return pts


def _gradient_fill(size: int, mask: Image.Image, stops, direction: str) -> Image.Image:
    """RGBA image of a linear gradient (list of (offset, (r,g,b,a))) clipped by mask (L)."""
    g = Image.new("RGBA", (256, 256))
    gp = g.load()
    for y in range(256):
        for x in range(256):
            t = y / 255 if direction == "v" else (x + y) / 510
            for i in range(len(stops) - 1):
                o0, c0 = stops[i]
                o1, c1 = stops[i + 1]
                if t <= o1 or i == len(stops) - 2:
                    k = 0 if o1 == o0 else max(0.0, min(1.0, (t - o0) / (o1 - o0)))
                    gp[x, y] = lerp_color(c0, c1, k)
                    break
    g = g.resize((size, size), Image.Resampling.BICUBIC)
    out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    out.paste(g, (0, 0), mask)
    return out


def build_flask_emblem(size: int, padding_ratio: float = 0.0) -> Image.Image:
    """Glass Erlenmeyer + two gold orbits (Logo artboard), transparent background, drop shadow."""
    ss = 2  # supersample
    S_ = size * ss
    inner = S_ * (1 - 2 * padding_ratio)
    k = inner / 100.0  # content spans ~x 10..110 / y 13..103 of the viewBox
    ox = S_ * padding_ratio - 10 * k
    oy = S_ * padding_ratio - 8 * k

    def P(pt):
        return (ox + pt[0] * k, oy + pt[1] * k)

    def W(v):
        return max(1, int(round(v * k)))

    art = Image.new("RGBA", (S_, S_), (0, 0, 0, 0))
    d = ImageDraw.Draw(art)

    # Back halves of the orbits
    for ang in (-26, 26):
        d.line([P(p) for p in _orbit_half(ang, front=False)], fill=(168, 106, 8, 204), width=W(2.6), joint="curve")

    flask = [P(p) for p in _flask_outline()]
    liquid = [P(p) for p in _liquid_outline()]
    m = Image.new("L", (S_, S_), 0)
    ImageDraw.Draw(m).polygon(flask, fill=255)
    art.alpha_composite(_gradient_fill(S_, m, [(0, (255, 255, 255, 77)), (0.5, (45, 217, 195, 20)), (1, (45, 217, 195, 66))], "d"))
    m = Image.new("L", (S_, S_), 0)
    ImageDraw.Draw(m).polygon(liquid, fill=255)
    art.alpha_composite(_gradient_fill(S_, m, [(0, (95, 242, 223, 255)), (1, (12, 128, 115, 255))], "v"))

    d = ImageDraw.Draw(art)
    d.line(flask + [flask[0], flask[1]], fill=(140, 245, 231, 255), width=W(3), joint="curve")
    cx, cy = P((60, 66))
    d.ellipse([cx - 18.5 * k, cy - 3.4 * k, cx + 18.5 * k, cy + 3.4 * k], fill=(198, 255, 247, 255))
    for (bx, by, r, a) in ((52, 82, 3, 204), (66, 88, 2, 178), (61, 76, 1.5, 178)):
        x, y = P((bx, by))
        d.ellipse([x - r * k, y - r * k, x + r * k, y + r * k], fill=(198, 255, 247, a))
    x0, y0 = P((48.5, 13.5))
    x1, y1 = P((71.5, 20))
    d.rounded_rectangle([x0, y0, x1, y1], radius=3.2 * k, fill=(140, 245, 231, 255))
    spec = Image.new("RGBA", (S_, S_), (0, 0, 0, 0))
    ImageDraw.Draw(spec).line([P((47, 58)), P((36, 79))], fill=(255, 255, 255, 140), width=W(3), joint="curve")
    art.alpha_composite(spec)

    # Front halves of the orbits (gold) with a light highlight
    d = ImageDraw.Draw(art)
    for ang in (-26, 26):
        pts = [P(p) for p in _orbit_half(ang, front=True)]
        d.line(pts, fill=(250, 199, 88, 255), width=W(3.2), joint="curve")
        hi = pts[: len(pts) // 2]
        d.line(hi, fill=(255, 224, 138, 150), width=W(1.2), joint="curve")
        for end in (pts[0], pts[-1]):
            r = 1.6 * k
            d.ellipse([end[0] - r, end[1] - r, end[0] + r, end[1] + r], fill=(255, 224, 138, 255))
    for (ex, ey) in ((24, 97), (97, 96)):
        x, y = P((ex, ey))
        d.ellipse([x - 5 * k, y - 5 * k, x + 5 * k, y + 5 * k], fill=(255, 224, 138, 255), outline=(168, 106, 8, 255), width=W(1))

    # Soft drop shadow underneath (filter: drop-shadow(0 10 10 rgba(0,0,0,.55)))
    alpha = art.split()[3]
    shadow = Image.new("RGBA", (S_, S_), (0, 0, 0, 0))
    shadow.putalpha(alpha.point(lambda v: int(v * 0.55)))
    shadow = shadow.filter(ImageFilter.GaussianBlur(radius=5 * k))
    out = Image.new("RGBA", (S_, S_), (0, 0, 0, 0))
    out.alpha_composite(shadow, dest=(0, int(6 * k)))
    out.alpha_composite(art)
    return out.resize((size, size), Image.Resampling.LANCZOS)


def build_square_icon(master_emblem: Image.Image, size: int, circle_mask: bool = False) -> Image.Image:
    bg = draw_3d_background(size, size)
    emblem = master_emblem.resize((size, size), Image.Resampling.LANCZOS)
    bg.alpha_composite(emblem)

    if circle_mask:
        mask = Image.new("L", (size, size), 0)
        md = ImageDraw.Draw(mask)
        # Render 2x mask for crisp anti-aliased circle
        m2 = Image.new("L", (size * 2, size * 2), 0)
        ImageDraw.Draw(m2).ellipse([0, 0, size * 2 - 1, size * 2 - 1], fill=255)
        mask = m2.resize((size, size), Image.Resampling.LANCZOS)
        out = Image.new("RGBA", (size, size), (0, 0, 0, 0))
        out.paste(bg, (0, 0), mask)
        return out

    return bg


def build_splash(master_emblem: Image.Image, width: int, height: int) -> Image.Image:
    bg = draw_3d_background(width, height)
    min_dim = min(width, height)
    emblem_size = int(min_dim * 0.44)
    emblem = master_emblem.resize((emblem_size, emblem_size), Image.Resampling.LANCZOS)
    ox = (width - emblem_size) // 2
    oy = (height - emblem_size) // 2
    bg.alpha_composite(emblem, dest=(ox, oy))
    return bg.convert("RGB")


def main():
    print("Rendering 2048x2048 3D emblem master...")
    master_full = build_flask_emblem(2048, padding_ratio=0.11)
    master_adaptive = build_flask_emblem(1024, padding_ratio=0.22)

    # 1. Web / PWA PNG icons
    print("Generating Web/PWA icons...")
    build_square_icon(master_full, 512).save(ROOT / "public" / "icon-512.png", format="PNG")
    build_square_icon(master_full, 192).save(ROOT / "public" / "icon-192.png", format="PNG")
    build_square_icon(master_full, 180).save(ROOT / "public" / "apple-touch-icon.png", format="PNG")

    # 2. iOS AppIcon (1024x1024 RGB non-alpha required by App Store / Xcode)
    print("Generating iOS AppIcon (1024x1024 RGB)...")
    ios_icon = build_square_icon(master_full, 1024).convert("RGB")
    ios_icon.save(ROOT / "ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png", format="PNG")

    # 3. iOS Splash screens (2732x2732 RGB)
    print("Generating iOS Splash images (2732x2732 RGB)...")
    ios_splash = build_splash(master_full, 2732, 2732)
    splash_dir = ROOT / "ios/App/App/Assets.xcassets/Splash.imageset"
    for fname in ["splash-2732x2732.png", "splash-2732x2732-1.png", "splash-2732x2732-2.png"]:
        ios_splash.save(splash_dir / fname, format="PNG")

    # 4. Android Mipmap icons across all 5 densities
    print("Generating Android mipmap launcher icons...")
    android_res = ROOT / "android/app/src/main/res"
    densities = {
        "mipmap-mdpi": (48, 108),
        "mipmap-hdpi": (72, 162),
        "mipmap-xhdpi": (96, 216),
        "mipmap-xxhdpi": (144, 324),
        "mipmap-xxxhdpi": (192, 432),
    }
    for folder, (icon_px, fg_px) in densities.items():
        dpath = android_res / folder
        build_square_icon(master_full, icon_px, circle_mask=False).save(dpath / "ic_launcher.png", format="PNG")
        build_square_icon(master_full, icon_px, circle_mask=True).save(dpath / "ic_launcher_round.png", format="PNG")
        master_adaptive.resize((fg_px, fg_px), Image.Resampling.LANCZOS).save(dpath / "ic_launcher_foreground.png", format="PNG")

    # 5. Android Splash screens across all 11 drawable configurations
    print("Generating Android splash screens...")
    splashes = {
        "drawable/splash.png": (480, 320),
        "drawable-port-mdpi/splash.png": (320, 480),
        "drawable-port-hdpi/splash.png": (480, 800),
        "drawable-port-xhdpi/splash.png": (720, 1280),
        "drawable-port-xxhdpi/splash.png": (960, 1600),
        "drawable-port-xxxhdpi/splash.png": (1280, 1920),
        "drawable-land-mdpi/splash.png": (480, 320),
        "drawable-land-hdpi/splash.png": (800, 480),
        "drawable-land-xhdpi/splash.png": (1280, 720),
        "drawable-land-xxhdpi/splash.png": (1600, 960),
        "drawable-land-xxxhdpi/splash.png": (1920, 1280),
    }
    for rel_path, (sw, sh) in splashes.items():
        build_splash(master_full, sw, sh).save(android_res / rel_path, format="PNG")

    print("All icons and splash assets generated cleanly!")


if __name__ == "__main__":
    main()
