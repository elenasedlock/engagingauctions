# Live-site design spec (measured from engagingauctions.com @ 1280px)

Extracted via computed styles, not eyeballed. Source of truth for visual parity.

## Layout
- Container max-width: 1400px; page gutter 20px; content width 1240px
- Header gutter: 10px; header inner padding 10px 0
- Section vertical padding: hero 140px / 80px, most sections 70px, "Why Choose" 100px
- **border-radius: 0 everywhere.** No rounded corners, no pill buttons.
- No box-shadows.

## Color
| Token | Value | Use |
|---|---|---|
| ink | #121212 | body text, dark section backgrounds, footer |
| maroon | #451211 | eyebrows, primary button bg, button borders |
| cream | #E4E3D2 | secondary button bg |
| tint-4 | rgba(201,4,0,0.04) | "Auctions in Action" section bg |
| tint-8 | rgba(201,4,0,0.08) | tinted card bg |
| white-16 | rgba(255,255,255,0.16) | CTA right panel on dark |

## Type
| Role | Font | Size / line-height | Weight | Transform |
|---|---|---|---|---|
| H1 | Cormorant Garamond | 80 / 88 | 500 | capitalize |
| H2 | Cormorant Garamond | 50 / 60 | 500 | capitalize |
| H2 (CTA) | Cormorant Garamond | 40 / 48 | 500 | capitalize |
| H3 | Cormorant Garamond | 30 / 36 | 500 | capitalize |
| H3 (Elena overlay) | Cormorant Garamond | 40 / 48 | 500 | capitalize |
| Eyebrow | Poppins | 15 / 18, ls 1px | 400 | uppercase |
| Button | Poppins | 15 | 500, ls 1px | uppercase |

## Buttons
- Padding 20px, square, 1px border #451211
- Primary: bg #451211, text #fff
- Secondary: bg #E4E3D2, text #451211

## Homepage section order
0. Header — logo (302px) | nav (718px) | socials (199px)
1. Hero — background slideshow (3 images), min-height 792px, white text
2. About — 2 cols 610/610. Left: photo + "Elena Sedlock" overlay + socials. Right: eyebrow, H2, copy, IMPACT, $150,000 heading, 2 buttons
3. Why Choose — bg #121212, 4 white cards (40px padding), icon + H3 + copy
4. Our Auction Services — 3 cards
5. Auctions in Action — bg rgba(201,4,0,0.04), eyebrow + H2 + button + video
6. Client Experiences — testimonial carousel (Elementor testimonial-carousel)
7. Ready to Elevate — bg #121212, left copy + button, right panel bg rgba(255,255,255,0.16) 30px
8. Footer — bg #121212: logo + blurb | Quick Links | Contact Info; divider; copyright + socials

## Notes
- Homepage has NO "Our Auction Process" section (that block exists but is hidden on all breakpoints). Process lives on /services/ only.
- Footer location string is "New York, United States" (contact page says "New York, New York").
- Copyright reads: Copyright © 2026 – Engaging Auctions – All Rights Reserved

---

# Per-page spec (measured)

All inner pages share: header, page banner, footer. Banner = 50px/55px Cormorant
title on the left, cream breadcrumb chip on the right (8px 20px padding, maroon
Poppins 15px uppercase, 1px tracking), dark 35% overlay.

| Page | Banner background | Banner height | Sections |
|---|---|---|---|
| `/` | slideshow, 3 images, 7000ms | 792 (min) | hero, about, why-choose (#121212), services, auctions-in-action (tint4), testimonials carousel, CTA (#121212) |
| `/about/` | slideshow, 5 images, 5000ms | 464 | about (45px), team on tint4 (45px), CTA |
| `/services/` | static `46B1759A…webp` | 420 | process on tint4 w/ 3 maroon cards, then one alternating row per service |
| `/testimonials/` | static `46B1759A…webp` | 599 | static quote list (not a carousel), CTA |
| `/gallery/` | static `46B1759A…webp` | 509 | videos on tint4, photos w/ Load More |
| `/videos/` | static `46B1759A…webp` | 486 | video grid, CTA |
| `/faqs/` | static `42EFE79F…webp` | 464 | two accordion columns (3 + 2) |
| `/contact/` | static `46B1759A…webp` | 509 | two columns: details + WPForms-shaped form |
| `/consultation/` | static `46B1759A…webp` | 621 | Calendly inline widget, 660px tall |
| `/request-a-booking/` | static `46B1759A…webp` | 799 | single-column form |

## Rotating elements

| Where | Type | Settings |
|---|---|---|
| Homepage hero | Elementor background slideshow | 3 images, slide_duration 7000ms, transition 500ms, slide_up, ken burns zoom in, loop |
| `/about/` banner | Elementor background slideshow | 5 images, slide_duration 5000ms, transition 500ms, slide_up, ken burns zoom in, loop |
| Homepage testimonials | Elementor testimonial-carousel | 1 per view, autoplay 5000ms, speed 500ms, loop, pause on hover + interaction, dots, no arrows |
| `/gallery/` photos | Livemesh gallery | 3 visible, "Load More" reveals the rest |

Other pages have no rotating elements — verified per page, not assumed.

## Section heading pattern
Eyebrow + H2 wrapped in a 5px `#451211` left border with 15px padding. Used on
every content section across the site.

## Forms
WPForms on the live site. Rebuilt as plain forms with Netlify Forms attributes.

- Contact: Name*, Organization, Phone*, Email*, Message. Placeholders
  "John Doe" / "Organization Name" / "Phone Number" / "abc@gmail.com" /
  "How can we help you?". Submit "SUBMIT NOW".
- Booking: Full Name*, Phone* ("(201) 555-0123"), Email*. Submit "BOOK NOW".
- Inputs: white, 1px `rgba(201,4,0,.08)`, square, 7px 20px, 17px, `#1c1c1c`.
- Submit: `#451211` on cream text, square, 15px uppercase, 1px tracking.

## Content discrepancies carried over verbatim
- Homepage About paragraph has grammar errors in the original ("we believe a
  high-energy mission driven consulting that motivate donors… drive real
  result"). Kept as-is for parity.
- Footer says "New York, United States"; contact page says "New York, New York".
- Social icons have no href anywhere on the live site. Rendered as non-links
  until real URLs are added to `src/data/site.ts`.
- A hidden "Our Auction Process" block on the homepage contains lorem ipsum. Not
  ported — it is hidden on all breakpoints.
- Blog posts (`hello-world`, mental-health, immune-system, illnesses) are theme
  demo content unrelated to the business. Not ported.
