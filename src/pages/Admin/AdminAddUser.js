import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";

//definition of add user by admin page
const AdminAddUser = () => {
    //navigate defined to useNavigate function
    const navigate = useNavigate();
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709564432/6159448_e9cxws.png";

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
            } else if (name === 'go back') {
                // If volID is not present
                navigate('/AdminHomepage');
            }
        }

    }

    //function to set data in feilds
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
    });

    //function to post details to database
    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, userName, password } = formData;
        console.log(firstName, lastName, userName, password);

        fetch('http://localhost:5321/register', {
            method: 'POST',
            crossDomain: true,
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify({
                firstName,
                lastName,
                userName,
                password,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, 'UserRegister');

                // Check if registration was successful
                if (data.status === 'ok') {
                    // Redirect to the successful sign-up page
                    navigatePage('go back')
                }
                else {
                    alert('Username already taken');
                }
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // //function to navigate to page based on name
    // const navigatePage = (name) => {
    //     if (name == 'go back') {
    //         navigate('/AdminHomepage')
    //     } else if (name === 'Log out') {
    //         navigate('/Login')
    //     }

    //return statement to render add user page
    return (
        <>
            <div className="homePage">
                <div className="requestimageRight">
                    <img src={imageURL} />

                </div>
                <div className='signup-container-1' style={{ marginRight: 'auto' }}>
                    <form className='form-signup-1' onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>

                        <div>
                            {/**label and input box */}
                            <label>First name</label>
                            <input type="text" placeholder="First name" name="firstName" onChange={handleChange} />
                        </div>

                        <div>
                            {/**label and input box */}
                            <label>Last name</label>
                            <input type="text" placeholder="Last name" name="lastName" onChange={handleChange} />
                        </div>

                        <div>
                            {/**label and input box */}
                            <label>Username</label>
                            <input type="username" placeholder="Enter Username" name="userName" onChange={handleChange} />
                        </div>

                        <div>
                            {/**label and input box */}
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                        </div>

                        <div>
                            {/**submit button */}
                            <button type="submit" className="btn">
                                Sign Up
                            </button>

                        </div>
                    </form>
                </div>
                {/**navigation buttons to naviagte to different pages with styling applied */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function used */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function used */}
                    <button className="buttonSpace" onClick={() => navigatePage('Log out')}>
                        <span>Log Out</span>
                        {/**icon imported from react icons */}
                        <FaBookOpenReader />

                    </button>

                </div>
            </div>
        </>
    )

}

export default AdminAddUser;