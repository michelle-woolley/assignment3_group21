(this["webpackJsonptoxin-search"]=this["webpackJsonptoxin-search"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),c=a.n(s),r=a(14),i=a.n(r),l=(a(36),a(19)),o=a(9),u=a(22),h=a(21),d=(a(37),a(26)),j=a.n(d),g=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(e){var s;Object(l.a)(this,a),(s=t.call(this,e)).getPageCount=function(e,t){var a=0===e%t?0:1;return Math.floor(e/t)+a},s.fetchSearchResults=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;s.cancel&&s.cancel.cancel();var a=s.state.db.filter((function(e){return e.title.toLowerCase().includes(t.toLowerCase())||e.tags.filter((function(e){return e.toLowerCase().includes(t.toLowerCase())})).length})),n=a.length,c=s.getPageCount(n,20),r=a.length?"":"There are no more search results. Please try a new search";s.setState({results:a,message:r,totalResults:n,totalPages:c,currentPageNo:e,loading:!1})},s.handleOnInputChange=function(e){var t=e.target.value;s.setState({query:t,loading:!0,message:""},(function(){s.fetchSearchResults(1,t)}))},s.handlePageClick=function(e,t){t.preventDefault();var a="prev"===e?s.state.currentPageNo-1:s.state.currentPageNo+1;s.state.loading||s.setState({loading:!0,message:""},(function(){s.fetchSearchResults(a,s.state.query)}))},s.renderSearchResults=function(){var e=s.state.results;if(e.length)return Object(n.jsx)("div",{className:"results",children:e.map((function(e,t){return Object(n.jsxs)("div",{class:"result-item",children:[Object(n.jsx)("img",{className:"image",src:"".concat(e.img),alt:"Ocimum basilicum"}),Object(n.jsxs)("div",{class:"result-info",children:[Object(n.jsx)("h4",{class:"image-username",children:"".concat(e.title)}),Object(n.jsx)("div",{class:"result-tag-div",children:e.tags.map((function(e){return Object(n.jsx)("span",{class:"result-tag",children:"".concat(e)})}))}),Object(n.jsx)("span",{class:"result-desc",children:"".concat(e.desc)})]})]})}))})};var c=window.db;return s.state={db:c,query:"",results:c,loading:!1,message:"",totalResults:c.length,totalPages:1,currentPageNo:1},s.cancel="",s}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.message;return Object(n.jsxs)("div",{className:"container",children:[Object(n.jsxs)("div",{className:"search-label",htmlFor:"search-input",children:[Object(n.jsx)("div",{className:"search-icon",children:Object(n.jsx)(j.a,{})}),Object(n.jsx)("input",{type:"text",name:"query",value:t,id:"search-input",placeholder:"Search...",onChange:this.handleOnInputChange})]}),a&&Object(n.jsx)("p",{className:"message",children:a}),this.renderSearchResults()]})}}]),a}(c.a.Component),b=(a(43),a(64)),O=a(66),v=a(63),f=a(65),m=a(28),p=a.n(m),x=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{position:"static",id:"app-bar",children:Object(n.jsxs)(v.a,{variant:"dense",children:[Object(n.jsx)(f.a,{edge:"start",children:Object(n.jsx)(p.a,{})}),Object(n.jsx)(b.a,{variant:"h6",color:"inherit",children:"Toxins"})]})}),Object(n.jsx)("div",{id:"app-container",children:Object(n.jsx)(g,{})})]})}}]),a}(c.a.Component);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.6ac3f32d.chunk.js.map