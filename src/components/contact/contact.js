import React, { useEffect, useState } from "react";
import ProfilePic from "../contact/user-profile-icon.png";
import ChatContainer from "../ChatContainer/chatContainer";
import axios from "axios";

//definition of contacts for chat page component
function Contact() {
    //id from local storage
    let user = localStorage.getItem('user');
    const accesstoken = user ? user.accesstoken : null;
    //different users defined in empty arrays
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [currentUser_2, setCurrentUser_2] = useState({});
    const setUser = () => setCurrentUser([...currentUser.filter((currentUser) => currentUser.userName === user)]);
    //console.log(user);

    //use effect to get users from database
    useEffect(() => {
        if (user) {
            const getUser = async () => {
                try {
                    const res = await axios.get(`http://localhost:5321/userDatabyuName`);
                    if (JSON.stringify(res.data.data) !== JSON.stringify(users)) {
                        setUsers(res.data.data);
                        console.log("Users", res.data.data);
                    }
                } catch (error) {
                    console.error("Error fetching user data:", error);
                }
            };
            getUser();
        }
    }, [users, accesstoken]);

    //function to handle the two different users
    const handleUser = (user_other) => {
        setCurrentUser(user_other.other);
        setCurrentUser_2(user_other);
    };

    //return statement to render contacts page
    return (
        <>
            {/**within this component all of the contacts will be shown for slection */}
            <div className="contactContainer">
                <div>

                    <div className="userDetailsContainer">
                        {/**map function to get all users in contacts */}
                        {users.map((item) => (
                            item._id !== localStorage.getItem('id') && (
                                <div key={item._id}>
                                    <div className="userContainer" onClick={() => handleUser(item)}>
                                        <img src={ProfilePic} className="ChatUserPFP" alt="" />
                                        <div>
                                            <p className="contactText">{item.userName}</p>
                                            <p className="contactTextTwo">New Message</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
            <ChatContainer currentUser={currentUser} currentUser_2={currentUser_2} />
        </>
    );
}

export default Contact;
