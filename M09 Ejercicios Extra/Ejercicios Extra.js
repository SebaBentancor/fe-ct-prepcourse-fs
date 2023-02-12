/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDearreglos = []
   Object.entries(objeto).forEach(([key, value]) => {
      arregloDearreglos.push([key, value])  })
   return arregloDearreglos
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var arregloString = string.split(''),
      objeto = {}
   arregloString.forEach(elemento => {
      if (!Object.keys(objeto).includes(elemento)) {
         objeto[elemento] = 1
      }
      else {
         objeto[elemento] += 1
      }
   })
   return objeto
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var separacion = string.split(''),
      mayus = [],
      minus = []
   separacion.forEach(elemento => {
      if (elemento==elemento.toUpperCase()) {
         mayus.push(elemento)
      }
      else {
         minus.push(elemento)
      }
   })
   return (mayus.concat(minus).join(''))
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(' '),
      nuevaFrase = []
      nuevaPalabra = []
   palabras.forEach(palabra => {
      palabra.split('').forEach(elemento => {nuevaPalabra.unshift(elemento)})
      nuevaFrase.push(nuevaPalabra.join(''))
      nuevaPalabra = []
   })
   return nuevaFrase.join(' ')
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var enString = numero.toString()
      numeroSplit = enString.split('')
      nuevoNumero = []
   numeroSplit.forEach(elemento => {nuevoNumero.unshift(elemento)})
   if (numeroSplit.toString()==nuevoNumero.toString()) {
      return 'Es capicua'
   }
   else {
      return 'No es capicua'
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var separa = string.split('')
      nuevoString = []
   separa.forEach(letra => {
      if (letra!=='a' && letra!=='b' && letra!=='c') {
         nuevoString.push(letra)
      }
   })
   return nuevoString.join('')
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var newOrder = []
   corta = arrayOfStrings[0]
   aux = arrayOfStrings
   while (newOrder.length!=arrayOfStrings.length) {
      aux.forEach(palabra => {
         if (palabra.length < corta.length) {
            corta = palabra
         }
      })
   var filtrado = aux.filter(item => (item.length == corta.length))
   newOrder = newOrder.concat(filtrado)
   aux = aux.filter(item => (item.length != corta.length))
   corta = aux[0]
   }
return newOrder 
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var resultado = []
   array1.forEach(num1 => {array2.forEach(num2 => {
      if (num1==num2 && !resultado.includes(num1)) {
         resultado.push(num1)
      }
   })})
   return resultado
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
