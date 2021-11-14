(this["webpackJsonpreact-main"]=this["webpackJsonpreact-main"]||[]).push([[0],{76:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(25),c=n.n(r),i=n(7),s=(n(32),n(33),n(13)),l=n.n(s),d=n(26),o=n(4),j=n(2),m=n(0),u=function(e){var t=e.medium_cover_image,n=e.title_english,a=e.year,r=e.id,c=e.description_full,i=e.url,s=e.selectedGenre;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h4",{className:"genreTitle",children:s}),Object(m.jsxs)("div",{className:"details-container",children:[Object(m.jsx)("img",{src:t,alt:""}),Object(m.jsxs)("div",{className:"movie-details",children:[Object(m.jsx)("h5",{className:"m-2",children:n}),Object(m.jsxs)("p",{className:"text-warning",children:["Released Year - ",a]}),Object(m.jsx)("p",{children:c}),Object(m.jsx)("a",{className:"download-btn",href:i,children:"Download"})]})]},r)]})},b=function(e){var t=e.data,n=Object(j.g)().id,a=t.filter((function(e){return e.id==n}));return Object(m.jsx)(m.Fragment,{children:a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.medium_cover_image,title_english:e.title_english,year:e.year,id:e.id,description_full:e.description_full,url:e.url},e.id)}))})},g=function(e){var t=e.data;return Object(m.jsx)("div",{className:"movies-item",children:t.map((function(e){return Object(m.jsxs)("div",{className:"movie-item",children:[Object(m.jsx)(i.b,{to:"/".concat(e.id),children:Object(m.jsx)("img",{className:"image",src:e.medium_cover_image,alt:""})}),Object(m.jsx)("div",{className:"title",children:e.title_english})]},e.id)}))})},h=n(3),x=n.n(h),f=function(e){var t=e.itemsCount,n=e.pageSize,a=e.currentPage,r=e.onPageChange;if(0===t)return Object(m.jsx)("p",{className:"badge bg-warning p-1 text-secondary fw-bolder fs-6",children:"There is no movies with that name!"});var c=Math.ceil(t/n);if(1===c)return null;var i=x.a.range(1,c);return Object(m.jsx)("nav",{className:"m-2",children:Object(m.jsx)("ul",{className:"pagination pagination-sm",children:i.map((function(e){return Object(m.jsx)("li",{className:e===a?"page-item active":"page-item",children:Object(m.jsx)("a",{className:"page-link",onClick:function(){return r(e)},children:e})},e)}))})})},O=function(e){var t=e.onClick,n=Object(a.useRef)();return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",{ref:n,type:"text",className:"form-control me-1",placeholder:"Search..."})," ",Object(m.jsx)("button",{className:"btn btn-custom",type:"submit",onClick:function(e){return e.preventDefault(),t(n.current.value)},children:"Search"})]})},p=function(e){var t=e.handleSearch,n=e.handlePageChange,a=e.paginatedMovies,r=e.searchedMovies,c=e.pageSize,i=e.currentPage;return Object(m.jsxs)("div",{className:"movies-container",children:[Object(m.jsx)("form",{className:"d-flex search-container",children:Object(m.jsx)(O,{onClick:t})}),Object(m.jsx)(g,{data:a}),Object(m.jsx)(f,{itemsCount:r.length,pageSize:c,currentPage:i,onPageChange:n})]})},v=function(e){var t=e.data,n=e.onItemSelect,a=e.selectedItem;return Object(m.jsx)(m.Fragment,{children:t.map((function(e){return Object(m.jsx)("li",{className:"genresList",children:Object(m.jsx)(i.b,{className:e===a?"dropdown-item select":"dropdown-item",to:"/".concat(e.toLowerCase()),onClick:function(){return n(e)},children:e})},e)}))})},_=function(e){var t=e.data,n=e.onItemSelect,a=e.selectedItem;return Object(m.jsx)("nav",{className:"navbar navbar-light fixed-top",children:Object(m.jsxs)("div",{className:"container-fluid",children:[Object(m.jsx)("div",{className:"nav-text-container",children:Object(m.jsxs)("p",{className:"nav-text",children:["Welcome to ",Object(m.jsx)("span",{className:"l-title",children:"L"})," Movie Store!"]})}),Object(m.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasNavbar","aria-controls":"offcanvasNavbar",children:Object(m.jsx)("span",{className:"navbar-toggler-icon"})}),Object(m.jsxs)("div",{className:"offcanvas offcanvas-end",tabIndex:"-1",id:"offcanvasNavbar","aria-labelledby":"offcanvasNavbarLabel",children:[Object(m.jsxs)("div",{className:"offcanvas-header",children:[Object(m.jsxs)("h5",{className:"offcanvas-title",id:"offcanvasNavbarLabel",children:[Object(m.jsx)("span",{className:"l-title",children:"L"})," Channel"]}),Object(m.jsx)("button",{type:"button",className:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),Object(m.jsx)("div",{className:"offcanvas-body",children:Object(m.jsxs)("ul",{className:"navbar-nav justify-content-end flex-grow-1 pe-3",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(m.jsxs)("li",{className:"nav-item dropdown",children:[Object(m.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"offcanvasNavbarDropdown",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Movies Genres"}),Object(m.jsx)("ul",{className:"dropdown-menu genresSelect","aria-labelledby":"offcanvasNavbarDropdown",children:Object(m.jsx)(v,{data:t,onItemSelect:n,selectedItem:a})})]})]})})]})]})})},N=n(27),G=n.n(N);var w=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return console.log(a),Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},y=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},S=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},D=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},T=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},C=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},F=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},P=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},L=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},k=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},I=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},E=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},M=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},R=function(e){var t=e.data,n=e.selectedGenre,a=t.filter((function(e){return e.genre===n}));return Object(m.jsx)(m.Fragment,{children:0===a.length?Object(m.jsx)("p",{className:"badge bg-warning m-2 text-center",children:"There are no movies."}):a.map((function(e){return Object(m.jsx)(u,{medium_cover_image:e.image,title_english:e.title,year:e.releasedDate,id:e.id,description_full:e.description,url:e.url,selectedGenre:n},e.id)}))})},z=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)([]),i=Object(o.a)(c,2),s=i[0],u=i[1],g=Object(a.useState)(),h=Object(o.a)(g,2),f=h[0],O=h[1],v=Object(a.useState)(""),N=Object(o.a)(v,2),z=N[0],W=N[1],H=Object(a.useState)(1),B=Object(o.a)(H,2),K=B[0],A=B[1],J=Object(a.useState)(6),U=Object(o.a)(J,2),V=U[0],Y=(U[1],Object(a.useState)([{title:"",genre:"",image:"",description:"",releasedDate:"",url:"",id:""}])),q=Object(o.a)(Y,2),Q=q[0],X=q[1];Object(a.useEffect)((function(){(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,a,c,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.a.get("https://yts.mx/api/v2/list_movies.json");case 2:t=e.sent,n=t.data,r(n.data.movies),a=n.data.movies.map((function(e){return e.genres})),c=x.a.flatten(a),i=x.a.union(c),u(i),s=n.data.movies.map((function(e){return{title:e.title_english,genre:e.genres[0],image:e.medium_cover_image,description:e.description_full,url:e.url,releasedDate:e.year,id:e.id}})),X(s);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var Z=function(e){A(e)},$=function(e){W(e),A(1)};if(0===n.length)return null;var ee,te=function(e,t,n){var a=(t-1)*n;return x()(e).slice(a).take(n).value()}(ee=z?n.filter((function(e){return e.title_english.toLowerCase().startsWith(z.toLowerCase())})):n,K,V);return Object(m.jsxs)("main",{className:"container",children:[Object(m.jsx)(_,{data:s,onItemSelect:function(e){O(e)},selectedItem:f}),Object(m.jsxs)(j.c,{children:[Object(m.jsx)(j.a,{path:"//*",element:Object(m.jsx)(p,{handleSearch:$,handlePageChange:Z,paginatedMovies:te,searchedMovies:ee,pageSize:V,currentPage:K})}),Object(m.jsx)(j.a,{path:"/channelmyanaung",element:Object(m.jsx)(p,{handleSearch:$,handlePageChange:Z,paginatedMovies:te,searchedMovies:ee,pageSize:V,currentPage:K})}),Object(m.jsx)(j.a,{path:"/:id",element:Object(m.jsx)(b,{data:n})}),Object(m.jsx)(j.a,{path:"/crime",element:Object(m.jsx)(w,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/comedy",element:Object(m.jsx)(y,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/action",element:Object(m.jsx)(S,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/drama",element:Object(m.jsx)(D,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/fantasy",element:Object(m.jsx)(T,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/horror",element:Object(m.jsx)(C,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/adventure",element:Object(m.jsx)(F,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/sci-fi",element:Object(m.jsx)(P,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/documentary",element:Object(m.jsx)(L,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/romance",element:Object(m.jsx)(k,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/mystery",element:Object(m.jsx)(I,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/music",element:Object(m.jsx)(E,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/biography",element:Object(m.jsx)(M,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/western",element:Object(m.jsx)(R,{data:Q,selectedGenre:f})}),Object(m.jsx)(j.a,{path:"/thriller",element:Object(m.jsx)(R,{data:Q,selectedGenre:f})})]})]})},W=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),c(e),i(e)}))};n(76);console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/channelL",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})),c.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(z,{})}),document.getElementById("root")),W()}},[[78,1,2]]]);
//# sourceMappingURL=main.4fc0484b.chunk.js.map