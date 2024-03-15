let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');  
}

var counter=1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;

    if(counter > 7)
    {
        counter=1;
    }
},4000);



function previewImage() {
  const fileInput = document.getElementById('productImage');
  const imagePreview = document.getElementById('imagePreview');
  const uploadButton = document.getElementById('uploadButton');
  const changeButton = document.getElementById('changeButton');

  imagePreview.innerHTML = '';

  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
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
  
  function addProduct() {
    const productName = document.getElementById('productName').value;
    const productImage = document.getElementById('productImage').value;
    const productPriceMonth = document.getElementById('productPriceMonth').value;
    const productPriceDay = document.getElementById('productPriceDay').value;
    const productDescription = document.getElementById('productDescription').value;
  
    const productData = {
      name: productName,
      image: productImage,
      price_month: productPriceMonth,
      price_day: productPriceDay,
      description: productDescription
    };
  
    fetch('/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Product added:', data);
    })
    .catch(error => {
      console.error('Error adding product:', error);
    });
  }

