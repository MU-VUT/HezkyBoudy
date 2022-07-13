//Navigation constructor

var navigationHTML = document.createElement("nav");
navigationHTML.innerHTML = `
<span class="logo">
            <a href="index.html"><img class="logo-icon" src="./res/icons/logo-dark-text.svg" alt="FaceBook"></a>
            <h1 class="hidden">Hezký Boudy</h1>
        </span>
        <a class="navbar-icon-a" onclick="responsiveNavbar()">
            <img class="navbar-icon" src="/res/icons/bars-solid.svg" alt="">
        </a>
        <ul id="navList" class="nav-list">
            <li><a href="index.html">Domů</a></li>
            <li><a href="about.html">O nás</a></li>
            <li><a href="nabidka.html">Nabídka</a></li>
            <li><a href="realizace.html">Realizace</a></li>
            <li><a href="kontakt.php">Kontakt</a></li>
        </ul>
        <div id="navLinks" class="nav-links">
            <span>
                <a target="_blank" href="https://www.facebook.com/hezkyboudy"><img class="nav-icon"
                        src="./res/icons/facebook-square-brands.svg" alt="FaceBook"></a>
            </span>
            <!-- <span>
                <a href=""><img class="nav-icon" src="./res/icons/instagram-brands.svg" alt="Instagram"></a>
            </span> -->
            <span>
                <a target="_blank"
                    href="https://www.linkedin.com/in/jakub-hor%C3%A1k-237b101a0/?fbclid=IwAR13V0cC-1VMLkbqNVqZaqyZ3rxCuvHxpNY9oU5ccpSB7FJ9CW-nDXcE26w"><img
                        class="nav-icon" src="./res/icons/linkedin-brands.svg" alt="LinkedIn"></a>
            </span>
        </div>
 `;
document.getElementsByTagName("body")[0].prepend(navigationHTML);

//responsive navbar
function responsiveNavbar() {
  var x = document.getElementById("navList");
  if (x.className === "nav-list") {
    if (x.classList.contains("animate-out")) {
      x.classList.remove("animate-out");
      x.classList.add("animate-in");
    } else {
      x.classList.add("animate-out");
      x.classList.remove("animate-in");
    }
    x.className += " responsive-navList";
  } else {
    if (x.classList.contains("animate-out")) {
      x.classList.remove("animate-out");
      x.classList.add("animate-in");
    } else {
      x.classList.add("animate-out");
      x.classList.remove("animate-in");
    }
  }

  var y = document.getElementById("navLinks");
  if (y.className === "nav-links") {
    if (y.classList.contains("animate-out")) {
      y.classList.remove("animate-out");
      y.classList.add("animate-in");
    } else {
      y.classList.add("animate-out");
      y.classList.remove("animate-in");
    }
    y.className += " responsive-navLinks";
  } else {
    if (y.classList.contains("animate-out")) {
      y.classList.remove("animate-out");
      y.classList.add("animate-in");
    } else {
      y.classList.add("animate-out");
      y.classList.remove("animate-in");
    }
  }
}

//Contact CTA constructor
var ctaHTML = document.createElement("div");
ctaHTML.innerHTML = `
<div class="text">
                    <h2>Kontaktujte nás</h2>
                    <p class="cta-subtitle">Zaujalo Vás co děláme? Domluvte si schůzku a vše detailně probereme.</p>
                </div>
                <p>
                    <span class="cta-button">
                        <a class="btn" href="kontakt.php">Více info</a>
                    </span>
                </p>
`;
ctaHTML.className = "cta-holder cta-contact";
if (document.getElementById("CTA-contact") != null) {
  document.getElementById("CTA-contact").appendChild(ctaHTML);
}

//Footer constructor
var footerHTML = document.createElement("footer");
footerHTML.innerHTML =
  '<span>&copy; Michal Urbánek - Webdevelopment & Webdesign | <a href="gdpr.html">Ochrana osobních údajů</a></span>';
document.getElementsByTagName("body")[0].appendChild(footerHTML);

//Get dimensions from gallery
function galleryDim() {
  for (let i = 0; i < 19; i++) {
    let img = document.createElement("img");
    img.onload = function (event) {
      console.log("Image: r" + i);
      console.log("width,height:", img.width, img.height);
    };
    img.src = "/res/img/real0/r" + i + ".JPG";
  }
}

// galleryDim();

//Open gallery intro
function galleryOpen(galleryId) {
  // galleryOpenLoader(galleryId);
  galleryOpenIntro(galleryId);
  galleryOpenGrid(galleryId);
  galleryOpenBtn(galleryId);
}

//Shows loader animation on button click
//not working WIP
function galleryOpenLoader(galleryId) {
  var loaderHTML = document.createElement("div");
  loaderHTML.className = "loader";
  let x = document.getElementById("galleryBtn" + galleryId);
  let y = document.getElementsByClassName("loader")[0];
  if (y == null) {
    x.prepend(loaderHTML);
  } else {
    y.remove();
  }
}

//Shows/hide galleryBoxIntro image
function galleryOpenIntro(galleryId) {
  var x = document.getElementById("galleryBoxIntro" + galleryId);
  if (x.classList.contains("gallery-box-intro-open")) {
    x.classList.remove("gallery-box-intro-open");
    x.classList.add("gallery-box-intro-closed");
  } else {
    x.classList.remove("gallery-box-intro-closed");
    x.classList.add("gallery-box-intro-open");
  }
}

//Shows/hide gallery grid
function galleryOpenGrid(galleryId) {
  var y = document.getElementById("gallery" + galleryId);
  if (y.classList.contains("gallery-grid-closed")) {
    y.classList.remove("gallery-grid-closed");
    // galleryLoad();
  } else {
    y.classList.add("gallery-grid-closed");
  }
}

//Changes button more/less on gallery unloaded/loaded
function galleryOpenBtn(galleryId) {
  var z = document.getElementById("btnMore" + galleryId);
  let x = document.getElementById("galleryBoxIntro" + galleryId);
  if (x.classList.contains("gallery-box-intro-open")) {
    z.innerText = "Zobrazit více";
  } else {
    z.innerText = "Zobrazit méně";
  }
}

//Gallery load
// WIP
function galleryLoad() {
  var galleryHTML = document.getElementById("gallery1");
  for (let i = 0; i < 19; i++) {
    galleryHTML.innerHTML +=
      '<a href="/res/img/real1/r1' +
      i +
      '.JPG" data-pswp-width="3511" data-pswp-height="2624" target="_blank"><img src="/res/img/real1/r1' +
      i +
      '.JPG"/></a>';
  }
}

//landing page rotate svg on scroll
if (document.getElementById("two-boxes") != null) {
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
}

//Cookie popup
