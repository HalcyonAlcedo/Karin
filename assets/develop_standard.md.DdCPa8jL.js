import{_ as a,c as i,o as s,a3 as l}from"./chunks/framework.CkE_dvZ_.js";const u=JSON.parse('{"title":"插件开发规范","description":"","frontmatter":{},"headers":[],"relativePath":"develop/standard.md","filePath":"develop/standard.md"}'),e={name:"develop/standard.md"},n=l(`<h1 id="插件开发规范" tabindex="-1">插件开发规范 <a class="header-anchor" href="#插件开发规范" aria-label="Permalink to &quot;插件开发规范&quot;">​</a></h1><nav class="table-of-contents"><ul><li><a href="#命名规范">命名规范</a><ul><li><a href="#karin-plugin-example">karin-plugin-example</a></li><li><a href="#插件包">插件包</a></li></ul></li><li><a href="#结构规范">结构规范</a><ul><li><a href="#文件结构">文件结构</a></li><li><a href="#数据文件">数据文件</a></li><li><a href="#配置文件">配置文件</a></li><li><a href="#resources">resources</a></li><li><a href="#临时文件">临时文件</a></li></ul></li><li><a href="#仓库规范">仓库规范</a></li><li><a href="#插件收录">插件收录</a></li></ul></nav><h2 id="命名规范" tabindex="-1">命名规范 <a class="header-anchor" href="#命名规范" aria-label="Permalink to &quot;命名规范&quot;">​</a></h2><h3 id="karin-plugin-example" tabindex="-1">karin-plugin-example <a class="header-anchor" href="#karin-plugin-example" aria-label="Permalink to &quot;karin-plugin-example&quot;">​</a></h3><blockquote><p><code>karin-plugin-example</code>为存放非插件包的目录，即单个js文件插件的存放目录。</p></blockquote><ul><li>使用英文进行命名，无固定前缀要求</li><li>名称尽量简短，避免过长</li><li>名称避免使用特殊符号，使用<code>-</code>连接单词</li></ul><p>例如：<code>hello-world.js</code>、<code>my-plugin.js</code>、<code>my-awesome-plugin.js</code></p><h3 id="插件包" tabindex="-1">插件包 <a class="header-anchor" href="#插件包" aria-label="Permalink to &quot;插件包&quot;">​</a></h3><ul><li>插件包名称必须以<code>karin-plugin-</code>开头，后面跟插件名称</li><li>必须使用英文命名，尽量简短，避免使用特殊符号</li><li>统一为小写，使用<code>-</code>连接单词</li></ul><p>例如：<code>kritor-plugin-hello</code>、<code>karin-plugin-my-plugin</code>、<code>karin-plugin-my-awesome-plugin</code></p><h2 id="结构规范" tabindex="-1">结构规范 <a class="header-anchor" href="#结构规范" aria-label="Permalink to &quot;结构规范&quot;">​</a></h2><blockquote><p>插件包的目录结构，请参照以下规范进行组织，如果特殊需求，可由开发者自行在基础结构上进行调整</p></blockquote><h3 id="文件结构" tabindex="-1">文件结构 <a class="header-anchor" href="#文件结构" aria-label="Permalink to &quot;文件结构&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>以下是一个基础的结构规范，具体项目可根据实际情况进行调整</p></div><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">kritor-plugin-hello</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── apps</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── app1.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── app2.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── config</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   ├── config.yaml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   │   └── user.yaml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── defSet</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       ├── config.yaml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│       └── user.yaml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── resources</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── template</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── font</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── icon</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   ├── image</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">│   └── css</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── lib </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── model</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── index.js</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── .gitignore</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── README.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── CHANGELOG.md</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">├── LICENSE</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">└──package.json</span></span></code></pre></div><h3 id="数据文件" tabindex="-1">数据文件 <a class="header-anchor" href="#数据文件" aria-label="Permalink to &quot;数据文件&quot;">​</a></h3><ul><li>对于<code>数据文件</code>，karin要求开发者将数据文件<code>统一</code>存放到<code>karin/data/</code>下</li><li>请每个插件在<code>karin/data/</code>下创建以插件包名命名的文件夹，并将数据文件存放在该文件夹下</li><li>如无特殊需求，请不要在<code>data</code>文件夹下创建其他文件夹</li></ul><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><ul><li><s>karin要求插件包的配置文件均存在热更新机制</s> 可不提供 由开发者自行处理</li><li>统一使用<code>yaml</code>、<code>json</code>等格式，并将<code>用户可编辑的配置</code>文件存放在插件根目录的<code>config/config</code>下</li><li>对于默认配置文件，统一存放在<code>config/defSet/</code>下，由开发者进行维护修改，此处禁止用户编辑修改</li><li>如无特殊需求，请不要在<code>config</code>文件夹下创建其他文件夹</li><li>如对此处有疑问，请查看<a href="https://github.com/KarinJS/karin-plugin-template" target="_blank" rel="noreferrer">插件包模板仓库</a>进行参考</li></ul><h3 id="resources" tabindex="-1">resources <a class="header-anchor" href="#resources" aria-label="Permalink to &quot;resources&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>任选其一即可，以下是两种常见的规范</p></div><p>规范1:</p><ul><li>插件包的资源文件</li><li>字体文件存放在<code>resources/font/</code>下</li><li>图片文件存放在<code>resources/image/</code>下</li><li>图标文件存放在<code>resources/icon/</code>下</li><li>通用样式文件存放在<code>resources/css/</code>下</li><li>渲染模板存放在<code>resources/template/</code>下，每一种模板新建一个文件夹</li></ul><p>规范2:</p><ul><li>每一种渲染模板都在<code>resources</code>下新建一个文件夹，文件夹名称为模板名称，将模板的资源文件存放在该文件夹下</li></ul><h3 id="临时文件" tabindex="-1">临时文件 <a class="header-anchor" href="#临时文件" aria-label="Permalink to &quot;临时文件&quot;">​</a></h3><ul><li>karin会在启动的时候，在<code>karin/temp</code>下为每一个插件包创建对应名称的文件夹</li><li>开发者可在该文件夹下存放临时文件，如缓存文件、日志文件等</li><li>请勿对他人的文件夹进行删除、修改</li><li>如无特殊需求，请不要在该文件夹下创建其他文件夹。</li></ul><h2 id="仓库规范" tabindex="-1">仓库规范 <a class="header-anchor" href="#仓库规范" aria-label="Permalink to &quot;仓库规范&quot;">​</a></h2><ul><li>要求插件仓库名称必须以<code>karin-plugin-</code>开头，必须与插件包名称一致</li><li>插件仓库必须提供开源协议</li><li>在仓库标签页，添加<code>karin</code>、<code>karin-plugin</code></li><li>对于未开源的插件仓库，请遵守<a href="./../plugins/#🎉插件收录规范">插件收录规范</a></li><li>对于商业性质的插件仓库，也请遵守<a href="./../plugins/#🎉插件收录规范">插件收录规范</a></li><li>对于二改的<code>karin</code>仓库，必须进行开源，并使用<code>GPLv3+</code>协议，并使用<code>karin</code>标签进行标记</li></ul><h2 id="插件收录" tabindex="-1">插件收录 <a class="header-anchor" href="#插件收录" aria-label="Permalink to &quot;插件收录&quot;">​</a></h2><p>请查看<a href="./../plugins/#🎉插件收录规范">插件收录规范</a></p>`,31),o=[n];function c(r,p,t,d,h,k){return s(),i("div",null,o)}const g=a(e,[["render",c]]);export{u as __pageData,g as default};
