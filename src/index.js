import apiService from "./js/apiService";
import refs from './js/refs'
import cardHandler from "./js/cardTemplate";

import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

let gallery = new SimpleLightbox('.list a');
console.log(gallery);

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
});
// 

function fetchHandler(){
    apiService.fetchQuery()
    .then(({hits}) => {
        if(hits.length === 0){
            Notify.failure(errorMessage)
            return
        } 

        const markup = cardHandler(hits);
        refs.list.insertAdjacentHTML('beforeend',markup)
    })
    apiService.incrementPage()
    gallery.refresh()
}