import React from "react";
const ImgUrl = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1705498996/WIFI_Password_name.png";

//definition of pop up page with variable defined
const PopUpOne = (props) => {
    //if statement if not props will not show pop up
    if (!props.show) {
        return null;
    }

    //return statement ot render the pop up
    return (
        <div className="PopUp">
            {/**all content within the pop up appears here */}
            <div className="PopUp-Content">
                <div className="PopUp-Header">
                    <h3 className="Pop-up-title">Part 1 - Wifi Password and Finding the connection</h3>
                    <div className="PopUp-Body">
                        <p className="PopUp-textLeft">To find you wifi password it will be located at the back fo your wifi hub as shown in the picture to the left.</p>
                        <br />
                        <p className="PopUp-textLeft">Once you have found your WIFI password you will need to find your WIFI connection on your phone.</p>
                        <br />
                        <p className="PopUp-textLeft">To connect you phone to your Wifi Connection please click close and hit the next button below to help with connecting it.</p>
                        <div className="PopUp_img_1">
                            <img src={ImgUrl} alt="WiFi Connection" />
                        </div>
                    </div>
                    {/**button to close pop up */}
                    <div className="PopUp-Close" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {/**onclick function to close pop up */}
                        <button onClick={props.onClose}>Close</button>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default PopUpOne;