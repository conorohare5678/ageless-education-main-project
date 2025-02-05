import React, { useState } from "react";
//import CollapseComponent from "../../components/collaspable_component";
import PopUpOne from "../../components/popups/popUpOne";
import PopUpTwo from "../../components/popups/popUpTwo";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

//definition of connect to wifi component
function ConnectWifi() {
    //images strings defined inside variables 
    const imageUrl = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1705341534/00_hev0gs.jpg";
    const imageUrl_2 = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1710151276/RPReplay_Final1710150829_rhny7x.mov";
    const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1705354424/pexels-ivan-samkov-7392978_1080p_cdmfs7.mp4";
    const imageURL_3 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710151254/IMG_8216_ur3foq.jpg";
    const imageURL_4 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710151254/IMG_8217_lsncvg.jpg";

    //variables show and setShow defined and state set to false
    const [show, setShow] = useState(false)
    const [show_one, setShow_one] = useState(false)
    //navigate defined to use useNavigate
    const navigate = useNavigate();

    //function defined to navigate to a different page based on name
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        }

    }

    //return statement to render the connect wifi page
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div>
                <div className="homePage">
                    <div className="title-header">
                        <h1>How to connect you phone to a WIFI connection</h1>
                    </div>
                    <div className="wifiContainer">
                        <div className="Cloudinary-img-1">
                            <p className="textLeft">In order for you to use your Smartphone and browser online you will need to have a wifi connection to do this. Lets start with part one hit the button below</p>
                            {/**button to show pop up when clicked on */}
                            <button className="CenterButCon" onClick={() => setShow(true)}>Hit Here</button>
                            {/**To close pop up */}
                            <PopUpOne onClose={() => setShow(false)} show={show} />
                            <img src={imageUrl} alt="WiFi Connection" className="img1-left" />
                        </div>
                        <div>
                            <p className="textRight">I am aware there are many resources out there to help you do this but are very vage on how to do this</p>
                            {/**button to show pop up when clicked on */}
                            <button onClick={() => setShow_one(true)} className="butRightPopUp">Hit Here</button>
                            {/**To close pop up */}
                            <PopUpTwo onClose={() => setShow_one(false)} show={show_one} />
                            <video autoPlay loop muted className='video-Right'>
                                <source src={videoUrl} type="video/mp4" />
                            </video>
                        </div>
                        <div>
                            <h3 className="title-center">Following the simple steps below will show you how to connect to your wifi</h3>
                            {/* <img src={imageUrl_2} alt="WiFi Connection" className="img1-left" /> */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                                <div className="learningCardCon">
                                    {/**Cards imported from react cards and style changes and populated */}
                                    {/**infomration has been hard coded */}
                                    <Card className="profileCard-1">
                                        {/**video imported from variable above on loop */}
                                        <video autoPlay loop muted className="profileImg-1">
                                            <source src={imageUrl_2} type="video/mp4" />
                                        </video>
                                        <Card.Body className="cardBody-1">
                                            <Card.Text className="centerTitle">
                                                You can browse the web using your phone when connected to the wifi
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="learningCardCon">
                                    {/**Cards imported from react cards and style changes and populated */}
                                    {/**infomration has been hard coded */}
                                    <Card className="profileCard-1">
                                        {/**image imported from variable above */}
                                        <Card.Img src={imageURL_3} className="profileImg-1" />
                                        <Card.Body className="cardBody-1">
                                            <Card.Text className="centerTitle">
                                                You can send emails aswell to other people when connected to the WIFI
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                                <div className="learningCardCon">
                                    {/**Cards imported from react cards and style changes and populated */}
                                    {/**infomration has been hard coded */}
                                    <Card className="profileCard-1">
                                        {/**image imported from variable above */}
                                        <Card.Img src={imageURL_4} className="profileImg-1" />
                                        <Card.Body className="cardBody-1">
                                            <Card.Text className="centerTitle">
                                                You can even look up maps to find directions to locations you may be going to
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        {/**onlick on button to navigate to different page based on name */}
                        <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                            <span>Go Back</span>
                            {/**imported icon from react icons */}
                            <RiArrowGoBackFill />

                        </button>

                        {/**onlick on button to navigate to different page based on name */}
                        <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                            <span>Profile Page</span>
                            {/**imported icon from react icons */}
                            <FaBookOpenReader />

                        </button>

                        {/**onlick on button to navigate to different page based on name */}
                        <button className="buttonSpace" onClick={() => navigatePage('Quiz')}>
                            <span>Quiz</span>
                            {/**imported icon from react icons */}
                            <MdQuiz />
                        </button>

                    </div>

                </div>

            </div>
        </>
    );

}

export default ConnectWifi;