import React from "react";

const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708297242/pexels-marcus-aurelius-6785683_2160p_kxain2.mp4";

//deinfiion of social background video
const SocialBackground = () => {
    //return statement to render the background
    return (
        <>
            {/**all of the background components will be rendered here */}
            <div className="video-container">
                <div className="overLay"></div>
                <video autoPlay loop muted className='backVid'>
                    {/**video imported */}
                    <source src={videoUrl} type="video/mp4" />
                </video>
                <div className='text-overlay'>
                    <h1 className='signup-title'>Social Page</h1>
                    <h3 className=''>This page will provide proper links to relevant help needed</h3>
                    <h3 className=''>If you cannot find the help you need there will be a chat page which you can use!</h3>
                    <h5>Please scroll down for more information!</h5>
                </div>

            </div>
        </>
    );

}

export default SocialBackground;