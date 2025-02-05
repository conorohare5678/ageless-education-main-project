import React, { useState, useEffect } from "react";
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav_Buttons_trainining from "../../buttons/trainingButtons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { TiMessageTyping } from "react-icons/ti";

//definition of the training page homepage
const TrainingHomPage = () => {
    //declaring variable for training with empty array
    const [Training, setTraining] = useState([]);

    const imageUrl = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1705349353/1000_F_480461873_TQRoekF30ZConZHeL4LzTA0sU1EFZbR4_ywsj1l.jpg";

    //useEffect to get training page information from database
    useEffect(() => {
        axios.get('http://localhost:5321/getTrainingPageInfo')
            .then(Training => setTraining(Training.data))
            .catch(err => console.log(err))
    })

    //navigate variable defined to use useNavigate
    const navigate = useNavigate();

    //function created to navigate to different pages based on name
    const navigatePage = (name) => {

        if (name === 'Profile Page') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        } else if (name === 'request') {
            navigate('/MakeRequest');
        }

    }

    //return statement to render the training page home
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <div className="headerBox">
                    <h1 className="centerTitle">Learning</h1>
                    <p className="centerTitle">Here is all the different learning pages that are avaliable to you to learn about technology</p>
                </div>
                {/**Styling done for a grid formatt of the application  */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                    {/**map function to iterate over the training card in an array */}
                    {Training.map(TrainingPage => {
                        return <div className="learningCardCon">

                            <Card key={TrainingPage._id} className="profileCard-1">
                                <Card.Img src={TrainingPage.imageURL} className="profileImg-1" />
                                <Card.Body className="cardBody-1">
                                    <Card.Title className="centerTitle-2">{TrainingPage.name}</Card.Title>
                                    <Card.Text className="centerTitle">
                                        {TrainingPage.text}
                                    </Card.Text>
                                    <div className="button-bottom">
                                        <div className="buttonTrainingPage">
                                            <Nav_Buttons_trainining TrainingPage={TrainingPage} />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>

                    })}

                </div>

                {/**buttons at the bottom of the page for navigation */}
                {/**Formatted in grid formatt */}
                <div>
                    <h2 className="centerTitle">If you would like to go back to the profile page hit the profile page button or for more features hit sthe features button</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        {/**Onclick function which naviagtes to different page based on button click */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('Profile Page')}>
                            <span style={{ marginRight: '5px' }}>Profile Page</span>
                            {/**react icon imported from library */}
                            <FaBookOpenReader />
                        </button>
                        {/**Onclick function which naviagtes to different page based on button click */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('Quiz')}>
                            <span style={{ marginRight: '5px' }}>Quiz</span>
                            {/**react icon imported from library */}
                            <MdQuiz />
                        </button>
                        {/**Onclick function which naviagtes to different page based on button click */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('request')}>
                            <span style={{ marginRight: '5px' }}>Make a request page</span>
                            {/**react icon imported from library */}
                            <TiMessageTyping />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TrainingHomPage;