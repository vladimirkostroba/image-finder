!function(){var e={page:1,searchQuery:"",fetchQuery:function(){var e="https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=dog&page=1&per_page=9&key=".concat("35001387-39eff442400f6eb88f2a6844e");return fetch(e).then((function(e){return e.json()}))},reset:function(){this.page=1},incrementPage:function(){this.page+=1},get query(){this.searchQuery},set query(e){this.searchQuery=e}},n={form:document.querySelector(".form"),loadMore:document.querySelector(".load-more"),list:document.querySelector(".list")};n.form.addEventListener("submit",(function(t){t.preventDefault(),n.list.innerHTML="",e.query=t.target.query.value,e.fetchQuery().then((function(e){var t=e.hits,r=t.map((function(e){var n=e.id,t=e.previewURL,r=e.likes,a=e.views,i=e.downloads;return'<li class="card" id="'.concat(n,'">\n        <div class="overlay">\n        <img src="').concat(t,'" alt="img">\n        </div>\n        \n        <div class="card-info">\n        <p class="likes">').concat(r,'</p>\n        <p class="views">').concat(a,'</p>\n        <p class="downloads">').concat(i,"</p>\n        </div>\n        </li>")})).join("");n.list.insertAdjacentHTML("beforeend",r)}))}))}();
//# sourceMappingURL=index.ee8a5907.js.map
