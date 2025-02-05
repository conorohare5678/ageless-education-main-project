import React from "react";
const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1707332513/RPReplay_Final1707332384_jvlejc.mov";

//definition of pop up component with variable defined
const PopUpThree = (props) => {

    //if statement to not show pop up if it hasnt been clicked
    if (!props.content) {
        return null;
    }

    //return statement to render the pop up
    return (
        <>
            {/**all information within pop up to be rendered shown here */}
            <div className="PopUp">
                <div className="PopUp-Content-2">
                    <div className="PopUp-Header-1">
                        <h3 className="Pop-up-title-1" style={{ marginLeft: '270px' }}>Part 1 - How to use the camera app</h3>
                        <div className="PopUp-Body-2">
                            <div className="popUpVideo-2">
                                {/**video from import */}
                                {<video autoPlay loop muted className='video-num-4'>
                                    <source src={videoUrl} type="video/mp4" />
                                </video>}
                                {/**button to close pop up */}
                                <div className="move-button">
                                    <div className="PopUp-Close-2">
                                        {/**onclick to close pop up  */}
                                        <button onClick={props.onClose} className="popUpCloseThree">Close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="move-text-up">
                                <p className="PopUp-textLeft-2">Here is some instructions on how to take a picture on your mobile device.</p>
                                <br />
                                <p className="PopUp-textLeft-2">Firstly you will be at the home screen which will is shown to you with all your apps that you may hav already.</p>
                                <br />
                                <p className="PopUp-textLeft-2">Then you click on the camera app which is a grey icon with a camera on it. </p>
                                <br />
                                <p className="PopUp-textLeft-2">This will then open the camera app allowing you to take a picture decribed in the next steps.</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>

        </>
    );
}

export default PopUpThree;