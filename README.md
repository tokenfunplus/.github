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

The Cove cover is composed in `design/cove/index.html`. It pairs the original ImageGen logo lockup with an actual Beta 2 file-chat capture from [`tokenfunplus.github.io/docs/cove/assets/files-light.webp`](https://github.com/tokenfunplus/tokenfunplus.github.io/blob/cd3fc273d4f0035751ae1fdedbfbdef9e0393310/docs/cove/assets/files-light.webp), captured at app commit `d82c39f`. The sample notes and model reply are synthetic; the capture contains no personal conversations or provider credentials. The wave mark matches the identity introduced in Cove Beta 2. The self-hosted Geist font and its SIL Open Font License are included in `design/cove/`.

With Playwright available to Node, run `node design/cove/render.cjs` to render the 1200 × 630 PNG. Update the version in both the cover source and `profile/README.md` when a new beta ships. Keep the cover consistent with the application screenshots and published release.

Render SVG-based PNG files with a local SVG renderer after editing their source files. Export at the SVG's native dimensions and check all artwork at desktop and mobile widths, in both GitHub themes. Keep previews and reference images in the ignored `output/` directory.

## Review

Check that all image files exist, linked resources are public, and the profile renders in GitHub's light and dark themes. No application code or private project data belongs in this repository.
