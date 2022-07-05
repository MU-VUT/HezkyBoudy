import PhotoSwipeLightbox from "/dist/photoswipe-lightbox.esm.js";

const lightbox1 = new PhotoSwipeLightbox({
  gallery: "#gallery1",
  children: "a",
  pswpModule: () => import("/dist/photoswipe.esm.js"),
});
lightbox1.init();

const lightbox2 = new PhotoSwipeLightbox({
  gallery: "#gallery2",
  children: "a",
  pswpModule: () => import("/dist/photoswipe.esm.js"),
});
lightbox2.init();

const lightbox3 = new PhotoSwipeLightbox({
  gallery: "#gallery3",
  children: "a",
  pswpModule: () => import("/dist/photoswipe.esm.js"),
});
lightbox3.init();

const lightbox4 = new PhotoSwipeLightbox({
  gallery: "#gallery4",
  children: "a",
  pswpModule: () => import("/dist/photoswipe.esm.js"),
});
lightbox4.init();
