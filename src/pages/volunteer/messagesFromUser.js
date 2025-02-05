import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

//definition of message to user component
const MessageFromUser = () => {
    //MessageUserVol and setMessageUserVol defined and empty array
    const [MessageUserVol, setMessageUserVol] = useState([]);
    //id  retrieved from local stroage
    const volunteerId = localStorage.getItem('volID');
    //navigate to use useNavigate
    const navigate = useNavigate();
    //image string in variable
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710946659/e320e3dfad07907fcb0d8faf5c841586f36108dfdbe9bcb19b2fd077133f9133_weyxyv.jpg";
    //link to external page in variable
    const url = 'https://mail.google.com/mail/u/1/#inbox';

    //useEffect to get messages from users for volunteer based on id
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch posts based on the user ID
                const response = await axios.get(`http://localhost:5321/getPostbyVolId/${volunteerId}`);
                setMessageUserVol(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        if (volunteerId) {
            fetchPosts();
        }
    }, [volunteerId]);

    //function to navigate to different page based on name
    const navigatePage = (name) => {
        if (name === 'message') {
            navigate('/SendMessageUser')
        } else if (name === 'home') {
            navigate('/HomepageVolunteer')
        }

    }

    //open email function in blank window
    const openEmail = () => {
        window.open(url, "_blank");
    }

    //return statement to render the message to user page
    return (
        <>
            {/**all components have necessary styling applied */}
            <div className="homePage">
                <div className="homePage-blog-1" style={{ textAlign: 'center' }}>
                    <h1>Messages from users</h1>
                    <p>This is where you will see all messages from users to you:</p>
                    <p>You will also see messages that you have sent aswell</p>
                    <p>You can send a user a message by hitting the button below</p>
                    <br />
                    {/**onlick function with navigates based on name */}
                    <button style={{ margin: '10px auto', display: 'block' }} onClick={() => navigatePage('message')}>Send a user a message</button>
                    <p>Please be aware volunteers that users may send message requests through the email platform which can be accessed by hitting the button below</p>
                    <br />
                    {/**onclick function which navigates based on name */}
                    <button style={{ margin: '10px auto', display: 'block' }} onClick={() => openEmail()}>Email page</button>
                    <br />
                    {/**onclick function which navigates baed on name */}
                    <button style={{ margin: '10px auto', display: 'block' }} onClick={() => navigatePage('home')}>Volunteer Homepage</button>
                </div>
                <div className='imageLeftMess'>
                    <img src={imageURL} style={{ height: '500px', width: '90%' }} alt="imgMU1"></img>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', placeItems: 'center' }}>
                    {MessageUserVol.length > 0 ? (
                        <>
                            {/**map function to iterate messages which have been sent */}
                            {/**show message will appear here if vol has no messages */}
                            {MessageUserVol.map(post => (
                                <div key={post._id} className="FAQcontain">
                                    <p>Message from: <br />{post.name}</p>
                                    <p>Message: {post.text}</p>
                                </div>
                            ))}
                        </>
                    ) : (
                        <p>No messages found for this user.</p>
                    )}
                </div>
            </div>
        </>

    )
}
export default MessageFromUser;