Array.prototype.buscar = function(nombre)
{
	var mensaje = 'El nombre no ha sido encontrado';
	this.forEach(function(elemento, posicion){
		if (elemento == nombre) {
			mensaje = 'El nombre : ['+nombre+'] ha sido encontrado en la posicion '+posicion+' del arreglo';
		}
	});
	return mensaje;
}

var nombres = ['mabel', 'anita', 'eloy'];
console.log(nombres);
console.log(nombres.buscar('anita'));