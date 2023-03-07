import React from 'react'
import { Card, Stack, Heading, Divider, CardBody, CardFooter, Image, Text, Center } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";



const Item = ({id, nombre, stock, categoria, img, desc}) => {
    
  return (
    <div>
        <div key={id}>
        <Center   color='white'>
            <Card maxW='sm' className='card-container'>
                <CardBody>
                    <Image boxSize='300px' borderRadius="lg" src={img} />
                    <Stack mt='6' spacing='3'>
                    <Heading size='md'>{nombre}</Heading>
                    <Text>
                    {categoria}
                    </Text>
                    <Text color='blue.600' fontSize='2xl'>
                        Precio: ${stock}
                    </Text>
                    <Text>
                        {desc}
                    </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>    
                    <Button  colorScheme='blue'>
                        <Link to= {`/item/${id}`}>Detalle</Link>
                    </Button>    
                </CardFooter>
            </Card>   
        </Center>
        </div>

    </div>
  )
}

export default Item;