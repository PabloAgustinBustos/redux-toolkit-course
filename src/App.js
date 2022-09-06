import NavBar from './components/NavBar';
import './App.css';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { getCartItems } from './features/cart/cartSlice';
import { useEffect } from 'react';

function App() {
  const { cartItems, isLoading } = useSelector(store => store.cart);
  const {showModal} = useSelector(store => store.modal);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  return (
    <main>
      {showModal ? <Modal/> : null}
      <NavBar/>
      {isLoading ? <h1>Loading...</h1> : <CartContainer/>}
    </main>
  );
}

export default App;
