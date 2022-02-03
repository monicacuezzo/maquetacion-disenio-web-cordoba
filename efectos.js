$(document).ready(function(){

  // $(window).load(function() {
        // let ld;
        // ld = null;
        // ld = setInterval($(".loader").fadeOut("slow"), 1000);
        // clearInterval(ld);
    
    // document.getElementsByClassName("loader")[0].style.display = 'none';
  // });

  $(".loader").fadeOut("slow");

  let windowTop = $(this).scrollTop();

  let elemIzq = document.getElementById("izq");
  let elemDer = document.getElementById("der");
  let elemIzq3 = document.getElementById("soloTexto");
  let monica = document.getElementById("monica");
  let cuezzo = document.getElementById("cuezzo");
  let analista = document.getElementById("analista");
  let sistemas = document.getElementById("sistemas");

  let pageWidth  = document.documentElement.clientWidth ;

  let id;
  let pos;
  let inicial;

  // opcion1
  // top.document.referrer;
//   if (document.referrer) //si es verdadero quiere decir que vienes de algun lado
// alert("Aqui vienes desde: " + document.referrer);
// else
// alert("Aqui entras directamente");

// opcion2
  let prevUrl = document.referrer;
  // alert(prevUrl);
  if(prevUrl.indexOf(window.location.host) !== -1) {
    // Ir a la página anterior
    //window.history.back();
// alert("viene del mismo sitio");

    //viene de una pag del mismo sitio, en este caso del portfolio, entonces no hacer la presentacion
    sinPresentacion();
    irApage3();
  }else{
    // alert("viene de otro sitio");
    presentacion();
  }
  
  var URLhash = window.location.hash;
// alert(URLhash);

  // if (URLhash == "#page3") {
  //   // alert("SIN");
  //   sinPresentacion();
  // }else{
  //   // alert("CON");
  //   presentacion();

  // }

  // alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 
  

 
  // $(window).scroll(function (e) {
  //       windowTop = $(this).scrollTop();
  
  //       if (windowTop == 0) {
  //         presentacion();
  //       }
  // });

      
      
  function irApage3() {
     let page3 = document.getElementById('page3');
     $("html, body").animate({ scrollTop: $(page3).offset().top }, 10);
  }
          
  function presentacion() { //presentacion nicial de la pagina
          document.getElementsByClassName("contactame")[0].style.display = "none";

          elemIzq.style.height = 100 + 'vh';
          elemDer.style.height = 100 + 'vh';
          elemIzq.style.fontSize = 10 + 'vw';
          elemDer.style.fontSize = 10 + 'vw';

          id = null;
          //primera animacion (horizontal)
          pos = 0;
          clearInterval(id);
          id = setInterval(frame, 30);       
  };


  function frame() { //segunda animacion de la presentacion (vertical)
        if (pos == 50) {
          clearInterval(id);
          pos = 100;

          // animacion 2 - vertical
          id = setInterval(frame2, 30);

          function frame2() {
            if (pos == 10) {

              document.getElementById("menu").style.display = "block";
              document.getElementsByClassName("contactame")[0].style.display = "block";

              clearInterval(id);

              //tercera animacion (fila1 completa el blanco y letra más oscura)
              
              // elemIzq.style.backgroundColor = "white";
              
              // document.getElementsByClassName("textoTitulo1")[0].style.color = 'grey';

              clearInterval(id);
              inicial = 50;
              id = setInterval(frame3, 50);
              monica.style.display = "none";
              cuezzo.style.display = "none";
              analista.style.display = "none";
              sistemas.style.display = "none";
              elemIzq3.style.display = "flex";

              function frame3() {
                if (pos > 100) {
                  clearInterval(id);

                } else {
                  pos++;
                  elemDer.style.width = inicial + pos + '%';
                  elemIzq.style.width = inicial - pos + '%';
                }
              }

            } else {
              pos--;
              elemIzq.style.height = pos + 'vh';
              elemDer.style.height = pos + 'vh';

              if (pageWidth > 1280) {
                if (pos/10 > 2) {
                  elemIzq.style.fontSize = (pos/10) + 'vw';
                  elemDer.style.fontSize = (pos/10) + 'vw';
                  
                  if (pos/50 > 2){
                    document.getElementsByClassName("textoTitulo")[1].style.fontSize = (pos/50) + "rem";
                    document.getElementsByClassName("textoTitulo")[2].style.fontSize = (pos/50) +"rem";
                    document.getElementsByClassName("textoTitulo")[3].style.fontSize = (pos/50) +"rem";
                    }
                }else{

                  elemIzq.style.fontSize = '2rem';
                  elemDer.style.fontSize = '2rem';  
                }
                 
              }else{  // si la pantalla es menor a 1280

                if (pos/10 > 5) {
                  elemIzq.style.fontSize = (pos/10) + 'vw';
                  elemDer.style.fontSize = (pos/10) + 'vw';
                  
                  if (pos/50 > 2){
                    document.getElementsByClassName("textoTitulo")[1].style.fontSize = (pos/50) + "rem";
                    document.getElementsByClassName("textoTitulo")[2].style.fontSize = (pos/50) +"rem";
                    document.getElementsByClassName("textoTitulo")[3].style.fontSize = (pos/50) +"rem";
                    }
                }else{
 
                  elemIzq.style.fontSize = '2rem';
                  elemDer.style.fontSize = '2rem';  
                }
              }
              
              
                        
            }
            
          }
        } else {
          pos++;
          elemIzq.style.width = pos + '%';
          elemDer.style.width = pos + '%';
        }
         
  }

  function sinPresentacion() { 
    clearInterval(id);
    monica.style.display = "none";
    cuezzo.style.display = "none";
    analista.style.display = "none";
    sistemas.style.display = "none";

    elemIzq3.style.display = "flex";
    elemDer.style.width =  '100%';
    elemIzq.style.height = 50 + '%';
    elemDer.style.height =  '10vh';
    document.getElementById("menu").style.display = "block";
    document.getElementsByClassName("contactame")[0].style.display = "block";
}
    
});