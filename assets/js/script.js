(()=>{
const root=document.documentElement;
const themeButtons=[...document.querySelectorAll('[data-theme-choice]')];
const applyTheme=theme=>{
root.dataset.theme=theme;
localStorage.setItem('jsonic-theme',theme);
themeButtons.forEach(button=>{
button.classList.toggle('active',button.dataset.themeChoice===theme);
});
};
applyTheme(localStorage.getItem('jsonic-theme')||'system');
themeButtons.forEach(button=>{
button.onclick=()=>applyTheme(button.dataset.themeChoice);
});
const escapeHtml=source=>source
.replace(/&/g,'&amp;')
.replace(/</g,'&lt;')
.replace(/>/g,'&gt;');
const cppKeywords=new Set(`alignas alignof and and_eq asm atomic_cancel atomic_commit atomic_noexcept auto bitand bitor bool break case catch char char8_t char16_t char32_t class compl concept const consteval constexpr constinit const_cast continue co_await co_return co_yield decltype default delete do double dynamic_cast else enum explicit export extern false float for friend goto if inline int long mutable namespace new noexcept not not_eq nullptr operator or or_eq private protected public register reinterpret_cast requires return short signed sizeof static static_assert static_cast struct switch template this thread_local throw true try typedef typeid typename union unsigned using virtual void volatile wchar_t while xor xor_eq`.split(/\s+/));
const cppToken=/(^\s*#[ \t]*[A-Za-z_][^\n]*|\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:0[xX][0-9A-Fa-f]+|0[bB][01]+|\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)[uUlLfF]*\b|\b[A-Za-z_]\w*\b)/gm;
const highlightCpp=source=>{
let out='';
let last=0;
for(const match of source.matchAll(cppToken)){
const token=match[0];
out+=escapeHtml(source.slice(last,match.index));
let cls='';
if(/^\s*#/.test(token))cls='pp';
else if(/^\/\//.test(token)||/^\/\*/.test(token))cls='com';
else if(/^["']/.test(token))cls='str';
else if(/^(?:0[xX]|0[bB]|\d)/.test(token))cls='num';
else if(cppKeywords.has(token))cls='kw';
out+=cls?`<span class="${cls}">${escapeHtml(token)}</span>`:escapeHtml(token);
last=match.index+token.length;
}
return out+escapeHtml(source.slice(last));
};
const highlightPlain=source=>escapeHtml(source);
document.querySelectorAll('pre code').forEach(code=>{
const raw=code.textContent;
const isCpp=code.classList.contains('language-cpp')||code.classList.contains('language-c++')||code.classList.contains('language-cxx');
code.innerHTML=isCpp?highlightCpp(raw):highlightPlain(raw);
const button=document.createElement('button');
button.className='copy';
button.title='Copy';
button.setAttribute('aria-label','Copy code');
button.onclick=async()=>{
await navigator.clipboard.writeText(raw);
button.classList.add('ok');
setTimeout(()=>button.classList.remove('ok'),1200);
};
code.parentElement.appendChild(button);
});
})();