import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const imageURL_1 = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708341725/cm-chat-media-video-1_578d60bd-5433-5f6b-8a1d-6ff1fc9b660d_5387_0_0_dyd57y.mp4";
const imageURL = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708890191/RPReplay_Final1708341945_phhgra.mp4";

//definition of download app component
const DownloadApp = () => {
    //downloadapp and setdownloadapp variables defined with empty array
    const [DownloadApplication, setDownloadApllication] = useState([]);
    //navigate defined to use useNavigate
    const navigate = useNavigate();

    //useEffect to get downloadapp content from database
    useEffect(() => {
        axios.get('http://localhost:5321/getDownloadApp')
            .then(DownloadApplication => setDownloadApllication(DownloadApplication.data))
            .catch(err => console.log(err))
    })

    //function to navigate to a different page based on name
    const navigatePage = (name) => {
        if (name == 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        }

    }

    //return statement to render the download app page
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <h1 className="centerTitle">Download and app</h1>
                <div style={{ float: 'right', marginRight: '130px' }}>
                    {/**video imported for variable above */}
                    <video autoPlay loop muted style={{ height: '600px', marginLeft: '150px', marginTop: '90px' }}>
                        <source src={imageURL} type="video/mp4" />
                    </video>
                    <p>Here is a full demo on how to install an app on an IPhone and how to navigate to it.</p>
                </div>
                <div className="textLeft-container-1">
                    {/**map function to show information on how to download page */}
                    {DownloadApplication.map(DownApp => (
                        <div key={DownApp._id}>
                            {/**Showing infomration within the page based on a certain name */}
                            {(DownApp.name === 'Download an app on IPhone' || DownApp.name === 'Step 1 for IPhone' || DownApp.name === 'Step 2 for IPhone' || DownApp.name === 'Step 3 for IPhone' || DownApp.name === 'Step 4 for IPhone' || DownApp.name === 'Tip for IPhone') && (
                                <div>
                                    <h2>{DownApp.name}</h2>
                                    <p>{DownApp.text}</p>
                                    {/**shows image based on name */}
                                    {DownApp.name === "Step 1 for IPhone" && (
                                        <img src={DownApp.imageURL} style={{ width: '25%', height: '100px' }} className="centerImgVid" />
                                    )}
                                    {/**Shows video based on name */}
                                    {DownApp.name === "Step 2 for IPhone" && (
                                        <video autoPlay loop muted style={{ width: '50%', height: '100px' }} className="centerImgVid1">
                                            <source src={DownApp.imageURL} type="video/mp4" />
                                        </video>
                                    )}
                                </div>
                            )}
                        </div>

                    ))}
                </div>
                {/**Video imported from variable above */}
                <video autoPlay loop muted style={{ height: '600px', marginLeft: '150px', marginTop: '90px' }}>
                    <source src={imageURL_1} type="video/mp4" />
                </video>
                <div style={{ marginLeft: '25px' }}>
                    <p style={{ width: '40%' }}>After you have finished with this page please click on the button below to return to the training page homepage</p>

                </div>
                <div className="textRight-container-1" style={{ marginRight: '10px', marginTop: '-850px' }}>
                    {/**Map function to show infomration on download app */}
                    {DownloadApplication.map(DownApp => (
                        <div key={DownApp._id}>
                            {/**shows information based on name */}
                            {(DownApp.name === 'Downlaod an app on Android' || DownApp.name === 'Step 1 for Android' || DownApp.name === 'Step 2 for Android') && (
                                <div>
                                    <h2>{DownApp.name}</h2>
                                    <p>{DownApp.text}</p>
                                    {/**Shows video based on name */}
                                    {DownApp.name === "Step 2 for Android" && (
                                        <video autoPlay loop muted style={{ width: '50%', height: '100px' }} className="centerImgVid1">
                                            <source src={DownApp.imageURL} type="video/mp4" />
                                        </video>
                                    )}
                                </div>
                            )}
                        </div>

                    ))}
                </div>
                <div className="textRight-container-1" style={{ marginRight: '10px' }}>
                    {/**Map function to show infomration on download app */}
                    {DownloadApplication.map(DownApp => (
                        <div key={DownApp._id}>
                            {/**shows information based on name */}
                            {(DownApp.name === 'Step 3 for Android' || DownApp.name === 'Step 4 for Android' || DownApp.name === 'Step 5 for Android') && (
                                <div>
                                    <h2>{DownApp.name}</h2>
                                    <p>{DownApp.text}</p>
                                    {/**shows information based on name */}
                                    {DownApp.name === "Step 4 for Android" && (
                                        <img src={DownApp.imageURL} style={{ width: '50%', height: '100px' }} className="centerImgVid1" />
                                    )}

                                </div>
                            )}
                        </div>

                    ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**imported icon from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                        <span>Profile Page</span>
                        {/**imported icon from react icons */}
                        <FaBookOpenReader />

                    </button>

                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('Quiz')}>
                        <span>Quiz</span>
                        {/**imported icon from react icons */}
                        <MdQuiz />
                    </button>

                </div>
            </div>
        </>
    )
}

export default DownloadApp;