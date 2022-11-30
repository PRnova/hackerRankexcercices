import React from 'react'


//completar la suma simple array function 
const Ejercicio1 = () => {

let array = [1, 2, 3, 4, 10, 11];
//let tamanioArray= 6;
let suma = 0

for (let i = 0; i< array.length; i++){
//for (let i = 0; i< tamanioArray; i++){
    suma += array[i]
}


  return (
    <div>
      <h1>hackerRank1</h1>
       {console.log(array)}
       {console.log(suma)}
       <h1>{`la suma es ${suma}`}</h1>
    </div>
  )
}

export default Ejercicio1
