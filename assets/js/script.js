(()=>{
const root=document.documentElement;
const themeButtons=[...document.querySelectorAll('[data-theme-choice]')];
const applyTheme=theme=>{
root.dataset.theme=theme;
localStorage.setItem('minify-theme',theme);
themeButtons.forEach(button=>{
button.classList.toggle('active',button.dataset.themeChoice===theme);
});
};
applyTheme(localStorage.getItem('minify-theme')||'system');
themeButtons.forEach(button=>{
button.onclick=()=>applyTheme(button.dataset.themeChoice);
});
const escapeHtml=source=>source
.replace(/&/g,'&amp;')
.replace(/</g,'&lt;')
.replace(/>/g,'&gt;');
document.querySelectorAll('pre code').forEach(code=>{
const raw=code.textContent;
const highlighted=escapeHtml(raw)
.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g,'<span class="com">$1</span>')
.replace(/(&quot;[^&\n]*?&quot;|'[^'\n]*?'|`[^`]*?`)/g,'<span class="str">$1</span>')
.replace(/\b(import|export|from|default|interface|type|function|class|extends|const|let|var|return|new|namespace|enum|public|private|readonly|async|await|declare|true|false|null)\b/g,'<span class="kw">$1</span>')
.replace(/\b(\d+(?:\.\d+)?)\b/g,'<span class="num">$1</span>');
code.innerHTML=highlighted;
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