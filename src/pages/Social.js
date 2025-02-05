import React from "react";
import { useNavigate } from "react-router-dom";
import SocialBackground from "../components/backgroundImgVid/socialBackground";

//definition of the component
function Social() {
    //definition of variable to use useNavigate
    const navigate = useNavigate();


    //return statement to render the social page
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <SocialBackground />
                <div className="text-home">
                    <h1>The Social Hub</h1>
                    <h3>This is where you can blog about what you have learn't from completeing your courses</h3>
                    {/**Grid container for the layout of components within social page */}
                    <div className="grid-container">
                        <div className="grid-item">
                            <h3>How to Blog</h3>
                            {/**Navigation button with onclick function to navigate */}
                            <button onClick={() => navigate("/How_to_blog")}>How to Blog</button>
                        </div>
                        <div className="grid-item">
                            <h3>Blogging Page</h3>
                            {/** Navigation button with onclick function to navigate*/}
                            <button onClick={() => navigate("/Blog")}>Blog Page</button>
                        </div>
                        <div className="grid-item">
                            <h3>Request to be Volunteer</h3>
                            {/** Navigation button with onclick function to navigate*/}
                            <button style={{ marginLeft: '45px' }} onClick={() => navigate("/VolunteerInterest")}>Make a request</button>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );

}

export default Social;