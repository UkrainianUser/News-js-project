var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},e.parcelRequired7c6=n);var r=n("jn5XT"),i=n("5uEKZ");const o=document.querySelector(".card-favorite__list");function d(e){const t=e.filter((e=>e)).map((({id:e,title:t,paragraph:a,img:n,data:i,url:o,category:d,multimedia:s})=>`<li class="card-favorite__item">\n          <div class="card-favorite__ovarlay">\n          <img\n          class="card-news__img"\n          src=${n}\n          alt="news image"\n          width="395px"\n          height="395px"\n        />\n        <p class="card-favorite__category">${d}</p>\n        <button data-id=${e} class="card-favorite__button" type="button">\n        Remove from favorite\n        <svg class="card-favorite__icon" width="16" height="16">\n          <use href="./svg/symbol-defs.svg#icon-heart-not-action"></use>\n        </svg>\n      </button>\n    </div>\n    <h2 class="card-favorite__title">\n        ${t}\n        </h2>\n        <p class="card-favorite__text">\n          ${a}\n        </p>\n        <time class="card-favorite__time">${(0,r.default)(new Date(i),"dd/MM/yyyy")}</time>\n        <a data-url=${o} class="card-favorite__element" href=${o} target="_blank" rel="noreferrer noopener">Read more</a>\n      </li>`)).join("");o.innerHTML=t,console.log(e)}!function(){if(!(0,i.load)("favoriteNews"))return;const e=(0,i.load)("favoriteNews");e&&d(e)}(),o.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;const t=e.target.dataset.id,a=(0,i.load)("favoriteNews").filter((e=>e.id!==t));d(a),(0,i.save)("favoriteNews",a)})),o.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;const t=e.target.dataset.url;if((0,i.load)("favoriteNews")&&(0,i.load)("readNews")){const e=(0,i.load)("favoriteNews"),a=(0,i.load)("readNews"),n=e.find((e=>e.url===t));a.push(n),(0,i.save)("readNews",a)}})),n("2Fivl");
//# sourceMappingURL=favorite.73a71195.js.map
