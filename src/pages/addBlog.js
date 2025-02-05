import React, { useState } from "react";
import Modal from 'react-modal';
const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1711394145/serious-senior-middle-aged-man-working-laptop-home-handsome-elderly-mature-male-user-looking-computer-screen-communicating-online_482921-10367_je9rz9.jpg";

//definition of add blog component 
const AddBlog = ({ addPost }) => {
    //modal varibale defined with state set to false
    const [modalIsOpen, setModalIsOpen] = useState(false);
    //new post varibale defined with state values empty
    const [newPost, setNewPost] = useState({ title: '', content: '' });

    //function to open the modal
    const openModal = () => {
        setModalIsOpen(true);
    };
    //function to close the modal
    const closeModal = () => {
        setModalIsOpen(false);
    };

    //function to handle the change sof data inputted into input feilds
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPost({ ...newPost, [name]: value });
    };

    //function to post blog to database
    const handleAddPost = async () => {
        try {
            const response = await fetch('http://localhost:5321/add-post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost),
            });

            if (response.ok) {
                addPost(newPost);
                closeModal();
            } else {
                // Handle error
                console.error('Error');
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    //return statement to render addblog component
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <button onClick={openModal}>Add Post</button>
            {/**Modal component imported functions to open and clode it */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Add Post Modal"
            >
                <h2 className="centerTitle">Add New Post</h2>
                {/**label and input feild to input data */}
                <label>Post Title:</label>
                <input type="text" name="title" value={newPost.title} onChange={handleInputChange} style={{ width: '650px' }} />
                <br />
                {/**label and textarea feild to input data */}
                <label>Contents You've Learned:</label>
                <textarea name="content" value={newPost.content} onChange={handleInputChange} style={{ height: '400px', width: '650px' }}></textarea>
                <br />
                {/**Image called from variable stored in */}
                <img src={imageURL} style={{ marginLeft: '670px', marginTop: '-480px', marginBottom: '40px' }} alt="imgAB1" />
                {/**buttons to open and close the modal depending on the state and styling */}
                <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
                    <button onClick={handleAddPost}>Save Post</button>
                    <button onClick={closeModal}>Cancel</button>
                </div>
            </Modal>
        </>
    );
}

export default AddBlog;
