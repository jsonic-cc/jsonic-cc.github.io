# Jsonic++ website project history

## August 2026 — initial standalone website

The first full site was created alongside extraction of Jsonic++ from the byte-identical JSON implementation used by Nift and Minify++. The site adopted Nift's `/docs/*.html` secondary-page convention from the start, system/light/dark themes, evidence-first Battle Tested and production-readiness pages, explicit contracts/AI-DX material, and Human-Directed Agentic Engineering guidance.

## August 2026 — visual polish and comparison guide

Widened the documentation/code column, added theme-aware code-block scrollbars, corrected inline-code baseline alignment, changed the compact brand mark from `J+` to `J++`, and removed the website-source link from the docs sidebar. Added `/docs/comparisons.html` as a candid decision guide against nlohmann/json, simdjson, RapidJSON and Boost.JSON. The comparison explicitly treats Jsonic++'s tiny auditable surface as a niche rather than pretending it beats mature libraries on ecosystem breadth or throughput specialization.

## 2026-08-18 — API reference, C++ highlighting, and comparison framing

- Expanded `docs/api` from a compact overview into a reference grounded directly in the public `json.h` surface: all six JSON types, payload fields, object/array access and mutation semantics, scalar helpers, constructors, direct type inspection, serialization, streaming named-array iteration, and exception/error behavior.
- Reworked the client-side C++ highlighter to distinguish keywords, types, functions, namespaces, members, literals, comments, preprocessor directives/includes, operators and punctuation rather than applying only a few broad colors.
- Reframed `docs/comparisons` around strengths, weaknesses and architectural differences first; removed the self-comparison row; retained contextual “which is the better fit?” guidance without presenting a universal ranking.

## 2026-08-18 — Documentation depth, hero C++ highlighting, and table audit

Moved the homepage code example onto the same C++ highlighter used by documentation snippets, while keeping the hero free of copy-button chrome. Expanded the previously terse documentation pages into real guides covering integration, architecture, parser contracts, readiness, human/AI DX, agentic development and evidence interpretation. Reworked desktop table sizing so tables wrap within the content column rather than exposing horizontal scrollbars; a rendered audit found no table overflow across 1024–1920 px desktop viewports.
