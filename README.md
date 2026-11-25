# caee.github.io

Personal resume site, served by GitHub Pages. Plain HTML/CSS/JS — no build step.

## Updating content

Edit **`content.js`**. Everything on the site (bio, education, experience, skills, projects,
contact details, PDF links) comes from that one file.

- Add a job: copy an entry in `experience`, put it at the top, change the text.
- Add a project: copy an entry in `projects`, give it a new `id`, drop images in
  `assets/img/projects/` and PDFs in `assets/docs/`.
- Change a skill level: edit the `level` number (1–5).
- Replace the PDF resume: overwrite `assets/docs/cv.pdf`.

Preview by opening `index.html` in a browser. (Embedded YouTube videos only play once the
site is served over http(s), e.g. on GitHub Pages.)

## Layout

```
index.html          page shell
content.js          ← all the content
assets/css/style.css
assets/js/site.js   renders content.js into the page
assets/img/         photo, logos, project images
assets/docs/        PDFs
404.html
depr/               the previous InDesign-exported site, kept for reference
```

Links to sections can be shared directly, e.g. `#experience/1`, `#skills/2`, `#projects/bci`.
