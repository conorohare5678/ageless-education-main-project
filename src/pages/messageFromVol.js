import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";

//definition of message to volunteer page
const MessageFromVol = () => {
    //variable defined and set variable to an empty array
    const [MessageUserVol, setMessageUserVol] = useState([]);
    //variable to id from local storage
    const userId = localStorage.getItem('id');
    //navigate defined to use useNavigate
    const navigate = useNavigate();

    //useEffect to get messages from the database
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch posts based on the user ID
                const response = await axios.get(`http://localhost:5321/getPostbyId/${userId}`);
                setMessageUserVol(response.data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        if (userId) {
            fetchPosts();
        }
    }, [userId]);

    //function to navigate to a different page within the application based on name
    const navigatePage = (name) => {
        if (name === 'message') {
            navigate('/MessageVol')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'messagehome') {
            navigate('/MessageHome')
        }

    }

    //return statement to render message volunteer page
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <div>
                    <h1 style={{ marginLeft: '20px' }}>Messages from Volunteers</h1>
                    <p style={{ marginLeft: '20px' }}>Here you will see all responses from a volunteer of messages that you have sent to them</p>
                    {/**Button to navigate to message page using onclick function */}
                    <button style={{ marginTop: '-65px', marginBottom: '30px', marginRight: '35px' }} className="marginLeft" onClick={() => navigatePage('message')}>Message Volunteer</button>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', placeItems: 'center' }}>
                        {MessageUserVol.length > 0 ? (
                            <>
                                {/**map function to show messages from database from user */}
                                {/**uses show function here to show a message if no posts are found */}
                                {MessageUserVol.map(post => (
                                    <div key={post._id} className="FAQcontain">
                                        <p>Message from:<br /> {post.name}</p>
                                        <p>Message: {post.text}</p>
                                    </div>
                                ))}
                            </>
                        ) : (
                            <p>No messages found for this user.</p>
                        )}
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                        <span>Profile Page</span>
                        {/**imported icon from react icons */}
                        <FaBookOpenReader />

                    </button>

                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('messagehome')}>
                        <span>Message Homepage</span>
                        {/**imported icon from react icons */}
                        <FaRegMessage />

                    </button>

                </div>

            </div>
        </>
    )

}

export default MessageFromVol;