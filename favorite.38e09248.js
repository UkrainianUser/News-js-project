var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var r=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},e.parcelRequired7c6=r);var n=r("jn5XT"),o=r("5uEKZ");const i=document.querySelector(".card-favorite__list");if((0,o.load)("favoriteNews")){d((0,o.load)("favoriteNews"))}function d(e){const t=e.filter((e=>e)).map((({id:e,title:t,paragraph:a,img:r,data:o,url:i,category:d,multimedia:s})=>`<li class="card-favorite__item">\n          <div class="card-favorite__ovarlay">\n          <img\n          src=${r}\n          alt="Businesswoman"\n          width="395px"\n          height="395px"\n        />\n        <p class="card-favorite__category">${d}</p>\n        <button data-id=${e} class="card-favorite__button" type="button">\n        Remove from favorite\n        <svg class="card-favorite__icon" width="16" height="16">\n          <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>\n        </svg>\n      </button>\n    </div>\n    <h2 class="card-favorite__title">\n        ${t}\n        </h2>\n        <p class="card-favorite__text">\n          ${a}\n        </p>\n        <time class="card-favorite__time">${(0,n.default)(new Date(o),"dd/MM/yyyy")}</time>\n        <a data-url=${i} class="card-favorite__element" href=${i} target="_blank" rel="noreferrer noopener">Read more</a>\n      </li>`)).join("");i.innerHTML=t,console.log(e)}i.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.id,a=(0,o.load)("favoriteNews").filter((e=>e.id!==t));d(a),(0,o.save)("favoriteNews",a)})),i.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;const t=e.target.dataset.url;if((0,o.load)("favoriteNews")&&(0,o.load)("readNews")){const e=(0,o.load)("favoriteNews"),a=(0,o.load)("readNews"),r=e.find((e=>e.url===t));a.push(r),(0,o.save)("readNews",a)}}));
//# sourceMappingURL=favorite.38e09248.js.map