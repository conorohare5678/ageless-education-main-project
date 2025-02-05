import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//volunteer homepage component defined
const VolunteerHome = () => {
    //Variables defined in empty array state
    const [AdminHome, setAdminHome] = useState([]);
    //navigate used to useNavigate
    const navigate = useNavigate();

    //useEffect used to get card information from database
    useEffect(() => {
        axios.get('http://localhost:5321/getAdminHome')
            .then(AdminHome => setAdminHome(AdminHome.data))
            .catch(err => console.log(err))

    })

    //function to navigate to hub 
    const navVolHome = () => {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('user');
        window.localStorage.removeItem('volID');
        navigate('/Hub')
    }

    //return statement to render the homepage for vol
    return (
        <>
            {/**component information displayed here will all necessary styling applied */}
            <div className="homePage">
                <div style={{ display: 'inline-block' }}>
                    <h1 style={{ marginLeft: '50px', width: '40%' }}>Volunteer Homepage</h1>
                    <p style={{ marginLeft: '50px', width: '80%' }}>Here in the Volunteer you have a range of functions avaliable to you here where you can preform many tasks behind the scenes</p>
                </div>
                {/**button to navigate to homepage onlick */}
                <button style={{ marginTop: '-65px', marginBottom: '30px', marginRight: '35px' }} className="marginLeft" onClick={navVolHome}>Log out</button>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingBottom: '20px' }}>
                    {AdminHome.filter(AdminHomepage => AdminHomepage.name.includes('Add User to System') || AdminHomepage.name.includes('User Maintenace') || AdminHomepage.name.includes(`Post an FAQ's`) || AdminHomepage.name.includes(`Send user message`) || AdminHomepage.name.includes(`Messages from Users`)).map(AdminHomepage => (
                        <div key={AdminHomepage._id} className="learningCardCon">
                            {/**card which are imported from bootstrap library */}
                            <Card className="profileCard-1">
                                <Card.Img src={AdminHomepage.imageURL} className="profileImg-1" />
                                <Card.Body className="cardBody-1">
                                    <Card.Title className="centerTitle-2">{AdminHomepage.name}</Card.Title>
                                    <Card.Text>
                                        {AdminHomepage.text}
                                    </Card.Text>
                                    <div className="button-bottom">
                                        <div className="buttonTrainingPage">
                                            {/**link function used to navigate to page */}
                                            <Link to={AdminHomepage.button} style={{ textDecoration: 'none' }}>
                                                <button style={{ textDecoration: 'none' }}>Hit Here</button>
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default VolunteerHome;