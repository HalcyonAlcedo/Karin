import{_ as s,c as a,o as i,a3 as t}from"./chunks/framework.CkE_dvZ_.js";const b=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"start/start.md","filePath":"start/start.md"}'),e={name:"start/start.md"},l=t('<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><hr><h2 id="环境" tabindex="-1">环境 <a class="header-anchor" href="#环境" aria-label="Permalink to &quot;环境&quot;">​</a></h2><blockquote><p>支持 Windows、Linux、MacOS、Docker 等环境<br> 推荐安装的没有强制性需求，可根据个人需求进行安装<br> karin开发的场景，默认您拥有以下全部环境，若有特殊需求，请自行安装</p></blockquote><table><thead><tr><th>-</th><th>安装</th><th>说明</th></tr></thead><tbody><tr><td><a href="https://nodejs.org/en" target="_blank" rel="noreferrer">NodeJs</a></td><td>√</td><td>推荐版本18+</td></tr><tr><td><a href="https://git-scm.com/" target="_blank" rel="noreferrer">git</a></td><td>推荐安装</td><td>分布式版本控制软件，国内用户推荐使用 <a href="https://sw.pcmgr.qq.com/1e05804bd17b358a8c88284df8331fcd/65fcde89/spcmgr/download/Git-2.44.0-64-bit.exe" target="_blank" rel="noreferrer">腾讯软件管家</a> 进行加速下载</td></tr><tr><td><a href="https://github.com/redis-windows/redis-windows/releases" target="_blank" rel="noreferrer">redis</a></td><td>推荐安装</td><td>一个高性能的内存数据库，windows用户推荐使用<a href="https://github.com/redis-windows/redis-windows" target="_blank" rel="noreferrer">redis-windows</a></td></tr></tbody></table><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><blockquote><p>以下命令均为默认您安装了<code>NodeJs</code>、<code>git</code></p></blockquote><ol><li>安装<code>pnpm</code>(可选)</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-5rxxM" id="tab-ZTXLhme" checked="checked"><label for="tab-ZTXLhme">官方源</label><input type="radio" name="group-5rxxM" id="tab-wQafDt1"><label for="tab-wQafDt1">国内源</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --registry=https://registry.npmmirror.com</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pnpm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -g</span></span></code></pre></div></div></div><ol start="2"><li>使用git克隆项目</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>中国大陆服务器推荐使用<code>Gitee</code>镜像源<br><code>Karin</code>官方的所有项目，均可通过将域名中的<code>github</code>更换为<code>gitee</code>进行加速下载~</p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-dmIox" id="tab-z7UJfCj" checked="checked"><label for="tab-z7UJfCj">Github</label><input type="radio" name="group-dmIox" id="tab-giDmKzC"><label for="tab-giDmKzC">Gitee</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/KarinJS/Karin.git</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --depth=1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/KarinJS/Karin.git</span></span></code></pre></div></div></div><ol><li>初始化项目</li></ol><blockquote><p>进入项目目录</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Karin</span></span></code></pre></div><ol start="2"><li><s>拉取子模块</s></li></ol><blockquote><p>可跳过，karin会自动拉取子模块</p></blockquote><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recursive</span></span></code></pre></div><ol start="3"><li>安装依赖</li></ol><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Y5HzY" id="tab-c9-R4_3" checked="checked"><label for="tab-c9-R4_3">安装生产依赖</label><input type="radio" name="group-Y5HzY" id="tab-8mDUB1Z"><label for="tab-8mDUB1Z">安装开发依赖</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -P</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div></div></div><blockquote><p>你可以选择其中任何一种方式进行依赖安装。</p></blockquote><ol start="4"><li>启动项目</li></ol><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>开发模式支持<code>plugins/apps</code>文件夹热更新、插件包的<code>index.js</code>热更新<br> 正常启动下，仅支持热更新非插件包例如自带的<code>karin-plugin-example</code></p></div><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-CHoDB" id="tab-D-NO1O1" checked="checked"><label for="tab-D-NO1O1">正常启动</label><input type="radio" name="group-CHoDB" id="tab-oV1CPN8"><label for="tab-oV1CPN8">开发模式启动</label></div><div class="blocks"><div class="language-sh vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span></span></code></pre></div><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">node</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --dev</span></span></code></pre></div></div></div><h2 id="安装适配器" tabindex="-1">安装适配器 <a class="header-anchor" href="#安装适配器" aria-label="Permalink to &quot;安装适配器&quot;">​</a></h2><blockquote><p>适配器的作用就是在不同的聊天平台之间建立桥梁，使karin可以与不同平台的用户进行交互</p></blockquote><ul><li><a href="./adapter.html">安装适配器</a></li></ul><h2 id="安装渲染器" tabindex="-1">安装渲染器 <a class="header-anchor" href="#安装渲染器" aria-label="Permalink to &quot;安装渲染器&quot;">​</a></h2><blockquote><p>渲染器在karin的定义可能它更是一个单纯的截图工具<br> 默认提供了<code>puppeteer</code>，<code>puppeteer</code>打开html -&gt; 渲染 -&gt; 截图 -&gt; 返回图片base64编码<br> 当然，你也可以自行注册渲染器，实现自定义截图逻辑</p></blockquote><ul><li><a href="./../Renderer/Renderer.html">安装渲染器</a></li></ul>',30),p=[l];function d(h,o,n,r,c,k){return i(),a("div",null,p)}const u=s(e,[["render",d]]);export{b as __pageData,u as default};
