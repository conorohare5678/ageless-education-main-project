import React from "react";
import { useNavigate } from 'react-router-dom';

//definition of navigation button component
const Nav_button_Two = () => {
    //useNavigate to navigate to different page
    const navigate = useNavigate();

    //function to navigate to chat page
    const navbuttonone = () => {
        navigate("/ChatPage");
    };

    //return statement to render component
    return (
        <button onClick={navbuttonone}>
            Click Here
        </button>
    );
};

export default Nav_button_Two;