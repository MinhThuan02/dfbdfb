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

