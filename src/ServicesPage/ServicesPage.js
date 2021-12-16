import React from 'react';
import Services from '../AllServices/Services';
import Header from '../Header/Header';
import Topbar from '../Topbar/Topbar';

const ServicesPage = () => {
    return (
        <div>
           <Topbar></Topbar>
            <Header></Header>
            <Services></Services>
        </div>
    );
};

export default ServicesPage;