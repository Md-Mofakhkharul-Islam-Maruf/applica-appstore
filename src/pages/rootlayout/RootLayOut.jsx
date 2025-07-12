import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/navbar/Navbar';
import Footer from '../shared/footer/Footer';
const RootLayOut = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-[80vh]">
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayOut;