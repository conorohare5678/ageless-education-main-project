import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

//definition of the admin request page
const AdminRequest = () => {
    //variables deined in empty state array
    const [Requests, setRequests] = useState([]);
    //navigate defined to useNaviagte function
    const navigate = useNavigate();

    //useEffcet to get the requests from the database
    useEffect(() => {
        axios.get('http://localhost:5321/getRequest')
            .then(Requests => setRequests(Requests.data))
            .catch(err => console.log(err))
    })

    //function to naviagte to a different page based on name
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/AdminHomepage')
        } else if (name === 'Log out') {
            navigate('/Hub')
        }

    }

    //return statement ot render request page
    return (
        <>
            {/**Request page components shown in here with necessary styling */}
            <div className="homePage">
                <h1 className="centerTitle">Requests make by Users</h1>
                <p className="centerTitle">Here you will see all requests made by users</p>
                {/**information displayed in grid formatt */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>

                    {/**map function to iterate the imformation to be displayed on screen */}
                    {Requests.map(AdminRequest => (
                        <div className="learningCardCon">
                            {/**card which are imported from react bootstrap */}
                            <Card key={AdminRequest._id} className="profileCard-1">
                                <Card.Body className="cardBody">
                                    <Card.Title className="centerTitle-2">{AdminRequest.title}</Card.Title>
                                    <Card.Text style={{ marginLeft: '10px', marginRight: '10px' }}>
                                        {AdminRequest.text}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

                {/**buttons to be displayed to add navigation to page */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function to naviaget page */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function to navigate page */}
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

export default AdminRequest;