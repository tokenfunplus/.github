# TokenFunPlus organization profile

The public organization homepage lives in [profile/README.md](profile/README.md). GitHub displays it at [github.com/tokenfunplus](https://github.com/tokenfunplus).

## Edit the homepage

- Keep copy in English and link only to publicly accessible resources.
- Cove is public and available as a beta for Apple Silicon Macs running macOS 13 or later. Link to its public repository and published release; update versioned download links when a new beta ships.
- Keep project status and provider-processing descriptions accurate. Local conversation storage does not mean local model execution.
- Binance Studio is a browser customization tool. Do not describe it as an AI application or an official Binance product.
- Keep shared community-health templates out of this repository unless deliberately intended for all organization repositories.

## Artwork

The homepage uses the PNG files in `profile/assets/`. Editable SVG sources for the organization hero and Binance Studio card live in `design/`. The organization artwork uses the warm amber palette of the existing avatar.

The Cove cover is composed in `design/cove/index.html`. It pairs the original logo lockup with the unmodified synthetic research-reference capture from Cove release source `e73ce8e5b7d0796c3d4213cdb027384e7fa122bf` (`design/cove/workspace-beta8.png`). The `web-search` browser fixture uses an isolated Local Service, synthetic conversation and source data, and a loopback simulated Provider. It contains no personal history or live search credentials. The wave mark matches the identity introduced in Beta 2. The faint SVG water texture is reused from the [public Cove website asset](https://www.hicove.io/images/cove-water.svg). The self-hosted Geist font and its SIL Open Font License are included in `design/cove/`.

With Playwright available to Node, run `node design/cove/render.cjs` to render the 1200 × 630 PNG. Update the version in both the cover source and `profile/README.md` when a new beta ships. Keep the cover consistent with the application screenshots and published release.

Render SVG-based PNG files with a local SVG renderer after editing their source files. Export at the SVG's native dimensions and check all artwork at desktop and mobile widths, in both GitHub themes. Keep previews and reference images in the ignored `output/` directory.

## Review

Check that all image files exist, linked resources are public, and the profile renders in GitHub's light and dark themes. No application code or private project data belongs in this repository.

The Beta 4 cover used the actual Focus capture from UI commit `22441b6`, included in Beta 3 source `23503cd`, and updated its release badge and version. Set `COVE_BROWSER_BIN` to a local Chromium or Chrome executable when rendering without Playwright-managed browser downloads. Profile copy and links now cover message search, draft protection, comparison exports, and explicit beta-update checks.

The Beta 5 profile update uses the unmodified synthetic answer-workbench capture from Cove source `79fb542` in `design/cove/workspace-beta5.png`. The regenerated cover and profile describe published `0.1.0-beta.5`, with current download/upgrade links, side conversations, reviewed revisions, model selection, reasoning, local equations, and response details. Earlier Focus artwork retains its provenance above.

The Beta 7 profile update links to the published `0.1.0-beta.7` package and `hicove.io`, describes continuous debates, cited stage summaries, usage estimates and explicit budget controls, and includes schema 21 upgrade guidance. Public workflow, browser-demo, and starter-guide links lead to Cove Web. The browser demo uses sample answers; optional starter-key availability is shown on its guide. Earlier artwork remains in Git history.

The Beta 8 profile update links to the published `0.1.0-beta.8` package, introduces opt-in Web search, search connections and per-model limits, saved source references, external research data flows, and schema 22 upgrade guidance. The refreshed cover uses the release-source capture above. Existing Debate and other capabilities remain available.
