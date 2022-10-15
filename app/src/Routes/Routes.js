import React from "react";
import { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar/NavBar";
import CarsDetail from "../Pages/Cars/CarsDetail";
import CarsPage from "../Pages/Cars/CarsPage";
import Catalog from "../Pages/Catalog/Catalog";
import ReservaPage from "../Pages/Reserva/ReservaPage";
import ReservaDetail from "../Pages/Reserva/ReservaDetail";
import Login from "../Pages/Login/Login"
import { ProtectedRoutes } from "../Routes/auth"


const AppRoute = () => {
    return (
        <Fragment>
            {['/frota', '/cadastro', '/cadastro/new', '/reserva', 'Sair'].includes(useLocation().pathname.toLocaleLowerCase()) && <NavBar />}
            <Routes>
                <Route path="/admin" element={<Login />} />
                <Route path="*" element={<Catalog />} />
                <Route element={<ProtectedRoutes />} >
                    <Route path="/frota" element={<Catalog />} />
                    <Route path="/sair" element={<Catalog />} />
                    <Route path="/frota/:id" element={<CarsPage />} />
                    <Route path="/cadastro" element={<CarsPage />} />
                    <Route path="/cadastro/:id" element={<CarsDetail />} />
                    <Route path="/reserva" element={<ReservaPage />} />
                    <Route path="/reserva/:id" element={<ReservaDetail />} />
                </Route>
            </Routes>
        </Fragment>
    );
}

export default AppRoute;