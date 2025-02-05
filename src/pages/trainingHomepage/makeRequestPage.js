import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBookOpenReader } from "react-icons/fa6";
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709374406/close-up-of-a-hands-of-a-businessman-on-a-keyboard_lly29j.jpg";

//definition of the make request page component
const MakeRequest = () => {
    //declaring variable for title and text with an empty state
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    //declaring variables to show response with intial state set to false
    const [showResponse, setShowResponse] = useState(false);
    //naviaget defined to use useNavigate
    const navigate = useNavigate();

    //function to change the title enter when submit is clicked
    const titleEntered = (e) => {
        setTitle(e.target.value);
    }

    //function ot change the text when submit is clicked
    const textEntered = (e) => {
        setText(e.target.value);
    }

    //function to post the message once submitt is clicked
    const submitRequest = () => {
        axios.post('http://localhost:5321/addMakeRequest', {
            title: title,
            text: text
        })
            .then(show => {
                setShowResponse(true);
            });
    }

    //function to naviagte to a different page when button is clicked
    const naviagteProfilePage = () => {
        navigate('/ProfilePage')
    }

    //return statement to render the make request page
    return (
        <>

            {/**Content within the component with all necessary styling applied */}
            <div className='homePage'>
                {/**show response is set to null which shows the data entry page */}
                {!showResponse ? (
                    <>
                        <div className='requestimageRight'>
                            <img src={imageURL} alt='imgR1'></img>
                        </div>
                        <div className='requestRight'>
                            <div className='requestContainer'>
                                <h1 className='centerTitle'>Make a request</h1>
                                <p className='centerTitle'>Here you can make a request from requesting a new page or change in particular content or even asking for another quiz if you dare!</p>

                                <h2 className='centerTitle'>Here is you type in the boxes below you can add your request</h2>

                                <div className='InputBoxes'>
                                    {/**label and input box for make request which will change on click */}
                                    <label>Request Title:</label>
                                    <input type='text' name='Request Title' onChange={titleEntered}></input>

                                    {/**label and textarea box for make request which will change on click */}
                                    <label>Request description:</label>
                                    <textarea name='description' rows={5} columns={40} onChange={textEntered}></textarea>

                                    {/**onclick button which will submit the information to the database */}
                                    <div className='buttonCenter'>
                                        <button onClick={submitRequest}>Post Request to Admin</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </>
                ) : (
                    <>
                        {/**show function will show this next piece of information on clicking the button */}
                        <div className='requestimageRight'>
                            <img src={imageURL} alt='imgR2'></img>
                        </div>
                        <div className='requestContainer' style={{ paddingBottom: '214.5px' }}>
                            <h1 className='centerTitle' style={{ marginTop: '-500px', marginBottom: '155px' }}>Make a Request</h1>
                            <p>Your reponse has been submitted to an admin click on the button below to return to profile page</p>
                            {/**button to navigate to the profile page using onclick function here */}
                            <button style={{ margin: '0 auto' }} onClick={naviagteProfilePage}>
                                <span style={{ marginRight: '5px' }}>Profile Page</span>
                                {/**icon imported from react icons */}
                                <FaBookOpenReader />
                            </button>
                        </div>
                    </>
                )}
            </div>

        </>
    );
}

export default MakeRequest;