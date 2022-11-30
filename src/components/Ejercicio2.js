import React from 'react'
//compare triplets

let a = [1, 2, 3,6,9,3]
let b = [3, 2, 1,3,4,11]
let acumuladorA= 0
let acumuladorB= 0

    for (let i = 0; i<a.length; i++){
        if (a[i]>b[i]){
            acumuladorA++
        }
        if (a[i]<b[i]){
            acumuladorB++
        }
    }

console.log(acumuladorA, acumuladorB)

const Ejercicio2 = () => {
  return (
    <div>
      <h1>acumuladorA es:{acumuladorA}</h1>
      <h1>acumuladorB es:{acumuladorB}</h1>
    </div>
  )
}

export default Ejercicio2
