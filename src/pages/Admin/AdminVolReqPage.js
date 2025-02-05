import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";

//definition of admin vol request page
const AdminVolRequest = () => {
    //variable defined to have empty array state
    const [AdminVolReq, setAdminVolReq] = useState([]);
    //navigate to useNavigate function
    const navigate = useNavigate();

    //useEffect to get request from databse
    useEffect(() => {
        axios.get('http://localhost:5321/getVolRequest')
            .then(VolReq => setAdminVolReq(VolReq.data))
            .catch(err => console.log(err))
    })

    //function to navigate to differnt page based on name
    const navigatePage = (name) => {
        if (name === 'go back') {
            navigate('/AdminHomepage')
        } else if (name === 'Log out') {
            navigate('/Hub')
        }

    }

    //return statement to render the vol request page
    return (
        <>
            {/**all components are rendered in the return statement with styling applied */}
            <div className="homePage">
                <h1 className="centerTitle">Request to be a volunteer</h1>
                <p className="centerTitle">Here is all the requests to be a volunteer in ageless education</p>
                {/**grid formatt styling applied */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', placeItems: 'center' }}>
                    {/**map function used to iterate requests*/}
                    {AdminVolReq.map(VolReqs => (
                        <>
                            <div key={VolReqs._id}>
                                <p><strong>Name:</strong><br /> {VolReqs.name}</p>
                                <p>Organisation: {VolReqs.Organisation}</p>
                                <p>Other: {VolReqs.other}</p>
                                <p>Email: {VolReqs.email}</p>
                                <p>Number: {VolReqs.number}</p>
                                <p>About: <br />{VolReqs.about}</p>

                            </div>
                        </>
                    ))}
                </div>
                {/**buttons to navigate to different pages */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function to navigate to a different page based on name*/}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function to navigate to a different page based on name */}
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

export default AdminVolRequest;