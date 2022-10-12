import React from "react";
import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import CarsDetail from "../Pages/Cars/CarsDetail";
import CarsPage from "../Pages/Cars/CarsPage";
import Catalog from "../Pages/Catalog/Catalog";
import ReservaPage from "../Pages/Reserva/ReservaPage";
import ReservaDetail from "../Pages/Reserva/ReservaDetail";


const AppRoute = () => {
    return (
        <Fragment>
            {['/frota', '/cadastro', '/cadastro/new', '/reserva', '/reserva/'].includes(useLocation().pathname.toLocaleLowerCase()) && <NavBar />}
            <Routes>
                <Route path="*" element={<Catalog />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/frota" element={<Catalog />} />
                <Route path="/frota/:id" element={<CarsPage />} />
                <Route path="/cadastro" element={<CarsPage />} />
                <Route path="/cadastro/:id" element={<CarsDetail />} />
                <Route path="/reserva" element={<ReservaPage />} />
                <Route path="/reserva/:id" element={<ReservaDetail />} />
            </Routes>
        </Fragment>
    );
}

export default AppRoute;