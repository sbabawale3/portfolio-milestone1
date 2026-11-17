# Adeoluwa Babawale — Personal Portfolio

This repository is my DEV 140 multi-page portfolio site:

- `index.html` — Home
- `projects.html` — Projects
- `about.html` — About & Contact

Open `index.html` in a browser, or serve the folder with a local static server, to view the site. Shared styles live in `style.css`. The contact form validation script is `script.js`.

## Milestone 3: Accessibility & Design

### Accessibility fixes

- I added descriptive `alt` text to the initials image on the home page so screen reader users know what it shows.
- I used the standard body text color on the practice sentence so it meets WCAG AA contrast.
- I connected a visible `<label>` to the practice name field so the input has an accessible name.
- I added a "Skip to main content" link on every page so keyboard users can bypass the navigation.
- I marked the current page in the navigation with `aria-current="page"`.
- I added a visible `:focus-visible` outline so keyboard focus is easy to see.
- I underlined in-content links so they don't rely on color alone.
- I labeled the GitHub link to say it opens in a new tab.
- I darkened the form field borders so they meet the 3:1 contrast requirement.
- I built the contact form with labels, fieldsets, and text error messages that screen readers announce.

### Gestalt principles

- **Proximity:** I grouped my project cards close together in a grid, with more space around the group, so they read as one set.
- **Common region:** I put each card and the contact form inside a white panel with a border, so related items share a clear boundary.

### Color palette

One color palette is used on every page, and all text/background pairs pass WCAG AA contrast (checked with the WebAIM Contrast Checker formula).

### Contact form

The About & Contact page has a contact form with a `<label>` for every field, `fieldset`/`legend` grouping, and text error messages for invalid fields.
