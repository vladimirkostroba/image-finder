import apiService from "./js/apiService";
import refs from './js/refs'
import cardHandler from "./js/cardTemplate";



refs.form.addEventListener('submit', function (e) {
    e.preventDefault();
    refs.list.innerHTML = '';
    
    apiService.query = e.target.query.value;

    apiService.fetchQuery()
    .then(({hits}) => {
        const markup = cardHandler(hits)

        refs.list.insertAdjacentHTML('beforeend',markup)
    })
});

