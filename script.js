// Navigation

//Navigation constructor

// var navigationHTML = document.createElement("ul");
// navigationHTML.innerHTML = "";
// document.getElementById("nav").appendChild(navigationHTML);

//Navigation animation

//Get dimensions from gallery
for (let i = 0; i < 10; i++) {
  let img = document.createElement("img");
  img.onload = function (event) {
    console.log("Image: r1" + i);
    console.log("width,height:", img.width, img.height);
  };
  img.src = "/res/img/real4/r1" + i + ".JPG";
}
