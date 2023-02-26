
import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);




const galleryContainer = document.querySelector(".gallery");

const galleryListEl = createGallery(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryListEl);

function createGallery (galleryItems) {
return galleryItems
    .map(({ preview, original, description }) => {
return `
<li>
<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a>
</li>
`;
})
.join('');
}

galleryContainer.addEventListener("click", onGalleryContainerClick);


function onGalleryContainerClick (event) {
  event.preventDefault();
if(!event.target.classList.contains('gallery__image')) {
return
}


const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });

};

