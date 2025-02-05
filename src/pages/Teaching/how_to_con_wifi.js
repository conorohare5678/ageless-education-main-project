import React, { useEffect, useState } from "react";
//import Quiz from "../../components/Quiz/Quiz";
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { MdNetworkWifi } from "react-icons/md";

//definition of how to connect to wifi page
function Connect_Wifi() {
    //wificonhome and setwifihome variables defined with empty array
    const [wifiConHome, setWifiHome] = useState([]);
    //navigate defined to use useNavigate function
    const navigate = useNavigate();
    //image string defined in variable
    const imageURL = 'https://res.cloudinary.com/dlhgjamvc/image/upload/v1710765426/IMG_8256_dsfeps.jpg';
    //url to external page stored in variable
    const url = 'https://www.speedtest.net/';

    //useEffect to get wifi connect information from database
    useEffect(() => {
        axios.get('http://localhost:5321/getWifiHome')
            .then(wifiConHome => setWifiHome(wifiConHome.data))
            .catch(err => console.log(err))
    })

    //function to navigate to different pages based on name in onclick
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        } else if (name === 'links') {
            navigate('/LinkPage')
        }

    }

    //function to open speed test in new window
    const openSpeedTest = () => {
        window.open(url, "_blank");
    };

    //return statement to render wifi connect page
    return (

        <div className="homePage">
            {/**Content within the component with all necessary styling applied */}
            <h1 style={{ marginLeft: '20px' }}>How to connect your Laptop to your WIFI</h1>
            <div className="PageImg-top-corner-1">
                {/**image imported from variable bdefined above */}
                <img src={imageURL} style={{ height: '450px' }} alt="img1" />
            </div>
            <div className="textBox-left-width">
                {/**Map function to show information on connect to wifi from the database */}
                {/**This will be done over an array */}
                {wifiConHome.map(WifiCon => (
                    <div key={WifiCon._id}>
                        {/**Shows information based on a specific name */}
                        {(WifiCon.name === 'Step 1' || WifiCon.name === '' || WifiCon.name === 'Step 2' || WifiCon.name === 'Step 3') && (
                            <>
                                <h2>{WifiCon.name}</h2>
                                <p>{WifiCon.text}</p>
                                {/**Shows image based on specific name */}
                                {WifiCon.name === "Step 2" && (
                                    <img src={WifiCon.imageURL} style={{ marginLeft: '200px' }} alt="img2" />
                                )}

                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className="textBox-left-width" style={{ marginTop: '40px' }}>
                <h1 className="centerTitle">Top tips</h1>
                {/**unordered list to show the list of information in list formatt */}
                <ul style={{ listStyle: 'none', paddingLeft: '10px' }}>
                    {/**List inside the the unordered list */}
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        {/**icon imported from react icons */}
                        <MdNetworkWifi style={{ fontSize: '24px', marginRight: '10px' }} />
                        When connecting to the wifi always insure your connecting to a known network.
                    </li>
                    <br />
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        {/**icon imported from react icons */}
                        <MdNetworkWifi style={{ fontSize: '24px', marginRight: '10px' }} />
                        If your wifi is slow try running a speed test here
                    </li>
                    <button onClick={() => openSpeedTest()} style={{ marginLeft: 'auto', marginRight: 'auto' }}>Speed test</button>
                    <br />
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        {/**icon imported from react icons */}
                        <MdNetworkWifi style={{ fontSize: '34px', marginRight: '10px' }} />
                        When browsing the web dont fall for scams if you click the button below you can see the most frequent scams
                    </li>
                    <ol style={{ marginLeft: '15px' }}>
                        <li>Phishing emails</li>
                        <li>Scam pop ups</li>
                        <li>Investment scams</li>
                    </ol>
                    <br />
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        {/**icon imported from react icons */}
                        <MdNetworkWifi style={{ fontSize: '36px', marginRight: '10px' }} />
                        Purchase scams where somebody claims to be selling a product but is not where they will essentially take the money and run.
                    </li>
                    <br />
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        {/**icon imported from react icons */}
                        <MdNetworkWifi style={{ fontSize: '34px', marginRight: '10px' }} />
                        You can visit our usuful links page by hitting the button below to help you with being online on your device
                    </li>
                    {/**onclick function which navigates to a different page based on name */}
                    <button onClick={() => navigatePage('links')} style={{ marginLeft: 'auto', marginRight: 'auto' }}>Useful links</button>
                </ul>
            </div>
            <div className="textRight-container-1" style={{ marginTop: '-860px' }}>
                {/**Map function to show information on connect to wifi from the database */}
                {/**This will be done over an array */}
                {wifiConHome.map(WifiCon => (
                    <div key={WifiCon._id}>
                        {/**Shows information based on a specific name */}
                        {(WifiCon.name === 'Step 4' || WifiCon.name === 'Step 5') && (
                            <>
                                <h2>{WifiCon.name}</h2>
                                <p>{WifiCon.text}</p>
                                {/**Shows image based on specific name */}
                                {WifiCon.name === "Step 4" && (
                                    <img src={WifiCon.imageURL} style={{ width: '80%', height: '250px' }} alt="img4" />
                                )}
                                {/**Shows image based on specific name */}
                                {WifiCon.name === "Step 5" && (
                                    <img src={WifiCon.imageURL} style={{ width: '80%', height: '250px' }} alt="img5" />
                                )}
                            </>
                        )}
                    </div>
                ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                {/**onlick on button to navigate to different page based on name */}
                <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                    <span>Go Back</span>
                    {/**icon imported from react icons */}
                    <RiArrowGoBackFill />

                </button>

                {/**onlick on button to navigate to different page based on name */}
                <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                    <span>Profile Page</span>
                    {/**icon imported from react icons */}
                    <FaBookOpenReader />

                </button>

                {/**onlick on button to navigate to different page based on name */}
                <button className="buttonSpace" onClick={() => navigatePage('Quiz')}>
                    <span>Quiz</span>
                    {/**icon imported from react icons */}
                    <MdQuiz />
                </button>

            </div>
        </div>
    )

}

export default Connect_Wifi;