import React from 'react'
//suma numeros grandes
//5
let ar=[1000000001, 1000000002, 1000000003, 1000000004, 1000000005]
//resultado esperado 5000000015

let suma = 0
for (let i=0; i<ar.length; i++){
    suma += ar[i]
}
console.log(suma)



const Ejercicio3 = () => {
  return (
    <div>
      <h1>Ejercicio3 hackerRank</h1>
      <h1>La sumatoria es {suma}</h1>
    </div>
  )
}

export default Ejercicio3
