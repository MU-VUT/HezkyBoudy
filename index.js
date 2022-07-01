import PhotoSwipeLightbox from "/dist/photoswipe-lightbox.esm.js";
const lightbox = new PhotoSwipeLightbox({
  gallery: "#gallery",
  children: "a",
  pswpModule: () => import("/dist/photoswipe.esm.js"),
});
lightbox.init();