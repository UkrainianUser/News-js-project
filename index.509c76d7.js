!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a);var o,c=a("bpxeT"),i=a("2TvXO"),s=a("cUSdw"),l=a("jzQFI"),u=a("5I0aQ"),d="newsObject",f="favoriteNews",p="readNews",h=document.querySelector(".card-news__list");window.addEventListener("load",(o=e(c)(e(i).mark((function t(n){var r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((0,l.load)(d)){e.next=11;break}return e.prev=1,e.next=4,(0,s.fetchNews)();case 4:r=(0,l.load)(d),(0,u.renderCard)(r),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.message);case 11:a=(0,l.load)(d),(0,u.renderCard)(a);case 13:case"end":return e.stop()}}),t,null,[[1,8]])}))),function(e){return o.apply(this,arguments)})),(0,l.load)(f)||(0,l.save)(f,[]),(0,l.load)(p)||(0,l.save)(p,[]);var v=(0,l.load)(d);(0,u.renderCard)(v),h.addEventListener("click",(function(e){if("BUTTON"!==e.target.nodeName)return;var t=e.target.dataset.id,n=(0,l.load)(d),r=(0,l.load)(f),a=n.find((function(e){return e.id===t}));r.push(a),(0,l.save)(f,r);var o=n.filter((function(e){return e.id!==t}));(0,u.renderCard)(o),(0,l.save)(d,o)})),h.addEventListener("click",(function(e){if("A"!==e.target.nodeName)return;var t=e.target.dataset.url,n=(0,l.load)(d),r=(0,l.load)(p),a=n.find((function(e){return e.url===t}));r.push(a),(0,l.save)(p,r)}));var m=a("5dKDZ");a("cUSdw");u=a("5I0aQ");var g=new(0,m.FetchNews),w=document.getElementById("categories-container"),y=(document.getElementById("menu-container"),document.querySelector(".dropbtn"));function b(e){var t=document.createElement("a");return t.classList.add("categories-container_link","dropdown-link"),t.textContent=e,t.setAttribute("href","#"),t.setAttribute("name",e),t.addEventListener("click",(function(){var e=t.getAttribute("name");g.category=e,g.fetchByCategory().then((function(e){(0,u.renderCard)(e)})).catch((function(e){console.error(e)})),Array.from(w.children).forEach((function(e){e===t?e.classList.add("activee"):e.classList.contains("activee")&&e.classList.remove("activee")}))})),t}fetch("https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=UPfW6vgRuPuGF8dWeumSDLnq86AeLhG1").then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){var t=e.results.slice(0,5).map((function(e){return e.section})),n=Array.from(w.children).map((function(e){return e.getAttribute("name")})),r=e.results.filter((function(e){return!n.includes(e.section)})).map((function(e){return e.section}));t.forEach((function(e){var t=b(e);w.appendChild(t)})),function(e,t){var n=document.getElementById("myDropdown");n.innerHTML="";var r=e.concat(t),a=Array.from(n.children).map((function(e){return e.getAttribute("name")}));r.filter((function(e){return!a.includes(e)})).filter((function(t){return!e.slice(0,5).includes(t)})).forEach((function(e){var t=b(e);n.appendChild(t)})),n.querySelectorAll("a").forEach((function(t){t.classList.add("categories-container_link_dropDown"),e.includes(t.getAttribute("name"))&&e.indexOf(t.getAttribute("name"))<5&&t.classList.add("activee")})),n.style.height="380px",n.style.overflowY="scroll"}(t,r)})).catch((function(e){console.error(e)})),y.addEventListener("click",(function(){document.getElementById("myDropdown").classList.toggle("show")})),window.onclick=function(e){if(!e.target.matches(".dropbtn")){var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var r=n[t];r.classList.contains("show")&&r.classList.remove("show")}}},console.log("test");c=a("bpxeT"),i=a("2TvXO");var _=a("dIxxU"),x="https://api.openweathermap.org/data/2.5/weather",k="8263fe3022d7c26abc78442437d890b7",E=40.711217,L=-74.006889;function A(e){var t=e.coords;E=t.latitude,L=t.longitude,localStorage.setItem("latitude",E),localStorage.setItem("longitude",L)}function I(){return S.apply(this,arguments)}function S(){return(S=e(c)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!A){e.next=5;break}return e.next=4,_.default.get(x,{params:{lat:localStorage.getItem("latitude")||E,lon:localStorage.getItem("longitude")||L,appid:k,units:"metric"}});case 4:return e.abrupt("return",e.sent);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}navigator.geolocation.getCurrentPosition(A,(function(e){console.warn("ERROR(".concat(e.code,"): ").concat(e.message)),localStorage.removeItem("latitude",E),localStorage.removeItem("longitude",L)}));c=a("bpxeT"),i=a("2TvXO");var T=document.querySelector(".weather");function C(){return(C=e(c)(e(i).mark((function t(){var n,r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I();case 3:return n=e.sent,e.next=6,n.data;case 6:return r=e.sent,a='\n    <div class="weather__block"><span class="weather__number">'.concat(Math.round(r.main.temp),'&#176;</span>\n      <div class = "weather__location"><h2 class="weather__title">').concat(r.weather[0].main,'</h2>\n      <p class="weather__city"><svg class="weather__svg" width="16" height="16">\n      <use href="/symbol-defs.33050382.svg#icon-carbon_location-filled"></use>\n    </svg>').concat(r.name,'</p></div></div>\n      <img class="weather__icon" src="https://openweathermap.org/img/wn/').concat(r.weather[0].icon,'.png" alt="').concat(r.weather[0].description,'">\n      <p class="weather__date">').concat(new Date(1e3*r.dt).toDateString(),"</p>"),e.abrupt("return",T.insertAdjacentHTML("afterbegin",a));case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}!function(){C.apply(this,arguments)}()}();
//# sourceMappingURL=index.509c76d7.js.map
