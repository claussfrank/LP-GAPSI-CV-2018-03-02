var btnCentimetros = $('#btn-cent');
var btnPulgadas = $('#btn-pulg');
var btnColorVino = $('#btn-vino');
var btnColorNegro = $('#btn-negro');
var contenedorPrice =$('#cont-price');

jQuery(document).ready(function(){
	btnPulgadas.click(centimetrosAPulgadas);
	btnCentimetros.click(pulgadasACentimetros);
	btnColorNegro.click(cambioTextoNegro);
	btnColorVino.click(cambioTextoVino);
})

function centimetrosAPulgadas(){
	var centimetros = $('#centimetros');
	var pulgadas = $('#pulgadas');
	
	if($(centimetros).css("display","block")){
		$(centimetros).css("display","none");
		$(pulgadas).css("display","block");
		
	}
}

function pulgadasACentimetros(){
	var centimetros = $('#centimetros');
	var pulgadas = $('#pulgadas');
	
	if($(pulgadas).css("display","block")){
		$(pulgadas).css("display","none");
		$(centimetros).css("display","block");
		
	}
}

function cambioTextoNegro(){
	var colorZapato = $('#color-zapato');
	colorZapato.text(' NEGRO');
}

function cambioTextoVino(){
	var colorZapato = $('#color-zapato');
	colorZapato.text(' VINO');
}

var plantillaPrice = '<p class="text-codigo col-md-12"><s>**precioReg**<sup>**centavosReg**</sup></s></p>'+
              '<p id="price" class="price col-md-6">**precioDes**<sup>**centavosDes**</sup></p>'
function pesoADolar(){
 
}