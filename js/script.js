document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0])
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1])
}
var i = 0;
var imgArr = new Array();
for (var j = 0; j < 6; j++) {
  imgArr[j] = "image/banner" + j + ".png";
}

function changeImg() {
  document.getElementById("imgBanner").src = imgArr[i];
  if (i < imgArr.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", 3000);
}
window.onload = changeImg;  
<<<<<<< HEAD
=======
// JavaScript to toggle accordion panels
document.querySelectorAll('.accordion').forEach(button => {
  button.addEventListener('click', function() {
      const panel = this.nextElementSibling;
      if (panel.style.display === 'block') {
          panel.style.display = 'none';
      } else {
          document.querySelectorAll('.panel').forEach(p => p.style.display = 'none');
          panel.style.display = 'block';
      }
  });
});

// JavaScript to toggle active state for filter buttons
document.querySelectorAll('.discount-btn, .price-btn, .size-btn').forEach(button => {
  button.addEventListener('click', function() {
      document.querySelectorAll('.discount-btn, .price-btn, .size-btn').forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
  });
});
function increaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  let quantity = parseInt(quantityInput.value);
  quantity++;
  quantityInput.value = quantity;
  updateTotal();
}

function decreaseQuantity() {
  const quantityInput = document.getElementById('quantity');
  let quantity = parseInt(quantityInput.value);
  if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      updateTotal();
  }
}

function updateTotal() {
  const price = 20; // Giá sản phẩm
  const quantity = parseInt(document.getElementById('quantity').value);
  const total = price * quantity;
  document.getElementById('total').textContent = `$${total}`;
}

function removeItem() {
  const cartItem = document.querySelector('.cart-item');
  cartItem.remove();
  document.getElementById('total').textContent = '$0';
}
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Xử lý xác thực đăng nhập
  if (email && password) {
      alert('Đăng nhập thành công!');
  } else {
      alert('Vui lòng nhập đầy đủ thông tin.');
  }
});
>>>>>>> 0e676b0 (first commit)

