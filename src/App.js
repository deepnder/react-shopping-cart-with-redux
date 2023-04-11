import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
    </Provider>
    
    </>
  );
}

export default App;
