import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";

//definition of the links page component
const LinkPage = () => {
    //declaring variable and function with empty array
    const [Links, setLinks] = useState([]);
    //navigate variable defined to use useNavigate
    const navigate = useNavigate();
    //const imageUrl = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1705349353/1000_F_480461873_TQRoekF30ZConZHeL4LzTA0sU1EFZbR4_ywsj1l.jpg";

    //useEffect for get request to get information from database
    useEffect(() => {
        axios.get('http://localhost:5321/getLinks')
            .then(Links => setLinks(Links.data))
            .catch(err => console.log(err))
    }, [])
    //function to open link in new window
    const openLinksInNewWindow = (url) => {
        window.open(url, "_blank");
    };
    //function to naviagte to different pages based on name
    const navigatePage = (name) => {

        if (name === 'Profile Page') {
            navigate('/ProfilePage')
        } else if (name === 'train') {
            navigate('/TrainingHomeSing')
        }
    }

    //return function to render the links page component
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <h1 className="centerTitle">Links to useful pages</h1>
                <p className="centerTitle">Here you will see a range of links that we are think that are useful for helping you in furthering your traing if you wish to to extend your knowledge further</p>
                <div className="learningCardCon">
                    {/**Map to iterate over links in an array */}
                    {Links.map(LinksPage => (
                        <Card key={LinksPage._id} className="profileCard-1" style={{ marginBottom: '10px' }}>
                            <Card.Img src={LinksPage.imageURL} className="profileImg-1" />
                            <Card.Body className="cardBody-1">
                                <Card.Title className="centerTitle-2">{LinksPage.name}</Card.Title>
                                <Card.Text className="centerTitle">
                                    {LinksPage.text}
                                </Card.Text>
                                <div className="button-bottom">
                                    <div className="buttonTrainingPage">
                                        {/* button which opens link in new window once clicked */}
                                        <button onClick={() => openLinksInNewWindow(LinksPage.URL)}>Click Here</button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}

                </div>
                <div>
                    {/**Buttons at bottom of page for navigation to other pages based on name in onclick */}
                    {/**Formatted in a grid formatt */}
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('Profile Page')}>
                            <span style={{ marginRight: '5px' }}>Profile Page</span>
                            {/**react icon imported from library */}
                            <FaBookOpenReader />
                        </button>
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('train')}>
                            <span style={{ marginRight: '5px' }}>Training Page</span>
                            {/**react icon imported from library */}
                            <FaBook />
                        </button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LinkPage;