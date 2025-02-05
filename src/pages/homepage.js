import React from "react";
import { useNavigate } from "react-router-dom"
import logo from "../Images/ElderlyPerson.png"
import BackgroundVideo from "../components/homePageVideo";
import Counter_one from "../components/counter_one";
import Counter_two from "../components/counter_two";
import Counter_three from "../components/counter_three";
//import Footer from "../components/footer";
import { MdSmartphone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { GiGiftOfKnowledge } from "react-icons/gi";

//homepage


//definition of the component for homepage
function Homepage() {

    //navigate function to navigate to different pages
    const navigate = useNavigate();

    //return statement to render the homepage component
    return (
        <>
            {/*Homepage background component imported*/}
            <div><BackgroundVideo /></div>
            {/*Grid container with content within it */}
            <div className="grid-container">
                <div className="grid-item">
                    <TbWorld style={{ fontSize: '48px' }} />
                    <Counter_one />
                </div>
                <div className="grid-item">
                    <MdSmartphone style={{ fontSize: '48px' }} />
                    <Counter_two />
                </div>
                <div className="grid-item">
                    <GiGiftOfKnowledge style={{ fontSize: '48px' }} />
                    <Counter_three />
                </div>
            </div>
            {<div className="homePage-container">
                <div className="text-home">
                    <h1>Welcome to Ageless Education</h1>
                    <h2>Helping the elderly get online sooner!</h2>
                </div>

                <div className="text-home-5">
                    <h2>Here we will help the elderly get<br /> online and be more confident with using <br /> technology everyday.</h2>
                    <h2>We will provide training from showing <br /> how to get started using a device to <br /> making accounts for platforms.</h2>
                    <h2>There is a range of help that we can provide <br /> to the elderly which you can see by hitting <br />the button below</h2>
                </div>
                <div className='image-one'>

                </div>
                <div className="button">
                    <h4 className="text-home-5">Click here to see more about us and what we can provide</h4>
                    {/*Navigation button to navigate to the next page */}
                    <button onClick={() => navigate("/aboutus")} className="homepage-btn" style={{ marginLeft: '210px' }} >
                        Click here
                    </button>
                    <div className="homePage-image-2">
                        <img src={logo} className="logo-1" />
                    </div>


                </div>

            </div >
            }

        </>
    );

}

export default Homepage;