$(document).ready(function(){

    var indiceGaleria = 0;
    var vecFoto=[];
    var vecFotoOver=[];
    var child ;
    var vecText=[]; // guarda los textos de cada foto
    var vecAlt=[];
    var vecTitle=[];
    var vecLinkFoto=[];
    var vecLinkTexto=[];
    var ul;
    var li;
    var pageWidth  = document.documentElement.clientWidth ;
    let id;
    let pos;
    var menuChico;
    var iconoMenuChico;
    var iconoCerrarMenuChico;
    let menu = document.getElementById("menu");
    let sombra = document.getElementById("fondo-sombra");
    var w = document.getElementsByClassName("dataMenu");

    let animado = document.querySelectorAll(".animado");
    let animado1;
    let animado2 = document.querySelectorAll(".animado2");
    let animado3 = document.querySelectorAll(".animado3");
    let animado4 = document.querySelectorAll(".animado4");
     
    let portfolio1 = document.getElementById("link01Galeria");
    let portfolio2 = document.getElementById("link11Galeria");
    let portfolio3 = document.getElementById("link21Galeria");
    let portfolio4 = document.getElementById("link31Galeria");
  
    menuChico = document.getElementById("myMenu");
    iconoMenuChico = document.getElementsByClassName("toggle-menu");
    iconoCerrarMenuChico = document.getElementsByClassName("tres-lineas");
    if (iconoMenuChico[0].style.display =  "block") {
      iconoCerrarMenuChico[0].style.display = "none";
    }
    resguardoGaleria(); // cargo los vectores con la galeria de fotos
  
    window.addEventListener('resize', sizeWindow);
   
    
    window.addEventListener('scroll', function()  {
      entrarDerecha();
    });
    window.addEventListener('scroll', function()  {
      entrarIzq();
    });
    window.addEventListener('scroll', function()  {
      subirElemento();
    });
    window.addEventListener('scroll', function()  {
      aparecerDelCentro();
    });
    window.addEventListener('scroll', function()  {
      entrarDerechaGaleria();
    });


    function disableScrolling(){
      var x=window.scrollX;
      var y=window.scrollY;
      window.onscroll=function(){window.scrollTo(x, y);};
    }
  
    function enableScrolling(){
      window.onscroll=function(){};
    }

    
    // Efecto Rebote del menu

    $("nav a").on('click', function(){
        var target = $(this).attr('href');
        enableScrolling();

        // alert(iconoCerrarMenuChico[0].style.display);

        if (iconoCerrarMenuChico[0].style.display == "block") {   // si el menu small esta visible, ocultarlo al elegir una opcion
          // alert("cerrar menu small");
          menuChico.classList.add("menuLateralDesaparece");
          menuChico.classList.remove("menuLateral");

          setTimeout(function () {  menuChico.style.display = "none";  }, 500);

          iconoMenuChico[0].style.display = "block";
          $(".tres-lineas")[0].style.display = "none";

          menu.style.backgroundColor = "transparent";
          menu.style.boxShadow = "none";
          sombra.style.display = "none";
          w[0].style.display = "none";
        }

        switch (target) {
          case "#page2":
              $(target).animate({paddingTop: '8rem'},1000);
               
              // for (let index = 0; index < animado1.length; index++) {
              //   animado1[index].animate([
              //     { transform: 'translateX(400px)' },
              //     { transform: 'translateX(0)' }
              //   ], {duration: 1000+index*1000});
              // }
              // for (let index = 0; index < animado2.length; index++) {
              //   animado2[index].animate([
              //     { transform: 'translateX(-500px)' },
              //     { transform: 'translateX(0)' }
              //   ], {duration: 1000+index*1500});
              // }

              break;
          case "#page3":
              $(target).animate({paddingTop: '6rem'},1000);

              // animado3[1].animate([
              //   { transform: 'scaleX(0)' },
              //   { transform: 'scaleX(1)' }
              // ], {duration: 1000});

               break;
          case "#page4":
              $(target).animate({paddingTop: '8rem'},1000);

              // for (let index = 0; index < animado.length; index++) {
              //   animado[index].animate([
              //     { transform: 'translateY(300px)' },
              //     { transform: 'translateY(0)' }
              //   ], {duration: 1000+index*1000});
              // }

              

              break;
          case "#borrar":
                $(target).animate({paddingTop: '8rem'},1000);

                // for (let index = 0; index < animado.length; index++) {
                //   animado[index].animate([
                //     { transform: 'translateY(300px)' },
                //     { transform: 'translateY(0)' }
                //   ], {duration: 1000+index*1000});
                // }
 
                break;
          case "#page5":
              $(target).animate({paddingTop: '8rem'},1000);
              break;
          case "#pageProceso":
                $(target).animate({paddingTop: '8rem'},1000);
                break;
                      
          default:
            break;
        }
    });
    
    // Fin Efecto Rebote

    
    
    

    
  
    $('.toggle-menu').on('click', function(){    //muestra/oculta el boton menu hamburguesa
        disableScrolling();

        var x = document.getElementById("myMenu");
        var y = document.getElementsByClassName("toggle-menu");
        var z = document.getElementsByClassName("tres-lineas");
       

        x.style.display =  "block";
        y[0].style.display =  "none";
        z[0].style.display = "block";
        w[0].style.display = "flex";
        menu.style.boxShadow = "10px 10px 15px rgba(0, 0, 0, .5)";
        
        sombra.style.display =  "block";

        // myFunction();
        colorIconoMenu();

        x.classList.remove("menuLateralDesaparece");
        setTimeout(function(){ menu.style.backgroundColor = "rgb(0,102,115)";}, 500);
        
        x.classList.add("menuLateral");
      });

      $(".tres-lineas").on('click', function(){
        enableScrolling();
        var x = document.getElementById("myMenu");
        var y = document.getElementsByClassName("toggle-menu");

        x.classList.add("menuLateralDesaparece");
        x.classList.remove("menuLateral");

        setTimeout(function(){ x.style.display = "none";}, 500);
      
        y[0].style.display = "block";
        $(".tres-lineas")[0].style.display = "none";
        
         menu.style.backgroundColor = "transparent";
        menu.style.boxShadow = "none";
        sombra.style.display =  "none";
        w[0].style.display = "none";
    });

    
 
    $("#left").on('click', function(){
      indiceGaleria -=1;
      if (indiceGaleria < 0)  indiceGaleria = li.length-1;
      desplazarIzqGaleria();
    });

    $("#right").on('click', function(){
      indiceGaleria +=1;
      if (indiceGaleria >= li.length) indiceGaleria = 0;
      desplazarDerGaleria();
    });

    

    
    $(window).scroll(function (e) {
     
      let windowTop = $(this).scrollTop();

      $('#myMenu ul li a').each(function (event) {

        if (windowTop >= $($(this).attr('href')).offset().top - 50) {
          $('#myMenu ul li a').removeClass('activo');
          $(this).addClass('activo');
        }
      }); // fin function
    }); //fin scroll

    
    function subirElemento() {
       
      let screenSize = window.innerHeight;
      for (let index = 0; index < animado.length; index++) {
        if(animado[index].getBoundingClientRect().top < screenSize) {

          setTimeout(function(){ 
            animado[index].style.opacity = 1;
            animado[index].classList.add('subirElemento');
          }, 500+(index*150));

          // animado[index].style.opacity = 1;
          // animado[index].classList.add('subirElemento');
        } else {
          animado[index].style.opacity = 0;
          animado[index].classList.remove("subirElemento");
        }
      }
    }

    

      function entrarDerecha() {
        let screenSize = window.innerHeight;
        animado1 = document.querySelectorAll(".animado1");
        for (let index = 0; index < animado1.length; index++) {
          if(animado1[index].getBoundingClientRect().top < screenSize) {
            animado1[index].style.opacity = 1;
            animado1[index].classList.add('entrarDerecha');
          } else {
            animado1[index].style.opacity = 0;
            animado1[index].classList.remove("entrarDerecha");
          }
        }
  
        // let scrollTop = document.documentElement.scrollTop;
         
        // for (let index = 0; index < animado1.length; index++) {
          
        //   let alturaAnimado =  animado1[index].offsetTop;
        //   if (alturaAnimado -500 < scrollTop) {
        //     animado1[index].style.opacity = 1;
        //     animado1[index].classList.add("entrarDerecha");
        //   }else{
        //     animado1[index].style.opacity = 0;
        //     animado1[index].classList.remove("entrarDerecha");
        //   }
        // }

      // document.getElementById('tituloContacto').scrollTop += 10;
      // document.getElementById('tituloContacto').animate() += 10;
    }
  
    function entrarDerechaGaleria() {
      let screenSize = window.innerHeight;
      for (let index = 0; index < animado4.length; index++) {
        if(animado4[index].getBoundingClientRect().top < screenSize) {

          setTimeout(function(){ 
            animado4[index].style.opacity = 1;
            animado4[index].classList.add('entrarDerecha');
          }, 1000+(index*1000));

          
        } else {
          animado4[index].style.opacity = 0;
          animado4[index].classList.remove("entrarDerecha");
        }
      }
    }

    function entrarIzq() {
      let screenSize = window.innerHeight;
        for (let index = 0; index < animado2.length; index++) {
          if(animado2[index].getBoundingClientRect().top < screenSize) {
            animado2[index].style.opacity = 1;
            animado2[index].classList.add('entrarIzq');
          } else {
            animado2[index].style.opacity = 0;
            animado2[index].classList.remove("entrarIzq");
          }
        }
    }
  

    function aparecerDelCentro() {
      let screenSize = window.innerHeight;
      for (let index = 0; index < animado3.length; index++) {
        if(animado3[index].getBoundingClientRect().top < screenSize) {
          animado3[index].style.opacity = 1;
          animado3[index].classList.add('aparecerDelCentro');
        } else {
          animado3[index].style.opacity = 0;
          animado3[index].classList.remove("aparecerDelCentro");
        }
      }
    }

    


    function myFunction() {
      var x = document.getElementById("myMenu");
      // var x = document.getElementById("ulMenu");
      // x.style.height = 0;
      x.style.display =  ( x.style.display == "none" ? "block" : "none" );
      // efectoMenu(x);
    }


    function resguardoGaleria() {
      ul=document.getElementById('galeria');
      li=ul.getElementsByTagName('li');
      
      for(let i=0;i<li.length;i++){
        if(li[i].parentNode==ul){
          vecFoto.push(document.getElementById('imagen'+i).src);
          let name = i.toString()+i.toString();
          vecFotoOver.push(document.getElementById('imagen'+name).src);
          vecAlt.push(document.getElementById('imagen'+i).alt);
          vecTitle.push(document.getElementById('imagen'+i).title);
          vecText.push(document.getElementById('text'+i+"1Galeria").textContent);  
          vecLinkFoto.push(document.getElementById('link'+i+"1Galeria").href);
          vecLinkTexto.push(document.getElementById('link'+i+"2Galeria").href);
        }   
      }
    }

    
  
    
    function colorIconoMenu() {
        var x = document.getElementById('menu');
        var y = document.getElementById('menu-line');
        if ( x.style.display == "none") {
          y.style.backgroundColor = "white";
          x.style.backgroundColor = "transparent";
         
        }else{
          y.style.backgroundColor = "red";
        }
    }

  
    function sizeWindow() {
      pageWidth  = document.documentElement.clientWidth ;
  
      if (pageWidth >1280) {
        document.getElementById('myMenu').style.display = "block";
        menu.style.backgroundColor = "rgb(0,102,115)";

       } else {
        document.getElementById('myMenu').style.display = "none";
        menu.style.backgroundColor = "transparent";
       }
    }

    

    function desplazarDerGaleria() {
      
      for(let i=0;i<vecFoto.length;i++){
          let aux;
        
          if (indiceGaleria+i < vecFoto.length) {
             aux = indiceGaleria+i;
          }else{
              aux = indiceGaleria+i - vecFoto.length;
          }
          document.getElementById('imagen'+i).src = vecFoto[aux];
          let name = i.toString()+i.toString();
          document.getElementById('imagen'+name).src = vecFotoOver[aux];
          document.getElementById('imagen'+i).alt = vecAlt[aux];
          document.getElementById('imagen'+i).title = vecTitle[aux];
          document.getElementById('text'+i+'1Galeria').textContent = vecText[aux];
          document.getElementById('link'+i+'1Galeria').href = vecLinkFoto[aux];
          document.getElementById('link'+i+'2Galeria').href = vecLinkTexto[aux];
        }
      }


         function desplazarIzqGaleria() {
          let x = indiceGaleria;
          for(let i=0;i<vecFoto.length;i++){
            
              if (x >= vecFoto.length) x = 0;

              document.getElementById('imagen'+i).src = vecFoto[x];
              let name = i.toString()+i.toString();
              document.getElementById('imagen'+name).src = vecFotoOver[x];
              document.getElementById('imagen'+i).alt = vecAlt[x];
              document.getElementById('imagen'+i).title = vecTitle[x];
              document.getElementById('text'+i+'1Galeria').textContent = vecText[x];
              document.getElementById('link'+i+'1Galeria').href = vecLinkFoto[x];
              document.getElementById('link'+i+'2Galeria').href = vecLinkTexto[x];
              x +=1;  
          }           
        }

        // $(".borrar10 p").on('click', function(){ // esta funcion es para mostrar/ocultar las ventanas de cada cliente
        //       let texto = $(".borrar10 p").attr('alt');
        //       borrar(texto);
        // });

        // function borrar(elemento) {
        //   document.getElementById('borrar12').style.display = 'block';
        //   document.getElementById('borrar14').style.display = 'block';
        //   let win = document.getElementById('borrar13');
        //   win.style.display = 'block';
        //   win.textContent = elemento;
        // }
         
        // $(".borrar14 button").on('click', function(){
        //   document.getElementById('borrar12').style.display = 'none';
        //   document.getElementById('borrar13').style.display = 'none';
        //   document.getElementById('borrar14').style.display = 'none';
        // });


        
        
// EFECTOS GALERIA PORTFOLIO REEMPL IMG   
// IMG 1     
        portfolio1.addEventListener('mouseover', function(){
            portfolio1.firstElementChild.classList.remove("visible");
            portfolio1.firstElementChild.classList.add("hidden");
            portfolio1.lastElementChild.classList.add("visible");
        });
        portfolio1.addEventListener('mouseout', function(){
          portfolio1.firstElementChild.classList.add("visible");
          portfolio1.lastElementChild.classList.remove("visible");
          portfolio1.lastElementChild.classList.add("hidden");
        });
// IMG 2     
        portfolio2.addEventListener('mouseover', function(){
          portfolio2.firstElementChild.classList.remove("visible");
          portfolio2.firstElementChild.classList.add("hidden");
          portfolio2.lastElementChild.classList.add("visible");
        });
        portfolio2.addEventListener('mouseout', function(){
          portfolio2.firstElementChild.classList.add("visible");
          portfolio2.lastElementChild.classList.remove("visible");
          portfolio2.lastElementChild.classList.add("hidden");
        });
// IMG 3     
        portfolio3.addEventListener('mouseover', function(){
          portfolio3.firstElementChild.classList.remove("visible");
          portfolio3.firstElementChild.classList.add("hidden");
          portfolio3.lastElementChild.classList.add("visible");
        });
        portfolio3.addEventListener('mouseout', function(){
          portfolio3.firstElementChild.classList.add("visible");
          portfolio3.lastElementChild.classList.remove("visible");
          portfolio3.lastElementChild.classList.add("hidden");
        });
// IMG 4     
      portfolio4.addEventListener('mouseover', function(){
        portfolio4.firstElementChild.classList.remove("visible");
        portfolio4.firstElementChild.classList.add("hidden");
       portfolio4.lastElementChild.classList.add("visible");
      });
      portfolio4.addEventListener('mouseout', function(){
        portfolio4.firstElementChild.classList.add("visible");
        portfolio4.lastElementChild.classList.remove("visible");
        portfolio4.lastElementChild.classList.add("hidden");
      });
// FIN EFECTO CAMBIO IMG EN PORTFOLIO

      // ***** LO SIG FUNCIONA EXCELENTE PERO PARPADEA E INSUME MUCHOS RECURSOS ****

      // let elementos = document.getElementsByClassName("linkFotoGaleria");

      // for (let index = 0; index < elementos.length; index++) {
        
      //   elementos[index].addEventListener('mouseover', function(){

      //     elementos[index].firstElementChild.classList.remove("visible");
      //     elementos[index].firstElementChild.classList.add("hidden");
      //     elementos[index].lastElementChild.classList.add("visible");
          
      //   });
      // }

      // for (let index = 0; index < elementos.length; index++) {
        
      //   elementos[index].addEventListener('mouseout', function(){

      //     elementos[index].firstElementChild.classList.add("visible");
      //     elementos[index].lastElementChild.classList.remove("visible");
      //     elementos[index].lastElementChild.classList.add("hidden");
      //   });
      // }
      // ***********************************************************

       
      
    
});

