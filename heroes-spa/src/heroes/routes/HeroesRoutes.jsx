import {Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from './../../ui/components/Navbar';
import MarvelPage from './../pages/MarvelPage';
import DcPage from './../pages/DcPage';
import Search from './../pages/Search';
import Hero from '../pages/Hero';



const HeroesRoutes = () => {
    return (
        <>
            <Navbar/>

            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />

                    <Route path="search" element={<Search />} />
                    <Route path="hero/:id" element={<Hero />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}

export default HeroesRoutes
