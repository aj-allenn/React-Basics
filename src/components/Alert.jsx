import React from 'react'

function Alert() {

    const handleClick=()=> alert("button clicked");

  return (
    <div>
      <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default Alert
