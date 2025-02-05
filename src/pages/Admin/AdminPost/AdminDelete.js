import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { RiArrowGoBackFill } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { MdQuiz } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

//definition of delete user page 
const AdminDeleteUser = () => {
    //variables defined in empty array
    const [user, setUser] = useState([]);
    //naviagte defined to useNavigate function
    const navigate = useNavigate();
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709760251/delete-user_wp9zhp.svg";

    //useEffect used to get users from database
    useEffect(() => {
        axios.get('http://localhost:5321/getAllUsers')
            .then(user => setUser(user.data))
            .catch(err => console.log(err))
    })

    //pop up appears when icon selected and deleted user from database
    const deleteUser = (id, name) => {
        if (window.confirm(`Do you want to delete ${name}`)) {
            axios.delete(`http://localhost:5321/deleteAUser/${id}`)
        }
    }

    //function to navigate to page based on name
    const navigatePage = (name) => {
        const volID = localStorage.getItem('volID');
        if (volID) {
            // If volID is present
            if (name === 'go back') {
                navigate('/HomepageVolunteer');
            } else if (name === 'Log out') {
                // If volID is present and clears local storage
                window.localStorage.removeItem('token');
                window.localStorage.removeItem('user');
                window.localStorage.removeItem('volID');
                navigate('/Hub');
            }
        } else {
            // If volID is not present
            if (name === 'Log out') {
                // If volID is not present 
                navigate('/Hub');
            } else {
                // If volID is not present
                navigate('/AdminHomepage');
            }
        }

    }
    // //function to navigate to a different page based on name
    // const navigatePage = (name) => {
    //     if (name == 'go back') {
    //         navigate('/AdminHomepage')
    //     } else if (name === 'Log out') {
    //         navigate('/Hub')
    //     }

    // }

    //return statement ot render delete user page
    return (
        <>
            {/**all components within return to be displayed along with styling */}
            <div className="homePage">
                <div>
                    {/**image imported */}
                    <img src={imageURL} style={{ marginTop: '10px', width: '40%' }} />
                </div>
                <div className="moveUp">
                    <div className="textRight-container-1">
                        <h1 className="centerTitle">Remove a user</h1>
                        <p className="centerTitle">This is where you can remove a user from the system.</p>
                        {/**table to display all users */}
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Username</th>
                                    <th>Delete user</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/**map function to display the users */}
                                {user.map(UserDisplay => (
                                    <tr key={UserDisplay._id}>


                                        <th>{UserDisplay.firstName} {UserDisplay.lastName}</th>
                                        <th>{UserDisplay.userName}</th>
                                        {/**onclick function to delete the users with icon beside it */}
                                        <th><MdDelete onClick={() => deleteUser(UserDisplay._id, UserDisplay.firstName)} /></th>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/**navigation buttons to navigate to different page */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    {/**onclick function used naviagte page */}
                    <button className="buttonSpace" onClick={() => navigatePage('go back')}>
                        <span>Go Back</span>
                        {/**icon imported from react icons */}
                        <RiArrowGoBackFill />

                    </button>
                    {/**onclick function used to naviagte page */}
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

export default AdminDeleteUser;