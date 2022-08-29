// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./layout/header/Header";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./layout/home/Home";
import Body from "./layout/body/Body";
import DoneTask from "./layout/DoneTask/DoneTask";
function App() {
  return (
    <BrowserRouter>
      <div className="">
        <Header />
        
      {/* <Body /> */}
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Home />} />
      <Route path='/newtask' element={<Home />} />
      <Route path='/doingtask' element={<Home />} />
      <Route path='/donetask' element={<DoneTask />} />
    </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
