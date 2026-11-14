import fs from 'fs';
import path from 'path';

export interface ThemeTokens {
  tokens: Record<string, string>;
  coarseTargetSize: number;
  defaultTargetSize: number;
  sidebarBreakpoint: number;
  bottomNavHideBreakpoint: number;
  maxStageWidth: number;
  touchActionManipulation: boolean;
}

export function parseThemeCss(themeCssRelativePath?: string): ThemeTokens {
  let fullPath = themeCssRelativePath
    ? path.resolve(process.cwd(), themeCssRelativePath)
    : path.resolve(process.cwd(), 'src/styles/theme.css');
  if (!fs.existsSync(fullPath)) {
    fullPath = path.resolve(process.cwd(), 'src/styles/theme.css');
  }
  const css = fs.readFileSync(fullPath, 'utf-8');

  const tokens: Record<string, string> = {};
  const varMatches = css.matchAll(/--([a-zA-Z0-9_-]+):\s*([^;]+);/g);
  for (const match of varMatches) {
    tokens[match[1].trim()] = match[2].trim();
  }

  const coarseMatch = css.match(/@media\s*\(pointer:\s*coarse\)\s*\{[^}]*--target-size:\s*(\d+)px/);
  const defaultTargetMatch = css.match(/--target-size:\s*(\d+)px/);
  const sidebarMatch = css.match(/@media\s*\(min-width:\s*(\d+)px\)\s*\{[\s\S]*?\.app-sidebar\s*\{[\s\S]*?display:\s*flex/);
  const bottomNavHideMatch = css.match(/@media\s*\(min-width:\s*(\d+)px\)\s*\{[\s\S]*?\.mobile-bottom-nav\s*\{[\s\S]*?display:\s*none/);
  const maxStageMatch = css.match(/\.app-main-stage\s*\{[\s\S]*?max-inline-size:\s*(\d+)px/);

  return {
    tokens,
    coarseTargetSize: coarseMatch ? parseInt(coarseMatch[1], 10) : 44,
    defaultTargetSize: defaultTargetMatch ? parseInt(defaultTargetMatch[1], 10) : 32,
    sidebarBreakpoint: sidebarMatch ? parseInt(sidebarMatch[1], 10) : 900,
    bottomNavHideBreakpoint: bottomNavHideMatch ? parseInt(bottomNavHideMatch[1], 10) : 900,
    maxStageWidth: maxStageMatch ? parseInt(maxStageMatch[1], 10) : 1440,
    touchActionManipulation: css.includes('touch-action: manipulation;'),
  };
}

export function parseHexColor(hex: string): [number, number, number] {
  const clean = hex.replace('#', '').trim();
  if (clean.length === 3) {
    return [
      parseInt(clean[0] + clean[0], 16),
      parseInt(clean[1] + clean[1], 16),
      parseInt(clean[2] + clean[2], 16),
    ];
  }
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ];
}

export function getRelativeLuminance(hex: string): number {
  const [r, g, b] = parseHexColor(hex).map((c) => {
    const sRGB = c / 255;
    return sRGB <= 0.04045 ? sRGB / 12.92 : Math.pow((sRGB + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

export function getContrastRatio(hex1: string, hex2: string): number {
  const lum1 = getRelativeLuminance(hex1);
  const lum2 = getRelativeLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

export interface ShellLayoutResolution {
  viewportWidth: number;
  isDesktop: boolean;
  showSidebar: boolean;
  showBottomNav: boolean;
  layoutArea: 'mobile-stack' | 'desktop-grid';
  effectiveStageWidth: number;
}

export function resolveShellLayout(width: number, tokens: ThemeTokens): ShellLayoutResolution {
  const isDesktop = width >= tokens.sidebarBreakpoint;
  return {
    viewportWidth: width,
    isDesktop,
    showSidebar: isDesktop,
    showBottomNav: !isDesktop,
    layoutArea: isDesktop ? 'desktop-grid' : 'mobile-stack',
    effectiveStageWidth: Math.min(width, tokens.maxStageWidth),
  };
}
