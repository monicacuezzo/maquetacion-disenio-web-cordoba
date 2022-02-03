
$(document).ready(function(){

	$(".loader").fadeOut("slow");

	$(window).scroll(function(){
		var barra = $(window).scrollTop();
		var posicion = barra * 0.40;

		$('body').css({
			'background-position': '0 ' + posicion + 'px'
		});
	});


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
	
	// presentacion();
	
  
   
	// $(window).scroll(function (e) {
	//       windowTop = $(this).scrollTop();
	
	//       if (windowTop == 0) {
	//         presentacion();
	//       }
	// });
  
		
		
			
	function presentacion() { //presentacion nicial de la pagina
			// let botonVolver = document.getElementsByClassName("contactame")[0];
  
			elemIzq.style.height = 100 + 'vh';
			elemDer.style.height = 100 + 'vh';
			elemIzq.style.fontSize = 7 + 'vw';
			elemDer.style.fontSize = 7 + 'vw';
			document.getElementsByClassName("textoTitulo")[0].style.fontSize = "4rem";
			document.getElementsByClassName("textoTitulo")[1].style.fontSize = "4rem";
  
			id = null;
			//primera animacion (horizontal)
			pos = 0;
			clearInterval(id);
			id = setInterval(frame, 30);   
			// botonVolver.style.display = "block";   
			// document.getElementsByClassName("contactame")[0].style.display = "block"; 
	};
  
  
	function frame() { //segunda animacion de la presentacion (vertical)
		  if (pos == 50) {
			clearInterval(id);
			pos = 100;
  
			// animacion 2 - vertical
			id = setInterval(frame2, 30);
  
			function frame2() {
			  if (pos == 0) {
				// elemIzq.style.display = 'none';
				// elemDer.classList.add("icono-scroll");
  
				// document.getElementById("menu").style.display = "block";
				
  
				clearInterval(id);
  
				// tercera animacion (fila1 completa el blanco y letra más oscura)
				
				// elemIzq.style.backgroundColor = "white";
				
				document.getElementsByClassName("textoTitulo1")[0].style.color = 'grey';
				document.getElementsByClassName("icono-volver")[0].style.display = "block";
  
				
			  } else {
				pos--;
				elemIzq.style.height = pos + 'vh';
				elemDer.style.height = pos + 'vh';
  
			  }
			  
			}
		  } else {
			pos++;
			elemIzq.style.width = pos + '%';
			elemDer.style.width = pos + '%';
		  }
		   
	}
  


});

	
	
  
  
  