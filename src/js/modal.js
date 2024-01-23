import refs from "./refs";

export function openModal(e){
    e.preventDefault();

    if(e.target.nodeName !== 'IMG'){
        return
    }

    refs.modal.classList.add('is-open');
    refs.modalImg.src = e.target.dataset.source;
    refs.modalImg.id = e.target.id;


    document.addEventListener('keydown',onEscapeClose);
}

// 

// Закрытие модалки

export function closeModal(){
    refs.modalImg.src = ''
    refs.modal.classList.remove('is-open');
}

// Закрытие по Escape

function onEscapeClose(e){
    if(e.code === 'Escape'){
        closeModal()
    }
}