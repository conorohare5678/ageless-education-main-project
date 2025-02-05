import React, { useState, useEffect } from "react";
import AddBlog from "./addBlog";

//defintion of blog component
function Blog() {
    //definition of variables with an empty state array
    const [blogPosts, setBlogPosts] = useState([]);

    //function to add new blog post
    const addPost = (newPost) => {
        setBlogPosts([...blogPosts, { id: blogPosts.length + 1, ...newPost }]);
    };

    //use effect to get blogs posted to database to display them
    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await fetch('http://localhost:5321/get-blog-posts');
                if (response.ok) {
                    const data = await response.json();
                    setBlogPosts(data);
                } else {
                    console.error('Error fetching blog data');
                }
            } catch (error) {
                console.error('Error fetching blog data', error);
            }
        };

        fetchBlogData();
    }, []);

    //return statement to render blog page component
    return (
        <>
            {/**Content within the component with all necessary styling applied */}
            <div className="homePage">
                <div className="add-post" >
                    {/**Add blog modal imported and rendered upon clicking button */}
                    <AddBlog addPost={addPost} />
                </div>
                <header>
                    <h1 className="title-header">Ageless Education Blog</h1>
                </header>
                <main>
                    <div className="grid-container-1">
                        {/**Map function to render each blog post  */}
                        {blogPosts.map((post) => (
                            <div className="blogContainer" key={post.id}>
                                <h3 className="blog-title">Blog Title: <br />{post.title}</h3>
                                <p style={{ marginLeft: '10px', marginRight: '10px' }}>Comments: <br />{post.content}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>



        </>
    );

}
export default Blog;