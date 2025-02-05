import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

//definition of admin homepage
const AdminHomepage = () => {
    //variables set to empty array in state
    const [AdminHome, setAdminHome] = useState([]);
    //navigate defined to useNavigate function
    const navigate = useNavigate();

    //useEffect to get details about admin home page
    useEffect(() => {
        axios.get('http://localhost:5321/getAdminHome')
            .then(AdminHome => setAdminHome(AdminHome.data))
            .catch(err => console.log(err))

    })

    //function to navigate page when logging out
    const navAdminHome = () => {
        navigate('/Hub')
    }

    //return statement to render the admin homepage 
    return (

        <>
            {/**all components are displayed and styled within this page */}
            <div className="homePage">
                <h1 style={{ marginLeft: '30px' }}>Admin Homepage</h1>
                <p style={{ marginLeft: '30px' }}>Here in the Admin you have a range of functions avaliable to you here where you can preform many tasks behind the scenes</p>
                {/**onclick to navigate page upon logging out */}
                <button style={{ marginTop: '-50px', marginRight: '33px', marginBottom: '30px' }} className="marginLeft" onClick={navAdminHome}>Log out</button>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', paddingBottom: '20px' }}>
                    {/**filter function used to only display cards based on a certain name */}
                    {AdminHome.filter(AdminHomepage => AdminHomepage.name.includes('Add User to System') || AdminHomepage.name.includes('User Maintenace') || AdminHomepage.name.includes(`Post an FAQ's`) || AdminHomepage.name.includes(`Request Admin`) || AdminHomepage.name.includes(`Sign up Volunteer`) || AdminHomepage.name.includes(`Volunteer Request`) || AdminHomepage.name.includes(`Add external Link`)).map(AdminHomepage => (
                        <div className="learningCardCon">
                            {/**card from bootstrap imported */}
                            <Card key={AdminHomepage._id} className="profileCard-1">
                                <Card.Img src={AdminHomepage.imageURL} className="profileImg-1" />
                                <Card.Body className="cardBody-1">
                                    <Card.Title className="centerTitle-2">{AdminHomepage.name}</Card.Title>
                                    <Card.Text className="centerTitle">
                                        {AdminHomepage.text}
                                    </Card.Text>
                                    <div className="button-bottom">
                                        <div className="buttonTrainingPage">
                                            {/**link used ot navigate page */}
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
            </div >

        </>
    )

}

export default AdminHomepage;