import React from "react";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import Catalogo from "../Pages/Catalogo/Catalogo";
import CreateNewCar from "../Pages/CreateNewCar/CreateNewCar";
import Home from "../Pages/Home/Home";
import Reserva from "../Pages/Reserva/Reserva";
import ReservaInformation from "../Pages/Reserva/ReservaInformation";


const AppRoute = () => {
    return (
        <Fragment>
            <NavBar />
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/createNewCar" element={<CreateNewCar />} />
                <Route path="/home" element={<Home />} />
                <Route path="/reserva" element={<Reserva />} />
                <Route path="/reservainformation" element={<ReservaInformation />} />
            </Routes>
        </Fragment>
    );
}

export default AppRoute;