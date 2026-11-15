#!/usr/bin/env python3
"""
Generates 3D-shaded Chemistry Lab app icons and splash screens for:
- Web / PWA (public/icon-192.png, public/icon-512.png, public/apple-touch-icon.png)
- iOS Assets.xcassets (AppIcon-512@2x.png 1024x1024 RGB, Splash 2732x2732 RGB)
- Android mipmap-* icons (legacy, round, adaptive foreground) & 11 drawable splash PNGs
"""

import math
import os
from pathlib import Path
from PIL import Image, ImageChops, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def lerp_color(c1, c2, t: float):
    t = max(0.0, min(1.0, t))
    return tuple(int(lerp(c1[i], c2[i], t)) for i in range(len(c1)))


def draw_radial_glow(canvas: Image.Image, cx: int, cy: int, radius: int, color_rgba) -> None:
    size = canvas.size
    overlay = Image.new("RGBA", size, (0, 0, 0, 0))
    d = ImageDraw.Draw(overlay)
    r, g, b, max_a = color_rgba
    steps = 28
    for i in range(steps, 0, -1):
        frac = i / steps
        rad = radius * frac
        alpha = int(max_a * ((1.0 - frac) ** 1.85))
        if alpha <= 0:
            continue
        d.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=(r, g, b, alpha))
    overlay = overlay.filter(ImageFilter.GaussianBlur(radius=max(2, radius * 0.08)))
    canvas.alpha_composite(overlay)


def draw_3d_background(width: int, height: int) -> Image.Image:
    """Renders a deep midnight lab gradient with subtle 3D depth lighting."""
    # Render small gradient and upscale smoothly with BICUBIC for speed + banding-free smoothness
    gw, gh = 256, 256
    grad = Image.new("RGBA", (gw, gh), (11, 15, 25, 255))
    px = grad.load()
    top = (8, 12, 24)
    mid = (11, 15, 25)
    bot = (15, 23, 42)
    for y in range(gh):
        v = y / max(1, gh - 1)
        base = lerp_color(top, mid, v * 2.0) if v < 0.5 else lerp_color(mid, bot, (v - 0.5) * 2.0)
        for x in range(gw):
            u = x / max(1, gw - 1)
            # Subtle diagonal studio highlight
            dx = u - 0.48
            dy = v - 0.42
            dist = math.hypot(dx, dy)
            boost = max(0.0, 1.0 - dist * 1.45)
            r = min(255, int(base[0] + boost * 10))
            g = min(255, int(base[1] + boost * 22))
            b = min(255, int(base[2] + boost * 36))
            px[x, y] = (r, g, b, 255)

    img = grad.resize((width, height), Image.Resampling.BICUBIC)
    cx, cy = width // 2, height // 2
    min_dim = min(width, height)
    draw_radial_glow(img, int(cx * 0.96), int(cy * 0.94), int(min_dim * 0.46), (6, 182, 212, 85))
    draw_radial_glow(img, int(cx * 1.06), int(cy * 1.08), int(min_dim * 0.36), (16, 185, 129, 55))
    draw_radial_glow(img, int(cx * 0.85), int(cy * 0.72), int(min_dim * 0.28), (56, 189, 248, 45))
    return img


