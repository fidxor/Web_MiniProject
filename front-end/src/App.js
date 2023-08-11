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
                <Route path="/board/:id" element={<BoardDetail />}/>
                <Route path="/question-create" element={<BoardCreate />} />
              </Routes>
          </div>
      </BrowserRouter>
    </>
  );
}
export default App;