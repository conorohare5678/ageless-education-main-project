import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import phoneImage from "../Images/Screenshot 2024-01-10 at 21.38.17.png";

//definition of smartphone component
function Smartphone_one() {
  //variable values set to empty string value
  const [displayValue, setDisplayValue] = useState("");
  //state set to false
  const [isRinging, setIsRinging] = useState(false);

  //useEffect to executed the ringing function
  useEffect(() => {
    if (isRinging) {
      // Simulate ringing effect with a delay
      const timer = setTimeout(() => {
        setIsRinging(false);
      }, 2000); // how long ringing is shown in seconds

      // Clear the timer when the component unmounts or when the call is answered
      return () => clearTimeout(timer);
    }
  }, [isRinging]);

  //function to handle numbers entered into the phone
  const handleButtonClick = (value) => {
    if (displayValue.length < 11) {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  //function to show ringing text
  const handleCall = () => {
    setIsRinging(true);
  };

  //method to show numbers on screen
  const calculateFontSize = () => {
    const length = displayValue.length;
    if (length <= 4) {
      return "2em";
    } else if (length <= 8) {
      return "1.5em";
    } else {
      return "1em";
    }
  };

  //return statement to render the phone component
  return (
    <div className="phone-container">
      {/**all functionality and styling with the phone defined inside here */}
      <img className="phone-img" src={phoneImage} alt="Phone Image" />

      <div className="mobile_container">
        <div className="mobile">
          {/**formt to display numbers */}
          <form>
            <div className="display-mobile">
              <input
                className="display-number"
                type="text"
                name="display"
                value={displayValue}
                readOnly
                style={{ fontSize: calculateFontSize() }}
              />
              {/**to show is ringing text when clicked */}
              {isRinging && <p className="ringing-text">Ringing...</p>}
            </div>
            {/**buttons numbers with input buttons */}
            <div className="mobile-buttons">
              {[1, 2, 3].map((value) => (
                <input
                  className="input-buttons"
                  key={value}
                  type="button"
                  value={value}
                  onClick={() => handleButtonClick(value.toString())}
                />
              ))}
            </div>
            {/**buttons numbers with input buttons */}
            <div className="mobile-buttons">
              {[4, 5, 6].map((value) => (
                <input
                  className="input-buttons"
                  key={value}
                  type="button"
                  value={value}
                  onClick={() => handleButtonClick(value.toString())}
                />
              ))}
            </div>
            {/**buttons numbers with input buttons */}
            <div className="mobile-buttons">
              {[7, 8, 9].map((value) => (
                <input
                  className="input-buttons"
                  key={value}
                  type="button"
                  value={value}
                  onClick={() => handleButtonClick(value.toString())}
                />
              ))}
            </div>
            {/**buttons numbers with input buttons */}
            <div className="mobile-buttons">
              <input
                className="input-buttons"
                type="button"
                value={"*"}
                onClick={() => handleButtonClick("*")}
              />
              <input
                className="input-buttons"
                type="button"
                value={0}
                onClick={() => handleButtonClick("0")}
              />
              <input
                className="input-buttons"
                type="button"
                value={"#"}
                onClick={() => handleButtonClick("#")}
              />
            </div>
            {/**input function to handle call */}
            <div className="mobile-buttons">
              <input className="input-call-buttons" type="button" value={"Call"} onClick={handleCall} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Smartphone_one;
