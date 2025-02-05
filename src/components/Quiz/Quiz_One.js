import React, { useState, useEffect } from 'react';
import { quiz } from './quizQuestions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//definition of quiz page
const Quiz_One = () => {
    //questions state set to zero
    const [Question, setQuestion] = useState(0);
    //answer string set to empty
    const [Answer, setAnswer] = useState('');
    //show state set to false
    const [show, setShow] = useState(false);
    //index set to null
    const [selectIndex, setSelectIndex] = useState(null);
    const [Result, setResult] = useState({
        score: 0,
        correctAns: 0,
        wrongAns: 0,
    })
    //variable definition
    const { Ques } = quiz;
    //variable defintion
    const { question, choice, correctAns } = Ques[Question];
    //navigate to useNavigate to go to different page
    const naviagte = useNavigate();
    //image url
    const imageURL = 'https://res.cloudinary.com/dlhgjamvc/image/upload/v1710093484/elderly-seniors-taking-quiz-test-taking_utxaog.jpg';

    //useEffect to go to add points to score
    useEffect(() => {
        if (show) {
            handleQuizCompletion();
        }
    }, [show]);

    //function to navigate to next question and show right and wrong answers
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
    //function handle selected question answer
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
    const handleQuizCompletion = () => {
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
    };

    //function to navigate to quiz homepage
    const navigatePage = () => {
        naviagte('/QuizHomepage')
    }


    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
    //return statement to render quiz page
    return (
        <>
            {/**All information reguarding the quiz is rendered in here */}
            <div className='homePage'>
                <img className="quizIMG" src={imageURL} />
                <div className='QuizBody'>

                    <h1 className="centerTitle-1">Quiz</h1>
                    {/**show function to show quiz until completed */}
                    {!show ? (
                        <>
                            <div className='quiz-style'>
                                <h2 className="centerTitle-2">{Ques[Question].Question}</h2>
                                <ul>
                                    {/**map function to show quiz questions */}
                                    {choice.map((answer, index) => (
                                        <li onClick={() => SelectedQuestion(answer, index)}
                                            key={answer}
                                            className={selectIndex === index ? 'selectedAnswer' : null}
                                        >
                                            {answer}
                                        </li>
                                    ))}
                                </ul>
                                {/**quiz information */}
                                <div className='questionNumber'>
                                    <span>{addLeadingZero(Question + 1)}</span>
                                    <span>/{addLeadingZero(Ques.length)}</span>
                                    <button className="marginLeft" onClick={nextQuestion}>{Question === Ques.length - 1 ? 'Finish' : 'Next'}</button>
                                </div>
                            </div>
                        </>


                    ) : (
                        <div className="result">
                            {/**shows results from quiz */}
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
                            {/**button to navigate back to quiz homepage */}
                            <button className="centerButton" onClick={navigatePage}>Go Back</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );

}

export default Quiz_One;
