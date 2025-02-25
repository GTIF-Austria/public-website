import{_ as e,c as o,o as a,a1 as i}from"./chunks/framework.B_ddJVe4.js";const p=JSON.parse('{"title":"Example Narrative","description":"","frontmatter":{},"headers":[],"relativePath":"narratives/example-narrative.md","filePath":"narratives/example-narrative.md"}'),r={name:"narratives/example-narrative.md"};function s(n,t,u,l,d,h){return a(),o("div",null,t[0]||(t[0]=[i(`<h1 id="example-narrative" tabindex="-1">Example Narrative <a class="header-anchor" href="#example-narrative" aria-label="Permalink to &quot;Example Narrative &lt;!--{ as=&quot;video&quot; mode=&quot;hero&quot; src=&quot;https://dlmultimedia.esa.int/download/public/videos/2023/06/010/2306_010_AR_EN.mp4&quot; }--&gt;&quot;">​</a></h1><h4 id="an-introduction-on-how-to-write-interactive-and-multimedial-stories-using-markdown-scroll-down-to-get-started" tabindex="-1">An introduction on how to write interactive and multimedial stories using markdown. Scroll down to get started! <a class="header-anchor" href="#an-introduction-on-how-to-write-interactive-and-multimedial-stories-using-markdown-scroll-down-to-get-started" aria-label="Permalink to &quot;An introduction on how to write interactive and multimedial stories using markdown. Scroll down to get started! &lt;!--{ style=&quot;font-size:1rem;opacity:0.7;margin-top:1rem;&quot; }--&gt;&quot;">​</a></h4><h2 id="why-storytelling" tabindex="-1">Why storytelling? <a class="header-anchor" href="#why-storytelling" aria-label="Permalink to &quot;Why storytelling?&quot;">​</a></h2><p>Storytelling is the enabling part of GTIF outcome presentation because resulting data can often be complex and challenging to communicate. By framing data within narratives, storytelling makes GTIF concepts accessible, engaging, and memorable to a wider audience. It bridges the gap between the scientific and technical details involved in the production of the GTIF information and the public&#39;s understanding of its utility in green transition and climate change adaptation.</p><p>It provides just enough background to make the nature and availability of the offered GTIF-information understandable: Descriptions of the input data used, the value-adding steps applied, how the information factory links them internally, how the related provider landscape is structured, through which services information is conveyed, and which the conditions are for its access and exploitation.</p><h2 id="how-do-i-get-started" tabindex="-1">How do I get started? <a class="header-anchor" href="#how-do-i-get-started" aria-label="Permalink to &quot;How do I get started?&quot;">​</a></h2><h3 id="markdown-with-superpowers" tabindex="-1">Markdown with superpowers <a class="header-anchor" href="#markdown-with-superpowers" aria-label="Permalink to &quot;Markdown with superpowers&quot;">​</a></h3><p>The main story language is Markdown, a lightweight markup language that uses plain text formatting syntax to convert plain text into structured HTML documents. Read more about Markdown <a href="https://en.wikipedia.org/wiki/Markdown" target="_blank" rel="noreferrer">in this Wikipedia article</a> and find a guide on how to get started (including a cheatsheet) <a href="https://www.markdownguide.org/" target="_blank" rel="noreferrer">here</a>.</p><p>Addtiionally to normal Markdown, the storytelling rendering engine allows adding additional configuration; this configuration is only visible to you, the editor, and is hidden to the reader. It allows adding &quot;superpowers&quot; to Markdown using <a href="https://en.wikipedia.org/wiki/HTML" target="_blank" rel="noreferrer">HTML</a> comments and attributes.</p><p>To write a HTML comment, use the following syntax:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!--{ *custom HTML attributes* }--&gt;</span></span></code></pre></div><hr><p>Let&#39;s say we want a small image with a specific size and a colored text underneath. With normal Markdown you would write something like this:</p><p><strong>Input</strong>:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">![</span><span style="--shiki-light:#032F62;--shiki-light-text-decoration:underline;--shiki-dark:#DBEDFF;--shiki-dark-text-decoration:underline;">Image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">](</span><span style="--shiki-light:#24292E;--shiki-light-text-decoration:underline;--shiki-dark:#E1E4E8;--shiki-dark-text-decoration:underline;">https://placehold.co/800x100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-light-font-style:italic;--shiki-dark:#E1E4E8;--shiki-dark-font-style:italic;">_Some italic text_</span></span></code></pre></div><p><strong>Output</strong>:</p><p><img src="https://placehold.co/800x100" alt="Image"></p><p><em>Some italic text</em></p><hr><p>Let&#39;s add some configuration to reduce the width of the image and add color to the text:</p><p><strong>Input:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>![Image](https://placehold.co/800x100) &lt;!--{ width=&quot;300&quot; }--&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>_Some italic text, now in red_ &lt;!--{ style=&quot;color:red&quot; }--&gt;</span></span></code></pre></div><p><strong>Output</strong>:</p><p><img src="https://placehold.co/800x100" alt="Image"></p><p><em>Some italic text, now in red</em></p><hr><p>You can use any HTML attributes, plus some shorthands: <code>#</code> is a shorthand for <code>id</code> (e.g. <code>#hello</code> renders as <code>id=&quot;hello&quot;</code>) and <code>.</code> is a shorthand for <code>class</code> (e.g. <code>.foo</code> renders as <code>class=&quot;foo&quot;</code>).</p><h2 id="story-structure" tabindex="-1">Story structure <a class="header-anchor" href="#story-structure" aria-label="Permalink to &quot;Story structure&quot;">​</a></h2><h3 id="the-hero" tabindex="-1">The hero <a class="header-anchor" href="#the-hero" aria-label="Permalink to &quot;The hero&quot;">​</a></h3><p>The hero is the initial section of a story. It can be either a full-screen image or a full-screen video, with some overlaying text. You can either write the hero section by hand, or by using the &quot;plus&quot; icon in the editor toolbar (or in the story preview). In each story, only one hero should be added at the very beginning. After the hero, you will see the nav menu, and after that, the story content. The hero uses the Markdown syntax for <code>h1</code> (Header 1), so it starts with one <code>#</code>.</p><h3 id="story-sections" tabindex="-1">Story sections <a class="header-anchor" href="#story-sections" aria-label="Permalink to &quot;Story sections&quot;">​</a></h3><p>To start a new section, use the Markdown syntax for <code>h2</code> (Header 2), so starting with <code>##</code>. Eeach section is automatically added to the nav menu.</p><h3 id="special-sections" tabindex="-1">Special sections <a class="header-anchor" href="#special-sections" aria-label="Permalink to &quot;Special sections&quot;">​</a></h3><p>Additionally to the hero section, there are other special sections (like media, map), and the most convenient way to add them is via the &quot;plus&quot; icon. They use the &quot;as&quot; attribute, which replaces the entire section with the corresponding element. So, for example, <code>as=&quot;div&quot;</code> will replace the entire section (including the title) with a <code>div</code>. We will now have a more in-depth look about the map section. The map section shows a single map, with optional text underneath. It is powered by <a href="https://eox-a.github.io/EOxElements/?path=/docs/elements-eox-map--docs" target="_blank" rel="noreferrer">EOxMap</a>, so you can use the same syntax as with any EOxMap.</p><p><strong>Input:</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## Map section &lt;!--{as=&quot;eox-map&quot; style=&quot;width: 100%; height: 500px;&quot; [...]</span></span></code></pre></div><p>To see the full input of this and the following section, check the Markdown file directly.</p><p><strong>Output:</strong>:</p><h2 id="map-section" tabindex="-1">Map section <a class="header-anchor" href="#map-section" aria-label="Permalink to &quot;Map section &lt;!--{as=&quot;eox-map&quot; style=&quot;width: 100%; height: 500px;&quot; config=&#39;{ &quot;controls&quot;: { &quot;Zoom&quot;: {}, &quot;Attribution&quot;: {}, &quot;FullScreen&quot;: {}, &quot;OverviewMap&quot;: { &quot;layers&quot;: [ { &quot;type&quot;: &quot;Tile&quot;, &quot;properties&quot;: { &quot;id&quot;: &quot;overviewMap&quot; }, &quot;source&quot;: { &quot;type&quot;: &quot;OSM&quot; } } ] } }, &quot;layers&quot;: [ { &quot;type&quot;: &quot;Tile&quot;, &quot;properties&quot;: { &quot;id&quot;: &quot;overviewMap&quot; }, &quot;source&quot;: { &quot;type&quot;: &quot;TileWMS&quot;, &quot;url&quot;: &quot;https://ows.mundialis.de/services/service&quot;, &quot;params&quot;: { &quot;LAYERS&quot;: &quot;TOPO-WMS&quot; } } } ], &quot;view&quot;: { &quot;center&quot;: [15,48], &quot;zoom&quot;: 1 } }&#39;}--&gt;&quot;">​</a></h2><h2 id="map-tour-section" tabindex="-1">Map Tour section <a class="header-anchor" href="#map-tour-section" aria-label="Permalink to &quot;Map Tour section &lt;!--{ as=&quot;eox-map&quot; mode=&quot;tour&quot; }--&gt;&quot;">​</a></h2><h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-label="Permalink to &quot;&lt;!--{ layers=&#39;[{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;osm&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;OSM&quot;}}]&#39; center=[12.46,41.89] zoom=&quot;5&quot; animationOptions=&quot;{duration:500}&quot; }--&gt;&quot;">​</a></h3><h4 id="this-is-a-map-tour" tabindex="-1">This is a map tour. <a class="header-anchor" href="#this-is-a-map-tour" aria-label="Permalink to &quot;This is a map tour.&quot;">​</a></h4><p>It allows you to have different layers, zoom and center settings for each tour &quot;step&quot;.</p><h3 id="-1" tabindex="-1"><a class="header-anchor" href="#-1" aria-label="Permalink to &quot;&lt;!--{ layers=&#39;[{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;customId&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;WMTSCapabilities&quot;,&quot;url&quot;:&quot;https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml&quot;,&quot;layer&quot;:&quot;s2cloudless-2017&quot;}},{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;osm&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;OSM&quot;}}]&#39; center=[12.46,41.89] zoom=&quot;10&quot; }--&gt;&quot;">​</a></h3><h4 id="second-tour-step" tabindex="-1">Second tour step. <a class="header-anchor" href="#second-tour-step" aria-label="Permalink to &quot;Second tour step.&quot;">​</a></h4><p>Each tour step is described as an <code>h3</code> (<code>###</code>) heading.</p><h3 id="-2" tabindex="-1"><a class="header-anchor" href="#-2" aria-label="Permalink to &quot;&lt;!--{ layers=&#39;[{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;customId&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;WMTSCapabilities&quot;,&quot;url&quot;:&quot;https://tiles.maps.eox.at/wmts/1.0.0/WMTSCapabilities.xml&quot;,&quot;layer&quot;:&quot;s2cloudless-2017&quot;}},{&quot;type&quot;:&quot;Tile&quot;,&quot;properties&quot;:{&quot;id&quot;:&quot;osm&quot;},&quot;source&quot;:{&quot;type&quot;:&quot;OSM&quot;}}]&#39; center=&quot;[16.36,48.2]&quot; zoom=&quot;10&quot; animationOptions=&quot;{duration:500}&quot; }--&gt;&quot;">​</a></h3><h4 id="third-tour-step" tabindex="-1">Third tour step. <a class="header-anchor" href="#third-tour-step" aria-label="Permalink to &quot;Third tour step.&quot;">​</a></h4><p>To change individual parameters like zoom or center, or to change the map layers for a step, just set them using the HTML comment syntax. This changes the map setting for the current map</p><h2 id="about-section-legals-and-subscription-information" tabindex="-1">About Section, Legals and Subscription Information <a class="header-anchor" href="#about-section-legals-and-subscription-information" aria-label="Permalink to &quot;About Section, Legals and Subscription Information&quot;">​</a></h2><p>Do not forget to include enough details explaining the governance related to the GTIF Capability you describe:</p><ul><li>Provide a logo, organization name and first-level support email contact informations of the entity providing the service to users; you may reference sponsors or funding organizations or other enabling institutions</li><li>Explain the difference between the version of the service which is free and openly available and the version(s) which is (are) offered under commercial conditions. If you offer the latter, describe subscription plans and where more details are provided e.g. linking to the relevant sales pages</li><li>Give related information should your Capability be registered at the <a href="https://eo4society.esa.int/network-of-resources" target="_blank" rel="noreferrer">Network of Resources</a> explaining that ESA sponsoring might be granted for pre-commercial utilization</li><li>Include any applicable copyright information both related to the narrative and to your actual GTIF Capability; you may include how inclusion of information stemming from your GTIF Capability shall be referenced in publications and Websites</li></ul><h2 id="final-words" tabindex="-1">Final Words <a class="header-anchor" href="#final-words" aria-label="Permalink to &quot;Final Words&quot;">​</a></h2><p>Hopefully, this was a good introduction to the story writing possibilities using EOxStorytelling - get started writing your own story! More features will be added soon, so feel free to follow progress at the <a href="https://github.com/EOX-A/EOxElements" target="_blank" rel="noreferrer">EOxElements GitHub repository</a>.</p>`,54)]))}const q=e(r,[["render",s]]);export{p as __pageData,q as default};
