import React from "react";
const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1707332513/RPReplay_Final1707332384_jvlejc.mov";
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1711382319/Screenshot_2024-03-25_at_15.54.57_tiiaib.png";

//definition of pop up with variable defined
const PopUpFive = (props) => {
    //if statement to not show pop up if null
    if (!props.content_1 && !props.content_2 && !props.content_3) {
        return null;
    }
    //else statement to show content 1
    else if (props.content_1) {
        //return statement to render pop up component
        return (

            <>
                {/**content of component */}
                <div className="PopUp">
                    <div className="PopUp-Content-1">
                        <div className="PopUp-Header-1">
                            <h3 className="Pop-up-title-1">Part 1 - Wifi Password and Finding the connection</h3>
                            <div className="PopUp-Body-1">
                                <div className="popUpVideo-1">
                                    <p>test 1</p>
                                </div>
                            </div>
                            {/**button to close pop up */}
                            <div className="PopUp-Close">
                                <button onClick={props.onClose} className="popUpCloseTwo">Close</button>
                            </div>

                        </div>

                    </div>

                </div>
            </>
        );

    }
    //else statement to show content 2 of pop up 
    else if (props.content_2) {
        //return statement to render component
        return (
            <div className="PopUp">
                {/**all content of component */}
                <div className="PopUp-Content-2">
                    <div className="PopUp-Header-1">
                        <h1 style={{ textAlign: 'center' }}>What the social page looks like</h1>
                        <p style={{ textAlign: 'center' }}>At the bottom of the social page you wil have these buttons hit the blog button!</p>
                        <div className="PopUp-Body-1">
                            <div className="popUpVideo-1">
                                {/**image imported */}
                                <img src={imageURL} style={{ height: '100%', width: '100%' }} />
                            </div>
                        </div>
                        <div className="PopUp-Close" style={{ paddingTop: '50px' }}>
                            <button style={{ margin: '0 auto' }} onClick={props.onClose} className="popUpCloseTwo">Close</button>
                        </div>

                    </div>

                </div>

            </div>
        )
    } else if (props.content_3) {
        return (
            <div className="PopUp">
                <div className="PopUp-Content-1">
                    <div className="PopUp-Header-1">
                        <h3 className="Pop-up-title-1">Part 1 - Wifi Password and Finding the connection</h3>
                        <div className="PopUp-Body-1">
                            <div className="popUpVideo-1">
                                <p>test 3</p>
                            </div>
                        </div>
                        <div className="PopUp-Close">
                            <button onClick={props.onClose} className="popUpCloseTwo">Close</button>
                        </div>

                    </div>

                </div>

            </div>
        )
    }
    //     
}

export default PopUpFive;