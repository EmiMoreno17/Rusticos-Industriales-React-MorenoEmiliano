import React from "react";
import CartWidget from "./CartWidget";
import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react'

const NavBar = () => {

      return (
          <>

        

        
        <div>
            <Grid templateColumns='repeat(3, 1fr)' gap={10}>
                <h1>Rusticos Industriales</h1> 
                <Menu>
                    <MenuButton as={Button}>Productos</MenuButton>
                        <MenuList>
                            <MenuItem>Producto 1</MenuItem>
                            <MenuItem>Producto 2</MenuItem>
                            <MenuItem>Producto 3</MenuItem>
                            <MenuItem>Producto 4</MenuItem>
                        </MenuList>
                </Menu>
                <CartWidget />
 
            </Grid>
        </div>
        
        
        </>


);
};

export default NavBar;





