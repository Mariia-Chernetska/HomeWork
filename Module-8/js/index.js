 'use strict'

 const galleryItems = [
  {
    preview: "img/preview-1.jpeg",
    fullview: "img/fullview-1.jpeg",
    alt: "alt text 1"
  },
  {
    preview: "img/preview-2.jpeg",
    fullview: "img/fullview-2.jpeg",
    alt: "alt text 2"
  },
  {
    preview: "img/preview-3.jpeg",
    fullview: "img/fullview-3.jpeg",
    alt: "alt text 3"
  },
  {
    preview: "img/preview-4.jpeg",
    fullview: "img/fullview-4.jpeg",
    alt: "alt text 4"
  },
  {
    preview: "img/preview-5.jpeg",
    fullview: "img/fullview-5.jpeg",
    alt: "alt text 5"
  },
  {
    preview: "img/preview-6.jpeg",
    fullview: "img/fullview-6.jpeg",
    alt: "alt text 6"
  }
];

const img = document.querySelector(".image-gallery");
const imgFullView = document.querySelector(".image-gallery-1");
let imgPreView = null;

function imgClick() {
  event.preventDefault();
  const target = event.target;
  if (imgPreView != target) {
    if (!!imgPreView) 
        imgPreView.style.border = "1px solid #A63800";

    target.style.border = "thick solid #0000FF";
    imgPreView = target;
    const gallery = galleryItems.find(el => el.preview === target.getAttribute("src"));

    if (!!gallery) {
      imgFullView.setAttribute("src", gallery.fullview);
    }
  }
}
img.addEventListener("click", imgClick);