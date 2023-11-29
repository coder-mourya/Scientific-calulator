import React, { useState, useEffect } from "react";
import CalculatorDisplay from "./CalculatorDisplay";
import CalculatorButtons from "./CalculatorButtons";
import { evaluate, round } from "mathjs";

import "./calculator.css"



function Calculator() {

  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState("");
  //const [degrees, setDegrees] = useState(0);
  //const [radians, setRadians] = useState(0);
  // const [isDegreeToRadian, setIsDegreeToRadian] = useState(true);

  const [isRadians, setIsRadians] = useState(true);

  const [isInverseMode, setIsInverseMode] = useState(false);


  const toggleDegree = () => {
    setIsRadians((prevIsRadians) => !prevIsRadians);
  };



  const toggleInverseMode = () => {
    setIsInverseMode((prevIsInverseMode) => !prevIsInverseMode);
  };




  useEffect(() => {
    const button = document.querySelector('.asin');
    button.textContent = isInverseMode ? 'asin' : 'sin';
  }, [isInverseMode]);

  useEffect(() => {
    const button = document.querySelector('.atan');
    button.textContent = isInverseMode ? 'atan' : 'tan';
  }, [isInverseMode]);

  useEffect(() => {
    const button = document.querySelector('.acos');
    button.textContent = isInverseMode ? 'acos' : 'cos';
  }, [isInverseMode]);



  const calculateNaturalLog = () => {
    const currentValue = parseFloat(input);

    if (!isNaN(currentValue) && currentValue > 0) {
      const result = Math.log(currentValue);
      setAnswer(result);
      setInput(result.toString())
    } else {
      setAnswer("Enter value first");
      setInput("Enter value first")
    }
  }

  /*
    const handleDegreeChange = (e) => {
      const degreeValue = e.target.value;
      setDegrees(degreeValue);
  
      if (isDegreeToRadian) {
        const radianValue = (degreeValue * Math.PI) / 180;
        setRadians(radianValue);
      }
    };
  
  
    const handleRadianChange = (e) => {
      const radianValue = e.target.value;
  
      setRadians(radianValue);
  
      if (!isDegreeToRadian) {
         const degreeValue = (radianValue * 180) / Math.PI;
          setDegrees(degreeValue);
         }
    };
  */


  /*const toggleMode = () => {
     setIsDegreeToRadian(!isDegreeToRadian);
 
     if (isDegreeToRadian) {
         const radianValue = (degrees * Math.PI) / 180;
         setRadians(radianValue);
     } else { const degreeValue = (radians * 180) / Math.PI; 
     
     setDegrees(degreeValue); }
 };*/







  /*useEffect(() => {
    
     const button = document.querySelector('.btnRed');
     button.textContent = isDegreeToRadian ? 'Rad | Deg' : 'Deg | Rad';
   }, [ isDegreeToRadian]);*/


  const toggleMode = () => {
    if (answer !== "") {
      const inputValue = parseFloat(answer);

      if (!isNaN(inputValue)) {
        const convertedValue = isRadians ? (inputValue * 180) / Math.PI : inputValue;
        setIsRadians(!isRadians); // Toggle the mode
        setInput(convertedValue.toString());
      } else {
        setInput("Invalid Answer");
      }
    }
  };




  useEffect(() => {
    const button = document.querySelector('.btnRed');
    if (button) {
      button.textContent = isRadians ? 'Rad | Deg' : 'Deg | Rad';
    }
  }, [isRadians]);




  const power = () => {
    if (input === "") return;

    try {
      const result = evaluate(input);
      const powerResult = Math.pow(result, result);
      setAnswer(powerResult);
      setInput(String(powerResult));
    } catch (error) {
      setAnswer("Invalid Input!!");
      setInput("Invalid Input!!");
    }
  };



  //input
  const clickHandle = (event) => {
    if (answer === "Invalid Input!!") return;
    let val = event.target.innerText;

    //if (val === "Xy") val = "^";

    if (val === "EXP") val = "E";
    else if (val === "3√") val = "^(1÷3)";
    else if (val === "log") val = "log(";
    else if (val === "tan") val = isInverseMode ? "atan(" : "tan(";
    else if (val === "sin") val = isInverseMode ? "asin(" : "sin(";
    else if (val === "cos") val = isInverseMode ? "acos(" : "cos(";
    else if (val === "π") val = "pi";
    else if (val === "e") val = "e";
    else if (val === "Ans") val = answer;
    else if (val === "INV") toggleInverseMode();

    setInput((prevInput) => prevInput + val);


    let str = input + val;
    if (str.length > 14) return;
    if (answer !== "") {
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);

  };




  //Clear screen
  const clear = () => {
    setInput("");
    setAnswer("");
  };

  // check brackets are balanced or not
  const checkBracketBalanced = (expr) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };






  // calculate final answer
  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    finalexpression = input.replaceAll("^", "**");  //for eval()
    finalexpression = finalexpression.replaceAll("x", "*");
    // finalexpression = finalexpression.replaceAll("÷", "/");







    // evaluate square root
    let noSqrt = input.match(/√[0-9]+/gi);

    if (noSqrt !== null) {
      let evalSqrt = input;
      for (let i = 0; i < noSqrt.length; i++) {
        evalSqrt = evalSqrt.replace(
          noSqrt[i],
          `sqrt(${noSqrt[i].substring(1)})`
        );
      }
      finalexpression = evalSqrt;
    }




    try {
      // check brackets are balanced or not
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }
      result = evaluate(finalexpression); //mathjs



    } catch (error) {
      result =
        error.message === "Brackets are not balanced!"
          ? "Brackets are not balanced!"
          : "Invalid Input!!"; //error.message;
    }



    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 11));
  };



  // remove last character
  const Backspace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };




  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if (key >= "0" && key <= "9") {
        setInput(input + key);

      } else if (key === "Enter") {
        calculateAns();
      } else if (key === "Backspace") {
        Backspace();

      } else if (key === "Escape") {
        clear();
      } else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "(" || key === ")" || key === "." || key === "e") {
        setInput(input + key);
      }
    }

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };

  });

  return (

    <> <div className="container custMain-container  justify-content-center">


      <div className="container main mt-2 mb-2 ">

        <CalculatorDisplay input={input} setInput={setInput} answer={answer} />

        <CalculatorButtons

          clickHandle={clickHandle}
          clear={clear}
          Backspace={Backspace}
          toggleDegree={toggleDegree}
          toggleMode={toggleMode}
          calculateAns={calculateAns}
          //  onChange={isDegreeToRadian ? handleDegreeChange : handleRadianChange} 

          calculateNaturalLog={calculateNaturalLog}
          toggleInverseMode={toggleInverseMode}
          power={power}


        />



      </div>

    </div>
    </>
  );
}

export default Calculator;