# EdRW.codes 😸

The source code for my personal website, [EdRW.codes](https://edrw.codes).

## Project Structure

- [`_data/`](./_data) - site metadata files
- [`_includes/`](./_includes) - Nunjucks layouts and partials
  - [`fragments/`](./_includes/fragments) - Nunjucks partials for specific components
  - [`layouts/`](./_includes/layouts) - Nunjucks layout templates
- [`contents/`](./contents) - Nunjucks and Markdown content files
- `dist/` - Output directory for Eleventy (generated on build)
- [`plugins/`](./plugins) - Custom Eleventy plugins and configurations
- [`public/`](./public) - Static assets (images, CSS, webfonts, etc.)
- [`eleventy.config.js` ](./eleventy.config.js) - Eleventy configuration file

## Installation

```bash
pnpm install
```

## Commands

```bash
pnpm serve
```

```bash
pnpm build
```

```bash
pnpm clean
```
