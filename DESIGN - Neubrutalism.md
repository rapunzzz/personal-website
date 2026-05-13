# Design System Inspired by Neubrutalism

## 1. Visual Theme & Atmosphere

Neubrutalism is a bold, unapologetic design movement that rejects polished subtlety in favor of graphic bluntness and conspicuous structure. This design system embodies a contemporary web and UI aesthetic characterized by high-contrast palettes, forceful typography, exposed construction details, and intentional harshness. The movement borrows brutalism's language of rawness and exposed structure while translating it into a repeatable, commercially viable interface grammar. Every element is deliberately visible—nothing hides in shadow or fades into the background. Thick borders, square corners, flat colors, and hard shadows create a visual language that feels energetic, confrontational, and unapologetically present. The atmosphere is one of anti-design rebellion domesticated into usable product design, with friction and play woven throughout.

**Key Characteristics**
- Thick, pronounced borders on all interactive and surface elements
- Square corners with zero border radius across the system
- High-contrast black-and-white foundation with bold accent colors
- Flat color application with no gradients or transparency effects
- Hard-edged shadows offset in cardinal directions (no blur)
- Bold, heavy typography as a primary design tool
- Exposed structure through visible borders and outlines
- Intentional visual weight and presence in every component
- Playful use of bright, saturated accent colors
- Raw, geometric aesthetic that refuses invisibility

## 2. Color Palette & Roles

### Primary
- **Black** (`#000000`): Primary text, borders, outlines, and structural definition. Used as the dominant color establishing contrast and hierarchy across all components.
- **White** (`#FFFFFF`): Primary background, card surfaces, and text contrast against black. Creates the core high-contrast foundation.

### Accent Colors
- **Coral Red** (`#FF6B6B`): Primary action accent, button states, and highlight emphasis. The system's signature energetic color, drawing attention and expressing urgency.
- **Sunny Yellow** (`#FFD23F`): Secondary accent for warning states, highlights, and supporting call-to-action elements. Bright and attention-commanding.
- **Sky Blue** (`#74B9FF`): Tertiary accent for informational states, links, and supporting interactive elements.
- **Mint Green** (`#88D498`): Quaternary accent for success states and positive affirmation.
- **Cyan** (`#7FDBDA`): Complementary accent for alternate surfaces and accent containers.
- **Orange** (`#FFA552`): Supporting accent for secondary actions and emphasis contexts.

### Interactive
- **Coral Red** (`#FF6B6B`): Active button backgrounds, primary CTAs, and emphasized interactive states.
- **Sunny Yellow** (`#FFD23F`): Secondary button backgrounds, links, and supporting CTAs with strong contrast.
- **Pale Red** (`#FFE0E0`): Reduced-intensity coral for hover or disabled states on red-themed elements.

### Neutral Scale
- **Dark Gray** (`#666666`): Secondary text, reduced prominence labels, and tertiary content.
- **Medium Gray** (`#777777`): Tertiary text and low-emphasis helper text.
- **Light Gray** (`#808080`): Borders and dividing lines with moderate contrast.
- **Very Light Gray** (`#DDDDDD`): Subtle borders, dividers, and background tints.

### Surface & Borders
- **Warm Off-White** (`#F5F0E8`): Alternate surface background, content containers, and soft page backgrounds.
- **Light Blue Tint** (`#E3F2FD`): Informational surface background for supporting content.
- **Light Yellow Tint** (`#FFF3C4`): Warning or notice surface backgrounds.
- **Light Green Tint** (`#E8F5E9`): Success state surface backgrounds.

### Semantic / Status
- **Warning Yellow** (`#FFD23F`): Warning and caution states. High visibility for user alerts.
- **Error Red** (`#FF4444`): Error states, critical alerts, and destructive actions requiring user confirmation.

## 3. Typography Rules

### Font Family
**Primary Display Font:** Syne (Google Fonts), fallback stack: `Syne, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Heaviest weights (800), used for maximum impact in headings and hero text

**Secondary Heading Font:** Space Grotesk (Google Fonts), fallback stack: `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Bold and geometric, used for hierarchical headings and structured content

**Monospace/UI Font:** Space Mono (Google Fonts), fallback stack: `'Space Mono', 'Courier New', monospace`
- Regular weight, used for buttons, code, and technical content

**Body and Small Text Font:** Inter (Google Fonts), fallback stack: `Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`
- Neutral and accessible, used for list items, form inputs, and body copy

### Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing | Notes |
|------|------|------|--------|-------------|-----------------|-------|
| Display/H1 | Syne | 144px | 800 | 129.6px | 0px | Hero-scale text for page titles and dramatic emphasis |
| Heading/H2 | Space Grotesk | 56px | 700 | 64.4px | 0px | Section headers and major content divisions |
| Subheading/H3 | Space Grotesk | 32px | 700 | 36.8px | 0px | Secondary content sections and feature headers |
| Heading/H4 | Space Grotesk | 20px | 700 | 24px | 0px | Tertiary headers and labeled content blocks |
| Heading/H5 | Syne | 20.8px | 800 | 23.92px | 0px | Labeled callouts and emphasized labels |
| Body/P | Space Grotesk | 28px | 500 | 39.2px | 0px | Primary body text and content paragraphs |
| Link/A | Space Grotesk | 18px | 700 | 30.6px | 0px | Inline links and navigation text |
| List Item | Inter | 18px | 400 | 30.6px | 0px | Unordered and ordered list content |
| Label | Space Grotesk | 14px | 700 | 23.8px | 0px | Form labels, captions, and helper text |
| Button | Space Mono | 16px | 400 | normal | 0px | Button text and interactive labels |
| Code | Space Mono | 15.3px | 400 | 26.01px | 0px | Inline and block code, technical snippets |
| Input | Inter | 16px | 400 | normal | 0px | Form input placeholder and entry text |
| Emphasis/Span | Syne | 24px | 800 | 40.8px | 0px | Callout text, highlighted phrases, and emphasis spans |

### Principles
- **Weight-driven hierarchy**: Bold weights (700–800) immediately signal importance and structure; lighter weights (400–500) recede.
- **Size as emphasis**: Large sizes (144px–56px) command attention; smaller sizes support and clarify.
- **Consistent line heights**: Generous line height (129.6px for H1, 39.2px for body) ensures legibility and breathing room in dense layouts.
- **Monospace for structure**: Space Mono on buttons and code emphasizes technical precision and machine-like consistency.
- **Geometric shapes in letterforms**: Space Grotesk and Syne both use geometric, slightly condensed proportions that feel modern and intentional.
- **No decorative variations**: Italic, underline, and other decorations are avoided; weight and size carry all semantic meaning.

## 4. Component Stylings

### Buttons

**Primary Button (Black with Shadow)**
- `background-color: #000000`
- `color: #FFFFFF`
- `font-family: Space Grotesk`
- `font-size: 16px`
- `font-weight: 700`
- `padding: 12px 24px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: #000000 5px 5px 0px 0px`
- `line-height: 27.2px`
- `height: 57px`
- **Hover state**: `box-shadow: #000000 6px 6px 0px 0px`, opacity reduced to `0.85`
- **Active state**: `box-shadow: #000000 3px 3px 0px 0px`

**Secondary Button (Yellow with Shadow)**
- `background-color: #FFD23F`
- `color: #000000`
- `font-family: Space Grotesk`
- `font-size: 16px`
- `font-weight: 700`
- `padding: 12px 24px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: #000000 5px 5px 0px 0px`
- `line-height: 27.2px`
- `height: 57px`
- **Hover state**: `box-shadow: #000000 6px 6px 0px 0px`
- **Active state**: `box-shadow: #000000 3px 3px 0px 0px`

**Ghost Button (Transparent with Border)**
- `background-color: transparent`
- `color: #000000`
- `font-family: Space Mono`
- `font-size: 16px`
- `font-weight: 400`
- `padding: 8px 8px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: none`
- `line-height: normal`
- **Hover state**: `background-color: #000000`, `color: #FFFFFF`
- **Active state**: `background-color: #333333`, `color: #FFFFFF`

**Small Button (Minimal)**
- `background-color: transparent`
- `color: #CCCCCC`
- `font-family: Space Grotesk`
- `font-size: 12px`
- `font-weight: 700`
- `padding: 5.6px 12px`
- `border: 2px solid rgba(255, 255, 255, 0.3)`
- `border-radius: 0px`
- `box-shadow: none`
- `line-height: normal`
- `height: 31px`
- **Hover state**: `color: #FFFFFF`, `border-color: rgba(255, 255, 255, 0.6)`

### Cards & Containers

