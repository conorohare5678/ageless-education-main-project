import React from "react";
const videoURL = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708546092/pexels-gustavo-fring-7423950_2160p_j7vvc2_xovlsq.mov";

//definition of login background video
const LoginBackground = () => {
    //return statement to render login background compoenent
    return (
        <>
            {/**all of the login background component will be rendered in return statement */}
            <video autoPlay loop muted className="RadiusBottomTopleft" style={{ width: '100%', height: '640px' }}>
                {/**video imported */}
                <source src={videoURL} type="video/mp4" />
            </video>
        </>
    );
}

export default LoginBackground;