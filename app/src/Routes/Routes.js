import React from "react";
import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import CreateNewCar from "../Pages/CreateNewCar/CreateNewCar";
import Home from "../Pages/Home/Home";
import Reserva from "../Pages/Reserva/Reserva";
import ReservaInformation from "../Pages/Reserva/ReservaInformation";


const AppRoute = () => {
    return (
        <Fragment>
            {['/frota', '/reserva', '/frota/:id'].includes(window.location.pathname.toLocaleLowerCase()) && <NavBar />}
            <Routes>
                <Route path="*" element={<Home />} />
                <Route path="/catalogo" element={<Home />} />
                <Route path="/frota/:id" element={<CreateNewCar />} />
                <Route path="/frota" element={<Home />} />
                <Route path="/reserva" element={<Reserva />} />
                <Route path="/reserva/:id" element={<ReservaInformation />} />
            </Routes>
        </Fragment>
    );
}

export default AppRoute;