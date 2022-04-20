import React from 'react'

const Variable = () => {
    const saludo="Hola mundo"
    const imagen="https://picsum.photos/300";
  return (
      <>
    <h2>{saludo}</h2>
    <img src={imagen} alt="imagen"></img>
    </>
  )
}

export default Variable