**White Card with Large Shadow**
- `background-color: #FFFFFF`
- `color: #000000`
- `font-family: Space Grotesk`
- `font-size: 14px`
- `font-weight: 700`
- `padding: 16px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: #000000 8px 8px 0px 0px`
- `line-height: 23.8px`
- `height: 140px`
- `width: 220px`

**Coral Card with Shadow**
- `background-color: #FF6B6B`
- `color: #000000`
- `font-family: Space Grotesk`
- `font-size: 14px`
- `font-weight: 700`
- `padding: 16px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: #000000 8px 8px 0px 0px`
- `line-height: 23.8px`
- `height: 140px`
- `width: 220px`

**Untitled Card (No Shadow)**
- `background-color: transparent`
- `color: #000000`
- `font-family: Inter`
- `font-size: 18px`
- `font-weight: 400`
- `padding: 0px`
- `border: 0px none`
- `border-radius: 0px`
- `box-shadow: none`
- `line-height: 30.6px`
- `height: 452px`
- `width: 220px`

### Inputs & Forms

**Text Input**
- `background-color: #FFFFFF`
- `color: #000000`
- `font-family: Inter`
- `font-size: 16px`
- `font-weight: 400`
- `padding: 12px 16px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: #000000 3px 3px 0px 0px`
- `line-height: normal`
- `height: 50px`
- `width: auto`
- **Focus state**: `box-shadow: #000000 5px 5px 0px 0px`, `outline: none`
- **Placeholder color**: `#999999`

**Textarea Input**
- `background-color: #FFFFFF`
- `color: #000000`
- `font-family: Inter`
- `font-size: 16px`
- `font-weight: 400`
- `padding: 12px 16px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: #000000 3px 3px 0px 0px`
- `line-height: normal`
- `height: 80px`
- `width: auto`
- `resize: both`
- **Focus state**: `box-shadow: #000000 5px 5px 0px 0px`, `outline: none`

### Navigation

**Top Navigation Bar**
- `background-color: #FFFFFF`
- `color: #000000`
- `font-family: Inter`
- `font-size: 18px`
- `font-weight: 400`
- `padding: 12px 0px`
- `border: 0px none`
- `border-radius: 0px`
- `box-shadow: #000000 0px 4px 0px 0px`
- `line-height: 30.6px`
- `height: 68.8px`
- `width: 100%`
- **Active link state**: `background-color: #FFD23F`, `border: 3px solid #000000`
- **Hover link state**: `box-shadow: inset 0px 0px 0px 2px #000000`

### Links

**Primary Link (Yellow Button Style)**
- `background-color: #FFD23F`
- `color: #000000`
- `font-family: Space Grotesk`
- `font-size: 18px`
- `font-weight: 700`
- `padding: 8px 16px`
- `border: 3px solid #000000`
- `border-radius: 0px`
- `box-shadow: none`
- `line-height: 30.6px`
- `height: 52.6px`
- `width: auto`
- **Hover state**: `box-shadow: #000000 3px 3px 0px 0px`
- **Active state**: `background-color: #FFB81C`

**Text Link (Bold Syne)**
- `background-color: transparent`
- `color: #000000`
- `font-family: Syne`
- `font-size: 24px`
- `font-weight: 800`
- `padding: 0px`
- `border: 0px none`
- `border-radius: 0px`
- `box-shadow: none`
- `line-height: 40.8px`
- `text-decoration: none`
- **Hover state**: `text-decoration: underline`, `text-decoration-thickness: 3px`
- **Active state**: `color: #FF6B6B`

**Badge Link (Small Yellow)**
- `background-color: #FFD23F`
- `color: #000000`
- `font-family: Space Grotesk`
- `font-size: 12.8px`
- `font-weight: 500`
- `padding: 6.4px 9.6px`
- `border: 2px solid #000000`
- `border-radius: 0px`
- `box-shadow: #000000 3px 3px 0px 0px`
- `line-height: 21.76px`
- `height: 38.5px`
- `width: auto`
- **Hover state**: `box-shadow: #000000 4px 4px 0px 0px`

## 5. Layout Principles

### Spacing System
The spacing system uses a base unit of `4px`, scaling in intervals that create rhythm and hierarchy across components.

