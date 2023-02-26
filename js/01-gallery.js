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
<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>
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

const instance = basicLightbox.create(`
  <div class="modal">
  <img src="${event.target.dataset.source}" width="1100" height="700">

   </div>
`, 
{
  onShow: (instance) => {
    instance.element().querySelector('.modal').onclick = instance.close
  }
  // onClose: (instance) => {}
})

instance.show() 
};





// const instance = basicLightbox.create(`
//   <div class="modal">
//   <img src="${event.target.dataset.source}" width="1100" height="700">

//    </div>
// `, 



// {
//   onShow: (instance) => {
//   document.addEventListener('keydown', (event) => {
//       if (event.code === 'Escape') {
//         console.log(`натискається escape`);
//       instance.element().querySelector('.modal').keydown = instance.close,
   
//        {once: true };
//   }})
// },
//   //     onClose: (instance) => {
//     //  galleryContainer.removeEventListener("click", instance);
//   // }
// })

// instance.show()  
// };



