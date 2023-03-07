import React from 'react'
import Datos from "../datos.json"
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
  const {categoria} = useParams();
  
 const productosFilter = Datos.filter((productos) => productos.categoria === categoria);
  return (

  <div>
    {categoria ? <ItemList productos={productosFilter} /> : <ItemList productos={Datos} />}
  </div>

  )
};


export default ItemListContainer;