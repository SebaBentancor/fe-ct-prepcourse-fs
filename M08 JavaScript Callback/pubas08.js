/*function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    var arrayConA = []
    function empiezaConA (palabra) {
        //
       if (palabra.split('')[0] == 'a' || palabra.split('')[0] == 'A') {
          arrayConA.push(palabra)
       }
       console.log(arrayConA)
       //return arrayConA
    }
    //arrayConA = empiezaConA() 
    //console.log(arrayConA)
    //arrayOfStrings.map(empiezaConA)
    
 }

 function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    var arrayConA = []
    function empiezaConA (palabra) {
        //
       if (palabra.split('')[0] == 'a' || palabra.split('')[0] == 'A') {
          return palabra
       }
       else {
        return ''
       }
       //console.log(arrayConA)
       
    }
    arrayConA = arrayOfStrings.map(empiezaConA)
    console.log(arrayConA)
    //arrayOfStrings.map(empiezaConA)
 }*/

 function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    var arrayConA = []
    function empiezaConA (palabra) {
       if (palabra.split('')[0] == 'a' || palabra.split('')[0] == 'A') {
        console.log(palabra)
            arrayConA.push(palabra)
       }
    }
    arrayOfStrings.forEach(empiezaConA)
 }

 var array = [
    'abajo',
    'pera',
    'escalera',
    'alerta',
    'indice',
    'azteca',
    'arbol',
    'buzo',
 ]

 filter(array)