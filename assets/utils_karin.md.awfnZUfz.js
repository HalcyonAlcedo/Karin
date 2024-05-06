import{_ as s,c as i,o as a,a3 as t}from"./chunks/framework.CkE_dvZ_.js";const u=JSON.parse('{"title":"概述","description":"","frontmatter":{},"headers":[],"relativePath":"utils/karin.md","filePath":"utils/karin.md"}'),e={name:"utils/karin.md"},n=t('<h1 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h1><p><code>#Karin</code>是<code>./lib/index.js</code>文件的别名，这是一个集中导出多个模块的入口文件。<br> 通过使用别名，开发者可以更简洁地引入所需的模块，无需指定完整的路径。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> segment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./lib/bot/segment.js&#39;</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> plugin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./lib/plugins/plugin.js&#39;</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 以上的导入麻烦且冗长，在使用别名后可以简化为</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { segment, plugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#Karin&#39;</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>可能会更新不及时，有一定阅读能力的可以查看 <a href="https://github.com/KarinJS/Karin/blob/main/lib/index.js" target="_blank" rel="noreferrer">lib/index.js</a></p></div><ul><li><h2 id="kritor" tabindex="-1"><code>kritor</code> <a class="header-anchor" href="#kritor" aria-label="Permalink to &quot;`kritor`&quot;">​</a></h2><p>内部方法，若无特殊需求，不建议使用</p></li><li><h2 id="app" tabindex="-1"><code>APP</code> <a class="header-anchor" href="#app" aria-label="Permalink to &quot;`APP`&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { App } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#Karin&#39;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div></li><li><h2 id="bot" tabindex="-1"><code>Bot</code> <a class="header-anchor" href="#bot" aria-label="Permalink to &quot;`Bot`&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Bot } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#Karin&#39;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div></li><li><h2 id="cfg" tabindex="-1"><code>Cfg</code> <a class="header-anchor" href="#cfg" aria-label="Permalink to &quot;`Cfg`&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Cfg } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#Karin&#39;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div></li><li><h2 id="plugin" tabindex="-1"><code>plugin</code> <a class="header-anchor" href="#plugin" aria-label="Permalink to &quot;`plugin`&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { plugin } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#Karin&#39;</span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ...</span></span></code></pre></div></li></ul>',6),l=[n];function p(h,r,o,k,d,c){return a(),i("div",null,l)}const b=s(e,[["render",p]]);export{u as __pageData,b as default};
