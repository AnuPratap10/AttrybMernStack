import React from "react";
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Deshboard from "../pages/Deshboard";
import Signup   from "../components/Auth/Signup"
import Login   from "../components/Auth/Login"
import AddCarDetails from "../components/CarDetails/AddCarDetails";
import CarList from "../components/CarDetails/CarList";


const AppRouter = () => {
  return (
    <Routes>
     
     
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path= '/login' element ={<Login/>}/>
      <Route path= '/addcar' element ={<AddCarDetails/>}/>
      <Route path="/viewcars" element={<CarList/>} />





    </Routes>
  );
};

export default AppRouter;
