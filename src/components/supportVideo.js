import React from "react";

const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1705486834/pexels-tima-miroshnichenko-5709146_2160p_i5qkeq.mp4";

//definition of function for support video background
function SupportVideo() {
    //return statement to render component
    return (
        <>
            {/**the component will be rendered and styled here */}
            <div className='video-container'>
                <div className='video'>
                    <h1 className='homePage-title'></h1>
                </div>
                <div className='overLay'></div>
                <video autoPlay loop muted className='backVid'>
                    {/**video imported */}
                    <source src={videoUrl} type="video/mp4" />
                </video>
                <div className='text-overlay'>
                    <h1 className='signup-title'>Support Page</h1>
                    <h3 className=''>This page will provide proper links to relevant help needed</h3>
                    <h3 className=''>If you cannot find the help you need there will be a chat page which you can use!</h3>
                    <h5>Please scroll down for more information!</h5>
                </div>

            </div>
        </>
    );
}

export default SupportVideo;