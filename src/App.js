import Header from "./Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "./Banner";
import Topbar from "./Topbar/Topbar";
import Services from "./AllServices/Services";
import Ourstory from "./OurStorySection/Ourstory";
import TestimonialPage from "./Testimonial/TestimonialPage";
function App() {
  return (
<div className="App">
  <Topbar></Topbar>
   <Header></Header>
   <Banner></Banner>
   <Services></Services>
   <Ourstory></Ourstory>
   <TestimonialPage></TestimonialPage>
</div>
  );
}

export default App;
