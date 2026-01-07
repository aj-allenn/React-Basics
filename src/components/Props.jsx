import React from 'react'

function Props() {
    const name="Allen";
  return <Child name={name}/>;
}
function Child({name}){
    return <p>hello {name}</p>
    
}

export default Props
