import Home from "./HomeSection/Home";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SingleProduct from "./SinglaProductPage/SingleProduct/SingleProduct";
import ServicesPage from "./ServicesPage/ServicesPage";



function App() {
  return (
<div className="App">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="home" element={<Home />} />
    <Route path="/services" element={<ServicesPage/>}/>
    <Route path="/service/:id" element={<SingleProduct />} />
  </Routes>
  </BrowserRouter>
</div>
  );
}

export default App;
