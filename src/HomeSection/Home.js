import React from 'react';
import Services from '../AllServices/Services';
import Banner from '../Banner';
import Header from '../Header/Header';
import Ourstory from '../OurStorySection/Ourstory';
import TestimonialPage from '../Testimonial/TestimonialPage';
import Topbar from '../Topbar/Topbar';

const Home = () => {
    return (
        <div>
            <Topbar></Topbar>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <Ourstory></Ourstory>
            <TestimonialPage></TestimonialPage>
        </div>
    );
};

export default Home;