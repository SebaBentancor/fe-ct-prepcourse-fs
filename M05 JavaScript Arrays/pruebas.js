function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var producto = 0
   var args = [...arguments]
   if (args.length != 0) {
      producto = 1
      args.forEach(num => {
         if (isNaN(num)) {
            return 0 }
         producto = producto*num})    
      }
   console.log(producto)
   return producto 
}

multiplicarArgumentos(5, 5);
multiplicarArgumentos();
multiplicarArgumentos(3, 3, 3, 3);
multiplicarArgumentos(1);
multiplicarArgumentos(10, 0, 10)
