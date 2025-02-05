import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
//image defined in variable from cloudinary
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710282987/21ECD5A200000578-3475888-Scientists_have_linked_numerous_activities_with_preserving_brain-a-11_1457056725394_ns6igt.jpg";
//image defined in variable from cloudinary
const imageURL_2 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709479039/admin-sign-on-laptop-icon-stock-vector_sr4lbk.jpg";
//image defined in variable from cloudinary
const imageURL_3 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710096096/capital-campaign-volunteers_zufpvt.jpg";

//definition of the component for the login hub
const LoginHub = () => {
    //navigate function defined to navigate to different pages
    const navigate = useNavigate();

    //nagiate function defined to naviagte to the different pages based on name
    const navigateLogin = (name) => {
        if (name === 'user') {
            navigate('/Login')
        } else if (name === 'Admin') {
            navigate('/AdminLogin')
        } else if (name === 'Volunteer') {
            navigate('/VolunteerLogin')
        }
    }

    //return statement to render the loginhub component
    return (
        <>
            <div className="homePage">
                <h1 className="centerTitle">This is all of the login's avaliable to all the users.</h1>
                {/**Card container defined with card used from bootstrap framework */}
                <div className="hubContainer">
                    {/**Card from bootstrap being used within the application */}
                    <Card className="profileCard-3" style={{ borderBottomLeftRadius: '10px' }}>
                        <Card.Body className="cardBody-2">
                            <Card.Img variant="top" src={imageURL} style={{ height: '350px' }} className="profileImg-2" />
                            <Card.Title className="centerTitle-2">
                                User Login
                            </Card.Title>
                            <Card.Text className="centerTitle" style={{ borderBottomLeftRadius: '10px' }}>
                                This is the login in page for a user that is going to be learning
                            </Card.Text>
                            <div className="buttonTrainingPage">
                                {/** Navigation button with onclick function to navigate*/}
                                <button onClick={() => navigateLogin('user')}>User Login</button>
                            </div>
                        </Card.Body>
                    </Card>
                    {/**Card from bootstrap being used within the application */}
                    <Card className="profileCard-3">
                        <Card.Body className="cardBody-2">
                            <Card.Img variant="top" src={imageURL_2} style={{ height: '350px' }} className="profileImg-2" />
                            <Card.Title className="centerTitle-2">
                                Admin Login
                            </Card.Title>
                            <Card.Text className="centerTitle" style={{ borderBottomLeftRadius: '10px' }}>
                                This is the login in page for a Admin
                            </Card.Text>
                            <div className="buttonTrainingPage">
                                {/** Navigation button with onclick function to navigate*/}
                                <button onClick={() => navigateLogin('Admin')}>Admin Login</button>
                            </div>
                        </Card.Body>
                    </Card>
                    {/**Card from bootstrap being used within the application */}
                    <Card className="profileCard-3" style={{ borderBottomRightRadius: '10px' }}>
                        <Card.Body className="cardBody-2">
                            <Card.Img variant="top" src={imageURL_3} style={{ height: '350px' }} className="profileImg-2" />
                            <Card.Title className="centerTitle-2">
                                Volunteer Login
                            </Card.Title>
                            <Card.Text className="centerTitle">
                                This is the login in page for a Volunteer
                            </Card.Text>
                            <div className="buttonTrainingPage">
                                {/** Navigation button with onclick function to navigate*/}
                                <button onClick={() => navigateLogin('Volunteer')}>Volunteer Login</button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )

}
export default LoginHub;