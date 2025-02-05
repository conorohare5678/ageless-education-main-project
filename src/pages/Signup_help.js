import React, { useState } from "react";
import PopUpSix from "../components/popups/popUpSix";
import { useNavigate } from "react-router-dom";

//definition of signup help page
function Signup_help() {
    //definition of variable to use useNaviagte
    const navigate = useNavigate();
    //definition of variable to show content and pop ups
    const [help_1, setHelp_1] = useState(false);
    const [showHelp_1, setShowHelp_1] = useState('');
    const [help_2, setHelp_2] = useState(false);
    const [showHelp_2, setShowHelp_2] = useState('');
    //variables with urls defined in them
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1707910391/2-elderly-lady-learning-to-use-a-laptop-mauro-fermarielloscience-photo-library_khnlql.jpg";
    const imageURL_1 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1707910392/bigstock-Teenage-Grandson-Helping-Grand-62503058_owyapq.jpg";

    //function to show pop up when button clicked
    const buttonClick = (content_3) => {
        setHelp_1(true)
        setShowHelp_1(content_3)

    }

    //function to show pop up when button clicked
    const buttonClick_2 = (content_4) => {
        setHelp_2(true)
        setShowHelp_2(content_4)

    }

    //function to naviagte to different page based on name
    const navigatePage = (name) => {
        if (name == 'signup') {
            navigate("/Signup")
        } else if (name == 'home') {
            navigate('/')
        }
    }

    //return statement to render help page for sign up
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage-signup-help">
                <h1 className="centerTitle">Getting help signing up to Ageless Education</h1>
                <p>Here we are going to show you the simple steps to achieve this.</p>
                <h3>Step 1</h3>
                <p>Firstly you will need to click on the "Click Here" button at the end of the homepage or alternativley hit the sign up button!</p>
                <h3>Step 2</h3>
                <p>Once your on the sign up page you will see a section with a button for sign up help which you are currently on.</p>
                <h3>Step 3</h3>
                <p>Then when you on the sign up page you will then need to firstly enter you name and surname </p>
                <p>This pop up will show you where on the screen in a short video</p>
                {/**onclick function to open pop up */}
                <button onClick={() => buttonClick(true)}>Hit Here</button>
            </div>

            {/**Renders pop up based on condition that it is clicked upon */}
            {help_1 &&
                <PopUpSix content_3={showHelp_1} onClose={() => setHelp_1(false)} />
            }
            <img src={imageURL} alt="WiFi Connection" className="signupHelpImage" />
            <div className="homePage-signup-help-1">
                <h3>Step 4</h3>
                <p>Then you will enter a username and password it is best that yopu try to remember this as you will need this everytime you lo into your ageless education account</p>
                <p>An example of this being done is in the video when you click the button</p>
                {/**onclick function to open pop up */}
                <button onClick={() => buttonClick_2(true)}>Hit Here</button>
                <h3>Go to the sign up page</h3>
                <p>Hit the button below to go go back to the sign up page</p>
                {/**onclick function to navigate to a sign up  page */}
                <button onClick={() => navigatePage('signup')}>Go Back</button>
                <p>If your looking to go back to the home page hit this button</p>
                {/**onclick function to navigate to a home page */}
                <button onClick={() => navigatePage('home')}>Homepage</button>
            </div>
            {/**image rendered from variable defined above */}
            <img src={imageURL_1} alt="WiFi Connection" className="signupHelpImage_1" />
            {/**Renders pop up based on condition that it is clicked upon */}
            {help_2 &&
                <PopUpSix content_4={showHelp_2} onClose={() => setHelp_2(false)} />
            }



        </>

    );

}

export default Signup_help
