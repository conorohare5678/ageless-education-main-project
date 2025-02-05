import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Signup_help_button from '../components/signup_help_button';

//definition of the signup component
const Signup = () => {
  //definition of variable to use useNavigate
  const navigate = useNavigate();

  //variable intialising form data with empty values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    password: '',
  });

  //handle submit function to handle the signup function
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
          // Redirect to the login page
          navigate('/Login');
        }
        else {
          alert('Username already taken');
        }
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //navigation function to navigate to different page based on name
  const navigatePage = (name) => {
    if (name === 'help') {
      navigate('/EmailAdmin')
    } else if (name === 'support') {
      navigate('/Support');
    }
  }

  //return statement to render the sign up page
  return (
    <>
      {/**Content within the component with all necessary styling */}
      <div className='homePage'>
        <div className='signup-container'>
          <div className='signup-box'>
            <h1 className='signup-title'>Welcome to Sign Up</h1>
            <h3>Here on the sign up page where we will show you how to sign up for Ageless Education. </h3>
            <h3>There are a range of ways that sign up can be done for your account its can be done by getting a family member to sign you up.</h3>
            <h3>You can also sign up yourself in the first step to better understanding technology.</h3>
            <h3>Click on the button below to watch the video on how to sign up</h3>
            {/**Sign up help button imported */}
            <div className='button-centre-1'>
              <Signup_help_button />
            </div>
            <h3>If you are struggling to sign up by yourself you can message a volunteer to help you sign up here where you provide contact details or you can go to our support page</h3>
            <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
              {/**Navigation button with onclick function to navigate */}
              <button onClick={() => navigatePage('help')}>Get Help</button>
              {/**Navigation button with onclick function to navigate */}
              <button onClick={() => navigatePage('support')}>Support Page</button>
            </div>

          </div>
          {/**Sign up form to sign up to the application */}
          {/**Onsumbit function used to post to database */}
          <form className='form-signup' onSubmit={handleSubmit}>
            <h3 className='centerTitle'>Sign Up</h3>

            <div>
              {/**label with input box */}
              <label>First name</label>
              <input type="text" placeholder="First name" name="firstName" onChange={handleChange} />
            </div>

            {/**label with input box */}
            <div>
              <label>Last name</label>
              <input type="text" placeholder="Last name" name="lastName" onChange={handleChange} />
            </div>

            {/**label with input box */}
            <div>
              <label>Username</label>
              <input type="username" placeholder="Enter Username" name="userName" onChange={handleChange} />
            </div>

            {/**label with input box */}
            <div>
              <label>Password</label>
              <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
            </div>

            {/**Sign up button which will use the posting function when clicked */}
            <div>
              <button type="submit" className="btn" style={{ margin: '10px auto' }}>
                Sign Up
              </button>
            </div>

            {/**Link to login page  */}
            <p style={{ marginLeft: '90px' }}>
              Already registered <a href="/Login">Login?</a>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;