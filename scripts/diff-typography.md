# Typography diff harness

Compares the rebuild against the live WordPress site property-by-property,
instead of eyeballing screenshots.

## How it works

1. **Capture live.** Open `https://engagingauctions.com/<page>/` in the browser
   pane at 1280x800 and run `capture.js`. It walks every visible leaf element
   containing text (`h1-h5, p, li, a`) and records:
   tag, font-family, font-size, font-weight, line-height, letter-spacing,
   text-transform, colour, text-align — keyed by the first 40 chars of its text.

2. **Capture local.** Same script against `http://localhost:4321/<page>/`.

3. **Diff.** Paste the live map into `LIVE` inside `compare.js`, run it on the
   local page. It reports only mismatches, plus anything present live that is
   missing locally.

Text-keyed matching means it survives different DOM structure — it compares the
same *content*, wherever it sits in the markup.

## Status

| Page | Typography diff |
|---|---|
| `/` | ✅ 36/36 exact, 0 mismatches |
| `/about/` | not yet run |
| `/services/` | not yet run |
| `/testimonials/` | not yet run |
| `/gallery/` | not yet run |
| `/videos/` | not yet run |
| `/faqs/` | not yet run |
| `/contact/` | not yet run |
| `/consultation/` | not yet run |
| `/request-a-booking/` | not yet run |

## Not covered by this harness

- Geometry (section heights/offsets) — separate diff, homepage is within 13px
- Hover states
- Tablet / mobile breakpoints
- Images: crop, object-position, natural dimensions
