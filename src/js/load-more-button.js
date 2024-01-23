const loadMoreBtn = {
    refs:{
        button:document.querySelector('.load-more'),
        spinner:document.querySelector('.loader'),
        label:document.querySelector('.load-more > label'),
    },

    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Load more';
        this.refs.spinner.classList.add('is-hidden');
    },

    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
        this.refs.spinner.classList.remove('is-hidden');
    },

    show(){
        this.refs.button.classList.remove('is-hiden')
    },

    
}

export default loadMoreBtn