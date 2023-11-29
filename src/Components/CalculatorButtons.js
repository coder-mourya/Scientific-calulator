import React from "react";
import "./buttons.css"




const CalculatorButtons = ({ clickHandle, toggleMode, calculateAns, clear, toggleInverseMode, isRadians, calculateNaturalLog, power }) => {



  return (
    <>

      <div className="container justify-content-center mb-3">
        <div className="grid-container" >

        <div className="grid-item-2">
          <button className="btnRed grid-item" onClick={toggleMode}>
          {isRadians ? 'Rad | Deg' : 'Deg | Rad'}
          </button>

        </div>

      

        <div>
          <button className="grid-item" onClick={clickHandle}>
            !
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            (
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            )
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            %
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clear}>
            AC
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={toggleInverseMode}>
            INV
          </button>
        </div>
        <div>
          <button className="grid-item asin" onClick={clickHandle}>
            sin
          </button>
        </div>
        <div>
        <button className="grid-item" onClick={calculateNaturalLog}>
        ln
      </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            7
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            8
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            9
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            ÷
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            π
          </button>
        </div>
        <div>
          <button className="grid-item acos" onClick={clickHandle}>
            cos
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            log
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            4
          </button>
        </div>
        <div className="cutmbtncoler"> 
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            5
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            6
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            x
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            e
          </button>
        </div>
        <div>
          <button className="grid-item atan" onClick={clickHandle}>
            tan
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            √
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            1
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            2
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            3
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            -
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            Ans
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            EXP
          </button>
        </div>
        <div>
          <button className="grid-item" value={"^"} onClick={power}>
            X<sup>y</sup>
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            0
          </button>
        </div>
        <div className="cutmbtncoler">
          <button className="grid-item cutmbtncoler" onClick={clickHandle}>
            .
          </button>
        </div>
        <div className="cutbluecolr">
          <button className="grid-item cutbluecolr" onClick={calculateAns}>
            =
          </button>
        </div>
        <div>
          <button className="grid-item" onClick={clickHandle}>
            +
          </button>
        </div>

        </div>

      </div>
    </>
  )
}

export default CalculatorButtons;
