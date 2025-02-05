import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";

//defintion of external link page 
const AdminPost = () => {
    //variables all defined and set to empty string value
    const [linkNamePost, setLinkNamePost] = useState('');
    const [linkTextPost, setLinkTextPost] = useState('');
    const [linkURLPost, setLinkURLPost] = useState('');
    const [linkImageURLPost, setlinkImageURLPost] = useState('');
    //naviagte used to useNavigate function
    const navigate = useNavigate();
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1711308080/1200px-External_link_font_awesome.svg_khs0vy.png";

    //function to change value onlcik
    const nameEntered = (e) => {
        setLinkNamePost(e.target.value);
    }

    //function to change value on click
    const textEntered = (e) => {
        setLinkTextPost(e.target.value);
    }

    //function to change value onclick
    const urlEntered = (e) => {
        setLinkURLPost(e.target.value);
    }

    //function to change value onclick
    const imageUrlEntered = (e) => {
        setlinkImageURLPost(e.target.value);
    }

    //function to submit the link upon clicking button
    //posts the link to the database
    const submittLink = () => {
        axios.post('http://localhost:5321/addLink', {
            name: linkNamePost,
            text: linkTextPost,
            URL: linkURLPost,
            imageURL: linkImageURLPost,
        })
            .then(response => {
                console.log("request sent", response.data)
                setLinkNamePost('');
                setLinkTextPost('');
                setLinkURLPost('');
                setlinkImageURLPost('');
            })
            .catch(error => {
                console.error('Error request:', error)
            })
    }

    //function to navigate to a different page based on name
    const navigatePage = (name) => {
        if (name == 'go back') {
            navigate('/AdminHomepage')
        } else if (name === 'Log out') {
            navigate('/Hub')
        }

    }

    //return statement to render link post page
    return (
        <>
            {/**all components within page defined with styling applied */}
            <div className="homePage">

                <div className="textBox-left-width" style={{ marginLeft: '45px' }}>
                    <h1 className="centerTitle">New link post</h1>
                    <p className="centerTitle">The admin will post a new links page here</p>
                    <label>Name:</label>
                    {/**input box */}
                    <input type="text" name="Link post" value={linkNamePost} onChange={nameEntered}></input>

                    <label>Text</label>
                    {/**input box */}
                    <input type="text" name="Link post" value={linkTextPost} onChange={textEntered}></input>

                    <label>URL</label>
                    {/**input box */}
                    <input type="text" name="Link post" value={linkURLPost} onChange={urlEntered}></input>

                    <label>ImageURL</label>
                    {/**input box */}
                    <input type="text" name="Link post" value={linkImageURLPost} onChange={imageUrlEntered}></input>

                    <div>
                        {/**onlclick to submit link */}
                        <button style={{ margin: '0 auto' }} type="submit" onClick={submittLink}>Post Link</button>
                    </div>
                </div>
                {/**image imported from variable */}
                <div style={{ float: 'right', width: '50%' }}>
                    <img style={{ width: '70%', marginTop: '-470px', marginLeft: '80px' }} src={imageURL} alt="ADPostImg" />
                </div>

                {/**buttons for added navigation within page and styling applied */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function to naviagte to page */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>

                    {/**onclick function to navigate to page */}
                    <button className="buttonSpace" onClick={() => navigatePage('Log out')}>
                        <span>Log Out</span>
                        {/**icon imported from react icons */}
                        <FaBookOpenReader />

                    </button>

                </div>

            </div>

        </>
    )

}

export default AdminPost;