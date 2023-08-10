import './App.css';
import Login from './Login';
<<<<<<< HEAD
import Signup from './Signup';

function App() {
  return (
    <>
      {/* <Login></Login> */}
      <Signup></Signup>
    </>
=======
import SignUp from './Signup';
import WishList from './WishList';
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
    </BrowserRouter>
    
>>>>>>> main
  );
}

export default App;