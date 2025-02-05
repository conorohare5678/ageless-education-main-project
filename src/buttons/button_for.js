import React from "react";
import { useNavigate } from 'react-router-dom';

//definition of navigation button
const Nav_button_Four = () => {
    //useNavigate defined in variable
    const navigate = useNavigate();

    //function to navigate to different page
    const navbuttonone = () => {
        navigate("/takePicture");
    };

    //return statement to render button
    return (
        <button onClick={navbuttonone}>
            Click Here
        </button>
    );
};

export default Nav_button_Four;