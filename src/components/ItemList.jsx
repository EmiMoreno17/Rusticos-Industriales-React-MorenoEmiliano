import React from 'react'
import Item from "./Item"
import { Container } from '@chakra-ui/react'



const ItemList = ({productos}) => {
  return (
    
      <Container maxW='fit-content' className='catalogo' >
          {productos?.map((productos) => (
              <Item
                  key={productos.id}
                  id={productos.id}
                  nombre={productos.nombre}
                  desc={productos.desc}
                  precio={productos.precio}
                  stock={productos.precio}
                  categoria={productos.categoria}
                  img={productos.img}
              />
          ))}
        </Container>
    
  );
};

export default ItemList