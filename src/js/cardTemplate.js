function cardHandler(arr){
    const markup = arr.map(({id,previewURL,likes,views,downloads}) => {
        return `<li class="card" id="${id}">
        <div class="overlay">
        <img src="${previewURL}" alt="img">
        </div>
        
        <div class="card-info">
        <p class="likes">${likes}</p>
        <p class="views">${views}</p>
        <p class="downloads">${downloads}</p>
        </div>
        </li>`
    }).join('')

    return markup
}

export default cardHandler