- **Micro spacing** (`4px`, `8px`): Internal padding within buttons, badges, and tight form controls.
- **Small spacing** (`12px`, `16px`): Card padding, input fields, component margins.
- **Medium spacing** (`20px`, `24px`): Section margins, content gaps, container padding.
- **Large spacing** (`32px`, `48px`): Section separations, grid gaps between major content blocks.
- **Extra-large spacing** (`64px`, `68px`, `92px`, `96px`): Hero section padding, page-level margins, full-screen content containers.

All spacing values are multiples of `4px` to maintain a cohesive rhythm and ensure alignment on an 8px baseline grid.

### Grid & Container
- **Max container width**: `1440px` (full-width navigation reference)
- **Grid strategy**: 12-column grid with `16px` gutters for responsive scaling
- **Content margins**: `48px` on desktop for comfortable reading; `24px` on tablet; `16px` on mobile
- **Card grids**: 3 columns on desktop (220px cards with 16px gaps), 2 columns on tablet, 1 column on mobile
- **Section patterns**: Full-width hero sections with `96px` vertical padding, followed by contained content sections with `64px–92px` gaps

### Whitespace Philosophy
Whitespace is deliberately generous and intentional. Neobrutalism rejects cramped, dense layouts in favor of breathing room that emphasizes each element's presence. Every section has clear separation; every component has visible internal and external padding. This creates visual weight and prevents the interface from feeling cluttered despite high contrast and bold typography.

### Border Radius Scale
- **All corners**: `0px`

Neobrutalism employs zero border radius across the entire system. Square corners are a defining characteristic, reinforcing the geometry and brutalist aesthetic. No rounded corners on buttons, cards, inputs, or any component.

## 6. Depth & Elevation

| Level | Treatment | Use |
|-------|-----------|-----|
| Flat/Surface | `box-shadow: none` | Text, labels, untitled containers, ghost buttons |
| Subtle (Small) | `box-shadow: #000000 3px 3px 0px 0px` | Input fields, small buttons, badges |
| Medium (Card) | `box-shadow: #000000 5px 5px 0px 0px` | Primary buttons, highlighted links, emphasis containers |
| Large (Card) | `box-shadow: #000000 8px 8px 0px 0px` | Major card surfaces, prominent content blocks |
| Extra (Navigation) | `box-shadow: #000000 0px 4px 0px 0px` | Navigation bars, header separation |
| Accent Shadow | `box-shadow: #FF6B6B 5px 5px 0px 0px` | Coral-themed buttons, accent CTAs |

**Shadow Philosophy**: Neobrutalism uses **hard, offset shadows** that create deliberate visual separation without blur or softness. Shadows are always solid black with a 0px blur and fixed offset (typically `5px 5px`, `8px 8px`, or `3px 3px` depending on hierarchy). These shadows are never subtle; they announce themselves and create a sense of elevation and physicality. The offset direction is always down and to the right, mimicking a top-left light source and maintaining visual consistency.

## 7. Do's and Don'ts

### Do
- **Use thick, visible borders** on all interactive elements and containers. Minimum `2px`; typically `3px` for buttons and cards.
- **Maintain high contrast** between text and background (always black text on white or white text on black, or black text on bright accents).
- **Pair bold typography with deliberate sizing** to establish clear hierarchy without relying on color alone.
- **Apply hard shadows consistently** with fixed offsets (`3px 3px`, `5px 5px`, `8px 8px`) to create dimensional separation.
- **Use flat, saturated accent colors** (coral, yellow, blue, green) for emphasis and interactivity without gradients.
- **Keep corners sharp and square** across all components; avoid any border radius.
- **Expose structure through visible outlines and dividers**, making the grid and component edges intentionally apparent.
- **Leave generous whitespace** around content blocks and within components to avoid visual cramping.
- **Combine accent colors strategically** to create playful contrast (yellow on white, coral on black).
- **Use monospace fonts for technical or button contexts** to reinforce precision and structure.

### Don't
- **Avoid rounded corners or soft edges**. Square corners are the system standard and reinite the brutal aesthetic.
- **Don't use gradient fills or transparency effects** on primary surfaces. Flat color only.
- **Don't create soft shadows with blur**; only use hard offset shadows with no blur radius.
- **Avoid low-contrast combinations** (light gray text on white, thin borders). Every element must be assertively visible.
- **Don't rely on color alone for meaning**. Use weight, size, and borders to reinforce semantic intent.
- **Avoid italic or underlined text as primary styling**. Use weight and size instead.
- **Don't nest shadows or combine multiple shadow effects** on a single element.
- **Avoid animation and transitions as primary design tools**. Static, immediate states are preferred.
- **Don't use serif fonts or script typefaces**. Stick to geometric, contemporary sans-serif fonts (Syne, Space Grotesk, Space Mono, Inter).
- **Don't hide interactive affordances**. Borders, shadows, and weight should make every clickable element explicit.

