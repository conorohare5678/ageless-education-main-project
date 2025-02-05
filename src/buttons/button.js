import React from "react";
import { useNavigate } from 'react-router-dom';

//definition of navigation button component
const Nav_button_one = () => {
    //useNavigate defined to navigate to different page
    const navigate = useNavigate();

    //function to navigate to different page
    const navbuttonone = () => {
        navigate("/TrainingHomeSing");
    };

    //return statement to render component button
    return (
        <button onClick={navbuttonone}>
            Click Here
        </button>
    );
};

export default Nav_button_one;