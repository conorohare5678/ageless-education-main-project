import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaRegMessage } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710946659/e320e3dfad07907fcb0d8faf5c841586f36108dfdbe9bcb19b2fd077133f9133_weyxyv.jpg";

//definition of the message to a volunteer page
const MessageToVol = () => {
    //variable for user and set user defined with an empty variable
    const [users, setUser] = useState([]);
    const [UserSelected, setUserSelected] = useState('');
    const [Name, setName] = useState('');
    const [MessageUser, setMessageUser] = useState('');
    //navigate defined to use useNavigate within page
    const navigate = useNavigate();

    //useEffect to get volunteer usernames to the database
    useEffect(() => {
        axios.get(`http://localhost:5321/getVolunteerForPost`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching users:', error));
    })

    //function to set username
    const messageusername = (e) => {
        setUserSelected(e.target.value);
    }

    //function to set name entered
    const NameEntered = (e) => {
        setName(e.target.value);
    }

    //function to set the message sent by the user
    const messagesent = (e) => {
        setMessageUser(e.target.value);
    }

    //function to post the message to the database with certain information being sent
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('id');

        if (!userId) {
            console.error('volID not found in localStorage');
            alert('Error sending message. Volunteer ID not found.');
            return;
        }

        try {
            await axios.post('http://localhost:5321/postMessageToUser', {
                volunteerId: UserSelected,
                userId: userId,
                name: Name,
                text: MessageUser,
            });

            setUserSelected('');
            setName('');
            setMessageUser('');
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    //function to navigate to a different page based on name
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/MessageHome')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        }
    }

    //return function to render the message to volunteer page
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <div className='requestimageRight'>
                    <img src={imageURL} style={{ height: '600px' }} alt="imgMV1"></img>
                </div>
                <div className="requestRight-2">
                    <div className='requestContainer'>
                        <h1>This is a message to the volunteer</h1>
                        <p>This is where you can send a direct message to the volunteer to them individually and they will respond to you in due course.</p>
                        {/**form with onsubmit which when submitted will post message to database */}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    User name:
                                </label>
                                {/**Drop down option to select a volunteer */}
                                {/**map function used to show the volunteers in an array formatt */}
                                <select value={UserSelected} onChange={messageusername}>
                                    <option value="">Select a user</option>
                                    {users.map(user => (
                                        <option key={user._id} value={user._id}>{user.userName}</option>
                                    ))}
                                </select>
                                <label>User Name</label>
                                {/**input feild to input message to the volunteer */}
                                <input value={Name} onChange={NameEntered} type="text"></input>
                                <label>
                                    Message to user:
                                </label>
                                <textarea style={{ height: '205px', width: '100%' }} value={MessageUser} onChange={messagesent}></textarea>
                            </div>
                            {/**button to send message to the volunteer */}
                            <button style={{ margin: '0 auto' }}>Send to Volunteer</button>
                        </form>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Message Homepage</span>
                        {/**icon imported from react icons */}
                        <FaRegMessage />

                    </button>

                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                        <span>Profile Page</span>
                        {/**icon imported from react icons */}
                        <FaBookOpenReader />

                    </button>

                    {/**onlick on button to navigate to different page using a function*/}
                    <button className="buttonSpace" onClick={() => navigatePage('Quiz')}>
                        <span>Quiz</span>
                        {/**icon imported from react icons */}
                        <MdQuiz />
                    </button>
                </div>
            </div>
        </>
    )
}

export default MessageToVol;