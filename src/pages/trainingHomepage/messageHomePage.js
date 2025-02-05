import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import { FaBookOpenReader } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
const imageURL_3 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1708019851/elderly-old-couple-using-modern-laptop-to-chat-their-grandson-grandmother-grandfather-using-modern-technology-elderly-old-167778246_jljbh2.jpg";
const imageURL_2 = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710955251/6399b6357ae48735f7e1ff90_1337229983-HowToWriteAnEngagingMessageForYourTarget-Audience-1920x1280-14122022_rjflxm.png";
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1710946659/e320e3dfad07907fcb0d8faf5c841586f36108dfdbe9bcb19b2fd077133f9133_weyxyv.jpg";

//definition of mesage homepage component
const MessageHome = () => {
    //declaring navigat variable to use useNavigate
    const navigate = useNavigate();

    //function to navigate to different pages based on name
    const navigatePage = (name) => {

        if (name === 'users') {
            navigate('/chatPage')
        } else if (name === 'volunteerMess') {
            navigate('/MessageVol')
        } else if (name === 'volunteerReply') {
            navigate('/MessageFromVol')
        } else if (name === 'Profile Page') {
            navigate('/ProfilePage')
        } else if (name === 'train') {
            navigate('/TrainHomepage')
        } else if (name === 'social') {
            navigate('/Social')
        }
    }

    //return statement to render the message homepage component
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className='homePage'>
                <h1 className='centerTitle'>Here is all messaging and communication options avaliable to you!</h1>
                <div className=''>
                    <div className="learningCardCon" style={{ paddingBottom: '10px' }}>
                        {/**card imported from bootstrap */}
                        <Card className="profileCard-1">
                            <Card.Body className="cardBody">
                                {/**image imported from variable defined above */}
                                <Card.Img variant="top" src={imageURL_3} style={{ height: '264px' }} className="profileImg" />
                                <Card.Title className="centerTitle-2">
                                    Chat with users
                                </Card.Title>
                                <Card.Text className='centerTitle'>
                                    Here you can chat with other users on Ageless education.
                                </Card.Text>
                                {/**button that naviagtes to different page using onlick based on a certain name */}
                                <div className="buttonTrainingPage">
                                    <button onClick={() => navigatePage('users')}>Click Here</button>
                                </div>
                            </Card.Body>
                        </Card>
                        {/**card imported from bootstrap */}
                        <Card className="profileCard-1">
                            <Card.Body className="cardBody">
                                {/**image imported from variable defined above */}
                                <Card.Img variant="top" src={imageURL_2} style={{ height: '264px' }} className="profileImg" />
                                <Card.Title className="centerTitle-2">
                                    Chat with Volunteer
                                </Card.Title>
                                <Card.Text className='centerTitle'>
                                    Here you can a message to a volunteer on Ageless education.
                                </Card.Text>
                                {/**button that naviagtes to different page using onlick based on a certain name */}
                                <div className="buttonTrainingPage">
                                    <button onClick={() => navigatePage('volunteerMess')}>Click Here</button>
                                </div>
                            </Card.Body>
                        </Card>
                        {/**card imported from bootstrap */}
                        <Card className="profileCard-1">
                            <Card.Body className="cardBody">
                                {/**image imported from variable defined above */}
                                <Card.Img variant="top" src={imageURL} style={{ height: '264px' }} className="profileImg" />
                                <Card.Title className="centerTitle-2">
                                    Messages from Volunteer
                                </Card.Title>
                                <Card.Text className='centerTitle'>
                                    Here you can see messages from a volunteer on Ageless education.
                                </Card.Text>
                                {/**button that naviagtes to different page using onlick based on a certain name */}
                                <div className="buttonTrainingPage">
                                    <button onClick={() => navigatePage('volunteerReply')}>Click Here</button>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    {/**buttons for navigation to different pages within the application */}
                    <div>
                        <h2 className="centerTitle">If you would like to go back to the profile page hit the profile page button or for more features hit sthe features button</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                            {/**button that naviagtes to different page using onlick based on a certain name */}
                            <button style={{ margin: '10px' }} onClick={() => navigatePage('Profile Page')}>
                                <span style={{ marginRight: '5px' }}>Profile Page</span>
                                {/**icons imported from react icons*/}
                                <FaBookOpenReader />
                            </button>
                            {/**button that naviagtes to different page using onlick based on a certain name */}
                            <button style={{ margin: '10px' }} onClick={() => navigatePage('train')}>
                                <span style={{ marginRight: '5px' }}>Show all Courses</span>
                                {/**icons imported from react icons*/}
                                <FaBook />
                            </button>
                            {/**button that naviagtes to different page using onlick based on a certain name */}
                            <button style={{ margin: '10px' }} onClick={() => navigatePage('social')}>
                                <span style={{ marginRight: '5px' }}>Social page</span>
                                {/**icons imported from react icons*/}
                                <IoShareSocialOutline />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}
export default MessageHome;