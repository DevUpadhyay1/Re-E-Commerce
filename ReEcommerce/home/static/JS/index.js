let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('open');
}

var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;

  if (counter > 7) {
    counter = 1;
  }
}, 4000);



function previewImage() {
  const fileInput = document.getElementById('productImage');
  const imagePreview = document.getElementById('imagePreview');
  const uploadButton = document.getElementById('uploadButton');
  const changeButton = document.getElementById('changeButton');

  imagePreview.innerHTML = '';

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      img.alt = 'Preview';
      img.style.maxWidth = '200px';
      imagePreview.appendChild(img);
      changeButton.style.display = 'inline-block';
      uploadButton.style.display = 'none';
    }
    reader.readAsDataURL(file);
  }
}



// animations

window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 100;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
}


// Ratting with 5 star

let ratting = 0;

function rate(stars) {
  ratting = stars;
  let allStars = document.querySelectorAll('.star');
  for (let i = 0; i < allStars.length; i++) {
    if (i < stars) {
      allStars[i].classList.add('gold');
    } else {
      allStars[i].classList.remove('gold');
    }
  }
}

document.querySelectorAll('.star')[3].addEventListener('click', function () {
  rate(4);
});



function togglePopup() {
  var popup = document.getElementById("popup");
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}