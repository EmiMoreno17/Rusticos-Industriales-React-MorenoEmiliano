import React from 'react'
import { useState } from "react";

const ItemCount = () => {
    const [cantidad, setCantidad] = useState(1);

    console.log(cantidad)
  return (
    
    <div className="contador">
        <button onClick={() => setCantidad(cantidad - 1)}>-</button>
        <h2>{cantidad}</h2>
        <button onClick={() => setCantidad(cantidad + 1)}>+</button>

    </div>
  )
}

export default ItemCount;