import axios from "axios";
import React, { useState, useEffect } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708446690/google-doc-hacks_s0y6ba.jpg";
//const imageURL_1 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708456676/GOOGLELOGO_1_gjctnq.jpg";

//definition of how to browse component
const HowToBroswe = () => {
    //browse web and setbrowseWeb variable defined with empty array value
    const [BrowseWeb, setBrowseWeb] = useState([]);
    //navigate defined to use useNavigate
    const navigate = useNavigate();

    //useEffect to get How to browse information from the database
    useEffect(() => {
        axios.get('http://localhost:5321/getBrowseWeb')
            .then(BrowseWeb => setBrowseWeb(BrowseWeb.data))
            .catch(err => console.log(err))
    })

    //function to open tab in new window
    const openLinksInNewWindow = (url) => {
        window.open(url, "_blank");
    };

    //function to navigate to a specific page
    const navToPage = () => {
        window.location.href = '/ConWifi'
    }

    //function to navigate to a specific page based on name in onclick
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        }

    }

    //return statement to render how to browse page
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <h1 style={{ marginLeft: '30px' }}>How to Browse the web on your laptop</h1>
                {/**image imported from varibale defined at the top */}
                <div className="PageImg-top-corner-1">
                    <img src={imageURL} alt="imgBr" />
                </div>
                <div className="textBox-left-width" style={{ marginLeft: '20px' }}>
                    {/**Map function to show information on how to browse from the database */}
                    {/**This will be done over an array */}
                    {BrowseWeb.map(browseWebApp => (
                        <div key={browseWebApp._id}>
                            {/**Shows information based on a specific name */}
                            {(browseWebApp.name === '' || browseWebApp.name === 'Step 1' || browseWebApp.name === 'Step 2') && (
                                <>
                                    <h2>{browseWebApp.name}</h2>
                                    <p>{browseWebApp.text}</p>
                                    {/**Shows button based on specific name */}
                                    {browseWebApp.name === 'Step 1' && (
                                        <button onClick={navToPage} style={{ margin: 'auto' }}>Click Me</button>
                                    )}
                                    {/**Shows image based on specific name */}
                                    {browseWebApp.name === 'Step 2' && (
                                        <img src={browseWebApp.imageURL} style={{ width: '100%' }} alt="imgBr1" />
                                    )}
                                </>
                            )}

                        </div>
                    ))}
                </div>

                <div className="textRight-container" style={{ marginTop: '-70px' }}>
                    {/**Map function to show information on how to browse from the database */}
                    {/**This will be done over an array */}
                    {BrowseWeb.map(browseWebApp => (
                        <div key={browseWebApp._id}>
                            {/**Shows information based on a specific name */}
                            {(browseWebApp.name === 'Step 3' || browseWebApp.name === 'Step 4') && (
                                <>
                                    <h2>{browseWebApp.name}</h2>
                                    <p>{browseWebApp.text}</p>
                                    {/**Shows image based on specific name */}
                                    {browseWebApp.name === 'Step 4' && (
                                        <img src={browseWebApp.imageURL} style={{ width: '90%' }} alt="imgBr2" />
                                    )}
                                </>
                            )}

                        </div>
                    ))}
                </div>

                <div className="textLeft-container-1" style={{ marginTop: '-540px', paddingBottom: '50px', marginLeft: '20px' }}>
                    {/**Map function to show information on how to browse from the database */}
                    {/**This will be done over an array */}
                    {BrowseWeb.map(browseWebApp => (
                        <div key={browseWebApp._id}>
                            {/**Shows information based on a specific name */}
                            {(browseWebApp.name === 'Example' || browseWebApp.name === ' ') && (
                                <>
                                    <h2>{browseWebApp.name}</h2>
                                    <p>{browseWebApp.text}</p>
                                    {/**Shows image based on specific name */}
                                    {browseWebApp.name === 'Example' && (
                                        <img src={browseWebApp.imageURL} style={{ width: '100%' }} alt="imgBr3" />
                                    )}
                                </>
                            )}
                        </div>
                    ))}
                    {/**onlick on button to navigate to different page using a function*/}
                    <button style={{ margin: 'auto' }} onClick={() => openLinksInNewWindow('https://www.google.com')}>Google</button>
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
        </>
    )



}

export default HowToBroswe;