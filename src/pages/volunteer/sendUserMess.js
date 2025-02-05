import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

//definition of send message component
const SendMessageUser = () => {
    //user and setUser deined in empty array
    const [users, setUser] = useState([]);
    //input variables defined in empty state
    const [UserSelected, setUserSelected] = useState('');
    const [VolName, setVolName] = useState('');
    const [MessageUser, setMessageUser] = useState('');
    //navigate used to use useNavigate
    const navigate = useNavigate();
    //image url from external source
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710946659/e320e3dfad07907fcb0d8faf5c841586f36108dfdbe9bcb19b2fd077133f9133_weyxyv.jpg";

    //useEffect to get users for the messaging page
    useEffect(() => {
        axios.get(`http://localhost:5321/getUserForPost`)
            .then(response => setUser(response.data))
            .catch(error => console.error('Error fetching users:', error));
    })

    //function to change value of user input
    const messageusername = (e) => {
        setUserSelected(e.target.value);
    }

    //function to change value of user name input
    const volName = (e) => {
        setVolName(e.target.value);
    }

    //function to change value of message input
    const messagesent = (e) => {
        setMessageUser(e.target.value);
    }

    //function to post message to database when button clicked
    const handleSubmit = async (e) => {
        e.preventDefault();
        const volunteerId = localStorage.getItem('volID');

        //error hadling for no ID found
        if (!volunteerId) {
            console.error('volID not found in localStorage');
            alert('Error sending message. Volunteer ID not found.');
            return;
        }

        try {
            await axios.post('http://localhost:5321/postMessageToUser', {
                volunteerId: volunteerId,
                userId: UserSelected,
                name: VolName,
                text: MessageUser,
            });
            // feilds reset after onclick
            setUserSelected('');
            setVolName('');
            setMessageUser('');
            alert('Message sent successfully!');
        } catch (error) {
            console.error('Error sending message:', error);
            alert('Error sending message. Please try again later.');
        }
    };

    //function to navigate to different page based on name
    const navigatePage = (name) => {
        if (name == 'go back') {
            navigate('/HomepageVolunteer')
        } else if (name === 'Log out') {
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('volID');
            window.localStorage.removeItem('user');
            navigate('/Hub')
        }

    }

    //return statement to render message componenet
    return (
        <>
            {/**components will have correct tags and styling applied here */}
            <div className="homePage">
                <div className='requestimageRight'>
                    <img src={imageURL} style={{ height: '600px' }}></img>
                </div>
                <div className="requestRight-2">
                    <div className='requestContainer'>
                        <h1>Send message to user</h1>
                        <p>Here you the volunteer can directly send a user a message regarding querys that they make or if they send you a message</p>

                        {/**form to enter message and handle submit onclick */}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    User name:
                                </label>
                                <select value={UserSelected} onChange={messageusername}>
                                    {/**drop down of users */}
                                    <option value="">Select a user</option>
                                    {users.map(user => (
                                        <option key={user._id} value={user._id}>{user.userName}</option>
                                    ))}
                                </select>
                                <label>Volunteer Name</label>
                                {/**input boxes */}
                                <input value={VolName} onChange={volName} type="text"></input>
                                <label>
                                    Message to user:
                                </label>
                                {/**textarea box  */}
                                <textarea style={{ height: '200px', width: '100%' }} value={MessageUser} onChange={messagesent}></textarea>
                            </div>
                            {/**button to send to user */}
                            <button style={{ margin: '0 auto' }}>Send to User</button>
                        </form>
                        {/**navigation buttons to navigate to different pages */}
                        {/**styling applied */}
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                            <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                                <span>Go Back</span>
                                {/**icon imported from react icons */}
                                <RiArrowGoBackFill />

                            </button>

                            <button className="buttonSpace" onClick={() => navigatePage('Log out')}>
                                <span>Log Out</span>
                                {/**icon imported from react icons */}
                                <FaBookOpenReader />

                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default SendMessageUser;