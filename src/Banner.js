import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import './Banner.css';
import Particles from "react-tsparticles";

// import Particles from 'react-particles-js';

const Banner = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
    return (  
   <div className="background-custom w-100 h-100">
     <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 160,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 0,
              duration: 2,
              opacity: 0.8,
              size:25,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    <div className="container d-flex custom-css">
      <div className="div-0">
      <div className="div-1 custom-align">
        <h1 className="mt-5 ml-5 text-white custom-font-size" data-aos="zoom-in"> <br />  <span style={{ color: 'white', fontWeight: 'bold',fontSize:'50px' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter
            words={[' Cheapest & Quality']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span></h1>
        <h1 className="custom-font-size">Printing Service In London</h1>
        
    
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