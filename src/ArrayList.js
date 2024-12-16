import React from 'react'


 function ArrayList() {
    const Fruits = ["Apple", "Banana", "Mango", "Pine-Apple", "Graps", "Orange"]

    return (
   <>
   <ol>
    {Fruits.map(x=><li key={x}>{x}</li>)}
   </ol>
   </>
  )
}
export default ArrayList;

