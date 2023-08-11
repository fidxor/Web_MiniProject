import './App.css';
import Login from './Login';
import Signup from './Signup';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Board from "./Board";
import BoardDetail from "./BoardDetail";
import BoardCreate from "./BoardCreate";

function App() {
  return (
    <>
      {/* <Login></Login>
      <Signup></Signup> */}

      <BrowserRouter>
          <Navbar />
          <div className="container my-3">
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/board" element={<Board />}/>
<<<<<<< HEAD
                <Route path="/board/:id" element={<BoardDetail />}/>
                <Route path="/MainBoard-create" element={<BoardCreate />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
=======
                <Route path="/board/:bnum" element={<BoardDetail />}/>
                <Route path="/main-board-create" element={<BoardCreate />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Login" element={<Login />} />
>>>>>>> 215ff306c7f2f0150b391ce6f3192540112a47db
              </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}
export default App;