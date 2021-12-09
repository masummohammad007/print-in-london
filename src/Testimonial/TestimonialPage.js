import React from 'react';
import './TestimonialPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

const TestimonialPage = () => {
    return (
    <div className="container mb-5">
        <div className="custom-size">

<Carousel className="bg-primary pt-5">
    <Carousel.Item interval={1000} className="banner custom-size">
       {/* <img style={{width:"100%",height:"300px" ,visibility:"hidden"}} className="d-block w-100 h-100 img-fluid"src="https://image.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg"alt="First slide"
/> */}      
                         <Carousel.Caption style={{ color: "#222f3e" }}>
                             <img className="img-circle custom-img-width" src="https://tse4.mm.bing.net/th?id=OIP.Gc9bjgQjVRClz1q-EWrVqAHaHa&pid=Api&P=0&w=300&h=300" alt="" />
                              <h3 className="pt-5">Expert Doctor Available</h3>
                              <p>a doctor who has special training in and knowledge of a particular area of every department.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="banner custom-size" interval={1000}>
                         {/* <img style={{width:"100%",height:"300px",visibility:"hidden"}}
                              className="d-block w-100 h-100"
                              src="https://st4.depositphotos.com/1192060/20234/i/600/depositphotos_202345820-stock-photo-doctor-examining-patients-pulse-hospital.jpg"
                              alt="Second slide"
                         /> */}

                         <Carousel.Caption style={{ color: "#FFF" }}>
                         <img className="img-circle custom-img-width" src="https://tse3.mm.bing.net/th?id=OIP.73leZ--OdF3aNm4neYNmRwHaE7&pid=Api&P=0&w=249&h=167" alt="" />
                              <h3 className="pt-5">Hospital Management</h3>
                              <p>Hospital management system is a computer system that helps manage the information related to health care and aids in the job completion of health care providers effectively.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="banner custom-size">
                         {/* <img style={{width:"100%",height:"300px" ,visibility:"hidden"}}
                              className="d-block w-100 h-100"
                              src="http://healthcare.wsp-pb.com/wp-content/uploads/2017/09/engineering-humber-river-hospital.jpg"
                              alt="Third slide"
                         /> */}
                         <Carousel.Caption>
                         <img className="img-circle custom-img-width" src="https://tse2.mm.bing.net/th?id=OIP.WMWs4xkboZ7aFRwrbIO7QwHaGg&pid=Api&P=0&w=188&h=166" alt="" />
                              <h3 className="pt-5">Hospital Outlook</h3>
                              <p>Outlook boasts some very important services such as our new Outlook & District Health Centre with Acute care beds, level 4 Long term care facility, Medical Clinic, Public Health, and Home Care.</p>
                         </Carousel.Caption>
                    </Carousel.Item>
               </Carousel>


    </div>
    </div>
    );
};

export default TestimonialPage;