import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { GoVideo } from "react-icons/go";
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708766587/Screenshot_2024-02-24_at_09.22.20_z0viea.png";
const imageURL_1 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708880492/seniors-watching-video_ry0lhy.jpg";

//definition of watch video page
const WatchVideo = () => {
    //variables defined with empty array value
    const [VideoWatches, setVideoWatches] = useState([]);
    //navigate used to useNavigate function
    const navigate = useNavigate();

    //useEffect to get infomration from database
    useEffect(() => {
        axios.get('http://localhost:5321/getVideoWatch')
            .then(VideoWatches => setVideoWatches(VideoWatches.data))
            .catch(err => console.log(err))
    })

    //function to navigate to different page based on name
    const navigatePage = (name) => {
        if (name == 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        } else if (name === 'browse') {
            navigate('/HowToBroswe')
        }

    }

    //return statement to render video watch page
    return (
        <>
            <div className="homePage">
                <h1 style={{ marginLeft: '10px' }}>How to Watch a Video</h1>
                <div className="floatRight">
                    <img src={imageURL} ></img>
                </div>
                {/**map function to iterative over information */}
                {VideoWatches.map(VideoWatchPage => (
                    <div key={VideoWatchPage._id} className="textBox-left-width-1">
                        {/**show information based on name */}
                        {(VideoWatchPage.name === 'Step 1') && (
                            <div>
                                <h2>
                                    {VideoWatchPage.name}
                                </h2>
                                <p>
                                    {VideoWatchPage.text}
                                </p>
                                <div>

                                </div>
                                {/**shows button based on name */}
                                {VideoWatchPage.name === "Step 1" && (
                                    <button onClick={() => navigatePage('browse')} style={{ margin: '0 auto' }}>Hit Here</button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
                {/**map function to iterate over information on page */}
                {VideoWatches.map(VideoWatchPage => (
                    <div key={VideoWatchPage._id} className="textBox-left-width-1">
                        {/**shows information based on name */}
                        {(VideoWatchPage.name === 'Step 2') && (
                            <div>
                                <h2>
                                    {VideoWatchPage.name}
                                </h2>
                                <p>
                                    {VideoWatchPage.text}
                                </p>
                                <div>
                                    <video autoPlay loop muted className="videoSpace" style={{ width: '100%' }}>
                                        <source src={VideoWatchPage.imageURL} type="video/mp4" />
                                    </video>
                                </div>
                                {/**shows button based on name */}
                                {VideoWatchPage.name === "Step 1" && (
                                    <button>Hit Here</button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
                <div>
                    {/**map function to iterate over information */}
                    {VideoWatches.map(VideoWatchPage => (
                        <div key={VideoWatchPage._id} className="textBox-left-width-1" style={{ paddingTop: '5px' }}>
                            {/**shows information based on name */}
                            {(VideoWatchPage.name === 'Top tip') && (
                                <div>
                                    <h2>
                                        {VideoWatchPage.name}
                                    </h2>
                                    <p>
                                        {VideoWatchPage.text}
                                    </p>
                                    <video autoPlay loop muted className="videoSpace" style={{ width: '100%', marginLeft: '15px' }}>
                                        <source src={VideoWatchPage.imageURL} type="video/mp4" />
                                    </video>
                                    <div className="textBox-left-width-vid">
                                        {/**unordered listed with styling applied */}
                                        <ul style={{ listStyle: 'none' }}>
                                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                                {/**icon imported from react icons */}
                                                <GoVideo style={{ fontSize: '20px', marginRight: '10px' }} />
                                                On youtube you can watch series which people upload online
                                            </li>
                                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                                {/**icon imported from react icons */}
                                                <GoVideo style={{ fontSize: '20px', marginRight: '10px' }} />
                                                Youtube can show you how to videos</li>
                                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                                {/**icon imported from react icons */}
                                                <GoVideo style={{ fontSize: '20px', marginRight: '10px' }} />
                                                You can watch videos from all around the world</li>
                                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                                {/**icon imported from react icons */}
                                                <GoVideo style={{ fontSize: '20px', marginRight: '10px' }} />
                                                You can even watch classic shows you watched growing up</li>
                                            <li style={{ display: 'flex', alignItems: 'center' }}>
                                                {/**icon imported from react icons */}
                                                <GoVideo style={{ fontSize: '20px', marginRight: '10px' }} />
                                                Most importantly classic music</li>
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="textRight-container-1" style={{ marginTop: '-490px', marginRight: '10px' }}>
                    {VideoWatches.map(VideoWatchPage => (
                        <div key={VideoWatchPage._id} >
                            {(VideoWatchPage.name === 'Step 3') && (
                                <div>
                                    <h2>
                                        {VideoWatchPage.name}
                                    </h2>
                                    <p>
                                        {VideoWatchPage.text}
                                    </p>
                                    <div>
                                        <video autoPlay loop muted className="videoSpace" style={{ width: '100%', marginLeft: '-15px' }}>
                                            <source src={VideoWatchPage.imageURL} type="video/mp4" />
                                        </video>
                                    </div>
                                    {VideoWatchPage.name === "Step 1" && (
                                        <button>Hit Here</button>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                {VideoWatches.map(VideoWatchPage => (
                    <div key={VideoWatchPage._id} className="textRight-container-1" style={{ marginRight: '10px' }}>
                        {(VideoWatchPage.name === ' ' || VideoWatchPage.name === 'Step 4') && (
                            <div>
                                <h2>
                                    {VideoWatchPage.name}
                                </h2>
                                <p>
                                    {VideoWatchPage.text}
                                </p>
                                {VideoWatchPage.name === "Step 1" && (
                                    <button>Hit Here</button>
                                )}
                            </div>
                        )}
                    </div>
                ))}
                {/**navigation buttons with styling applied */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function used to navigate page */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function used to navigate page */}
                    <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                        <span>Profile Page</span>
                        {/**icon imported from react icons */}
                        <FaBookOpenReader />

                    </button>

                    {/**onclick function used to navigate page */}
                    <button className="buttonSpace" onClick={() => navigatePage('Quiz')}>
                        <span>Quiz</span>
                        {/**icon imported from react icons */}
                        <MdQuiz />
                    </button>

                </div>
            </div >
        </>
    )

}

export default WatchVideo;