import React, { useState } from "react";
import axios from "axios";
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710182878/9_gqwmbw.jpg";

//definition of interest component
const VolunteerInterestPage = () => {
    //definition of varibales with empty strings
    const [volname, setVolName] = useState('');
    const [volorgan, setVolOrgan] = useState('');
    const [volother, setVolOther] = useState('');
    const [volemail, setVolEmail] = useState('');
    const [volnumber, setVolNumber] = useState('');
    const [volabout, setVolAbout] = useState('');

    //function to handle changes to name entered
    const VolNameEntered = (e) => {
        setVolName(e.target.value);
    }

    //function to handle changes to organisation entered
    const VolOrgEntered = (e) => {
        setVolOrgan(e.target.value);
    }

    //function to handle changes to other entered
    const VolOtherEntered = (e) => {
        setVolOther(e.target.value);
    }

    //function to handle changes to email entered
    const VolEmailEntered = (e) => {
        setVolEmail(e.target.value);
    }

    //function to handle changes to number entered
    const VolNumberEntered = (e) => {
        setVolNumber(e.target.value);
    }

    //function to handle changes to about entered
    const VolAboutEntered = (e) => {
        setVolAbout(e.target.value);
    }

    //Function to post inputs to database
    const submitVolRequest = () => {
        axios.post('http://localhost:5321/VolRequest', {
            name: volname,
            Organisation: volorgan,
            other: volother,
            email: volemail,
            number: volnumber,
            about: volabout,
        })
            .then(response => {
                console.log("request sent", response.data)
            })
            .catch(error => {
                console.error('Error request:', error)
            })
    }

    //return statement to render vol interest page
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <div className="requestVolCon">
                    <h1 className="centerTitle">Interested in becoming a volunteer?</h1>
                    {/**input boxes to input information with a label */}
                    <form className="interestVolForm">
                        <label>Volunteer Name:</label>
                        <input type="text" onChange={VolNameEntered} />

                        {/**Select dropdown to select information with a label */}
                        <label>Organisation:</label>
                        <select onChange={VolOrgEntered}>
                            <option>NHS</option>
                            <option>Private Health Sector</option>
                            <option>Age uk</option>
                            <option>Other</option>
                        </select>

                        {/**input boxes to input information with a label */}
                        <label>If other please state here:</label>
                        <input type="text" onChange={VolOtherEntered} />

                        {/**input boxes to input information with a label */}
                        <label>Email Address</label>
                        <input type="text" onChange={VolEmailEntered} />

                        {/**input boxes to input information with a label */}
                        <label>Phone Number</label>
                        <input type="tel" onChange={VolNumberEntered} />

                        {/**textarea boxes to input information with a label */}
                        <label>About yourself</label>
                        <textarea style={{ width: '680px', height: '80px' }} onChange={VolAboutEntered}></textarea>
                        {/**Onclick function within button to send form */}
                        <button style={{ margin: '0 auto' }} type="submit" onClick={submitVolRequest}>Send to Admin</button>
                    </form>
                </div>
                <img src={imageURL} style={{ width: '50%', height: '612px' }} className="interestVol" alt="interest" />
            </div>
        </>
    )

}

export default VolunteerInterestPage;