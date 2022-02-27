const loadPhotos = () => {
    const url = `https://jsonplaceholder.typicode.com/photos/`
    fetch(url)
        .then(res => res.json())
        .then(data => showPhotos(data))
}
loadPhotos()
const showPhotos = (photos) => {

    const photoContainer = document.getElementById('photos-container')
    photos.forEach(photo => {

        // console.log(photo)
        const div = document.createElement('div')

        div.innerHTML = ` <img onclick="loadDetails('${photo.id}')" src="${photo.url}" class="card-img-top" alt="...">
        <h5>${photo.title}</h5>`
        photoContainer.appendChild(div)
    })

}
const loadDetails = (id) => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => showDetails(data))
}
loadDetails()




const showDetails = (id) => {

    const photoDetails = document.getElementById('photo-details')
    const div = document.createElement('div')
    div.innerHTML = `
   <div>  <img src="${id.thumbnailUrl}" class="w-25 mb-5" alt="..."> </div>
    <img src="${id.url}" class="w-50" alt="...">

        <p>${id.title}</p>
    `
    photoDetails.appendChild(div)
}