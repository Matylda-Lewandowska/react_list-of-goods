(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,s){},17:function(t,e,s){"use strict";s.r(e);var n,r=s(4),o=s.n(r),c=s(5),i=s(6),a=s(9),l=s(7),u=s(8),b=s(1),h=s.n(b),d=(s(14),s(15),s(2)),j=s.n(d),p=s(0),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];function N(t,e){var s=e.sortType,r=e.isReversed,o=Object(u.a)(t);switch(s){case n.ALPHABET:o.sort((function(t,e){return t.localeCompare(e)}));break;case n.LENGTH:o.sort((function(t,e){return t.length-e.length}))}return r&&o.reverse(),console.log(s,r),o}!function(t){t[t.NONE=0]="NONE",t[t.ALPHABET=1]="ALPHABET",t[t.LENGTH=2]="LENGTH"}(n||(n={}));var O=function(t){Object(a.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(c.a)(this,s);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isReversed:!1,sortType:n.NONE},t.sortAlphabet=function(){t.setState({sortType:n.ALPHABET})},t.sortLength=function(){t.setState({sortType:n.LENGTH})},t.sortReverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortReset=function(){t.setState({sortType:n.NONE,isReversed:!1})},t}return Object(i.a)(s,[{key:"render",value:function(){var t=this.state,e=t.sortType,s=t.isReversed;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"section content",children:[Object(p.jsxs)("div",{className:"buttons",children:[Object(p.jsx)("button",{type:"button",className:j()("button","is-info",{"is-light":e!==n.ALPHABET}),onClick:this.sortAlphabet,children:"Sort alphabetically"}),Object(p.jsx)("button",{type:"button",className:j()("button","is-success",{"is-light":e!==n.LENGTH}),onClick:this.sortLength,children:"Sort by length"}),Object(p.jsx)("button",{type:"button",className:j()("button","is-warning",{"is-light":!s}),onClick:this.sortReverse,children:"Reverse"}),(e!==n.NONE||s)&&Object(p.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.sortReset,children:"Reset"})]}),Object(p.jsx)("ul",{children:Object(p.jsx)("ul",{children:N(v,{sortType:e,isReversed:s}).map((function(t){return Object(p.jsx)("li",{"data-cy":"Good",children:t},"".concat(t))}))})})]})})}}]),s}(h.a.Component);o.a.render(Object(p.jsx)(O,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e17a04b6.chunk.js.map