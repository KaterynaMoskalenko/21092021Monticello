'use.strict';


// Animation H1
let animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 3;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            }
            else {
                animItem.classList.remove('_active');
            }
        }
    }
    function offset(el) {
      var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
  }

  setTimeout(() => {
      animOnScroll();
  }, 300);
}



$(document).ready(function(){
    $('.slider').slick({
        
        dots:true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        // infinite: false,
        arrows: false,
    });
  });




/// Scroll
  function scrollTo(element) {
      window.scroll( {
          left: 0,
          top: element.offsetTop,
          behavior: 'smooth',
      })
  }

  const list = document.querySelector('.scroll');
  const button = document.querySelector('.wedo__commerce')

  list.addEventListener('click',() => {
    scrollTo(button);
  })


//   const anchors = document.querySelectorAll('.navigaciya__spicok__item');

// for (let anchor of anchors) {
//     anchor.addEventListener('click', function(event) {
//         let blokID = document.getElementById('cont')
       
//         document.querySelector('' + blokID).scrollIntoView({
//             behavior: "smooth",
//             block: "start",

//         })
//     })
// }
