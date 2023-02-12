/*function invocarMetodo(objeto, metodo) {
  // El parámetro "metodo" es un string que coincide con el nombre de una propiedad del objeto recibido.
  // Esta propiedad contiene una función en su interior. Debes invocarla/ejecutarla.
  // [NOTA]: no necesitar retornar nada.
  // Tu código:
  
  objeto.metodo()
  console.log(objeto.metodo)
}

const object = {
  x: 0,
  incrementX: function () {
     this.x++;
     console.log('funciona')
  },
};
invocarMetodo(object, 'incrementX') */

function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function () {
      this.precio*(1 - this.porcentajeDeDescuento)
      return precioFinal} }
    //objetoProducto.calcularPrecioDescuento = caca
    //console.log(objetoProducto.calcularPrecioDescuento[0])
  

  const storeItem = {
    precio: 80,
    porcentajeDeDescuento: 0.1 }

agregarMetodoCalculoDescuento(storeItem)