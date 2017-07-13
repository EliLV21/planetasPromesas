var url = 'data/earth-like-results.json';
var arregloPlanetas = [];
var plantilla =
	'<div class="col s6">' +
	  '<div class="card">' +
		'<div class="card-image">' +
		  '<img class="img responsive" src="https://dummyimage.com/300x300">' +
		'</div>' +
		'<div class="card-content">' +
		  '<p>' +
		  	'<strong>Nombre:</strong> **NOMBRE**<br>' +
			'<strong>Telescope:</strong> **TELESCOPE**<br>' +
			'<strong>Masa:</strong> **MASA**<br>' +
			'<strong>Fecha:</strong> **FECHA**<br>' +
		  '</p>' +
		'</div>' +
	  '</div>' +
	'</div>';

function getJSON(url) {
	return new Promise (function(resolve,error){
		var ajax = new XMLHttpRequest();
		ajax.open("GET",url)
		ajax.send()
		ajax.onreadystatechange = function(){
			if(ajax.readyState == 4){
				var response = JSON.parse(ajax.responseText)
				resolve(response)
			}
		}
	})
}

getJSON(url).then(function(response){

 for(var i = 0; i < response.results.length ; i++){
   arregloPlanetas.push(getJSON(response.results[i]));

   arregloPlanetas[i].then(function(planeta){
     crear_planeta(planeta);
   });
  };
  console.log(arregloPlanetas);
  return arregloPlanetas;
});

var crear_planeta = function(planeta){
	// console.log(planeta);
	var plantillaFinal = "";
	var $contenedorPlanetas = $("#contenedorPlanetas");
		plantillaFinal += plantilla.replace('**NOMBRE**', planeta.pl_name)
			.replace('**TELESCOPE**', planeta.pl_telescope)
			.replace('**MASA**', planeta.pl_masse)
			.replace('**FECHA**', planeta.pl_disc);
	$(contenedorPlanetas).append(plantillaFinal);

};
