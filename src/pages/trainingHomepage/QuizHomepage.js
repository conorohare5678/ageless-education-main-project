import React from "react";
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";

//definition of quiz homepage component
const QuizHomepage = () => {
    //declaration of image variable with link stored in them
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708980190/quiz-in-comic-pop-art-style-quiz-brainy-game-word-vector-illustration-design_wr2j3b.jpg";
    const imageURL_1 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708980191/509655_shutterstock_1506580442_769367_t8l7ae.jpg";
    const imageURL_2 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708980192/quiz-time-orange-1052x423_olmmus.jpg";
    //navigate variable declared to use useNavigate 
    const navigate = useNavigate();

    //function created to naviaget to different pages based on name
    const navigatePage = (name) => {
        if (name === 'Quiz1') {
            navigate('/QuizOne')
        } else if (name === 'profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz2') {
            navigate('/QuizTwo')
        } else if (name === 'Quiz3') {
            navigate('/QuizThree')
        } else if (name === 'TrainingPage') {
            navigate('/TrainingHomeSing')
        }
    }

    //return statement to render quiz homepage component
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div>
                <div className="homePage">
                    <h1 style={{ textAlign: 'center' }}>Quizzes</h1>
                    <p style={{ textAlign: 'center' }}>On the quiz page there will be three quizzes to test your knowledge you have learn't through out the learning pages which you have completed</p>
                    <p style={{ textAlign: 'center' }}>It is advisible you complete all of the learning pages before you complete these quizzes</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>

                        <div className="learningCardCon">
                            {/**Card componenet from bootstrap imported */}
                            <Card className="profileCard-1">
                                <Card.Img src={imageURL} className="profileImg-1" />
                                <Card.Body className="cardBody-1">
                                    <Card.Title className="centerTitle-2">Quiz 1</Card.Title>
                                    <Card.Text className="centerTitle">
                                        This is the first Quiz that you can complete on knowledge you have learnt
                                    </Card.Text>
                                    <div className="button-bottom">
                                        <div className="buttonTrainingPage">
                                            <button onClick={() => navigatePage('Quiz1')}>Quiz 1</button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="learningCardCon">
                            {/**Card componenet from bootstrap imported */}
                            <Card className="profileCard-1">
                                <Card.Img src={imageURL_1} className="profileImg-1" />
                                <Card.Body className="cardBody-1">
                                    <Card.Title className="centerTitle-2">Quiz 2</Card.Title>
                                    <Card.Text className="centerTitle">
                                        This is the quiz if you have completed quiz 1 successfully
                                    </Card.Text>
                                    {/**button that navigates to quiz page onclick based on name */}
                                    <div className="button-bottom">
                                        <div className="buttonTrainingPage">
                                            <button onClick={() => navigatePage('Quiz2')}>Quiz 2</button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="learningCardCon">
                            {/**Card componenet from bootstrap imported */}
                            <Card className="profileCard-1">
                                <Card.Img src={imageURL_2} className="profileImg-1" />
                                <Card.Body className="cardBody-1">
                                    <Card.Title className="centerTitle-2">Quiz 3</Card.Title>
                                    <Card.Text className="centerTitle">
                                        This is the quiz if you have completed quiz 2 successfully
                                    </Card.Text>
                                    {/**button that navigates to quiz page onclick based on name */}
                                    <div className="button-bottom">
                                        <div className="buttonTrainingPage">
                                            <button onClick={() => navigatePage('Quiz3')}>Quiz 3</button>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>


                    </div>
                    {/**button that navigates to a page onclick based on name */}
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        <button onClick={() => navigatePage('profile')}>
                            <span style={{ marginRight: '5px' }}>Profile Page</span>
                            {/**icon imported from react icons */}
                            <FaBookOpenReader />
                        </button>
                        <button onClick={() => navigatePage('TrainingPage')}>
                            <span style={{ marginRight: '5px' }}>Training Page</span>
                            {/**icon imported from react icons */}
                            <FaBook />
                        </button>
                    </div>
                </div>

            </div>

        </>
    );

}

export default QuizHomepage;