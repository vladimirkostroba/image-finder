import apiService from "./js/apiService";
import refs from './js/refs'
import cardHandler from "./js/cardTemplate";
import {openModal,closeModal} from './js/modal'
import loadMoreBtn from "./js/load-more-button";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

// 
const errorMessage = 'Oops, no images found'

refs.form.addEventListener('submit', function (e) {
    e.preventDefault();
    refs.list.innerHTML = '';
    apiService.reset();
    
    apiService.query = e.target.query.value;

    fetchHandler()  
});

refs.loadMore.addEventListener('click', function (e) {
    fetchHandler()
});

refs.resetInput.addEventListener('click', function (e) {
    refs.input.value = '';
    refs.list.innerHTML = '';
    refs.loadMore.classList.add('is-hiden')
});
// 

function fetchHandler(){
    loadMoreBtn.disable()

    apiService.fetchQuery()
    .then(({hits}) => {
        if(hits.length === 0){
            Notify.failure(errorMessage)
            return    
        } 

        const markup = cardHandler(hits);
        refs.list.insertAdjacentHTML('beforeend',markup)

        loadMoreBtn.show()
        loadMoreBtn.enable()
    })
    apiService.incrementPage()
    

}
console.log(loadMoreBtn.refs);

//  modal

refs.list.addEventListener('click', openModal);
refs.button.addEventListener('click', closeModal);