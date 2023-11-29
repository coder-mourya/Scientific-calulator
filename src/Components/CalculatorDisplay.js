import React from "react";
import "./display.css"


const CalculatorDisplay = ({ input, setInput, answer }) => {
    const clickHandle = (e) => {
        const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

        if (e.target.value === "" || re.test(e.target.value)) {
            setInput(e.target.value);
        }
    };

    return (
        <>
            <div className="display">
                {answer === "" ? (
                    <>
                        <input type="text" name="input" className="input text-dark" style={{ padding: "6px" }} value={input} placeholder="0" maxLength={12} onChange={clickHandle} autoComplete="off" disabled />
                    </>
                ) : (
                    <>
                        <input type="text" name="input" className="value"

                            value={input} placeholder="0" maxLength={12} disabled />

                        <input type="text" name="value" className="input" value={answer} disabled />
                    </>
                    
                )}
            </div>
        </>
    );
};

export default CalculatorDisplay;