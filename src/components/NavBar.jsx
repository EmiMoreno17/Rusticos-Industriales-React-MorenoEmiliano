import React, { useState } from "react";
import CartWidget from "./CartWidget";
import { Button, Menu, MenuButton, MenuList, MenuItem, Image} from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react'
import { Link } from "react-router-dom";




const NavBar = () => {

      return (
          <>

        

        
        <div className=" navbar">
        
            <Grid templateColumns='repeat(4, 1fr)' gap={10}>
                <Link to="/">
                <Image
                    borderRadius='full'
                    boxSize='150px'
                    src="../logo.png"
                    alt='Dan Abramov'
                />
                </Link>
                <Menu>
                    <MenuButton as={Button} variant="outline" colorScheme="blue" >Categorias</MenuButton>
                        <MenuList>
                            <Link to={`/categoria/${"mesas"}`}>
                                <MenuItem>Mesas</MenuItem>
                             </Link>
                             <Link to={`/categoria/${"sillas"}`}>
                                <MenuItem>Sillas</MenuItem>
                             </Link>
                             <Link to={`/categoria/${"decoraciones"}`}>
                                <MenuItem>Decoraciones</MenuItem>
                             </Link>
                             <Link to={`/categoria/${"muebles"}`}>
                                <MenuItem>Racks</MenuItem>
                             </Link>
                             <Link to={`/categoria/${"escritorios"}`}>
                                <MenuItem>Escritorios</MenuItem>
                             </Link>
                        </MenuList>
                </Menu>
                <Menu>
                    <Link to={"/productos"}>
                        <MenuButton as={Button} variant="outline" colorScheme="blue" >Productos</MenuButton>
                    </Link>

                </Menu>
                <Link to={"/cart"}>
                <CartWidget />
                </Link>
            </Grid>
        </div>

        
                    
        </>


);
};

export default NavBar;





