import React, {useEffect} from "react";
import "./Modes.css";


const Modes = () =>{
  
  const updateButtonText = () =>{
    const screenWidth = window.innerWidth;
    const buttons = document.querySelectorAll('Modesbtn');

    buttons.forEach(button =>{
      const fullText = button.getAttribute('data-full-text');
      let modifiedText = fullText;

      if(screenWidth <= 768){
        modifiedText = fullText.slice(0, 10) + '...';
      }

      button.textContent = modifiedText;
    })
  };

  useEffect(() =>{
    updateButtonText();

    window.addEventListener('resize', updateButtonText);

    return () =>{
      window.removeEventListener('resize', updateButtonText);
    }
  }, []);


  return(
    <>
     <div className="custMOde d-flex justify-content-center mt-3 mt-sm-2 mt-md-3 mb-3  row">
        <button className="btn Modesbtn col my-2 mx-2" data-full-text="Basic Calculator">
          Basic Calculator
        </button>
        <button className="btn Modesbtn col my-2  mx-2 cust-scientificBtn" data-full-text="Scientific Calculator">
          Scientific Calculator
        </button>
        <button className="btn Modesbtn col my-2 mx-2" data-full-text="Graphing Calculator">
          Graphing Calculator
        </button>
        <button className="btn Modesbtn col my-2 mx-2" data-full-text="Printing Calculator">
          Printing Calculator
        </button>
        <button className="btn Modesbtn col my-2 mx-2" data-full-text="Financial Calculator">
          Financial Calculator
        </button>
      </div>

    </>
  )
}

export default Modes;