import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { addToCart } from './store/actions';
import { CartItem } from './store/types';
import { CircularProgress } from '@mui/material';
import { RootState } from './store/store';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  const cart: CartItem[] = useSelector((state: RootState) => state.cart);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (isLoaded) {

      const fetchProducts = async () => {
        try {
          const response = await axios.get("https://fakestoreapi.com/products");
          const products: CartItem[] = response.data.slice(0, 4).map((product: any) => ({
            id: product.id,
            name: product.title,
            description: product.description,
            quantity: 1,
            price: product.price,
            image: product.image,
          }));

          products.forEach((product: CartItem) => {
            dispatch(addToCart(product));
          });
          setIsLoaded(false);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };

      fetchProducts();
    }
  }, [isLoaded, dispatch]);

  return (
    <>
      <Header />
      {isLoaded && <CircularProgress />}
      {!isLoaded && (
        <Cart cart={cart} />
      )}
      <Footer />
    </>
  );
}

export default App;