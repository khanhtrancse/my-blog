(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{230:function(e,t,n){__NEXT_REGISTER_PAGE("/business",function(){return e.exports=n(231),{page:e.exports.default}})},231:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return m});var o=n(0),r=n.n(o),a=n(1),c=n(24),i=n(25),u=n(11);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,p(t).apply(this,arguments))}var n,o,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,r.a.Component),n=t,(o=[{key:"render",value:function(){return r.a.createElement(u.a,{title:a.a.t("business_post")},r.a.createElement(i.a,{getData:function(e){return c.a.getPostsByCategory("business",e)}}))}}])&&s(n.prototype,o),l&&s(n,l),t}()},25:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=(n(11),n(1)),c=n(2),i=(n(34),n(20));function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,"a",function(){return y});var y=function(e){function t(){var e,n,o,r,a,c,i;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var l=arguments.length,f=new Array(l),y=0;y<l;y++)f[y]=arguments[y];return o=this,n=!(r=(e=s(t)).call.apply(e,[this].concat(f)))||"object"!==u(r)&&"function"!=typeof r?p(o):r,a=p(p(n)),i={page:1,totalPage:1,data:[]},(c="state")in a?Object.defineProperty(a,c,{value:i,enumerable:!0,configurable:!0,writable:!0}):a[c]=i,n}var n,o,y;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(o=[{key:"componentDidMount",value:function(){this.renderData(1)}},{key:"goToNextPage",value:function(){this.renderData(this.state.page+1)}},{key:"goToPrePage",value:function(){this.renderData(this.state.page-1)}},{key:"renderData",value:function(e){var t=this;if(this.props.getData){var n=this.props.getData(e);if(n.data.length<=0){var o=Object(i.a)();this.setState({data:o,page:1,totalPage:0})}else{var u=n.data.map(function(e){return t=e,n="".concat(c.a.PATH.POST,"?id=").concat(t.id,"&name=").concat(t.link),r.a.createElement("div",{key:t.id,className:"post-card col-12 col-md-4 col-lg-3 inline-block px-2"},r.a.createElement("a",{href:n,className:"post-card-image-block mx-auto"},r.a.createElement("div",{className:"post-card-image mx-auto px-auto",style:{background:"url(".concat(t.image,")")},alt:t.name})),r.a.createElement("div",{className:"mb-5"},r.a.createElement("div",{className:"post-card__meta"},r.a.createElement("div",{className:"post-card-time my-2"},t.date_string)),r.a.createElement("h6",null,r.a.createElement("a",{title:t.name,href:n},t.name))),r.a.createElement("hr",{className:"post-card-separator"}));var t,n}),l=r.a.createElement("div",{key:1,className:"col-12 row mx-0"},u),s=[];e>1&&s.push(r.a.createElement("button",{className:"mx-2",onClick:function(){return t.goToPrePage()},key:1},a.a.t("previous_page"))),e<n.totalPage&&s.push(r.a.createElement("button",{className:"mx-2",onClick:function(){return t.goToNextPage()},key:2},a.a.t("next_page")));var f=r.a.createElement("div",{key:2,className:"col-12 d-flex justify-content-center row mx-0 mb-5"},s);this.setState({data:[l,f],totalPage:n.totalPage,page:e}),window.scrollTo(0,0)}}}},{key:"render",value:function(){return r.a.createElement("div",null,this.state.data)}}])&&l(n.prototype,o),y&&l(n,y),t}()}},[[230,1,0]]]);