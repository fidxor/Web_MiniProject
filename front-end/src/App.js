import './App.css';
import Login from './Login';
import SignUp from './Signup';
import WishList from './WishList';
import Board from './Board'
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
      <Route path='/board' element={<Board/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;