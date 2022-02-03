$(document).ready(function() {

let parallax = document.getElementsByClassName('contenedorJB2');
let contenedorParallax = document.getElementsByClassName('contenedorgrandeJB');
let totalHeight = contenedorParallax[0].getBoundingClientRect().height;
let aUp = document.getElementById("arrow-up");
let aDn = document.getElementById("arrow-down");


window.addEventListener('scroll', function()  {
    endPage();
  });
  window.addEventListener('scroll', function()  {
    topPage();
  });


window.addEventListener('scroll',ScrollParallax);

function ScrollParallax() {
    let scrollTop = document.documentElement.scrollTop;
     
    for (let index = 0; index < parallax.length; index++) {
        
        if(parallax[index].getBoundingClientRect().top >= 0) {
           
            parallax[index].style.transform = 'translateY('+ scrollTop*-1 + 'px)';
            // redimensiona el contenedor
            contenedorParallax[0].style.height = totalHeight - window.pageYOffset +"px";
        }
    }
    
}

const MARGEN = 100;

function endPage(){
  if(MARGEN > $(document).height() - $(window).scrollTop() - $(window).height()) {
    aDn.style.display = "none";
    aUp.style.display = "block";
  }
}

function topPage(){
  if($(window).scrollTop() < MARGEN) {
    aUp.style.display = "none";
    aDn.style.display = "block";
  }
}

irArriba();
      
function irArriba(){
  $('.ir-arriba').click(function(){ $('body,html').animate({ scrollTop:'0px' },1000); });
  $(window).scroll(function(){
    if($(this).scrollTop() > 0){ $('.ir-arriba').slideDown(600); }else{ $('.ir-arriba').slideUp(600); }
  });
  $('.ir-abajo').click(function(){ $('body,html').animate({ scrollTop:'1000px' },1000); });
}



// ************JB1 funciona ok *************
// let parallax1 = document.querySelector('.parallaxJB1');
// let parallax2 = document.querySelector('.parallaxJB2');
// let parallax3 = document.querySelector('.parallaxJB3');
// let titulo = document.querySelector('.tituloJB');


// function ScrollParallax() {
//     let scrollTop = document.documentElement.scrollTop;
//     // console.log(scrollTop+"  *** "+parallax);

//     parallax1.style.transform = 'translateY('+ scrollTop*-0.5 + 'px)';
//     parallax2.style.transform = 'translateY('+ scrollTop*-0.5 + 'px)';
//     parallax3.style.transform = 'translateY('+ scrollTop*-0.5 + 'px)';
//     titulo.style.transform = 'translateY('+ scrollTop*0.3 + 'px)';
// }

})
