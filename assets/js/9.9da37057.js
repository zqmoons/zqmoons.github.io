(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{166:function(t,e,s){"use strict";s.r(e);var i=s(0),r=Object(i.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("You may encounter some unfamiliar concepts in the documentation. This section lists the common terms in the documentation for easy access, learning and plugin/theme development.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("Features such as VuePress's dynamic layout system are based on "),s("code",[t._v("frontmatter")]),t._v(". You can use the plugin API "),s("router-link",{attrs:{to:"./../plugin/option-api.html#extendpagedata"}},[t._v("extendPageData")]),t._v(" to dynamically modify the value of frontmatter during build time.")],1)]),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),s("p",[t._v("For permalinks, see "),s("router-link",{attrs:{to:"./../guide/permalinks.html"}},[t._v("permalinks")]),t._v(" for more.")],1),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("The current page is based on the URL generated by the directory structure.")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("Root path (absolute path) of the currently used theme.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("Name of the layout component used by the current page.")])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"glossary"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#glossary","aria-hidden":"true"}},[this._v("#")]),this._v(" Glossary")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"frontmatter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter","aria-hidden":"true"}},[this._v("#")]),this._v(" frontmatter")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("$page.frontmatter")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Configuration wrapped by "),e("code",[this._v("---")]),this._v(" in the "),e("code",[this._v("markdown")]),this._v(" file of the current page, which is generally used to do some page-level configuration.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"permalink"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#permalink","aria-hidden":"true"}},[this._v("#")]),this._v(" permalink")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("$page.frontmatter.permalink")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"regularpath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regularpath","aria-hidden":"true"}},[this._v("#")]),this._v(" regularPath")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("$page.regularPath")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("When dynamically generating routes during the build period, a page's URL ("),s("code",[t._v("$page.path")]),t._v(") will use "),s("code",[t._v("$page.frontmatter.permalink")]),t._v(" first, and if it doesn't exist, it will be downgraded to "),s("code",[t._v("$page.regularPath")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"headers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#headers","aria-hidden":"true"}},[this._v("#")]),this._v(" headers")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("$page.headers")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("That is, those titles defined by one or more "),e("code",[this._v("#")]),this._v(" in "),e("code",[this._v("markdown")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"siteconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#siteconfig","aria-hidden":"true"}},[this._v("#")]),this._v(" siteConfig")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("$site | Context.siteConfig")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v(".vuepress/config.js")]),this._v(", i.e., "),e("code",[this._v("site configuration")]),this._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"themeconfig"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#themeconfig","aria-hidden":"true"}},[this._v("#")]),this._v(" themeConfig")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("$site | Context.themeConfig")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Value of "),e("code",[this._v("themeConfig")]),this._v(" in "),e("code",[this._v(".vuepress/config.js")]),this._v(", i.e., "),e("code",[this._v("user's theme configuration")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"themepath"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#themepath","aria-hidden":"true"}},[this._v("#")]),this._v(" themePath")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("Context.themePath")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"themeentryfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#themeentryfile","aria-hidden":"true"}},[this._v("#")]),this._v(" themeEntryFile")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("Context.themeEntryFile")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Theme's configuration file ("),e("code",[this._v("themePath/index.js")]),this._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layout","aria-hidden":"true"}},[this._v("#")]),this._v(" layout")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Access: "),e("code",[this._v("$page.frontmatter.layout")])])])}],!1,null,null,null);r.options.__file="README.md";e.default=r.exports}}]);