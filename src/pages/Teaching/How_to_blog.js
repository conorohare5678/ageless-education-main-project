import React, { useState, useEffect } from "react";
import axios from "axios";
import PopUpFive from "../../components/popups/popUpFive";

//definition of function on how to blog
function How_to_blog() {
    //variables defined with empty array states and set to false also
    const [howToBlog, setHowToBlog] = useState([]);
    const [show_1, setShow_1] = useState(false);
    const [show_one_1, setShow_one_1] = useState('');
    //image string stored in variable
    const imageUrl = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1707767778/SRC-Technology-Blog-Featured_sazwu3.jpg";
    //video string stored in variable
    const videoURL = "https://res.cloudinary.com/dlhgjamvc/video/upload/v1711703728/Screen_Recording_2024-03-29_at_09.09.17_qrd9hd.mov";

    //useEffect to get information from database
    useEffect(() => {
        axios.get('http://localhost:5321/getHowToBlogInfo')
            .then(howToBlog => setHowToBlog(howToBlog.data))
            .catch(err => console.log(err))
    }, [])

    //function to show pop up onclick seting it to true
    const buttonClick_1 = (content_2) => {
        setShow_1(true);
        setShow_one_1(content_2);
    }


    //return statement to render how to blog page
    return (
        <>
            {/**Components defined here with all necessary styling */}
            <div className="homePage-blog-1">
                <div className="centerTitle">
                    <h1 style={{ paddingTop: '50px' }}>How to Blog on Ageless Education</h1>
                </div>
                {/**map function used to iterate imformation being printed out */}
                {howToBlog.map(HowToBlog => {
                    return <ul key={HowToBlog._id}>

                        <div className="centerTitle">
                            <p className="TextAligned">{HowToBlog.text}</p>
                        </div>

                        {/**button shown based on name */}
                        {HowToBlog.name === "info 3" && (
                            <button style={{ margin: '0 auto' }} onClick={() => buttonClick_1(true)}>Hit Here</button>
                        )}

                    </ul>
                })}

            </div>

            {/**pop up function to set state to show when close clicked */}
            {show_1 && <PopUpFive content_2={show_one_1} onClose={() => setShow_1(false)} />}
            <div>
                {/**image imported from variable above */}
                <img src={imageUrl} className="Blog-PageImg-1" alt="imgHB1" />
            </div>
            <div className="blogPage-1">
                <h1 className="centerTitle-1" style={{ paddingTop: '20px' }}>Full Video on how to blog</h1>
                <p style={{ textAlign: 'center', width: '80%', margin: '0 auto' }}>Here is a full video on how to blog within the blogging page where when you post it others can see your post and read what you have shared about your learning experience.</p>
                <div>
                    {/**video imported from variable above */}
                    <video controls muted className="blogVideo">
                        <source src={videoURL} type="video/mp4" />
                    </video>
                </div>
            </div>
        </>

    );

}

export default How_to_blog;