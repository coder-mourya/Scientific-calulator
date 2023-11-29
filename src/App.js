
import React, {useState} from 'react';
import Img from './Components/Images/pic1';
import Sidebar from "./Components/Sidebar/Sidebar"
import Calculator from './Components/Calculator';
import Footer from './Components/Footer';
import "./App.css"





const App = () => {

  const [isOpen, setIsOpen] = useState(false);

const toggleSidebar = () => {
  setIsOpen(!isOpen);
};


  return (
      <>
    <div className="App ">

      <div className="row g-0">
        <div className={ `col-12 col-md-3 col-lg-2 custm-sidebar ${isOpen ? 'open' : ''}`}>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} /> 
        </div>

        <div className="col-12  col-md-9 col-lg-10 custm-mainbar">
        <Img />
        <Calculator />
        <Footer />
        </div>
      </div>


    </div>
      </>
  );
};

export default App;
