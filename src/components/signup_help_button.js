import React from "react";
import { useNavigate } from 'react-router-dom';

//definition of sign up help button
const Signup_button = () => {
    //naviagte used to useNavigate function
    const navigate = useNavigate();

    //function to navigate to differnt page upon clicking button
    const navigateToSignupHelp = () => {
        navigate("/Signup_help");
    };

    //return stement to render button
    return (
        //button to navigate to help page
        <button onClick={navigateToSignupHelp}>
            Click Here
        </button>
    );
};

export default Signup_button;
