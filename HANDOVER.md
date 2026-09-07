# Jsonic++ website handover

The Jsonic++ website is built with Nift and should remain a small, evidence-first companion to the standalone parser.

- Canonical repository: `jsonic-cc/jsonic` at `https://github.com/jsonic-cc/jsonic`.
- Website source: `jsonic-cc/jsonic-cc.github.io` on `stage`; generated output on `main`.
- Public domain: `https://jsonic.cc` (CNAME committed in `public/`).
- Issue tracker: `https://github.com/jsonic-cc/jsonic/issues`.
- Installer infrastructure: intentionally not provided. Jsonic++ is a
  dependency-free, header-only library and deliberately does not ship the
  Minify++/Markup++ curl-installer family or CLI release packaging, so there is
  no `https://jsonic.cc/install.sh` endpoint and the site intentionally
  documents no curl-install command. This is an intentional
  project/distribution decision, not a tracked gap.
- Canonical link tags and Open Graph metadata are emitted from
  `templates/head.html` against `https://jsonic.cc`.

## Source/deploy model

The canonical authored website lives on `stage`; generated deployable output lives on `main` through the nested `public/` main-checkout/gitlink pattern used by the Minify++ and tscc websites.

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

## Visual and comparison reconciliation (2026-08-18)

- Documentation content widened so ordinary C++ examples do not trigger horizontal scrolling prematurely; code-block scrollbars are theme-aware, including explicit dark-mode track/thumb styling.
- Inline code is vertically reconciled with surrounding prose; keep this checked when changing typography.
- The brand mark is `J++`, not `J+`. The docs sidebar intentionally links product/documentation resources only; do not re-add a Website Source link there.
- `docs/comparisons` is the canonical architectural comparison page. It compares Jsonic++ with nlohmann/json, simdjson, RapidJSON and Boost.JSON using strengths/trade-offs rather than claiming a universal winner. Keep current feature claims grounded in official project documentation and keep benchmark claims separate unless same-host evidence exists.

## API and code presentation (2026-08-18)

- `docs/api` is the canonical public-surface reference and should stay synchronized with `jsonic/include/json.h`; document direct payload fields and mutation/exception semantics rather than implying conversion helpers that do not exist.
- C++ snippets use the site's local dependency-free highlighter. It should visibly distinguish major C++ token families (types/functions/namespaces/members/preprocessor/literals/comments), not regress to keyword-only coloring.
- Comparison pages should lead with strengths, weaknesses and architectural differences; contextual “better fit” guidance is useful, but universal winner language is not.

## Content depth, hero highlighting, and desktop table policy (2026-08-18)

- The homepage C++ sample must use the same local C++ tokenizer as documentation snippets; do not hand-color it separately. The hero sample intentionally suppresses copy-button chrome while still using `language-cpp`.
- The docs landing, Getting Started, Architecture, Contracts, Production Readiness, Developer Experience, AI Development, AI Assistants, AI Opinion, Battle Tested, and HDAE pages now carry substantive explanatory content. Preserve that depth rather than collapsing them back to teaser pages.
- Documentation tables must fit ordinary desktop widths without horizontal scrolling. Current rendered-width validation covers every generated table at 1024, 1100, 1280, 1366, 1440 and 1920 px. Narrow-screen scrolling remains acceptable.

## Memory-safety living record checkpoint (2026-08-18)

- `docs/memory-safety` is the dedicated living memory/resource-safety record beside Battle Tested. It currently documents the planned leak/lifetime/soak campaign and must not imply the dedicated campaign has already passed.
- Future campaigns should record commit/date, platform, compiler/sanitizer versions, workload/repetition or duration, sanitizer/Valgrind result, and peak/settled memory observations where useful.
- The homepage and first Getting Started C++ samples are intentionally line-broken to fit their normal desktop code columns without horizontal scrolling. Keep those examples readable rather than relying on forced code wrapping.

## Jsonic++ memory-safety Checkpoint 1A / 1B status (2026-08-18)

- Checkpoint 1A is complete: the maintained long-lived Jsonic++ lifetime corpus passed 120 iterations under ASan + LSan + UBSan with zero findings.
- The separate 400-iteration non-sanitized soak observed 10,624 KiB RSS after warm-up, 10,688 KiB at midpoint and 10,688 KiB at completion; treat this as stabilization evidence, not a standalone leak oracle.
- No production Jsonic++ parser change was required by 1A.
- Checkpoint 1B was initially blocked in the checkpoint environment because Valgrind was unavailable, then completed on a Linux host with Valgrind 3.26.0. The independent gate is now satisfied; see the later Checkpoint 1B entry below for exact evidence.
- Keep `docs/memory-safety` synchronized with future evidence and retain exact tool/workload/result details rather than replacing them with a generic “memory safe” claim.
## Jsonic++ memory-safety Checkpoint 1B complete (2026-08-18)

- Independent Linux confirmation passed under Valgrind 3.26.0 at Jsonic++ commit `b9d0ff3`: 40 lifetime-corpus iterations, 0 errors, 0 bytes in use at exit, and all 6,579,515 allocations freed.
- Peak process RSS under Valgrind was 215,992 KiB; keep this separate from the non-sanitized steady-state RSS evidence because Valgrind materially changes process memory behavior.
- Checkpoints 1A + 1B now satisfy the maintained Jsonic++ parser lifetime exit gate. Preserve the exact workload/tool/result details on `docs/memory-safety`; do not collapse this into an unconditional timeless “memory safe” claim.

## Website metadata

- Canonical link tags and Open Graph metadata are emitted from `templates/head.html` against the public domain.
- `content/sitemap.xml` is a tracked Nift page listing every page URL under the canonical domain; rebuild and commit its `public/sitemap.xml` output with the site.
