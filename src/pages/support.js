import React from "react";
// import BackgroundVideo from "../components/homePageVideo";
import SupportVideo from "../components/supportVideo";
import { useNavigate } from "react-router-dom";


const Support = () => {
    //navigate function to navigate to different pages
    const navigate = useNavigate();
    return (
        <>
            {/* Support page background video imported*/}
            <SupportVideo />
            <div className="homePage">
                <div className="text-home" style={{ width: '100%' }}>
                    <p>Here you have a few options to get support on ageless education you can email us, chat with us or look at frequently asked questions</p>
                    {/**Grid containter with content present within the gird containers */}
                    <div className="grid-container">
                        <div className="grid-item">
                            <h3>Email us</h3>
                            {/**Button that navigates to the appropriate pageusing use navigate */}
                            <button onClick={() => navigate("/EmailAdmin")}>Email us</button>
                        </div>
                        <div className="grid-item">
                            <h3>FAQ page</h3>
                            {/**Button that navigates to the appropriate pageusing use navigate */}
                            <button onClick={() => navigate("/FAQPage")}>FAQ's</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Support;