import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708373766/pexels-photo-5067890_jmdbfg.jpg"
const imageURL_1 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708379585/keeping-touch-pleasant-elderly-woman-sitting-couch-living-room-sending-text-messages-her-children-while-smiling_259150-2708_pd7spa.jpg";

//definition of how to send text component
const HowSendText = () => {
    // navigate defined to use useNavigate
    const navigate = useNavigate();

    //textmessage and setTestmessage variable defined with empty array value
    const [TextMessages, setTextMessages] = useState([]);

    //useEffect to get textmessage information from datatbase
    useEffect(() => {
        axios.get('http://localhost:5321/getTextMessage')
            .then(TextMessages => setTextMessages(TextMessages.data))
            .catch(err => console.log(err))
    })

    //function to navigate to a different page based on name
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        }

    }

    //return statement to render the text message page component
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <h1 >How to send a text message on your phone</h1>
                <div className="PageImg-top-corner"  >
                    {/**image imported from variable bdefined above */}
                    <img src={imageURL} />
                </div>

                <div className="text-box-left-width">
                    {/**Map function to show information from the database */}
                    {/**This will be done over an array */}
                    {TextMessages.map(TextMessagePage => (

                        <div key={TextMessagePage._id}>
                            {(TextMessagePage.name === '' || TextMessagePage.name === 'Step 1' || TextMessagePage.name === 'Step 2' || TextMessagePage.name === 'Step 3') && (
                                <div>
                                    <h2>{TextMessagePage.name}</h2>
                                    <p>{TextMessagePage.text}</p>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <img src={TextMessagePage.imageURL} style={{ width: '75%' }} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="PageImg-bottom-corner"  >
                    {/**image imported from variable bdefined above */}
                    <img src={imageURL_1} />
                </div>

                <div className="text-box-right-width">
                    {/**Map function to show information from the database */}
                    {/**This will be done over an array */}
                    {TextMessages.map(TextMessagePage => (

                        <div key={TextMessagePage._id}>
                            {(TextMessagePage.name === 'Step 4' || TextMessagePage.name === 'Step 5' || TextMessagePage.name === 'Step 6') && (
                                <div>
                                    <h2>{TextMessagePage.name}</h2>
                                    <p>{TextMessagePage.text}</p>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <img src={TextMessagePage.imageURL} style={{ width: '75%' }} />
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {/**Buttons for navigation with relavant stayling applied */}
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
        </>
    );

}

export default HowSendText;