def build_flask_emblem(size: int, padding_ratio: float = 0.0) -> Image.Image:
    """
    Renders a crisp transparent RGBA 3D Erlenmeyer flask + golden orbital rings emblem
    with 3D glass curvature, volumetric meniscus, bubbles, and specular highlights.
    `padding_ratio` centers the emblem inside adaptive safe zones (e.g. 0.18 for Android foreground).
    """
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    scale = 1.0 - 2.0 * padding_ratio
    s = size * scale
    ox = size * padding_ratio
    oy = size * padding_ratio

    def P(nx: float, ny: float):
        return (ox + nx * s, oy + ny * s)

    def S(val: float) -> float:
        return val * s

    cx, cy_orb = P(0.50, 0.56)

    # 1. Soft back cyan volumetric aura around flask
    draw_radial_glow(canvas, int(P(0.50, 0.57)[0]), int(P(0.50, 0.57)[1]), int(S(0.38)), (6, 182, 212, 72))
    draw_radial_glow(canvas, int(P(0.50, 0.62)[0]), int(P(0.50, 0.62)[1]), int(S(0.28)), (16, 185, 129, 58))

    # Helper to draw 3D orbital ellipse arc segments (back half vs front half for depth occlusion)
    def draw_orbital_ring(layer: Image.Image, angle_deg: float, half: str):
        d = ImageDraw.Draw(layer)
        rx = S(0.315)
        ry = S(0.112)
        rad = math.radians(angle_deg)
        cos_a, sin_a = math.cos(rad), math.sin(rad)

        # Sample points around ellipse parameter theta
        # y_local < 0 is the "back" half behind the flask, y_local >= 0 is "front" in front of flask
        theta_start = math.pi if half == "back" else 0.0
        theta_end = 2.0 * math.pi if half == "back" else math.pi
        steps = 90
        pts = []
        for i in range(steps + 1):
            t = lerp(theta_start, theta_end, i / steps)
            lx = rx * math.cos(t)
            ly = ry * math.sin(t)
            wx = cx + lx * cos_a - ly * sin_a
            wy = cy_orb + lx * sin_a + ly * cos_a
            pts.append((wx, wy))

        if half == "back":
            d.line(pts, fill=(217, 119, 6, 125), width=max(2, int(S(0.017))), joint="curve")
            d.line(pts, fill=(251, 191, 36, 165), width=max(1, int(S(0.008))), joint="curve")
        else:
            # Soft amber outer glow + crisp golden ring + thin specular edge
            glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
            gd = ImageDraw.Draw(glow)
            gd.line(pts, fill=(245, 158, 11, 120), width=max(3, int(S(0.032))), joint="curve")
            glow = glow.filter(ImageFilter.GaussianBlur(radius=max(1.5, S(0.012))))
            layer.alpha_composite(glow)

            d.line(pts, fill=(245, 158, 11, 240), width=max(2, int(S(0.019))), joint="curve")
            d.line(pts, fill=(253, 224, 71, 240), width=max(1, int(S(0.007))), joint="curve")

    # Draw back orbital halves BEHIND the flask
    back_orbits = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw_orbital_ring(back_orbits, -28, "back")
    draw_orbital_ring(back_orbits, 28, "back")
    canvas.alpha_composite(back_orbits)

    # 2. Flask 3D Glass Silhouette
    # Coordinates (normalized): neck from x=0.415..0.585, y=0.19..0.38, shoulder flared to rounded flat base at y=0.805
    flask_poly = [
        P(0.415, 0.195),
        P(0.585, 0.195),
        P(0.585, 0.228),
        P(0.562, 0.242),
        P(0.562, 0.375),
        P(0.752, 0.708),
        P(0.772, 0.748),
        P(0.766, 0.782),
        P(0.742, 0.804),
        P(0.700, 0.814),
        P(0.300, 0.814),
        P(0.258, 0.804),
        P(0.234, 0.782),
        P(0.228, 0.748),
        P(0.248, 0.708),
        P(0.438, 0.375),
        P(0.438, 0.242),
        P(0.415, 0.228),
    ]

    flask_mask = Image.new("L", (size, size), 0)
    md = ImageDraw.Draw(flask_mask)
    md.polygon(flask_poly, fill=255)

    # Interior volumetric glass depth fill
    glass_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    gd = ImageDraw.Draw(glass_layer)
    # Base glass tint
    gd.polygon(flask_poly, fill=(14, 116, 144, 52))
    # Left ambient glass wall highlight band
    gd.polygon([P(0.448, 0.24), P(0.478, 0.24), P(0.475, 0.38), P(0.320, 0.79), P(0.255, 0.79), P(0.445, 0.37)], fill=(186, 230, 253, 38))
    # Clip to mask
    r, g, b, a = glass_layer.split()
    a = ImageChops.darker(a, flask_mask)
    glass_layer = Image.merge("RGBA", (r, g, b, a))
    canvas.alpha_composite(glass_layer)

    # 3. 3D Volumetric Glowing Liquid inside lower flask (y = 0.56 to 0.81)
    liq_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ld = ImageDraw.Draw(liq_layer)
    # Multi-stop vertical gradient bands clipped later by flask_mask
    y_top = int(P(0.5, 0.548)[1])
    y_bot = int(P(0.5, 0.82)[1])
    c_top = (34, 211, 238, 225)     # Cyan 400
    c_mid = (6, 182, 212, 240)      # Cyan 500
    c_bot = (16, 185, 129, 250)     # Emerald 500
    span = max(1, y_bot - y_top)
    for row in range(y_top, y_bot + 1):
        t = (row - y_top) / span
        col = lerp_color(c_top, c_mid, t * 2.0) if t < 0.45 else lerp_color(c_mid, c_bot, (t - 0.45) / 0.55)
        ld.line([(0, row), (size, row)], fill=col)

    # Slight inner darkening near flask edges for 3D cylindrical volume
    # Subtract slightly shrunken liquid mask or paint top meniscus ellipse
    liq_mask = Image.new("L", (size, size), 0)
    lmd = ImageDraw.Draw(liq_mask)
    lmd.polygon(
        [
            P(0.20, 0.562),
            P(0.80, 0.562),
            P(0.82, 0.83),
            P(0.18, 0.83),
        ],
        fill=255,
    )
    # Meniscus top ellipse at y=0.562 across the cone width at that height (~0.335 to ~0.665)
    lmd.ellipse([P(0.322, 0.541), P(0.678, 0.583)], fill=255)
    combined_liq_mask = ImageChops.darker(liq_mask, flask_mask)

    r, g, b, a = liq_layer.split()
    a = ImageChops.darker(a, combined_liq_mask)
    liq_layer = Image.merge("RGBA", (r, g, b, a))
    canvas.alpha_composite(liq_layer)

    # Top meniscus bright 3D surface highlight ellipse
    meniscus_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    mnd = ImageDraw.Draw(meniscus_layer)
    mnd.ellipse([P(0.325, 0.543), P(0.675, 0.581)], fill=(165, 243, 252, 195), outline=(224, 242, 254, 235), width=max(1, int(S(0.005))))
    r, g, b, a = meniscus_layer.split()
    a = ImageChops.darker(a, flask_mask)
    meniscus_layer = Image.merge("RGBA", (r, g, b, a))
    canvas.alpha_composite(meniscus_layer)

    # 4. Effervescent 3D Bubbles (with white specular glints)
    bubbles = [
        (0.43, 0.72, 0.024, 235),
        (0.55, 0.67, 0.030, 225),
        (0.49, 0.61, 0.019, 240),
        (0.59, 0.74, 0.016, 215),
        (0.46, 0.49, 0.015, 220),
        (0.53, 0.42, 0.013, 210),
        (0.495, 0.33, 0.011, 200),
    ]
    bub_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    bd = ImageDraw.Draw(bub_layer)
    for bx, by, br, ba in bubbles:
        px_b, py_b = P(bx, by)
        rad = S(br)
        # Bubble sphere rim + translucent interior
        bd.ellipse([px_b - rad, py_b - rad, px_b + rad, py_b + rad], fill=(224, 242, 254, int(ba * 0.45)), outline=(255, 255, 255, ba), width=max(1, int(S(0.004))))
        # Specular catchlight
        sr = max(1.0, rad * 0.34)
        bd.ellipse([px_b - rad * 0.45 - sr * 0.5, py_b - rad * 0.45 - sr * 0.5, px_b - rad * 0.45 + sr, py_b - rad * 0.45 + sr], fill=(255, 255, 255, 245))
    canvas.alpha_composite(bub_layer)

    # 5. Flask 3D Glass Rim & Specular Highlights
    rim_glow = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    rgd = ImageDraw.Draw(rim_glow)
    rgd.polygon(flask_poly, outline=(34, 211, 238, 175), width=max(3, int(S(0.034))))
    rim_glow = rim_glow.filter(ImageFilter.GaussianBlur(radius=max(1.5, S(0.014))))
    canvas.alpha_composite(rim_glow)

    glass_stroke = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    gsd = ImageDraw.Draw(glass_stroke)
    gsd.polygon(flask_poly, outline=(103, 232, 249, 250), width=max(2, int(S(0.020))))
    # Left 3D curved specular glass shine
    gsd.line([P(0.458, 0.255), P(0.458, 0.382), P(0.285, 0.725), P(0.280, 0.768)], fill=(255, 255, 255, 175), width=max(2, int(S(0.013))), joint="curve")
    # Flask top 3D rim capsule
    gsd.rounded_rectangle([P(0.398, 0.178), P(0.602, 0.214)], radius=max(2, int(S(0.018))), fill=(22, 78, 99, 180), outline=(165, 243, 252, 255), width=max(2, int(S(0.015))))
    # Small top glass highlight
    gsd.line([P(0.422, 0.190), P(0.510, 0.190)], fill=(255, 255, 255, 210), width=max(1, int(S(0.006))))
    canvas.alpha_composite(glass_stroke)

    # 6. Front Orbital Rings & 3D Electron Spheres
    front_orbits = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw_orbital_ring(front_orbits, -28, "front")
    draw_orbital_ring(front_orbits, 28, "front")
    canvas.alpha_composite(front_orbits)

    # 3D Electron spheres orbiting on the front / sides + center nucleus spark
    electrons = [
        (0.50, 0.56, 0.032, (251, 191, 36)),   # Central glowing amber nucleus
        (0.228, 0.455, 0.024, (253, 224, 71)), # Left orbital electron
        (0.772, 0.455, 0.024, (56, 189, 248)), # Right cyan orbital electron
        (0.625, 0.658, 0.022, (251, 191, 36)), # Front lower-right electron
    ]
    el_layer = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    ed = ImageDraw.Draw(el_layer)
    for ex, ey, er, col in electrons:
        px_e, py_e = P(ex, ey)
        rad = S(er)
        draw_radial_glow(el_layer, int(px_e), int(py_e), int(rad * 2.5), (col[0], col[1], col[2], 130))
        ed.ellipse([px_e - rad, py_e - rad, px_e + rad, py_e + rad], fill=(col[0], col[1], col[2], 255))
        # White specular dot on electron sphere
        sr = rad * 0.36
        ed.ellipse([px_e - rad * 0.38 - sr * 0.5, py_e - rad * 0.38 - sr * 0.5, px_e - rad * 0.38 + sr, py_e - rad * 0.38 + sr], fill=(255, 255, 255, 245))
    canvas.alpha_composite(el_layer)

    return canvas


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
    master_full = build_flask_emblem(2048, padding_ratio=0.04)
    master_adaptive = build_flask_emblem(1024, padding_ratio=0.20)

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
