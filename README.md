# Adeoluwa Babawale — Personal Portfolio

This repository is my DEV 140 multi-page portfolio site:

- `index.html` — Home
- `projects.html` — Projects
- `about.html` — About & Contact

Open `index.html` in a browser, or serve the folder with a local static server, to view the site. Shared styles live in `style.css`. The contact form validation script is `script.js`.

## Milestone 3: Accessibility & Design

### Accessibility fixes

I checked all three pages and documented each fix below (one sentence per fix):

- I added descriptive `alt` text to the initials image on the home page so screen reader users know what the image represents.
- I used the standard body text color on the practice sentence so that text meets WCAG AA contrast against the page background.
- I associated a visible `<label>` with the practice name field so the input has an accessible name.
- I added a “Skip to main content” link on every page so keyboard users can bypass the repeated navigation.
- I marked the current navigation item with `aria-current="page"` so assistive technologies can identify the user’s location in the site.
- I added a visible `:focus-visible` outline on interactive elements so keyboard focus is not indicated by hover or color change alone.
- I styled in-content links with the accent color plus an underline so link identification does not rely on color alone.
- I labeled the GitHub link to indicate that it opens in a new tab.
- I gave form controls a darker border (`#475569`) that meets the WCAG 3:1 non-text contrast requirement against the white field background.
- I built the contact form with proper `<label>` elements, `fieldset`/`legend` grouping, `novalidate`, and JavaScript validation that shows text errors (not color alone) and exposes them with `aria-invalid`, `aria-describedby`, and a `role="alert"` (or `role="status"` on success) live region.

### Gestalt principles

- I used proximity to group my project cards in a tight grid (24px gaps) that is closer together than the 48px space separating that group from neighboring sections, so the projects read as one related set.
- I used common region to enclose each card and the contact form in a white panel with a shared border, radius, and shadow, so items that belong together share a clear visual boundary.
- I used similarity by giving navigation links and the form submit button the same accent-blue background, white text, and rounded corners, so primary actions look like the same kind of interactive control.

### Color palette

The same CSS custom properties in `style.css` are used on all three pages. Text and background combinations were checked with the WCAG 2 contrast formula (the same formula used by the WebAIM Contrast Checker) and pass WCAG AA (4.5:1 for normal text; 3:1 for large text and UI components).

| Token | Hex | Typical use | Example pairing | Contrast | AA |
| --- | --- | --- | --- | --- | --- |
| `--primary-navy` | `#0F172A` | Headings; header and footer background | Navy on white / white on navy | 17.85:1 | Pass |
| `--text-slate` | `#334155` | Body text | Slate on `#F8FAFC` | 9.90:1 | Pass |
| `--accent-blue` | `#2563EB` | Links, active nav, submit button | Blue on white; white on blue | 5.17:1 | Pass |
| `--accent-blue-dark` | `#1E40AF` | Link and button hover / focus | `#1E40AF` on white | 8.72:1 | Pass |
| `--bg-light` | `#F8FAFC` | Page background | Accent blue on `#F8FAFC` | 4.94:1 | Pass |
| `--card-white` | `#FFFFFF` | Card and form backgrounds | Slate on white | 10.35:1 | Pass |
| `--input-border` | `#475569` | Form control borders and hint text | `#475569` on white | 7.58:1 | Pass |
| `--error-text` | `#991B1B` | Form error text and borders | `#991B1B` on `#FEF2F2` | 7.60:1 | Pass |
| `--success-text` | `#166534` | Form success message | `#166534` on `#F0FDF4` | 6.81:1 | Pass |
| `--focus-on-dark` | `#93C5FD` | Focus outline on the navy header | `#93C5FD` on navy | 9.90:1 | Pass |

`--border-subtle` (`#E2E8F0`) is used only as a decorative card divider, not for text or input boundaries.

### Contact form

The About & Contact page includes a contact form with:

- A visible label for every input
- Fieldsets and legends for contact details, the topic choice, and the message
- `novalidate` plus JavaScript that checks required fields and email format on submit (and on blur)
- Text error messages, a thicker error border, and `aria-invalid` / `aria-describedby` on invalid fields
- A form-level status region that uses `role="alert"` for errors and `role="status"` for the success message

The form is a front-end demonstration and does not send email yet. The listed contact address (`contact@example.com`) is a placeholder.
