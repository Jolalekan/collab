// import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Customer from "./component/Customer";
import Footer from "./component/Footer";
import Frequently from "./component/Frequently";
import GetStarted from "./component/GetStarted";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Plans from "./component/Plans";
import Testimonial from "./component/Testimonial";
// import Layout from "./page/Layout";
// import { Container } from "./page/Container";
// import ScrollToTop from "./components/ScrollToTop";


function App() {
  return (
    <div >
       <div className="gradient-container">
      <div className="noise-overlay"></div>
      <div className="grid-lines"></div>
      <div className="glow-effect"></div>
      <Navbar/>
      <Hero/>/
      </div>
      <Customer/>
      <GetStarted/>
      <Plans/>
      <Testimonial/>
      <Frequently/> 
      <Footer/>
      {/* <BrowserRouter> */}
      {/* <ScrollToTop/> */}
        {/* <Routes> */}
          {/* <Route element={<Layout />}> */}
            {/* <Route path="/" element={<Container />} /> */}
        
          {/* </Route> */}
        {/* </Routes> */}
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
