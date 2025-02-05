import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//definition of admin login page
const AdminLogin = () => {
    //naviagte defined to useNavigate function
    const navigate = useNavigate();
    //variables set with empty value 
    const [AdminKey, setAdminKey] = useState('');
    //image variable defined with string of image
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709479039/admin-sign-on-laptop-icon-stock-vector_sr4lbk.jpg";

    //function to handle form login
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    //function to login when login button is selected
    //secret key is included for added security
    const handleSubmit = (e) => {
        // console.log(AdminKey)
        if (AdminKey != 'CITPPROJECT') {
            alert("Invalid Admin");
            e.preventDefault();
        } else {
            e.preventDefault();
            const { username, password } = formData;
            console.log(username, password);

            //fetch statement to log in
            fetch('http://localhost:5321/loginAdmin', {
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
                        // Redirect to the admin homepage
                        navigate('/AdminHomepage');
                    } else {
                        alert('Login Failed');
                        console.log('Server response:', data);
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };


    }
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //return statement to render the admin login page
    return (
        <>
            {/**all components are defined in here and styling applied */}
            <div className="homePage">
                <div className="requestimageRight">
                    <img src={imageURL} />

                </div>
                <div className="loginContainerSpace">
                    <div className="loginAdminContainer">
                        <h3>This is the admin login section</h3>
                        <h3>An admin will need to have a secret code which they will need to use to login to the admin portal.</h3>
                        <form style={{ margin: 'auto', padding: '20px' }} onSubmit={handleSubmit}>
                            <h3>Admin Login</h3>
                            {/**admin secret key */}
                            <input type="password" placeholder="Admin Key" onChange={(e) => setAdminKey(e.target.value)}></input>
                            <label>Admin Username</label>
                            {/**username enter input box */}
                            <input type="text" name="username" placeholder="Enter Username" onChange={handleChange}></input>

                            <label>Admin Password</label>
                            {/**password enter box */}
                            <input type="password" name="password" placeholder="Enter Password" onChange={handleChange}></input>

                            {/**login button */}
                            <button type="submit" style={{ margin: '0 auto' }}> Log on</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )

}

export default AdminLogin;