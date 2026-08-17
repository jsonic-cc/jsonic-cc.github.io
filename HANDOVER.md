# Jsonic++ website handover

The Jsonic++ website is built with Nift and should remain a small, evidence-first companion to the standalone parser.

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
