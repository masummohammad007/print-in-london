import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
   <div className="bg-primary w-100 h-100">
    
  {/* <Row className="justify-content-md-center">
    <Col xs lg="2">
      <h1 data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="text-left custom-font">Cheapest & Quality Printing Service in London</h1>
    </Col>
    <Col md="auto" className="gap-width">
      <img  data-aos="zoom-in" src="https://i.ibb.co/4S95F2C/printing-hub-london-business-card.jpg" alt="" srcset="" className="img-custom" />
    </Col>
    <Col xs lg="2">
    <img data-aos="flip-right" src="https://i.ibb.co/5WPC1QW/printing-hub-london-booklet.jpg" alt="" srcset="" className="img-custom" />
    </Col>
    <Col xs lg="2">
    <img  data-aos="fade-down-left" src="https://i.ibb.co/FBCfhvT/printing-hub-london-postars.jpg" alt="" srcset="" className="img-custom" />
    </Col>
    <Col xs lg="2">
    <img  data-aos="fade-down-left" src="https://i.ibb.co/FBCfhvT/printing-hub-london-postars.jpg" alt="" srcset="" className="img-custom" />
    </Col>
  </Row> */}

    <div className="container d-flex custom-css">
      <div className="div-0">
      <div className="div-1 custom-align">
        <h1 className="mt-5 ml-5" data-aos="zoom-in">Cheapest & Quality <br /> Printing Service <br /> in London</h1>
      </div>
      </div>
    <div className="banner-img d-flex">
      <div className="div-3">
      <img  data-aos="fade-down-left" src="https://i.ibb.co/FBCfhvT/printing-hub-london-postars.jpg" alt="" srcset="" className="img-custom" />
      </div>
      <div className="div-2">
      {/* <img  data-aos="zoom-in" src="https://i.ibb.co/4S95F2C/printing-hub-london-business-card.jpg" alt="" srcset="" className="img-custom" /> */}
      </div>
      <div className="div-4">
      <img  data-aos="fade-down-left" src="https://i.ibb.co/FBCfhvT/printing-hub-london-postars.jpg" alt="" srcset="" className="img-custom" />
      </div>
    </div>

    </div>

     </div>
    
    );
};

export default Banner;