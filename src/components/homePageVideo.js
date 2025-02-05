import React from 'react';
import video from "../Images/homeVideo.mp4"

//definition of background video for homepage
const BackgroundVideo = () => {
    //return statement ot render the back ground page
    return (
        //all of the background text and video looping image will be rendered in here
        <>
            <div className='video-container'>
                <div className='video'>
                    <h1 className='homePage-title'></h1>
                </div>
                <div className='overLay'></div>
                <video autoPlay loop muted className='backVid'>
                    {/**video imported */}
                    <source src={video} type="video/mp4" />
                </video>
                <div className='text-overlay'>
                    <h1 className='signup-title'>Ageless Education</h1>
                    <h3 className='signup-title'>Teaching you how to use your everyday technology</h3>
                    <h3>Please scroll down for more information!</h3>
                </div>
            </div>
        </>
    );
}

export default BackgroundVideo;