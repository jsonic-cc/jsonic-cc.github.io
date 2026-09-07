#!/usr/bin/env bash
set -euo pipefail

root=$(cd "$(dirname "$0")/.." && pwd)
cd "$root"

for page in index docs docs/getting-started docs/api docs/architecture docs/comparisons docs/contracts docs/battle-tested docs/memory-safety docs/production-readiness docs/developer-experience docs/ai-opinion docs/ai-development docs/ai-assistants docs/human-directed-agentic-engineering; do
    test -s "public/$page.html"
    grep -F '<meta name="viewport"' "public/$page.html" >/dev/null
    grep -F 'assets/css/style.css' "public/$page.html" >/dev/null
    grep -F 'assets/js/script.js' "public/$page.html" >/dev/null
done

grep -F 'https://github.com/jsonic-cc/jsonic' public/index.html >/dev/null
grep -F 'rel="canonical" href="https://jsonic.cc/' public/index.html >/dev/null
grep -F 'rel="canonical" href="https://jsonic.cc/docs/getting-started.html"' public/docs/getting-started.html >/dev/null
grep -F 'og:site_name' public/index.html >/dev/null
grep -F '<link rel="sitemap"' public/index.html >/dev/null
test -s public/sitemap.xml

grep -F 'language-cpp' public/docs/getting-started.html >/dev/null
grep -F 'language-shell' public/docs/getting-started.html >/dev/null
grep -F '.tok-kw{' public/assets/css/style.css >/dev/null
grep -F '.tok-str' public/assets/css/style.css >/dev/null

if [ -e install.sh ] || [ -e public/install.sh ]; then
    echo 'Jsonic++ has no installer infrastructure; install.sh must not exist' >&2
    exit 1
fi

if grep -rF --include='*.html' 'nift-dev' public >/dev/null; then
    echo 'obsolete nift-dev operational URL found in generated site' >&2
    exit 1
fi

echo 'Jsonic++ website smoke checks passed'
