import React, { useEffect, useState } from "react";
import axios from "axios";
import PopUpThree from "../../components/popups/popUpThree";
import PopUpFour from "../../components/popups/popUpFour";
import Card from 'react-bootstrap/Card';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const videoUrl1 = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1707336042/pexels-anna-shvets-5496954_2160p_tce0qp.mp4";
const cameraIMGURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708355139/c435dws4aykdtocowvlu.jpg";
const cameraIMGURL_1 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708355892/jdo1q14aklahquclx96x.jpg";
const cameraIMGURL_2 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708356914/myx2bh9ieftmugotaftx.jpg";


//definition of take picture page
function TakePicture() {
    //naviagte used here to useNavigate function
    const navigate = useNavigate();
    //variable defined it empty array 
    const [pictures, setPictures] = useState([]);
    //variables defined with state set to false
    const [show, setShow] = useState(false);
    //variable defined with string value empty
    const [show_one, setShow_one] = useState('');
    //variables defined with state set to false
    const [show_1, setShow_1] = useState(false);
    //variable defiend with string value empty
    const [show_one_1, setShow_one_1] = useState('');
    //variable defined with state set to false
    const [show_2, setShow_2] = useState(false);
    //variable defined with empty string
    const [show_one_2, setShow_one_2] = useState('');
    //variable defined with state set to false
    const [show_3, setShow_3] = useState(false);
    //variable defined with empty string value
    const [show_one_3, setShow_one_3] = useState('');


    //useEffect to get information from the database
    useEffect(() => {
        axios.get('http://localhost:5321/getPictureInfo')
            .then(pictures => setPictures(pictures.data))
            .catch(err => console.log(err))
    }, [])

    //function to show pop up when clicked
    const buttonClick = (content) => {
        setShow(true);
        setShow_one(content);
        console.log(show_one);
    }

    //function to show pop up when clicked
    const buttonClick_1 = (content_1) => {
        setShow_1(true);
        setShow_one_1(content_1);
        console.log(show_one_1);
    }

    //function to show pop up when clicked
    const buttonClick_2 = (content_2) => {
        setShow_2(true);
        setShow_one_2(content_2);
        console.log(show_one_2);
    }

    //function to show pop up when clicked
    const buttonClick_3 = (content_3) => {
        setShow_3(true);
        setShow_one_3(content_3);
        console.log(show_one_3);
    }

    //function to navigate to page based on name
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        }

    }

    //return statement to render take picture page
    return (
        <>
            {/**componets of the page displayed here with all necessary styling */}
            <div className="homePage">

                <div className="homePage">
                    <h1 className="title-center">How to take a picture</h1>
                    <body className="homePage">
                        {/**map function to iterate over information */}
                        {pictures.map(picture => {
                            return <ul key={picture._id}>
                                <div className="move-right">
                                    <div className="takePictureOne">
                                        <p>{picture.name}</p>
                                    </div>

                                    <div className="takePictureTwo">
                                        <p>{picture.text}</p>
                                    </div>
                                    {/**button shown based on name */}
                                    {picture.name === "Step 1" && (
                                        <button style={{ marginLeft: '220px' }} onClick={() => buttonClick(true)}>Hit Here</button>
                                    )}
                                    {/**button shown based on name */}
                                    {picture.name === "Step 2" && (
                                        <button style={{ marginLeft: '220px' }} onClick={() => buttonClick_1(true)}>Hit Here</button>
                                    )}
                                    {/**button shown based on name */}
                                    {picture.name === "Step 3" && (
                                        <button style={{ marginLeft: '220px' }} onClick={() => buttonClick_2(true)}>Hit Here</button>
                                    )}
                                    {/**button shown based on name */}
                                    {picture.name === "Step 4" && (
                                        <button style={{ marginLeft: '220px' }} onClick={() => buttonClick_3(true)}>Hit Here</button>
                                    )}

                                </div>
                            </ul>
                        })}

                    </body>

                    {/**functions to close pop ups onclose function used */}
                    {show && <PopUpThree content={show_one} onClose={() => setShow(false)} />}
                    {show_1 && <PopUpFour content_1={show_one_1} onClose={() => setShow_1(false)} />}
                    {show_2 && <PopUpFour content_2={show_one_2} onClose={() => setShow_2(false)} />}
                    {show_3 && <PopUpFour content_3={show_one_3} onClose={() => setShow_3(false)} />}
                </div>
                <div>
                    {<video autoPlay loop muted className='video-num-3'>
                        <source src={videoUrl1} type="video/mp4" />
                    </video>}
                </div>
                <div >
                    <h3 className="centerTitle-3">More Information on taking pictures</h3>
                    <p className="centerTitle-3">Here is some key aspects to look out for when you are taking a picture of what icons to look out for.</p>
                    <div className="learningCardCon">
                        {/**card imported from bootstrap cards */}
                        <Card className="profileCard-1">
                            {/**image imported from variable above */}
                            <Card.Img src={cameraIMGURL} className="profileImg-1" />
                            <Card.Body className="cardBody-1">
                                <Card.Text className="centerTitle">
                                    The iphone camera icon looks like this.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/**card imported from bootstrap */}
                        <Card className="profileCard-1">
                            {/**image imported from variable above */}
                            <Card.Img src={cameraIMGURL_1} className="profileImg-1" />
                            <Card.Body className="cardBody-1">
                                <Card.Text className="centerTitle">
                                    The Samsung camera icon looks like this.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/**card imported from bootstrap */}
                        <Card className="profileCard-1">
                            {/**image imported from variable above */}
                            <Card.Img src={cameraIMGURL_2} className="profileImg-1" />
                            <Card.Body className="cardBody-1">
                                <Card.Text className="centerTitle">
                                    This is what the photo library would look like on your phone
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                {/**buttons for navigation */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function used to navigate to different page */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function used to navigate to different page */}
                    <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                        <span>Profile Page</span>
                        {/**icon imported from react icons */}
                        <FaBookOpenReader />

                    </button>

                    {/**onclick function used to navigate to different page */}
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

export default TakePicture;