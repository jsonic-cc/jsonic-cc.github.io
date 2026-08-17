# Jsonic++ website handover

The Jsonic++ website is built with Nift and should remain a small, evidence-first companion to the standalone parser.

## Source/deploy model

The canonical authored website lives on `stage`; generated deployable output lives on `main` through the `public/` self-worktree/gitlink pattern used by the Minify++ and tscc websites.

## URL layout

The homepage is `/index.html`; the documentation landing page is `/docs.html`; all secondary documentation/evidence/AI/design pages live under `/docs/*.html`.

## Required product framing

- Tagline: **Jsonic++ — a tiny, embeddable JSON parser for C++.**
- Human-first design; strong AI DX is a consequence of explicit/simple engineering.
- Jsonic++ is the canonical standalone parser owner; Nift and Minify++ vendor synchronized copies.
- Battle Tested/evidence claims must distinguish inherited downstream use from fresh standalone evidence.
- Contracts, sanitizer/fuzz/conformance evidence, AI development and Human-Directed Agentic Engineering should stay linked rather than becoming isolated marketing pages.

## Completion discipline

After meaningful Jsonic++ behavior changes, review the website's Battle Tested/production claims and this handover. After meaningful website changes, full-build with the current Nift candidate, perform an immediate no-op incremental build and local reference scan, then update project history.

Detailed website history lives at `docs/handover/PROJECT-HISTORY.md`.
