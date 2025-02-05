import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//defintion of volunteer login component
const VolunteerLogin = () => {
    //naviaget defined in variable to use useNavigate
    const navigate = useNavigate();
    //image string defined in variable
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710096096/capital-campaign-volunteers_zufpvt.jpg";

    //function to change state of data within form 
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    //function to handle submit when button clicked 
    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;
        console.log(username, password);

        // fetching done here to get login details
        fetch('http://localhost:5321/login-volunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                userName: username,
                password: password,
            }),
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                console.log(data, 'UserLogin');

                // Check if login was successful
                if (data.status === 'ok') {
                    // Redirect to the profile page
                    window.localStorage.setItem('token', data.data);
                    window.localStorage.setItem('user', username);
                    navigate('/HomepageVolunteer');
                } else {
                    alert('Login Failed');
                    console.log('Server response:', data);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        //get statement to volunteer id 
        axios.get(`http://localhost:5321/volDataByUsername/${username}`)
            .then(response => {
                window.localStorage.setItem('volID', response.data.data._id);
            })
            .catch(error => {
                console.error('Error fetching user data:', error);
            });

    };
    //function to change values in form upon click
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //function to navigate to a different page based on name
    const navigatePage = (name) => {
        if (name === "admin") {
            navigate('/AdminLogin');
        } else if (name === "back") {
            navigate('/Login');
        }
    }

    //return statement to render login volunteer page
    return (
        <>
            {/**All the display components here with the necessary styling applied */}
            <div className='homePage'>
                <div className="requestimageRight">
                    {/**image imported */}
                    <img src={imageURL} />

                </div>
                <div className='loginContainerSpace'>
                    <div className="loginVolContainer">
                        <p>Here are the volunteer login you will need to put in the username and password assigned to you when your account was created.</p>
                        <form style={{ margin: 'auto', padding: '20px' }} onSubmit={handleSubmit}>
                            <h3> Volunteer Login</h3>

                            {/**login form followed with labels and input boxes */}
                            <label>Username:</label>
                            <br />
                            <input type="text" name="username" placeholder="Enter Username" onChange={handleChange} />

                            <label>Password:</label>
                            <br />
                            <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} />

                            {/**button when click will enable the onclick function */}
                            <button type="submit" style={{ margin: '0 auto' }}>
                                Log in
                            </button>


                        </form>
                    </div>
                </div>
                {/**extra buttons for navigation with necessary styling applied */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function with navigate based on name */}
                    <button onClick={() => navigatePage('admin')} style={{ margin: '10px' }}>Admin Login</button>
                    {/**onclick function which navigates based on name */}
                    <button onClick={() => navigatePage('back')} style={{ margin: '10px' }}>Go Back</button>
                </div>
            </div>
        </>
    );

}

export default VolunteerLogin;