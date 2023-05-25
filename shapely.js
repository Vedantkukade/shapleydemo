let slideIndexs=1;
showSlidess(slideIndexs);

function plusSlidess(n) {
  showSlidess(slideIndexs += n);
}


function currentSlides(n) {
  showSlidess(slideIndexs = n);
}

function showSlidess(n) {
  let i;
  let slidess = document.getElementsByClassName("sliders");
  
  if (n > slidess.length) {slideIndexs = 1}
  if (n < 1) {slideIndexs = slidess.length}
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = "none";
  }
  
  slidess[slideIndexs-1].style.display = "block";
  
}


let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("sliders");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000); 
}


// $(document).ready(function(){
//   $('.img-mover').slick({
//     slidesToShow:9,
//     slidesToScroll:1,
//     autoplay:true,
//     autoplaySpeed:1500,
//     arrows:false,
//     dots:false,
//     pauseOnHover:false,
//     responsive:[{
//       breakpoint:768,
//       setting:{
//         slidesToShow:4
//       }},{
//         breakpoint:520,
//         setting:{
//           slidesToShow:3
//         }
      
//     }]
//   });
// });


