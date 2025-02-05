import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709564432/6159448_e9cxws.png";

//definition of add volunteer page
const AddVolunteer = () => {
    //navigate used to useNavigate function
    const navigate = useNavigate();
    //function to set form data to empty string 
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
    });

    //function to post volunteer info to the database
    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, userName, password } = formData;
        console.log(firstName, lastName, userName, password);

        fetch('http://localhost:5321/registerVolunteer', {
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
                    navigate('/AdminHomepage');
                }
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //return statement to render the add vol page
    return (
        <>
            {/**all styling and components within the page rendered here */}
            <div className="homePage">
                <div className="requestimageRight">
                    <img src={imageURL} />

                </div>
                <div className='signup-container-1' style={{ marginRight: 'auto' }}>
                    {/**form function with onSubmit function */}
                    <form className='form-signup-1' onSubmit={handleSubmit}>
                        <h3>Sign Up</h3>

                        <div>
                            {/**label and input box with onchange */}
                            <label>First name</label>
                            <input type="text" placeholder="First name" name="firstName" onChange={handleChange} />
                        </div>

                        <div>
                            {/**label and input box with onchange */}
                            <label>Last name</label>
                            <input type="text" placeholder="Last name" name="lastName" onChange={handleChange} />
                        </div>

                        <div>
                            {/**label and onput box with onchange */}
                            <label>Username</label>
                            <input type="username" placeholder="Enter Username" name="userName" onChange={handleChange} />
                        </div>

                        <div>
                            {/**label and input box with on change */}
                            <label>Password</label>
                            <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
                        </div>

                        <div>
                            {/**submit button  */}
                            <button type="submit" className="btn">
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default AddVolunteer;