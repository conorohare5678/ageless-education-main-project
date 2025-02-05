import React, { useState, useEffect } from "react";
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav_Buttons_trainining from "../../buttons/trainingButtons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { TiMessageTyping } from "react-icons/ti";
import { FaBook } from "react-icons/fa6";

//definition of the training page component showing single cards
const TrainingHomPageSingle = () => {
    //training variable defined with empty array value
    const [Training, setTraining] = useState([]);
    //current card variable defined with state set to null
    const [currentCard, setCurrentCard] = useState(0);

    //useEffect to get training page info from database
    useEffect(() => {
        axios.get('http://localhost:5321/getTrainingPageInfo')
            .then(Training => setTraining(Training.data))
            .catch(err => console.log(err))
    })

    // naviagte defined to use useNavigate
    const navigate = useNavigate();

    //function to navigate to a different page based on name
    const navigatePage = (name) => {

        if (name === 'Profile Page') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        } else if (name === 'request') {
            navigate('/MakeRequest');
        } else if (name === 'train') {
            navigate('/TrainHomepage')
        }

    }

    //function to change current card within application when clicked on
    const changeCrad = (index) => {
        setCurrentCard(index);
    }

    //return statement to render training page home single
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <div className="headerBox">
                    <h1 className="centerTitle">Learning</h1>
                    <p className="centerTitle">Here is all the different learning pages that are avaliable to you to learn about technology</p>
                </div>
                {/**list of training pages in list formatt with relavant styling */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className='buttonsBackG' style={{ width: '40%', paddingRight: '10px' }}>
                        <h3 className="centerTitle">Content</h3>
                        <p className="centerTitle">You can click on these buttons to show the learning page you want</p>
                        {/**map function to iterate over the array of page names */}
                        {Training.map((TrainingPage, index) => (
                            <>
                                <div className='listFormatt' key={TrainingPage._id} onClick={() => changeCrad(index)}>
                                    <p>
                                        <span>{TrainingPage.name}</span>
                                    </p>

                                </div>
                            </>
                        ))}
                    </div>

                    {/**map function to show the individual cards when clicked on in the list */}
                    {/**card changes based on  index or current card selected */}
                    <div style={{ width: '60%' }}>
                        {Training.map((TrainingPage, index) => {
                            return <div key={TrainingPage._id} className="learningCardCon">
                                <Card style={{ display: index === currentCard ? 'block' : 'none' }} className="profileCard-2">
                                    <Card.Img src={TrainingPage.imageURL} className="profileImg-train" />
                                    <Card.Body className="cardBody-1">
                                        <Card.Title className="centerTitle-4">{TrainingPage.name}</Card.Title>
                                        <br />
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

                </div>

                {/**Buttons for navigation with relavant stayling applied */}
                <div>
                    <h2 className="centerTitle">If you would like to go back to the profile page hit the profile page button or for more features hit sthe features button</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        {/**onlick on button to navigate to different page based on name */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('Profile Page')}>
                            <span style={{ marginRight: '5px' }}>Profile Page</span>
                            {/**imported icon from react icons */}
                            <FaBookOpenReader />
                        </button>
                        {/**onlick on button to navigate to different page based on name */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('Quiz')}>
                            <span style={{ marginRight: '5px' }}>Quiz</span>
                            {/**imported icon from react icons */}
                            <MdQuiz />
                        </button>
                        {/**onlick on button to navigate to different page based on name */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('request')}>
                            <span style={{ marginRight: '5px' }}>Make a request page</span>
                            {/**imported icon from react icons */}
                            <TiMessageTyping />
                        </button>
                        {/**onlick on button to navigate to different page based on name */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('train')}>
                            <span style={{ marginRight: '5px' }}>Show all Courses</span>
                            {/**imported icon from react icons */}
                            <FaBook />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TrainingHomPageSingle;