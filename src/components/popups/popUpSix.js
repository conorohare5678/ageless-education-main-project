import React from "react";
const videoUrl = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708460530/RPReplay_Final1708460429_vvzgfh.mov";
const videoUrl_1 = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1708464473/RPReplay_Final1708464408_kq24hu.mp4";
const videoUrl_2 = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1710153685/Screen_Recording_2024-03-11_at_10.35.07_dsci8e.mov";
const videoUrl_3 = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1710156025/Screen_Recording_2024-03-11_at_11.19.04_wuzuam.mov";

//definiton of pop up component with variable defined
const PopUpSix = (props) => {
    //iff statement to no show pop up if not clicked upon
    if (!props.content_1 && !props.content_2 && !props.content_3 && !props.content_4) {
        return null;

    }
    //else statement to show content 1
    else if (props.content_1) {
        //return statement to show content 1
        return (

            <>
                {/**all information within pop up rendered here */}
                <div className="PopUp">
                    <div className="PopUp-Content-3" >
                        <div className="PopUp-Header">
                            <div className="PopUp-Body" >
                                {/**video imported */}
                                <div className="popUpVideo-2" style={{ margin: 'auto' }}>
                                    {<video autoPlay loop muted className='video-num-4'>
                                        <source src={videoUrl} type="video/mp4" />
                                    </video>}

                                    <div >
                                        <div >
                                            {/**button to close pop up with onclick */}
                                            <button onClick={props.onClose} style={{ margin: 'auto' }}>Close</button>
                                        </div>
                                    </div>
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
        //return statement to show content 2
        return (
            <>
                {/**all information will be shown within this pop up */}
                <div className="PopUp">
                    <div className="PopUp-Content-3" >
                        <div className="PopUp-Header">
                            <div className="PopUp-Body" >
                                {/**imported video */}
                                <div className="popUpVideo-2" style={{ margin: 'auto' }}>
                                    {<video autoPlay loop muted className='video-num-4'>
                                        <source src={videoUrl_1} type="video/mp4" />
                                    </video>}

                                    <div >
                                        <div >
                                            {/**button onclick to close pop up */}
                                            <button onClick={props.onClose} style={{ margin: 'auto' }}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </>
        )
    }
    //else statement to show content 3
    else if (props.content_3) {
        //return statement to render content 3
        return (
            <>
                {/**Content within the pop up will be rendered here */}
                <div className="PopUp">
                    <div className="PopUp-Content-3" >
                        <div className="PopUp-Header">
                            <div className="PopUp-Body" >
                                {/**video imported */}
                                <div className="popUpVideo-2" style={{ margin: 'auto' }}>
                                    {<video autoPlay loop muted className='video-num-4'>
                                        <source src={videoUrl_2} type="video/mp4" />
                                    </video>}

                                    <div >
                                        <div >
                                            {/**button with onclick to close pop up */}
                                            <button onClick={props.onClose} style={{ margin: 'auto' }}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </>
        )
    }
    //else statement to render pop up
    else if (props.content_4) {
        //return statement to render pop up 
        return (
            <>
                {/**allcontent within pop up will be shown here */}
                <div className="PopUp">
                    <div className="PopUp-Content-3" >
                        <div className="PopUp-Header">
                            <div className="PopUp-Body" >
                                {/**video imported */}
                                <div className="popUpVideo-2" style={{ margin: 'auto' }}>
                                    {<video autoPlay loop muted className='video-num-4'>
                                        <source src={videoUrl_3} type="video/mp4" />
                                    </video>}

                                    <div >
                                        <div >
                                            {/**button to close pop up with onclick */}
                                            <button onClick={props.onClose} style={{ margin: 'auto' }}>Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </>
        )
    }

}

export default PopUpSix;