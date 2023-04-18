// Add imports above this line
import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
// import "./node_modules/simplelightbox/dist/simple-lightbox.min.js";

// Change code below this line

const placeForFalleryHtml = document.querySelector(".gallery");
const galleryInserted = createGalleryMap(galleryItems);

function createGalleryMap (galleryItems) {
return galleryItems.map(({preview, description, original})=> {
return `<a class="gallery__item" href=${original}> <img class="gallery__image" src=${preview} title = ${description}/></a>`;
       }).join("");
    }

placeForFalleryHtml.insertAdjacentHTML('beforeend', galleryInserted);

new SimpleLightbox('.gallery a', { captionDelay:500, 
   doubleTapZoom: 1.3, rtl: true });

