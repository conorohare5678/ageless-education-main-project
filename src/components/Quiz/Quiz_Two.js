import React, { useEffect, useState } from 'react';
import { quiz } from './quizQuestionsTwo';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//definition of quiz page
const Quiz_Two = () => {
    //variable state set to zero
    const [Question, setQuestion] = useState(0);
    //variable state set to empty string
    const [Answer, setAnswer] = useState('');
    //variable state set to false
    const [show, setShow] = useState(false);
    //index set to null
    const [selectIndex, setSelectIndex] = useState(null);
    const [Result, setResult] = useState({
        score: 0,
        correctAns: 0,
        wrongAns: 0,
    })
    //questions variable equal to quiz
    const { Ques } = quiz;
    const { question, choice, correctAns } = Ques[Question];
    //navigate variable to useNavigate to go to different page
    const naviagte = useNavigate();
    const imageURL = 'https://res.cloudinary.com/dlhgjamvc/image/upload/v1710093484/elderly-seniors-taking-quiz-test-taking_utxaog.jpg';

    //useEffect to post points to database
    useEffect(() => {
        if (show) {
            quizComplete();
        }
    }, [show])

    //function to handle questions
    const nextQuestion = () => {
        setSelectIndex(null)
        // setQuestion((prev) => prev + 1)
        setResult((prev) =>
            Answer ? {
                ...prev,
                score: prev.score + 5,
                correctAns: prev.correctAns + 1,
            }
                : {
                    ...prev, wrongAns: prev.wrongAns + 1
                }
        )
        if (Question !== Ques.length - 1) {
            setQuestion((prev) => prev + 1)
        } else {
            setQuestion(0);
            setShow(true);
        }
    }

    //function to handle selected question
    const SelectedQuestion = (answer, index) => {
        setSelectIndex(index)
        if (answer === correctAns) {
            setAnswer(true);
            console.log('Correct')
        } else {
            setAnswer(false);
            console.log('Wrong')
        }
    }

    //function to post points to database
    const quizComplete = () => {
        axios.post('http://localhost:5321/updatePoints', {
            userId: window.localStorage.getItem('id'),
            points: Result.score,
        })
            .then(response => {
                // Handle success response
                console.log(response.data);
            })
            .catch(error => {
                // Handle error
                console.error(error);
            });
    }

    //function to navigate to a different page
    const navigatePage = () => {
        naviagte('/QuizHomepage')
    }


    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)

    //return statement to render the quiz page
    return (
        <>
            {/**all of the quiz component will be rendered in the return statement */}
            <div className='homePage'>
                <img className="quizIMG" src={imageURL} />
                <div className='QuizBody'>

                    <h1 className="centerTitle-1">Quiz</h1>
                    {/**Show function to show the quiz then rsults after a conidition is met */}
                    {!show ? (
                        <>
                            <div className='quiz-style'>
                                <h2 className="centerTitle-2">{Ques[Question].Question}</h2>
                                <ul>
                                    {/**map function to show the questions */}
                                    {choice.map((answer, index) => (
                                        <li onClick={() => SelectedQuestion(answer, index)}
                                            key={answer}
                                            className={selectIndex === index ? 'selectedAnswer' : null}
                                        >
                                            {answer}
                                        </li>
                                    ))}
                                </ul>
                                <div className='questionNumber'>
                                    {/**information about the quiz */}
                                    <span className="active-question-no">{addLeadingZero(Question + 1)}</span>
                                    <span className="total-question">/{addLeadingZero(Ques.length)}</span>
                                    {/**button to iterate through questions */}
                                    <button className="marginLeft" onClick={nextQuestion}>{Question === Ques.length - 1 ? 'Finish' : 'Next'}</button>
                                </div>
                            </div>
                        </>


                    ) : (
                        <div className="result">
                            {/**results shown after finish clicked */}
                            <h3 className="centerTitle-2">Result</h3>
                            <p className="centerTitle-2">
                                Total Question: <span>{Question.length}</span>
                            </p>
                            <p className="centerTitle-2">
                                Total Score:<span> {Result.score}</span>
                            </p>
                            <p className="centerTitle-2">
                                Correct Answers:<span> {Result.correctAns}</span>
                            </p>
                            <p className="centerTitle-2">
                                Wrong Answers:<span> {Result.wrongAns}</span>
                            </p>
                            {/**button to navigate to quiz homepage */}
                            <button className="centerButton" onClick={navigatePage}>Go Back</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

}

export default Quiz_Two;