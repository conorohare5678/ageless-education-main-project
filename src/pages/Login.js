import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginBackground from '../components/backgroundImgVid/loginBackground ';
import axios from 'axios';

//definition of the login component
const Login = () => {
  //definition of navigate variable to use useNavigate
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  //Function to handle the submit of login infomration within login page
  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = formData;
    console.log(username, password);

    //If input feild blank pop up appears
    if (!username || !password) {
      alert('Please enter both username and password');
      return;
    }

    //fetch method used to get login details from server
    fetch('http://localhost:5321/login-user', {
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
          navigate('/ProfilePage');
        } else {
          //incorrect details presents this message
          alert('Login Failed');
          console.log('Server response:', data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    //get request to get id for local storage
    axios.get(`http://localhost:5321/userDataByUsername/${username}`)
      .then(response => {
        window.localStorage.setItem('id', response.data.data._id);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //return statement to render the login page
  return (
    <>
      {/**Content within the component with all necessary styling */}
      <div style={{ display: 'flex', margin: '10px', borderRadius: '15px' }}>
        {/**login background video imported */}
        <div><LoginBackground /></div>
        <div className="login-container">
          <div className="login-box" style={{ textAlign: 'center' }}>
            <h1 className="signup-title-1">Welcome to the login section of Ageless Education</h1>
            <p>Here you can log in to your Ageless Education Account and begin your learning. </p>
            <p>When you complete logging in, you will be brought to the User homepage of the education center </p>
            <p>From here you can select different courses to do or view your profile.</p>
          </div>
          {/**Login form used for logging into application */}
          <form className="login-form" onSubmit={handleSubmit}>
            <h3 className="login-h3">Login</h3>

            <div>
              {/**Label and input box for login details */}
              <label>
                Username:
                <br />
                <input type="text" name="username" placeholder="Enter Username" onChange={handleChange} />
              </label>
            </div>

            <div>
              {/**Label and input box for login details */}
              <label>
                Password:
                <br />
                <input type="password" name="password" placeholder="Enter Password" onChange={handleChange} />
              </label>
              <br />

              <div style={{ marginTop: '0px', marginBottom: '55.5px' }}>
                {/**Button when clicked within form logs in */}
                <button type="submit" style={{ margin: '0 auto' }} className="btn">
                  Log in
                </button>
              </div>
            </div>

            <p style={{ marginLeft: '70px' }}>
              {/**Navigates to sign up page within application */}
              Do you need to sign up?
              <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

