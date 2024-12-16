import React from 'react'


function ObjectList() {

    const studentData = [
       {
        id : 123,
        name : "Raj",
        age : 21
       },
       {
        id : 456,
        name : "Ram",
        age : 22
       },{
        id : 789,
        name : "Abc",
        age : 23
       }
    ]

    // const Human = studentData.map(x => <li key={x.s}>My id is {x.id} & My Name is {x.name} & My Age is {x.age}</li>)

    const Human = studentData.map(x => <h1 key={x.p}>{x.id},{x.name},{x.age}</h1>)
  return (
    <div>
        {Human}
    </div>
  )
}

export default ObjectList;
