import React from 'react';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from '../Pages/HomePage/HomePage';
import EventosPage from '../Pages/EventosPage/EventosPage';
import TipoEventosPage from '../Pages/TipoEventosPage/TipoEventosPage';
import LoginPage from '../Pages/LoginPage/LoginPage';
import EventosAlunoPage from '../Pages/EventoAlunosPage/EventoAlunosPage';
import TestePage from '../Pages/TestePage/TestePage';
import { PrivateRoute } from './PrivateRoute';


import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Rotas = () => {
    return (
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route element={<HomePage/>} path='/' exact />
                    <Route
                    path='/tipo-eventos'
                    element={
                        <PrivateRoute redirectTo='/'>
                            <TipoEventosPage />
                        </PrivateRoute>}
                    />

                    <Route
                    path='/eventos'
                    element={
                        <PrivateRoute redirectTo='/'>
                            <EventosPage />
                        </PrivateRoute>}
                    />

                    <Route
                    path='/eventos-aluno'
                    element={
                        <PrivateRoute redirectTo='/'>
                            <EventosAlunoPage />
                        </PrivateRoute>}
                    />

                    <Route element={<LoginPage/>} path='/login' />

                </Routes>
            <Footer />

            </BrowserRouter>
    );
};

export default Rotas;