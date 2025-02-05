import React from "react";
const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1705529499/RPReplay_Final1705529346_uirid4.mov";

//definition of pop up with variable defined
const PopUpTwo = (props) => {

    //if statement to show null if pop up has been clicked
    if (!props.show) {
        return null;
    }

    //return statement to render pop up
    return (
        <div className="PopUp">
            {/**All content within the pop up will be rendered here */}
            <div className="PopUp-Content">
                <div className="PopUp-Header">
                    <h3 className="Pop-up-title">Part 2 - Connecting your Phone to the WIFI connection</h3>
                    <div className="PopUp-Body">
                        <p className="PopUp-textLeft-1">To log into your wifi page you will need to first naviagte to your settings app on your phone. If you touch on the screen and swipe down and type settings into the search bar using the touch screen and click on the settings app when it appears. </p>
                        <br />
                        <p className="PopUp-textLeft-1">Once you are in the settings page then click on the wifi button and locate you wifi name and click on it a pop up should appear prompting for the WIFI password.</p>
                        <br />
                        <p className="PopUp-textLeft-1">Then if you add the wifi password which we found in the last section and enter it into the text box and press connect this should sucessfully connect you to your wifi.</p>
                        <div className="">
                            {/**video imported */}
                            {<video autoPlay loop muted className='video-Right-1'>
                                <source src={videoUrl} type="video/mp4" />
                            </video>}
                        </div>
                    </div>
                    {/**button to close the pop up */}
                    <div className="PopUp-Close" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/**onclick function to close the pop up */}
                        <button onClick={props.onClose}>Close</button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default PopUpTwo;