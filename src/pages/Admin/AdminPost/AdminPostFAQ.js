import axios from 'axios';
import React, { useState } from 'react';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

//definition of FAQ page post
const AdminFAQ = () => {
    //image string stored in variable
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709513707/how-to-build-faq-section_mtekk6.jpg";
    //variables defined with empty string value
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    //naviagte defined to useNavigate function
    const navigate = useNavigate();

    //function to change value on click
    const titleEntered = (e) => {
        setName(e.target.value);
    }

    //function to change value onclick
    const textEntered = (e) => {
        setText(e.target.value);
    }

    //function to navigate to page based on name
    const navigatePage = (name) => {
        const volID = localStorage.getItem('volID');
        if (volID) {
            // If volID is present
            if (name === 'go back') {
                navigate('/HomepageVolunteer');
            } else if (name === 'Log out') {
                // If volID is present and clears local storage
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('user');
                window.localStorage.removeItem('volID');
                navigate('/Hub');
            }
        } else {
            // If volID is not present
            if (name === 'Log out') {
                // If volID is not present 
                navigate('/Hub');
            } else {
                // If volID is not present
                navigate('/AdminHomepage');
            }
        }

    }

    //function to post data to the databse
    const SubmitFAQResponse = () => {
        axios.post('http://localhost:5321/addFAQ', {
            name: name,
            text: text,
        })
            .then(() => {
                setName('');
                setText('');
                window.location.reload();
            })
            .catch(error => {
                console.error('Error posting FAQ:', error);
            });

    }

    // //function to navigate to a different page based on name
    // const navigatePage = (name) => {
    //     if (name === 'go back') {
    //         navigate('/AdminHomepage')
    //     } else if (name === 'Log out') {
    //         navigate('/Hub')
    //     }

    // }

    //return statement to render post FAQ page
    return (
        <>
            {/**all components within page will be rendered here with styling */}
            <div className="homePage">
                <div className='requestimageRight'>
                    {/**image imported */}
                    <img src={imageURL} style={{ height: '600px' }} alt='imagFAQ'></img>
                </div>
                <div className='requestRight-1'>
                    <div className='requestContainer'>
                        <h1>Post an FAQ</h1>
                        <p>This is where you can post FAQ that could appear in request commonly</p>
                        <p>Enter the name of the FAQ and a description of it</p>
                        <div className='InputBoxes' style={{ marginTop: '56px' }}>
                            <label>FAQ Title:</label>
                            {/**input box */}
                            <input type='text' name='Request Title' onChange={titleEntered}></input>

                            <label>FAQ description:</label>
                            {/**textarea box */}
                            <textarea name='description' rows={5} columns={40} onChange={textEntered}></textarea>
                            <div className='buttonCenter'>
                                {/**onclick submitt button */}
                                <button style={{ margin: '4.5px auto' }} onClick={SubmitFAQResponse}>Post FAQ to User</button>
                            </div>
                            {/**naviagtion buttons to navigate to different page and styling applied */}
                            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                                {/**onclick function used */}
                                <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                                    <span>Go Back</span>
                                    {/**icon used from react icons */}
                                    <RiArrowGoBackFill />

                                </button>
                                {/**onclick function used */}
                                <button className="buttonSpace" onClick={() => navigatePage('Log out')}>
                                    <span>Log Out</span>
                                    {/**icon used form react icons */}
                                    <FaBookOpenReader />

                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AdminFAQ;