!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a);var r=a("ddpnB"),i=a("2XKMM"),s=a("fnuNu");function c(e,t){(0,s.default)(2,arguments);var n=(0,i.default)(e),a=(0,i.default)(t),r=n.getTime()-a.getTime();return r>0?-1:r<0?1:r}i=a("2XKMM"),s=a("fnuNu");function o(e,t){var n;(0,s.default)(1,arguments);var a=e||{},r=(0,i.default)(a.start),c=(0,i.default)(a.end),o=c.getTime();if(!(r.getTime()<=o))throw new RangeError("Invalid interval");var d=[],l=r;l.setHours(0,0,0,0);var u=Number(null!==(n=null==t?void 0:t.step)&&void 0!==n?n:1);if(u<1||isNaN(u))throw new RangeError("`options.step` must be a number greater than 1");for(;l.getTime()<=o;)d.push((0,i.default)(l)),l.setDate(l.getDate()+u),l.setHours(0,0,0,0);return d}i=a("2XKMM"),s=a("fnuNu");function d(e){(0,s.default)(1,arguments);var t=(0,i.default)(e);return t.setHours(0,0,0,0),t}s=a("fnuNu");function l(e,t){(0,s.default)(2,arguments);var n=d(e),a=d(t);return n.getTime()===a.getTime()}var u=a("jzQFI"),f="readNews",v="favoriteNews",g=document.querySelector(".card-news__list");function m(){if((0,u.load)(f).length){var e=(0,u.load)(f),t=e.filter((function(e){return e})),n=_(e);console.log(n),function(e){var t=Object.keys(e).map((function(t,n){return'  <li class="date__item" data-index='.concat(n,'>\n         <div class="date__card"><h3 class="date__text">').concat((0,r.default)(new Date(t),"dd/MM/yyyy"),'</h3></div></li>\n\n          <ul class="card-news__box">').concat(e[t].map((function(e){var t=e.id,n=e.title,a=e.paragraph,i=(e.img,e.data),s=e.url,c=e.category,o=e.multimedia;return'<li class="card-news__item">\n        <div class="card-news__ovarlay">\n        <img\n        src='.concat(o?o[1].url:"","\n        alt=").concat(o?o[1].caption:"news image",'\n          width="395"\n          height="290"\n      />\n      <p class="card-news__category">').concat(c,"</p>\n      <button data-id=").concat(t,' class="card-news__button" type="button">\n      Add to favirite\n      <svg class="card-news__icon" width="16" height="16">\n        <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>\n      </svg>\n    </button>\n  </div>\n  <h2 class="card-news__title">\n       ').concat(n,'\n      </h2>\n      <p class="card-news__text">\n        ').concat(a,'\n      </p>\n      <time class="card-news__time">').concat((0,r.default)(new Date(i),"dd/MM/yyyy"),"</time>\n      <a data-url=").concat(s,' class="card-news__element" href=').concat(s,' target="_blank" rel="noreferrer noopener">Read more</a>\n    </li>')})).join(""),"</ul>")})).join("");g.innerHTML=t}(n.reduce((function(e,n){return e[n]=t.filter((function(e){return l(new Date(n),new Date(e.data))})),e}),{}))}}function _(e){var t=null==e?void 0:e.map((function(e){return new Date(null==e?void 0:e.data)}));console.log(t);var n=t.sort(c);return o({start:new Date(n[n.length-1]),end:new Date(n[0])})}g.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=e.target.dataset.id,n=(0,u.load)(f),a=(0,u.load)(v),r=n.find((function(e){return e.id===t}));a.push(r),(0,u.save)(v,a);var i=n.filter((function(e){return e.id!==t}));_(i);(0,u.save)(f,i),m()})),g.addEventListener("click",(function(e){if(e.target.classList.contains("date__item")){var t=e.target.dataset.index;e.target.classList.contains("active")?e.target.classList.remove("active"):e.target.classList.add("active");var n=document.getElementsByClassName("date__item")[t].nextElementSibling;n.classList.contains("active")?n.classList.remove("active"):n.classList.add("active")}})),a("jzQFI"),a("6slwO"),a("cs7FV"),a("eIWTb")}();
//# sourceMappingURL=read.5525705f.js.map
