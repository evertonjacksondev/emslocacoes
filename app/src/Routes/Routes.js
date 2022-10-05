import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";

import Catalogo from "../Pages/Catalogo/Catalogo";
import CreateNewCar from "../Pages/CreateNewCar/CreateNewCar";
import Home from "../Pages/Home/Home";
import Reserva from "../Pages/Reserva/Reserva";
import ReservaInformation from "../Pages/Reserva/ReservaInformation";


const AppRoute = () => {
    return (
        <React.Fragment>
        <NavBar/>
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/Catalogo" element={<Catalogo />} />
                <Route path="/CreateNewCar" element={<CreateNewCar />} />
                <Route path="/home" element={<Home />} />
                <Route path="/Reserva" element={<Reserva />} />
                <Route path="/ReservaInformation" element={<ReservaInformation />} />
            </Routes>
        </React.Fragment>
    );
}

export default AppRoute;