import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from "./ItemCount"
import { Card, CardBody, Image, Stack, Text, CardFooter, Divider, Button, ButtonGroup, Link, Heading, Center} from '@chakra-ui/react'



const ItemDetail = ({productos}) => {
  const {id} = useParams();
  console.log(id);


  const productosFilter = productos.filter((productos) => productos.id === id);
  
  return (
    <>
    {productosFilter.map((productos) => (
      <div key={productos.id}>
        <Center  color='white'>
          <Card maxW='sm' className='card-container'>
                <CardBody>
                  <Image borderRadius="lg" src={productos.img} />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{productos.nombre}</Heading>
                    <Text color="blue.800" fontSize="l">
                      Descripcion: {productos.desc}
                    </Text>
                    <Text color="blue.800" fontSize="l">
                      Categoria: {productos.categoria}
                    </Text>
                    <Text color="red.600" fontSize="xl">
                      Stock: {productos.stock}
                    </Text>
                    <Text color="green.600" fontSize="xl">
                      Precio: $ {productos.precio}
                    </Text>
                  </Stack>
                </CardBody>
              <Divider />
              <CardFooter>
                  <ButtonGroup spacing='2'>
                  <Button  colorScheme='blue'>
                      <Link to= {`/item/${id}`}>Agregar al carrito</Link>
                  </Button>
                  </ButtonGroup>   
              </CardFooter>
              <ItemCount
                stock={productos.stock}
                id={productos.id}
                precio={productos.precio}
                nombre={productos.nombre}
              />
          </Card>
        </Center>
      </div>  

    ))}
    </>
  )
}

export default ItemDetail;