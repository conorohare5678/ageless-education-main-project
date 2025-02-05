import React, { useEffect, useState } from 'react';
import Smartphone_one from '../../components/smartphone_one';
import LearningAccordion from '../../components/learningAccordion/learningAccordion';
import axios from "axios";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


//definition of learning page one page
function Learning_page_one() {
    //variables defined in empty array
    const [phone, setPhone] = useState([]);
    //Navigate used to use useNavigate function
    const navigate = useNavigate();
    //image string in variable
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709749514/elderly-tech_l5a1ky.png";

    //useEffect used to get information from database on phone
    useEffect(() => {
        axios.get('http://localhost:5321/getPhone')
            .then(phone => setPhone(phone.data))
            .catch(err => console.log(err))

    })

    //function to navigate to a different page based on name
    const navigatePage = (name) => {
        if (name == 'go back') {
            navigate('/TrainingHomeSing')
        } else if (name === 'Profile') {
            navigate('/ProfilePage')
        } else if (name === 'Quiz') {
            navigate('/QuizHomepage')
        }

    }

    //return statement ot render learning page 
    return (
        <>
            <div className='homePage'>
                <div className="PageImg-top-corner-2"  >
                    {/**image imported from variable */}
                    <img src={imageURL} />
                </div>
                <div>
                    <div className='textLeft-container-1'>
                        <h1>How to use a Smart Phone to make a phone call</h1>
                        <p>Using a Smartphone to make a phone call might a bit different from what you are used to with traditional buttons</p>
                        <p>Here is a simple set of instructions of how you'd make a phone call using a smart phone</p>
                        {/**map function used to map iterate over imformation */}
                        {phone.map(Phone => (
                            <>
                                <div key={Phone._id}>
                                    <h2>{Phone.name}</h2>
                                    <p>{Phone.text}</p>
                                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                        <img src={Phone.imageURL} style={{ width: '250px' }} />
                                    </div>
                                </div>
                            </>
                        ))}
                        <p>You can now try by entering the numbers into the phone making a phone call</p>
                    </div>
                </div>
                <h2 className='move-1'>Try yourself!</h2>
                {/**smartphone imported to application */}
                <div className='move'>
                    <Smartphone_one />
                </div>
                {/**navigations buttons with necessary styling */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function to navigate to different page */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**react icon imports from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function to navigate to a different page */}
                    <button className="buttonSpace" onClick={() => navigatePage('Profile')}>
                        <span>Profile Page</span>
                        {/**icon imported from react icons */}
                        <FaBookOpenReader />

                    </button>

                    {/**onclick function to navigate to a different page */}
                    <button className="buttonSpace" onClick={() => navigatePage('Quiz')}>
                        <span>Quiz</span>
                        {/**icon imported from react icons */}
                        <MdQuiz />
                    </button>

                </div>
            </div>
        </>
    )

}

export default Learning_page_one;