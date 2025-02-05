import React, { useEffect, useState } from "react";
import Button from '../buttons/button';
import Card from 'react-bootstrap/Card';
import Button_two from '../buttons/button_two'
import Button_three from '../buttons/button_three'
import { useNavigate } from "react-router-dom";
import axios from "axios";

//definition of profile page component
const ProfilePage = () => {
  //image urls defined in variables from cloudinary
  const imageUrl = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708016908/image54_fpfdf5.jpg";
  const imageURL_2 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708018004/lifelong-learning_tysw4a.jpg";
  const imageURL_3 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708019851/elderly-old-couple-using-modern-laptop-to-chat-their-grandson-grandmother-grandfather-using-modern-technology-elderly-old-167778246_jljbh2.jpg";
  const imageURL_4 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708019859/AIf8zZRgaWWR2wYz-ZUAID2DLfhiybQ1Lw6iOrE6UoiwCQ_s900-c-k-c0x00ffffff-no-rj_zb66gl.jpg";

  //definition of variable to use useNavigate
  const navigate = useNavigate();

  //user variables defined and set to empty use state
  const [userData, setUserData] = useState("");
  //points variable defined and state set to null
  const [points, setPoints] = useState(0);

  //used effect to get user data from database and points stored under their id
  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const user = window.localStorage.getItem('user');
    const id = window.localStorage.getItem('id');

    // will check if there is a token, user or id in local storage if not it will redirect to login page
    if (!token || !user) {
      // Redirect to login page
      navigate("/Login");
      return;
    }
    fetch('http://localhost:5321/userData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),

      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data, 'userData');
        setUserData(data.data);
        //points
        // setPoints(data.data.points);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    axios.get(`http://localhost:5321/userPoints/${id}`, {

    })
      .then(response => {
        const pointsData = response.data.data;
        //had to take out || 0 because kept crashing server
        setPoints(pointsData);

      })
      .catch(error => {
        console.error('Error fetching user points:', error);
      });
  }, []);

  //Added to log out the user currently logged in
  //Removes token and user from the local storage
  const logOutBlutton = () => {
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('id');
    navigate("/Login");
  }

  //naviagtes to chat page based on name 
  const navigatePage = (name) => {
    if (name === 'Chat') {
      navigate('/MessageHome');
    }
  }

  // return statement to render profile page
  return (
    <>
      {/**Content within the component with all necessary styling applied */}
      <div className="homePage">
        <h1 className="profileTitle" style={{ paddingTop: '20px' }}> Welcome to ageless education: {userData.userName}</h1>
        <img src={imageUrl} className="imageLeft" alt="profilePictureOne" style={{ marginTop: '-84px' }} />
        <div className="profileInfo">
          <br />
          {/**information called from the database such as user data and points  */}
          <p>Firstname: {userData.firstName}</p>
          <p>Surname: {userData.lastName}</p>
          <p>Points: {points}</p>
          {/**log out function executed here when clicked upon */}
          <div className="centerButtons">
            <button onClick={logOutBlutton}>Log Out</button>
          </div>
        </div>

        {/**cards hard coded here with information and navigation to different pages */}
        <div className="profileDetails">
          <h3> Here you have a variety of options to choose from you can choose from the following:</h3>
          <div className="learningCardCon">
            <Card className="profileCard">
              <Card.Body className="cardBody">
                {/**image called from variable defined */}
                <Card.Img variant="top" src={imageURL_2} style={{ height: '264px' }} className="profileImg" />
                <Card.Title className="centerTitle-2">
                  Learning
                </Card.Title>
                <Card.Text className="centerTitle">
                  When you click this button it will lead you to the online learning pages to begin your education
                </Card.Text>
                <div className="buttonTrainingPage">
                  <Button />
                </div>
              </Card.Body>
            </Card>
            <Card className="profileCard">
              <Card.Body className="cardBody">
                {/**image called from variable defined */}
                <Card.Img variant="top" src={imageURL_3} className="profileImg" />
                <Card.Title className="centerTitle-2">
                  Messaging Page
                </Card.Title>
                <Card.Text className="centerTitle">
                  When you click this button it will lead you to the messaging pages to discuse topics with others
                </Card.Text>
                <div className="buttonTrainingPage">
                  {/* <Button_two /> */}
                  <button onClick={() => navigatePage('Chat')}>Click Here</button>
                </div>
              </Card.Body>
            </Card>
            <Card className="profileCard">
              <Card.Body className="cardBody">
                {/**image called from variable defined */}
                <Card.Img variant="top" src={imageURL_4} style={{ height: '264px' }} className="profileImg" />
                <Card.Title className="centerTitle-2">
                  useful Links
                </Card.Title>
                <Card.Text className="centerTitle">
                  This will lead you to page links to useful support that is avaliable outside of ageless education
                </Card.Text>
                <div className="buttonTrainingPage">
                  <Button_three />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>

    </>
  );
}




export default ProfilePage;