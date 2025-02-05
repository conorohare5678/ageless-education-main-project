import React from "react";
import { useNavigate } from 'react-router-dom';

//definition of navigation button component
const Nav_button_Three = () => {
    //useNavigate to navigate to different page
    const navigate = useNavigate();

    //function to navigate to a different page
    const navbuttonone = () => {
        navigate("/LinkPage");
    };

    //return statement to render button
    return (
        <button onClick={navbuttonone}>
            Click Here
        </button>
    );
};

export default Nav_button_Three;