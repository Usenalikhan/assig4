var i = 0 ;
var images = [];
var time = 1000;

images[0] = "https://www.wptunnel.com/wp-content/uploads/2021/08/wptunnel-lamborghini-wallpaper-4.jpg";
images[1] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKUfym5iicCcxhzazAVsABx2ygPa4yjGdekA&usqp=CAU";
images[2] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXB8hAUuZxP3c8WViohpQ_18_iIToyHy4Wsg&usqp=CAU";

function slideShow(){
  document.slideshow.src = images[i];
  if ( i < images.lenght - 1){
    i++;
  }
  else{
    i =  0 ;
  }


  setTimeout("slideShow()", time);


}
window.onload = slideShow;
