(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{234:function(t,e){t.exports={}},243:function(t,e,n){"use strict";e.__esModule=!0;var o=s(n(271)),i=s(n(281)),r="function"==typeof i.default&&"symbol"==typeof o.default?function(t){return typeof t}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":typeof t};function s(t){return t&&t.__esModule?t:{default:t}}e.default="function"==typeof i.default&&"symbol"===r(o.default)?function(t){return void 0===t?"undefined":r(t)}:function(t){return t&&"function"==typeof i.default&&t.constructor===i.default&&t!==i.default.prototype?"symbol":void 0===t?"undefined":r(t)}},244:function(t,e,n){"use strict";var o=n(115),i=n(62),r=n(240),s=n(112),a=n(234),l=n(275),u=n(231),c=n(276),f=n(225)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};t.exports=function(t,e,n,y,h,v,b){l(n,e,y);var g,_,m,S=function(t){if(!d&&t in M)return M[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},w=e+" Iterator",L="values"==h,O=!1,M=t.prototype,x=M[f]||M["@@iterator"]||h&&M[h],T=x||S(h),E=h?L?S("entries"):T:void 0,j="Array"==e&&M.entries||x;if(j&&(m=c(j.call(new t)))!==Object.prototype&&m.next&&(u(m,w,!0),o||"function"==typeof m[f]||s(m,f,p)),L&&x&&"values"!==x.name&&(O=!0,T=function(){return x.call(this)}),o&&!b||!d&&!O&&M[f]||s(M,f,T),a[e]=T,a[w]=p,h)if(g={values:L?T:S("values"),keys:v?T:S("keys"),entries:E},b)for(_ in g)_ in M||r(M,_,g[_]);else i(i.P+i.F*(d||O),e,g);return g}},268:function(t,e,n){"use strict";e.__esModule=!0;var o=c(n(269)),i=c(n(270)),r=c(n(286)),s=c(n(292)),a=c(n(293)),l=c(n(1)),u=c(n(0));function c(t){return t&&t.__esModule?t:{default:t}}var f=function(t){var e=(0,a.default)({},t);return e.responsiveResolution&&(e.resolutions=e.responsiveResolution,delete e.responsiveResolution),e.responsiveSizes&&(e.sizes=e.responsiveSizes,delete e.responsiveSizes),e},d={},p=function(t){var e=f(t),n=e.sizes?e.sizes.src:e.resolutions.src;return!!d[n]||(d[n]=!0,!1)},y=void 0,h=[],v=null,b=function(){if(null!==v)return v;var t="undefined"!=typeof window?window.document.createElement("canvas"):{};return v=!(!t.getContext||!t.getContext("2d"))&&0===t.toDataURL("image/webp").indexOf("data:image/webp")},g=function(t){var e=t.src?'src="'+t.src+'" ':'src="" ',n=t.srcSet?'srcset="'+t.srcSet+'" ':"",o=t.sizes?'sizes="'+t.sizes+'" ':"",i=t.title?'title="'+t.title+'" ':"",r=t.alt?'alt="'+t.alt+'" ':'alt="" ',s=t.width?'width="'+t.width+'" ':"",a=t.height?'height="'+t.height+'" ':"",l=t.opacity?t.opacity:"1";return"<img "+s+a+e+n+r+i+o+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(t.transitionDelay?t.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},_=function(t){var e=t.style,n=t.onLoad,o=(0,s.default)(t,["style","onLoad"]);return l.default.createElement("img",(0,a.default)({},o,{onLoad:n,style:(0,a.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},e)}))};_.propTypes={style:u.default.object,onLoad:u.default.func};var m=function(t){function e(n){(0,o.default)(this,e);var r=(0,i.default)(this,t.call(this,n)),s=!0,a=!0,l=!1;return!p(n)&&"undefined"!=typeof window&&window.IntersectionObserver&&(s=!1,a=!1,l=!0),"undefined"==typeof window&&(s=!1,a=!1),r.state={isVisible:s,imgLoaded:a,IOSupported:l},r.handleRef=r.handleRef.bind(r),r}return(0,r.default)(e,t),e.prototype.handleRef=function(t){var e=this;this.state.IOSupported&&t&&function(t,e){(void 0===y&&"undefined"!=typeof window&&window.IntersectionObserver&&(y=new window.IntersectionObserver(function(t){t.forEach(function(t){h.forEach(function(e){e[0]===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(y.unobserve(e[0]),e[1]())})})},{rootMargin:"200px"})),y).observe(t),h.push([t,e])}(t,function(){e.setState({isVisible:!0,imgLoaded:!1})})},e.prototype.render=function(){var t,e=this,n=f(this.props),o=n.title,i=n.alt,r=n.className,s=n.outerWrapperClassName,u=n.style,c=void 0===u?{}:u,d=n.imgStyle,p=void 0===d?{}:d,y=n.placeholderStyle,h=void 0===y?{}:y,v=n.sizes,m=n.resolutions,S=n.backgroundColor,w=n.Tag;t="boolean"==typeof S?"lightgray":S;var L=(0,a.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,h),O=(0,a.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(v){var M=v;return M.srcWebp&&M.srcSetWebp&&b()&&(M.src=M.srcWebp,M.srcSet=M.srcSetWebp),l.default.createElement(w,{className:(s||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},l.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,a.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef},l.default.createElement(w,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),M.base64&&l.default.createElement(_,{alt:i,title:o,src:M.base64,style:L}),M.tracedSVG&&l.default.createElement(_,{alt:i,title:o,src:M.tracedSVG,style:L}),t&&l.default.createElement(w,{title:o,style:{backgroundColor:t,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement(_,{alt:i,title:o,srcSet:M.srcSet,src:M.src,sizes:M.sizes,style:O,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,a.default)({alt:i,title:o},M))}})))}if(m){var x=m,T=(0,a.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},c);return"inherit"===c.display&&delete T.display,x.srcWebp&&x.srcSetWebp&&b()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),l.default.createElement(w,{className:(s||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},l.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef},x.base64&&l.default.createElement(_,{alt:i,title:o,src:x.base64,style:L}),x.tracedSVG&&l.default.createElement(_,{alt:i,title:o,src:x.tracedSVG,style:L}),t&&l.default.createElement(w,{title:o,style:{backgroundColor:t,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&l.default.createElement(_,{alt:i,title:o,width:x.width,height:x.height,srcSet:x.srcSet,src:x.src,style:O,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,a.default)({alt:i,title:o,width:x.width,height:x.height},x))}})))}return null},e}(l.default.Component);m.defaultProps={fadeIn:!0,alt:"",Tag:"div"},m.propTypes={responsiveResolution:u.default.object,responsiveSizes:u.default.object,resolutions:u.default.object,sizes:u.default.object,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),outerWrapperClassName:u.default.oneOfType([u.default.string,u.default.object]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,position:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,Tag:u.default.string},e.default=m},269:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},270:function(t,e,n){"use strict";e.__esModule=!0;var o,i=(o=n(243))&&o.__esModule?o:{default:o};e.default=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==(void 0===e?"undefined":(0,i.default)(e))&&"function"!=typeof e?t:e}},271:function(t,e,n){t.exports={default:n(272),__esModule:!0}},272:function(t,e,n){n(273),n(277),t.exports=n(232).f("iterator")},273:function(t,e,n){"use strict";var o=n(274)(!0);n(244)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=o(e,n),this._i+=t.length,{value:t,done:!1})})},274:function(t,e,n){var o=n(67),i=n(119);t.exports=function(t){return function(e,n){var r,s,a=String(i(e)),l=o(n),u=a.length;return l<0||l>=u?t?"":void 0:(r=a.charCodeAt(l))<55296||r>56319||l+1===u||(s=a.charCodeAt(l+1))<56320||s>57343?t?a.charAt(l):r:t?a.slice(l,l+2):s-56320+(r-55296<<10)+65536}}},275:function(t,e,n){"use strict";var o=n(118),i=n(114),r=n(231),s={};n(112)(s,n(225)("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:i(1,n)}),r(t,e+" Iterator")}},276:function(t,e,n){var o=n(63),i=n(230),r=n(68)("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),o(t,r)?t[r]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},277:function(t,e,n){n(278);for(var o=n(32),i=n(112),r=n(234),s=n(225)("toStringTag"),a="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<a.length;l++){var u=a[l],c=o[u],f=c&&c.prototype;f&&!f[s]&&i(f,s,u),r[u]=r.Array}},278:function(t,e,n){"use strict";var o=n(279),i=n(280),r=n(234),s=n(65);t.exports=n(244)(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),r.Arguments=r.Array,o("keys"),o("values"),o("entries")},279:function(t,e){t.exports=function(){}},280:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},281:function(t,e,n){t.exports={default:n(282),__esModule:!0}},282:function(t,e,n){n(239),n(283),n(284),n(285),t.exports=n(24).Symbol},283:function(t,e){},284:function(t,e,n){n(233)("asyncIterator")},285:function(t,e,n){n(233)("observable")},286:function(t,e,n){"use strict";e.__esModule=!0;var o=s(n(287)),i=s(n(291)),r=s(n(243));function s(t){return t&&t.__esModule?t:{default:t}}e.default=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+(void 0===e?"undefined":(0,r.default)(e)));t.prototype=(0,i.default)(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(o.default?(0,o.default)(t,e):t.__proto__=e)}},287:function(t,e,n){t.exports={default:n(288),__esModule:!0}},288:function(t,e,n){n(289),t.exports=n(24).Object.setPrototypeOf},289:function(t,e,n){var o=n(62);o(o.S,"Object",{setPrototypeOf:n(290).set})},290:function(t,e,n){var o=n(44),i=n(45),r=function(t,e){if(i(t),!o(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,o){try{(o=n(122)(Function.call,n(242).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:o(t,n),t}}({},!1):void 0),check:r}},291:function(t,e,n){t.exports={default:n(121),__esModule:!0}},292:function(t,e,n){"use strict";e.__esModule=!0,e.default=function(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}},293:function(t,e,n){"use strict";e.__esModule=!0;var o,i=(o=n(294))&&o.__esModule?o:{default:o};e.default=i.default||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}},294:function(t,e,n){t.exports={default:n(237),__esModule:!0}},299:function(t,e,n){},301:function(t,e,n){}}]);
//# sourceMappingURL=10-bcde26382ef37eb3014b.js.map