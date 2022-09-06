import NavBar from './components/NavBar';
import './App.css';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useSelector } from 'react-redux';

function App() {
  const {showModal} = useSelector(store => store.modal);

  console.log(showModal)

  return (
    <main>
      {showModal ? <Modal/> : null}
      <NavBar/>
      <CartContainer/>
    </main>
  );
}

export default App;
