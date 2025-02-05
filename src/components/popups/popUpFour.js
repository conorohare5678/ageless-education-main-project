import React from "react";
const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708342136/RPReplay_Final1708342035_ckoeip.mov";
const videoUrl_1 = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708342364/RPReplay_Final1708342255_oytmcx.mov";
const imageUrl = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1711890760/IMG_8323_dcw36b.png";

//definition of pop up component with variable
const PopUpFour = (props) => {
    //iff statement to show pop up based on states
    if (!props.content_1 && !props.content_2 && !props.content_3) {
        return null;
    }
    //else statement to show content 1 of pop up
    else if (props.content_1) {
        //return statement ot render pop up content
        return (

            <>
                {/**content within pop up rendered here */}
                <div className="PopUp">
                    <div className="PopUp-Content-2">
                        <div className="PopUp-Header-1">
                            <h3 className="Pop-up-title-1">Part 2 - Viewing the options in camera app</h3>
                            <div className="PopUp-Body-2">
                                <div className="popUpVideo-2">
                                    {/**video from import */}
                                    {<video autoPlay loop muted className='video-num-4'>
                                        <source src={videoUrl} type="video/mp4" />
                                    </video>}

                                    {/**button to close pop up */}
                                    <div className="move-button">
                                        <div className="PopUp-Close-3">
                                            {/**onclick to close pop up */}
                                            <button onClick={props.onClose} className="popUpCloseTwo">Close</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="move-text-up">
                                    <p className="PopUp-textLeft-2">Here you will see a user viewing the different options on their camera.</p>
                                    <br />
                                    <p className="PopUp-textLeft-2">Here we can see a range of options that are avalible to them on the camera app</p>
                                    <br />
                                    <p className="PopUp-textLeft-2">You can see here clearly the user flicking though the camera app at the different options they can use on this app.</p>
                                    <br />
                                    <p className="PopUp-textLeft-2">You can now close this as youve seen the different optiosn avalible and move to the next step</p>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </>
        );

    }
    //else statement to show content 2
    else if (props.content_2) {
        //return satement to render pop up content
        return (
            <div className="PopUp">
                <div className="PopUp-Content-2">
                    <div className="PopUp-Header-1">
                        <h3 className="Pop-up-title-1">Part 3 - Taking a picture on your phone</h3>
                        <div className="PopUp-Body-2">
                            <div className="popUpVideo-2">
                                {/**video imported */}
                                {<video autoPlay loop muted className='video-num-4'>
                                    <source src={videoUrl_1} type="video/mp4" />
                                </video>}
                                {/**button to close pop up */}
                                <div className="move-button">
                                    <div className="PopUp-Close-3">
                                        {/**onclick to close pop up */}
                                        <button onClick={props.onClose} className="popUpCloseTwo">Close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="move-text-up">
                                <p className="PopUp-textLeft-2">Here you will see a user taking a photo on their camera.</p>
                                <br />
                                <p className="PopUp-textLeft-2">To do this they hit the white circle at the bottom of the screen of the phone to take the picture</p>
                                <br />
                                <p className="PopUp-textLeft-2">Then once you click on this white circle it will caputure the picture for you </p>
                                <br />
                                <p className="PopUp-textLeft-2">This will then store the image in the photo library which then can be opened the following two ways shown in the next pop up</p>
                            </div>

                        </div>


                    </div>

                </div>

            </div>
        )
    }
    //else statement to show content 3
    else if (props.content_3) {
        //return statement to render pop up content
        return (
            <div className="PopUp">
                <div className="PopUp-Content-2">
                    <div className="PopUp-Header-1">
                        <h3 className="Pop-up-title-1">Part 4 - Taking a picture on your phone</h3>
                        <div className="PopUp-Body-2">
                            <div className="popUpVideo-2">
                                {/**image imported */}
                                <img src={imageUrl} className='video-num-4' />
                                {/**button to close pop up */}
                                <div className="move-button">
                                    {/**onclick to close pop up */}
                                    <div className="PopUp-Close-3">
                                        <button onClick={props.onClose} className="popUpCloseTwo">Close</button>
                                    </div>
                                </div>
                            </div>
                            <div className="move-text-up">
                                <p className="PopUp-textLeft-2">Once you take your picture it is stored within your photo library on your phone.</p>
                                <br />
                                <p className="PopUp-textLeft-2">This is where you will be able to see all your photos in the one place for you to look at</p>
                                <br />
                                <p className="PopUp-textLeft-2">Your photo library can store many photos and videos you can split these up and to locate your photo libray it tends to look like this. </p>
                                <br />
                                <p className="PopUp-textLeft-2">Here we can see an example on the left of all the librarys avaliable</p>

                            </div>

                        </div>


                    </div>

                </div>

            </div>
        )
    }
    //     
}

export default PopUpFour;