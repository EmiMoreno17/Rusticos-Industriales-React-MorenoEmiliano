import React from 'react'
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'

const CartWidget = () => {

  const [numero, setNumero] = useState()

  return (
    <div className="cart">
      <Button size="lg" variant="outline" colorScheme="blue">
        <span className="material-symbols-outlined">shopping_cart</span>
        <span>0</span>
      </Button>
  </div>
    
  )
}

export default CartWidget;