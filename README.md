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

The Cove card reuses the product cover from [`tokenfunplus.github.io/docs/assets/cove-social.png`](https://github.com/tokenfunplus/tokenfunplus.github.io/blob/8f43f023f60fdcc137c420c10929b91ad6388ba5/docs/assets/cove-social.png). It shows the actual Cove interface captured at app commit `25961b7`, using synthetic prompts and simulated model replies. It contains no personal conversations or provider credentials. Replace it from the website source when that cover changes.

Render SVG-based PNG files with a local SVG renderer after editing their source files. Export at the SVG's native dimensions and check all artwork at desktop and mobile widths, in both GitHub themes. Keep previews and reference images in the ignored `output/` directory.

## Review

Check that all image files exist, linked resources are public, and the profile renders in GitHub's light and dark themes. No application code or private project data belongs in this repository.
