import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Inicio from "./components/Inicio";
import Cart from "./components/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer"


const App = () => {
	
	return (
		

		<ChakraProvider>
		<BrowserRouter>
		
			<NavBar/>

			<Routes>
				<Route exact path="/" element={<Inicio/>} />
				<Route exact path="/productos" element={<ItemListContainer />} />
				<Route exact path="/categoria/:categoria" element={<ItemListContainer/>} />
				<Route exact path="/item/:id" element={<ItemDetailContainer />} />
				<Route exact path="/cart" element={<Cart />} />
			</Routes>

		</BrowserRouter>
		</ChakraProvider>
		


		
		
	);
};

export default App;