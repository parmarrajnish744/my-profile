---
name: Luminous Engineering
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#d0bcff'
  on-secondary: '#3c0091'
  secondary-container: '#571bc1'
  on-secondary-container: '#c4abff'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#e9ddff'
  secondary-fixed-dim: '#d0bcff'
  on-secondary-fixed: '#23005c'
  on-secondary-fixed-variant: '#5516be'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  label-sm:
    fontFamily: Geist
    fontSize: 13px
    fontWeight: '500'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
  element-gap: 16px
---

## Brand & Style

The design system is engineered to evoke a sense of high-performance luxury and technical precision. Targeted at high-growth startups and premium enterprise clients, the visual language bridges the gap between deep-tech engineering and high-end editorial design.

The aesthetic follows a **High-Fidelity Glassmorphism** approach, drawing inspiration from contemporary developer-centric interfaces. Key attributes include:
- **Optical Depth:** Layers are defined by light-refracting borders and variable backdrop blurs rather than heavy shadows.
- **Micro-Glows:** Interactive elements utilize subtle radial gradients to simulate a "backlit" hardware effect.
- **Precision Minimalism:** Heavy use of negative space is balanced by hyper-sharp typography and thin, high-contrast strokes.

## Colors

This design system utilizes a deep-space foundation with high-energy accents. 

- **Foundation:** The core background is a rich Navy-Black (`#0F172A`). Surfaces should not use flat colors but instead rely on low-opacity white overlays (2-8%) to create the glass effect.
- **Accents:** The Primary Blue and Secondary Violet are primarily used for interactive states and decorative "blobs" positioned behind glass surfaces.
- **Semantics:** Success, Warning, and Error states should be tinted with the Tertiary Cyan to maintain a cohesive, cool-toned palette.

## Typography

The typography strategy focuses on "Inter" for its neutral, highly legible characteristic, allowing the glass effects and colors to take center stage. 

- **Headlines:** Use tight letter-spacing and heavy weights to create a "blocky" professional feel. 
- **Mono Accents:** Use "Geist" for labels, code snippets, and metadata to reinforce the software engineering narrative.
- **Hierarchy:** Maintain a clear contrast between `text-primary` for titles and `text-secondary` for descriptions to ensure readability over complex backgrounds.

## Layout & Spacing

This design system employs a **Fluid Grid** with generous vertical breathing room to emphasize the premium nature of the portfolio.

- **Breakpoints:** Mobile (< 768px), Tablet (768px - 1024px), Desktop (> 1024px).
- **Margins:** Desktop uses a 12-column grid with 24px gutters. Mobile scales to a 4-column grid with 20px margins.
- **Sectioning:** Distinct sections are separated by large 120px gaps to allow the background gradients and "floating" elements to exist without clutter.

## Elevation & Depth

Depth is achieved through **Material Stacking** rather than traditional Y-axis offsets.

- **Level 1 (Base):** Background (`#0F172A`) with subtle radial mesh gradients in Primary/Secondary colors at 15% opacity.
- **Level 2 (Cards):** Background-blur (20px-40px) with a 1px solid border at 10% white opacity.
- **Level 3 (Interactive):** Hovering over a card increases the border opacity to 30% and adds a subtle "inner glow" using a secondary-color drop shadow with 0 spread.

## Shapes

The shape language is consistently "Soft-Large" to contrast against the technical, sharp typography.

- **Containers:** All primary cards and modals use a `20px` (1.25rem) radius.
- **Buttons:** Use a fully pill-shaped (999px) radius to distinguish them as actionable triggers.
- **Inner Elements:** Nested elements (like images inside cards) should use a slightly smaller radius (12px) to maintain visual nested harmony.

## Components

### Buttons
- **Primary:** Solid Primary Blue with a white text. On hover, apply a `box-shadow` glow of the same color with a 20px blur.
- **Secondary:** Ghost style with a 1px white border (20% opacity) and glass blur background.

### Premium Cards
- Use `backdrop-filter: blur(12px)`.
- Apply a linear-gradient border from Top-Left (White 20%) to Bottom-Right (White 0%).
- Project images should have a `hover: scale(1.05)` transition to create a sense of lifting off the glass.

### Inputs
- Background: 5% White overlay. 
- Border: 1px solid White (10% opacity).
- Active state: Border color transitions to Primary Blue with a 4px outer glow.

### Chips/Tags
- Small, uppercase labels using the `label-sm` typography. 
- Background: 10% opacity of the Accent color.
- Border: 0.5px solid of the Accent color at 30% opacity.

### Navigation
- A floating "Dock" style navigation at the bottom of the screen for mobile, or a top-pinned glass bar for desktop.