## 8. Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|------|-------|-------------|
| Mobile | 320px–767px | Single-column layout, `16px` margins, full-width inputs/buttons, `20px` H2 size, `56px` H1 size |
| Tablet | 768px–1199px | 2-column grids, `24px` margins, `40px` H2 size, `96px` H1 size, `32px` gaps between sections |
| Desktop | 1200px+ | 3-column grids, `48px` margins, full `56px` H2, `144px` H1, max-width container at `1440px` |

### Touch Targets
- **Minimum touch target size**: `48px × 48px` on mobile devices (exceeds WCAG guidelines by 4px)
- **Button minimum height**: `50px` on mobile; `57px` on desktop
- **Link padding minimum**: `8px` on all sides to ensure sufficient tap area
- **Input field height**: `50px` minimum for text inputs; `80px` for textareas
- **Navigation item spacing**: `16px` horizontal padding per link to prevent mis-taps

### Collapsing Strategy
- **Navigation**: Collapses to vertical stack below `768px`; active state highlighted with `#FFD23F` background
- **Card grids**: 1 column on mobile (`24px` gaps), 2 columns on tablet (`20px` gaps), 3 columns on desktop (`16px` gaps)
- **Typography scale**: H1 reduces from `144px` to `96px` on tablet, `56px` on mobile; H2 reduces from `56px` to `40px` on tablet, `28px` on mobile
- **Shadows**: Remain fixed offset values across all breakpoints; no shadow collapse
- **Padding**: Scales from `96px` on desktop to `48px` on tablet to `24px` on mobile for major sections
- **Container max-width**: Maintains `1440px` on desktop; `90vw` on tablet; full-width with `16px` margin on mobile

## 9. Agent Prompt Guide

### Quick Color Reference
- **Primary CTA**: Yellow (`#FFD23F`)
- **Primary CTA Text**: Black (`#000000`)
- **Secondary CTA**: Coral Red (`#FF6B6B`)
- **Heading text**: Black (`#000000`)
- **Body text**: Black (`#000000`)
- **Background (default)**: White (`#FFFFFF`)
- **Background (alternate)**: Warm Off-White (`#F5F0E8`)
- **Borders**: Black (`#000000`)
- **Error state**: Error Red (`#FF4444`)
- **Warning state**: Warning Yellow (`#FFD23F`)
- **Success state**: Mint Green (`#88D498`)
- **Info state**: Sky Blue (`#74B9FF`)

### Iteration Guide

1. **All borders must be square corners** (`border-radius: 0px`). No rounded corners anywhere in the system.

2. **Every interactive element must have a visible border** minimum `2px` solid black or colored border.

3. **Shadows are always hard offsets with zero blur**: use `box-shadow: {color} {x}px {y}px 0px 0px` format. Never add blur-radius or spread-radius.

4. **Typography hierarchy is weight-driven**: 800px weight for display/emphasis, 700px for headings, 500–400px for body. Use size and weight together.

5. **Spacing follows 4px multiples**: all padding, margin, and gap values must be divisible by 4 (`4px`, `8px`, `12px`, `16px`, `20px`, `24px`, `32px`, `48px`, `64px`, etc.).

6. **High contrast is mandatory**: text must be either black on white/light, or white on black/dark, or black on bright accent colors. Never use low-contrast gray-on-gray.

7. **Buttons use explicit padding, not width/height** on primary variants. Typical button padding is `12px 24px` with `border: 3px solid #000000` and `box-shadow: #000000 5px 5px 0px 0px`.

8. **Flat color only**: no gradients, no transparency effects on filled surfaces. Use solid hex colors exclusively.

9. **Shadows create hierarchy**: no shadow = background/text, `3px 3px` = input/badge, `5px 5px` = button/emphasis, `8px 8px` = card/container, `0px 4px` = navigation divider.

10. **Accent colors are used sparingly for emphasis**: coral (`#FF6B6B`), yellow (`#FFD23F`), and blue (`#74B9FF`) are reserved for primary CTAs, warnings, and interactive states. Use black/white/gray for structural elements.