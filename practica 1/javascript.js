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

Array.prototype.eliminar = function(nombre)
{    
	
	var arreglo = this.filter(function(elemento){
		return elemento != nombre;
	});
	
	for(var i = 0; i<arreglo.length; i++){
		this[i] = arreglo[i];
		console.log(arreglo.length);
	}
	return this.pop();
}

Array.prototype.unico=function(nombre)
{
  return function()
  {
  	return this.filter(a)
  }
} (function(a,b,c){return c.indexOf(a,b+1)<0});


var nombres = ['mabel', 'anita', 'eloy','eloy','anita','carlos','carlos','juan'];
console.log(nombres);
console.log(nombres.buscar('anita'));

nombres.eliminar('eloy');
console.log(nombres);

console.log(nombres.unico());



