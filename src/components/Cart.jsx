import React from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Box
} from '@chakra-ui/react'

const Cart = () => {
  return (
    <div>
      <Box  w='50%' p={4} >
        
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type='email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      </Box>
    </div>
  )
}

export default Cart
  


