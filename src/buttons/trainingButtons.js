import React from "react";
import { useNavigate } from "react-router-dom";
//test

//definition of button component for training page
const Nav_Buttons_trainining = ({ TrainingPage }) => {
    //useNavigate to navigate to different pages
    const navigate = useNavigate();

    //function to navigate to different training pages
    const TrainingPageNavigation = () => {
        //navigates to page based on name
        if (TrainingPage.name === "How to use a smartphone to make a call") {
            navigate("/Learning_page_one");

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to connect to your WIFI to you phone") {
            navigate("/ConnectWifi");

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to connect to your WIFI to you laptop") {
            navigate("/ConWifi");

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to take a picture on your Smartphone") {
            navigate("/takePicture");

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to send a text message on your smartphone") {
            navigate("/HowSendText")

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to browse the Web using your laptop") {
            navigate("/HowToBroswe")

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to set an alarm on your Smartphone") {
            navigate("/SetAlarm")

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to open Youtube to watch a video") {
            navigate("/WatchVideo")

        }
        //navigates to page based on name
        else if (TrainingPage.name === "How to download an app to you phone") {
            navigate("/DownloadApp")
        } else {
            return null;
        }
    };
    //return statement to render
    return (
        <button onClick={TrainingPageNavigation}>Click Here</button>
    );
};

export default Nav_Buttons_trainining;
