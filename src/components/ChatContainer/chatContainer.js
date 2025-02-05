import React, { useEffect, useState } from "react";
import ProfilePic from "../contact/user-profile-icon.png";
import axios from "axios";

//defintion of chat container and variable
function ChatContainer({ currentUser_2 }) {
    //variable defined in empty array 
    const [userMessage, setUserMessage] = useState([]);
    //variable defined in empty string
    const [sendMessages, setSendMessages] = useState("");
    const logged = localStorage.getItem('id');

    //useEffect to get messages from users
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const logged = localStorage.getItem('id');
                axios.get(`http://localhost:5321/get/chat/msg/${logged}/${currentUser_2._id}`)
                    .then((message) => {
                        setUserMessage(message.data);
                    })
            } catch (error) {
                console.log("Error getting messages:", error);
            }
        };

        fetchMessages();
    }, [currentUser_2]);

    //function to send messages to users
    const sendMessage = async () => {
        try {
            axios.post("http://localhost:5321/msg", {
                from: localStorage.getItem('id'),
                to: currentUser_2._id,
                message: sendMessages
            });



            const newMessage = { id: userMessage.length + 1, message: sendMessages, myself: true };

            setUserMessage(prevMessages => [...prevMessages, newMessage]);

            setSendMessages("");

        } catch (error) {
            console.log("error", error)
        }
    }

    //return statement to render chat container component
    return (
        <div className="chatContainer">
            {currentUser_2 !== null ? (
                <div>
                    <div className="ChatContainerStyle">
                        <img src={ProfilePic} className="userProfile" alt="Profile" />
                        <p>Username: {currentUser_2.userName}</p>
                    </div>
                    {/**map function used to get all user messages based on id
                     * showing them in a certain order where we have one user 
                     * then another user
                     */}
                    <div className="msgContainer">
                        {userMessage.slice(0).reverse().map((message, index) => (
                            <>
                                <div className="ChatContainerText">
                                    <div
                                        key={message.id}
                                        className={message.myself ? "currentUserMessage" : "otherUserMessage"}
                                    >


                                        <p className="chatMessageLeft">
                                            <strong>
                                                {message.myself ?
                                                    (localStorage.getItem('user') ? localStorage.getItem('user').split(' ')[0] : 'You') :
                                                    (currentUser_2.userName ? currentUser_2.userName.split(' ')[0] : 'Other User')
                                                }
                                            </strong>: <br />{message.message}
                                        </p>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                    {/**button to send message where onchange is used to send the message */}
                    <div className="msgSender">
                        <input type="text" placeholder="Write your message here" value={sendMessages} onChange={(e) => setSendMessages(e.target.value)} className="msgInput" />
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            ) : (
                <p>No user selected</p>
            )}
        </div>
    );
}

export default ChatContainer;

