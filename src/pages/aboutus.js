import React from "react";
import { useNavigate } from "react-router-dom";
import LearningAccordion from "../components/learningAccordion/learningAccordion";

//definition of the component for about us
function Aboutus() {

    //images import defines in variable
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710152913/about-post_zf8fue.jpg";
    const imageURL_2 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710182878/9_gqwmbw.jpg";

    //navigate function to navigate to different page
    const navigate = useNavigate();

    //return statement to render the aboutus page component
    return (
        <>
            {/*Content within the component with all necessary styling applied */}
            <div className="homePage">
                <div className="text-home-4">
                    <h1 className="centerTitle">About us</h1>
                    <p className="centerTitle">Please select from the drop down below to see the range of content we offer!</p>
                    <div className="accordion-container">
                        {/*Accordion imported from another file */}
                        <LearningAccordion />
                    </div>
                    <div className="aboutus">
                        {/*navigation button to navigate to another page */}
                        <button onClick={() => navigate("/Signup")}>
                            Click here to see how to sign up!
                        </button>
                    </div>
                </div>
                <div>
                    {/*Images imported from variable */}
                    <img src={imageURL} className="imageAbout" />
                    <img src={imageURL_2} style={{ width: '50%', height: '400px' }} className="pictureAbout" />
                    <div className="aboutCon">
                        <h3>Volunteer interest</h3>
                        <p>You want to be a volunteer? Please hit the button below to find out more information!</p>
                        <p>Becoming a volunteer will allow you to help the older generation with using technology on a daily basis.</p>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            {/*Navigation button to navigate to another page */}
                            <button className="aboutLeft" onClick={() => navigate("/VolunteerInterest")}> Volunteer Request</button>
                        </div>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Aboutus