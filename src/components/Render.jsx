import React from "react";

function Render() {

    const fruits=["Apple","Orange","Grapes"]
  return (
    <div>
        <ul>
         {fruits.map((fruit,index)=>(
          <li key={index}>{fruit}</li>
      ))}
      </ul>
    </div>
  )
}

export default Render
