import React from 'react'
import ItemDetail from './ItemDetail'
import Datos from "../datos.json"

const ItemDetailContainer = () => {
  return (
    <ItemDetail productos={Datos} />
  )
}

export default ItemDetailContainer