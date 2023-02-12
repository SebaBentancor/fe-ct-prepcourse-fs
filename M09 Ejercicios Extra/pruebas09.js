 /*var numbers = [[1,2],[1,3],[1,5]]
 console.log(JSON.stringify(numbers))

 console.table(numbers)

 function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    var arregloString = string.split(''),
       objeto = {}
    arregloString.forEach(elemento => {
        //console.log(elemento)
       if (!Object.keys(objeto).includes(elemento)) {
          objeto[elemento] = 1
          console.log(objeto[elemento])
       }
       else {
          objeto[elemento] += 1
       }
    })
    console.log(objeto)
    return objeto
 }

 numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda')

 function capicua(numero) {
    // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
    // Caso contrario: "No es capicua".
    // Tu código:
    var enString = numero.toString()
       numeroSplit = enString.split('')
       nuevoNumero = []
    console.log(enString)
    numeroSplit.forEach(elemento => {nuevoNumero.unshift(elemento)})
    console.log(numeroSplit)
    console.log(nuevoNumero)
    if (numeroSplit.toString()==nuevoNumero.toString()) {
       return console.log('Es capicua')
    }
    else {
       return console.log('No es capicua')
    }

 }

 capicua(12321)*/

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

sortArray(['me','voy','a','cagar','en','tu','a','puta','madres'])
