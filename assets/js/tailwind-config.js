// Shared Tailwind theme. Load right after the Tailwind CDN script on every page.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        "primary": "#c13301",
        "on-primary": "#ffffff",
        "primary-container": "#c13301",
        "on-primary-container": "#ffe1d9",
        "primary-fixed": "#ffdbd1",
        "primary-fixed-dim": "#ffb5a0",
        "secondary": "#445aa7",
        "on-secondary": "#ffffff",
        "secondary-container": "#95aafd",
        "on-secondary-container": "#243c88",
        "tertiary": "#0055ff",
        "background": "#fcf9f8",
        "on-background": "#1c1b1b",
        "surface": "#fcf9f8",
        "surface-bright": "#fcf9f8",
        "surface-dim": "#dcd9d9",
        "surface-variant": "#e5e2e1",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f6f3f2",
        "surface-container": "#f0eded",
        "surface-container-high": "#eae7e7",
        "surface-container-highest": "#e5e2e1",
        "on-surface": "#1c1b1b",
        "on-surface-variant": "#434656",
        "inverse-surface": "#313030",
        "inverse-on-surface": "#f3f0ef",
        "outline": "#737688",
        "outline-variant": "#c3c5d9",
        "error": "#ba1a1a"
      },
      borderRadius: {
        "none": "0",
        "DEFAULT": "0",
        "lg": "0",
        "xl": "0",
        "full": "9999px"
      },
      fontFamily: {
        "headline": ["Plus Jakarta Sans", "sans-serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"],
        "mono": ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"]
      }
    }
  }
};
