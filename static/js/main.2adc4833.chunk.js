(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(6),n=t.n(s),r=(t(11),t(12),t(3)),i=t(5),l=(t(13),t(2)),d=t.n(l),o=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],j=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],h=t(0),b=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=j.find((function(a){return a.id===e.categoryId})),t=o.find((function(e){return e.id===a.ownerId}));return Object(i.a)(Object(i.a)({},e),{},{category:a,user:t})}));var x=function(){var e=Object(c.useState)(b),a=Object(r.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)("All"),i=Object(r.a)(n,2),l=i[0],x=i[1],m=Object(c.useState)(""),u=Object(r.a)(m,2),O=u[0],f=u[1],p=t.filter((function(e){return function(e,a){return a.toLowerCase().includes(e.toLowerCase())}(O,e.name)}));return Object(h.jsx)("div",{className:"section",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("h1",{className:"title",children:"Product Categories"}),Object(h.jsx)("div",{className:"block",children:Object(h.jsxs)("nav",{className:"panel",children:[Object(h.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(h.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(h.jsx)("a",{className:d()({"is-active":"All"===l}),"data-cy":"FilterAllUsers",href:"#/",value:"All",onClick:function(){s(b),x("All")},children:"All"}),o.map((function(e){var a=e.id,t=e.name;return Object(h.jsx)("a",{className:d()({"is-active":l===t}),"data-cy":"FilterUser",href:"#/",onClick:function(){var e=b.filter((function(e){return e.user.name===t}));s(e),x(t)},children:t},a)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(h.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:O,onChange:function(e){f(e.target.value)}}),Object(h.jsx)("span",{className:"icon is-left",children:Object(h.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(h.jsx)("span",{className:"icon is-right",children:Object(h.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete"})})]})}),Object(h.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(h.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),j.map((function(e){var a=e.id,t=e.title;return Object(h.jsx)("a",{href:"#/","data-cy":"Category",className:d()("button","mr-2","is-outlined"),children:t},a)}))]}),Object(h.jsx)("div",{className:"panel-block",children:Object(h.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",children:"Reset all filters"})})]})}),Object(h.jsxs)("div",{className:"box table-container",children:[Object(h.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),Object(h.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(h.jsx)("th",{children:Object(h.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(h.jsx)("a",{href:"#/",children:Object(h.jsx)("span",{className:"icon",children:Object(h.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(h.jsx)("tbody",{children:p.map((function(e){var a=e.id,t=e.name,c=e.category,s=e.user,n=c.icon,r=c.title,i=s.sex,l=s.name;return Object(h.jsxs)("tr",{"data-cy":"Product",children:[Object(h.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:a}),Object(h.jsx)("td",{"data-cy":"ProductName",children:t}),Object(h.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(n," - ").concat(r)}),Object(h.jsx)("td",{"data-cy":"ProductUser",className:d()({"has-text-link":"m"===i,"has-text-danger":"f"===i}),children:l})]},a)}))})]})]})]})})};n.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2adc4833.chunk.js.map