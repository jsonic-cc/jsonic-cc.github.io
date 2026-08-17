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
const cppKeywords=new Set(`alignas alignof and and_eq asm atomic_cancel atomic_commit atomic_noexcept auto bitand bitor break case catch class compl concept const consteval constexpr constinit const_cast continue co_await co_return co_yield decltype default delete do dynamic_cast else enum explicit export extern for friend goto if inline mutable namespace new noexcept not not_eq operator or or_eq private protected public register reinterpret_cast requires return sizeof static static_assert static_cast struct switch template this thread_local throw try typedef typeid typename union using virtual volatile while xor xor_eq`.split(/\s+/));
const cppTypes=new Set(`bool char char8_t char16_t char32_t double float int long short signed unsigned void wchar_t size_t nullptr_t string string_view vector pair unordered_set runtime_error out_of_range Document Type Callback`.split(/\s+/));
const cppLiterals=new Set(['true','false','nullptr']);
const tokenPattern=/R"[^\s(\\]{0,16}\([\s\S]*?\)[^\s"\\]{0,16}"|\/\*[\s\S]*?\*\/|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:0[xX][0-9A-Fa-f']+|0[bB][01']+|(?:\d[\d']*)(?:\.\d[\d']*)?(?:[eE][+-]?\d[\d']*)?)[uUlLfF]*\b|\b[A-Za-z_]\w*\b|::|->|<<|>>|&&|\|\||==|!=|<=|>=|\+\+|--|\+=|-=|\*=|\/=|%=|&=|\|=|\^=|[{}()[\];,.?:~+\-*\/%&|^!=<>]/g;
const highlightCppFragment=source=>{
let out='';
let last=0;
const matches=[...source.matchAll(tokenPattern)];
for(let i=0;i<matches.length;++i){
const match=matches[i];
const token=match[0];
out+=escapeHtml(source.slice(last,match.index));
const prev=i?matches[i - 1][0]:'';
const next=i+1<matches.length?matches[i+1][0]:'';
const tail=source.slice(match.index+token.length);
let cls='';
if(/^\/\//.test(token)||/^\/\*/.test(token))cls='com';
else if(/^R"/.test(token)||/^['"]/.test(token))cls='str';
else if(/^(?:0[xX]|0[bB]|\d)/.test(token))cls='num';
else if(cppLiterals.has(token))cls='lit';
else if(cppKeywords.has(token))cls='kw';
else if(cppTypes.has(token)||/^[A-Z][A-Za-z0-9_]*$/.test(token))cls='type';
else if(/^[A-Za-z_]\w*$/.test(token)){
if(/^\s*\(/.test(tail))cls='fn';
else if(next==='::'||prev==='::')cls='ns';
else if(prev==='.'||prev==='->')cls='member';
}else if(/^(?:::|->|<<|>>|&&|\|\||==|!=|<=|>=|\+\+|--|\+=|-=|\*=|\/=|%=|&=|\|=|\^=|[?:~+\-*\/%&|^!=<>])$/.test(token))cls='op';
else if(/^[{}()[\];,.]$/.test(token))cls='pun';
out+=cls?`<span class="tok-${cls}">${escapeHtml(token)}</span>`:escapeHtml(token);
last=match.index+token.length;
}
return out+escapeHtml(source.slice(last));
};
const highlightCpp=source=>source.split('\n').map(line=>{
const pp=line.match(/^(\s*)(#\s*[A-Za-z_]\w*)(.*)$/);
if(!pp)return highlightCppFragment(line);
let rest=pp[3];
let rendered=escapeHtml(pp[1])+`<span class="tok-pp">${escapeHtml(pp[2])}</span>`;
const include=rest.match(/^(\s*)([<"])(.*?)([>"])(.*)$/);
if(include){
rendered+=escapeHtml(include[1]);
rendered+=`<span class="tok-inc">${escapeHtml(include[2] + include[3] + include[4])}</span>`;
rendered+=highlightCppFragment(include[5]);
}else{
rendered+=highlightCppFragment(rest);
}
return rendered;
}).join('\n');
const highlightPlain=source=>escapeHtml(source);
document.querySelectorAll('pre code').forEach(code=>{
const raw=code.textContent;
const isCpp=code.classList.contains('language-cpp')||code.classList.contains('language-c++')||code.classList.contains('language-cxx');
code.innerHTML=isCpp?highlightCpp(raw):highlightPlain(raw);
if(!code.hasAttribute('data-no-copy')){
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
}
});
})();