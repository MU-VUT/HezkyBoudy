//Navigation constructor

var navigationHTML = document.createElement("nav");
navigationHTML.innerHTML = `
<span class="logo">
    <a href=""><img class="logo-icon" src="./res/icons/logo-dark-text.svg" alt="FaceBook"></a>
    <h1 class="hidden">Hezký Boudy</h1>
</span>
<ul>
    <li><a href="index.html">Domů</a></li>
    <li><a href="about.html">O nás</a></li>
    <li><a href="nabidka.html">Nabídka</a></li>
    <li><a href="realizace.html">Realizace</a></li>
    <li><a href="kontakt.html">Kontakt</a></li>
</ul>
<div class="nav-links">
    <span>
        <a target="_blank" href="https://www.facebook.com/hezkyboudy"><img class="nav-icon" src="./res/icons/facebook-square-brands.svg" alt="FaceBook"></a>
    </span>
    <span>
        <a href=""><img class="nav-icon" src="./res/icons/instagram-brands.svg" alt="Instagram"></a>
    </span>
    <span>
        <a href=""><img class="nav-icon" src="./res/icons/linkedin-brands.svg" alt="LinkedIn"></a>
    </span>
</div>`;
document.getElementsByTagName("body")[0].prepend(navigationHTML);

//Footer constructor
var footerHTML = document.createElement("footer");
footerHTML.innerHTML =
  "<span>&copy; Michal Urbánek - Web development & Webdesign</span>";
document.getElementsByTagName("body")[0].appendChild(footerHTML);

//Get dimensions from gallery
for (let i = 0; i < 10; i++) {
  let img = document.createElement("img");
  img.onload = function (event) {
    console.log("Image: r1" + i);
    console.log("width,height:", img.width, img.height);
  };
  img.src = "/res/img/real4/r1" + i + ".JPG";
}

//landing page rotate svg on scroll
window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);
