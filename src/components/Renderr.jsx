import React from 'react'

function Renderr({LoggedIn}) {
  return (
    <h1>{LoggedIn? "log in" : "Guest"}</h1>
  )
}

export default Renderr
