import React from "react";
import Contact from "../../components/contact/contact";
import { useNavigate } from "react-router-dom";
import { FaBook } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
//import ChatContainer from "../../components/ChatContainer/chatContainer";

//Definition of chat page 
function ChatPage() {
    //naviagte to useNavigate
    const navigate = useNavigate();
    //function to navigate to a different page based on name
    const navigatePage = (name) => {

        if (name === 'Profile Page') {
            navigate('/ProfilePage')
        } else if (name === 'train') {
            navigate('/TrainingHomeSing')
        }
    }
    //return statement to render chatpage
    return (
        <>
            {/**All components within the chat page are rendered within the return statement */}
            <div className="homePage">
                {/**contacts imported */}
                <div className="chatPageContainer">
                    <Contact />
                </div>
                <div>
                    <h2 className="centerTitle">If you would like to go back to the profile page hit the profile page button or for more features hit sthe features button</h2>
                    {/**buttons for added navigation at bottom of page*/}
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                        {/**onclick function to navigate to different page */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('Profile Page')}>
                            <span style={{ marginRight: '5px' }}>Profile Page</span>
                            {/**icon import from react icons */}
                            <FaBookOpenReader />
                        </button>
                        {/**onclick function to navigate to different page */}
                        <button style={{ margin: '10px' }} onClick={() => navigatePage('train')}>
                            <span style={{ marginRight: '5px' }}> Training Page</span>
                            {/**icon imported from react icons */}
                            <FaBook />
                        </button>
                    </div>
                </div>
            </div>
        </>

    );

}

export default ChatPage;
//