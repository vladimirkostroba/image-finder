function cardHandler(arr){
    const markup = arr.map(({id,webformatURL,largeImageURL,tags,comments,likes,views,downloads}) => {
        return `
        <li class="card" id="${id}">
        <div class="overlay">
        <a href="${largeImageURL}"><img src="${webformatURL}" alt="${tags}"></a>
        </div>
        
        <div class="card-info">
        <p class="card-item">
        <b>likes</b>
        ${likes}</p>
        <p class="card-item">
        <b>comments</b>
        ${comments}</p>
        <p class="card-item">
        <b>views</b>
        ${views}</p>
        <p class="card-item">
        <b>downloads</b>
        ${downloads}</p>
        </div>
        </li>
        `
    }).join('')

    return markup
}

export default cardHandler

