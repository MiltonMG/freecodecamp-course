import { Navigate, Route, Routes } from 'react-router-dom';

import { Home, Testimonials } from '../pages';


export const AppRouter = () => {

    const authStatus = 'authenticated'; // 'authenticated'; // 'not-authenticated';


    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/testimonials" element={ <Testimonials /> } />
        </Routes>
    )
}