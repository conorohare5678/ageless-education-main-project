import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import PopUpSix from "../../components/popups/popUpSix";
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708458994/5d657e892e22af1c5b4b89b3_yzqowg.png";
//const imageURL_1 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708465018/vcwod33a5w8mornmcicy.jpg";

//definition of set alaram component page
const SetAlarm = () => {
    //variables defined with empty array state
    const [Alarm, setAlarm] = useState([]);
    //variable defined with state set to false
    const [show, setShow] = useState(false);
    //variable defined with empty string
    const [show_one, setShow_one] = useState('');
    //variable defined with state set to false
    const [show_1, setShow_1] = useState(false);
    //variable defined with an empty string
    const [show_one_1, setShow_one_1] = useState('');
    //navigate to use useNavigate function
    const navigate = useNavigate();

    //useEffect to get information on set alarm page
    useEffect(() => {
        axios.get('http://localhost:5321/getSetAlarm')
            .then(Alarm => setAlarm(Alarm.data))
            .catch(err => console.log(err))
    })

    //function to show pop up when button clicked
    const buttonClick = (content_1) => {
        setShow(true);
        setShow_one(content_1);
        //console.log(show_one);
    }

    //function to show pop up when button clicked
    const buttonClick_1 = (content_2) => {
        setShow_1(true);
        setShow_one_1(content_2);
        //console.log(show_one);
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

    //return statement to render componenet
    return (
        <>
            {/**All componenets are here with styling applied */}
            <div className="homePage">
                <h1 className="centerTitle">How to set an alarm on your phone</h1>
                <div className="floatLeft"  >
                    <img src={imageURL} style={{ height: '400px' }} alt="imgAl1" />
                </div>
                {/**maps function to iterate over information to dispaly */}
                {Alarm.map(AlarmTime => (
                    <div key={AlarmTime._id} className="textBox-left-width">
                        {/**information being shown based on name */}
                        {(AlarmTime.name === '' || AlarmTime.name === 'Step 1' || AlarmTime.name === 'Step 2') && (
                            <div>
                                <h2>
                                    {AlarmTime.name}
                                </h2>
                                <p>
                                    {AlarmTime.text}
                                </p>
                                {/**image shown based on name */}
                                {AlarmTime.name === "Step 2" && (
                                    <img src={AlarmTime.imageURL} style={{ width: '100%' }} alt="imgAl2" />
                                )}

                                {/**button shown based on name */}
                                {AlarmTime.name === "Step 1" && (
                                    <button onClick={() => buttonClick(true)} style={{ margin: '0 auto' }}>Hit Here</button>
                                )}
                            </div>
                        )}

                    </div>
                ))}

                <div className="textRight-container" style={{ marginTop: '-470px', marginRight: '10px', paddingTop: '10px' }}>
                    {/**map function used to iterate over infomration to be displayed */}
                    {Alarm.map(AlarmTime => (
                        <div key={AlarmTime._id}>
                            {/**information shown based on name */}
                            {(AlarmTime.name === 'Step 3' || AlarmTime.name === 'Step 4' || AlarmTime.name === 'Step 5') && (
                                <div>
                                    <h2>
                                        {AlarmTime.name}
                                    </h2>
                                    <p>
                                        {AlarmTime.text}
                                    </p>
                                    {/**images shown based on name */}
                                    {(AlarmTime.name === "Step 3" || AlarmTime.name === "Step 5") && (
                                        <img src={AlarmTime.imageURL} style={{ width: '100%' }} alt="imgAl2" />
                                    )}

                                    {/**button shown based on name */}
                                    {AlarmTime.name === "Step 4" && (
                                        <button onClick={() => buttonClick_1(true)} style={{ margin: '0 auto' }}>Hit Here</button>
                                    )}
                                </div>
                            )}

                        </div>
                    ))}
                </div>
                {/**map function used to iterate over infomration in database */}
                {Alarm.map(AlarmTime => (
                    <div key={AlarmTime._id} className="textBox-left-width" style={{ marginTop: '-820px', marginBottom: '150px', marginLeft: '20px' }}>
                        {/**showing infomration based on name */}
                        {(AlarmTime.name === 'How to turn off Alarm ') && (
                            <div>
                                <h2 style={{ textAlign: 'center' }}>
                                    {AlarmTime.name}
                                </h2>
                                <p>
                                    {AlarmTime.text}
                                </p>
                                <video autoPlay loop muted style={{ width: '100%' }}>
                                    <source src={AlarmTime.imageURL} type="video/mp4" />
                                </video>
                                {/**button shown based on name */}
                                {AlarmTime.name === "Step 4" && (
                                    <button onClick={() => buttonClick(true)}>Hit Here</button>
                                )}
                            </div>
                        )}

                    </div>
                ))}
                {/**onclose functions used here to close pop ups on button click */}
                {show && <PopUpSix content_1={show_one} onClose={() => setShow(false)} />}
                {show_1 && <PopUpSix content_2={show_one_1} onClose={() => setShow_1(false)} />}

                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function used here */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function used here */}
                    <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                        <span>Profile Page</span>
                        {/**icon imported from react icons */}
                        <FaBookOpenReader />

                    </button>

                    {/**onclick function used here */}
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

export default SetAlarm;