# jztrxn.github.io

Personal portfolio of **Joseph Tran**, M.D./Ph.D. candidate in Integrative Neuroscience at the University of Nevada, Reno School of Medicine, focused on extended reality (XR) for healthcare and vision science.

Live site: https://jztrxn.github.io

## Pages

| Page | File | Contents |
| --- | --- | --- |
| Home | `index.html` | Hero, About, four featured projects, selected research |
| Projects | `all_projects.html` | Every project, grouped into Healthcare & Research and Creative Tech |
| Project detail | `projects/*.html` | One page per featured project |
| Publications | `publications.html` | Published work, manuscripts under review, presentations |
| Experience | `timeline.html` | Education/research/work timeline, honors, leadership, memberships |
| Contact | `contact.html` | Email, LinkedIn, GitHub, location |
| Not found | `404.html` | Served by GitHub Pages for missing URLs |

## Structure

```
.
├── index.html, all_projects.html, publications.html, timeline.html, contact.html, 404.html
├── projects/
│   ├── project_template.html   # blank starting point for new project pages (not linked)
│   └── <project>.html
└── assets/
    ├── css/site.css            # small shared styles
    ├── js/tailwind-config.js   # shared Tailwind colors and fonts
    ├── js/site.js              # shared nav, footer, mobile menu, contact links
    ├── img/                    # favicon, headshot, and one folder per project
    │   └── <project-name>/     # cover.jpg plus any slides, posters, or gallery images
    └── Joseph_Tran_CV.pdf      # CV for the "Download CV" button (add manually)
```

The site is plain HTML styled with the [Tailwind CSS](https://tailwindcss.com) CDN. There is no build step.

The nav bar and footer are written once in `assets/js/site.js` and inserted into every page. Each page's `<body>` sets:

- `data-page`: which nav link to highlight (`home`, `projects`, `publications`, `experience`, `contact`)
- `data-root`: the path back to the site root (`""` for top-level pages, `"../"` inside `projects/`)

Email, LinkedIn, GitHub, and the CV path live in the `SITE` object at the top of `site.js`. Change them there to update every page (the Contact page lists them too).

## Preview locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. Use a local server rather than opening files directly so paths resolve the same way they do on GitHub Pages.

## Common updates

**Add a project**
1. Copy `projects/project_template.html` to `projects/<project-name>.html` and fill it in.
2. Make a folder `assets/img/<project-name>/` with a `cover.jpg` (plus any slide or poster PDFs) and reference it as `../assets/img/<project-name>/cover.jpg`.
3. Add a card to `all_projects.html` (and to `index.html` if it should be featured).
4. Slides, posters, and demo videos go in the page's **Materials** section (see the commented block in the template). Upload videos to YouTube (unlisted is fine) and link to them; never commit video files, since GitHub rejects files over 100 MB.

**Update the CV, publications, and experience**
Double-click `Update Website.command` (runs `scripts/update_website.py`). It:
- copies the newest dated CV PDF from the Resumes folder to `assets/Joseph_Tran_CV.pdf` (the "Download CV" button)
- rebuilds the Published list on `publications.html` from the Zotero `.bib`
- syncs the Experience page (`timeline.html`) and the Under Review and Presentations lists on `publications.html` with the CV's LaTeX source, then commits and pushes

Preview first with `python3 scripts/update_website.py --dry-run`. The CV is only read, never changed.

Synced items sit between `AUTO-<NAME>:START` / `END` comments and carry a `data-cv-id`. You can reword any of them by hand on the website: an item is only replaced when the CV changes that same item. If the CV and the website both changed it, the website's wording is kept and the script prints a warning with the CV's new text. `scripts/cv_snapshot.json` records what the CV said at the last sync; commit it with the pages. Website-only items go outside the AUTO markers. Timeline images and presentation slide/poster links are set in `TIMELINE_IMAGES` and `PRESENTATION_LINKS` at the top of the script.

Add a publication to the Selected Research list on `index.html` by hand if it should appear on the homepage.

## Deploy

GitHub Pages serves the `main` branch. Push to `main` and the site updates within a few minutes.

The `Portfolio documents/` folder holds private source material (full CV, VR portfolio) and is git-ignored.
