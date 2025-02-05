import React, { useState, useEffect } from "react";
import axios from "axios";

//definition of FAQPage component
const FaqPage = () => {
    //variable definition
    const [FaqPage, setFaqPage] = useState([]);

    //useEffect to get FAQs
    useEffect(() => {
        axios.get('http://localhost:5321/getFAQ')
            .then(FaqPage => setFaqPage(FaqPage.data))
            .catch(err => console.log(err))
    })

    //return statement to render component
    return (
        <>
            <div className="homePage">
                <h1 className="centerTitle">FAQ's 'Frequently Asked Questions'</h1>
                <p className="centerTitle">Here you will have all the Frequently asked questions by users when using our education system</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', placeItems: 'center' }}>
                    {FaqPage.map(FAQs => (
                        <>
                            <div key={FAQs._id} className="FAQcontain">
                                <p>{FAQs.name}</p>
                                <p>{FAQs.text}</p>
                            </div>
                        </>
                    ))}
                </div>

            </div>

        </>
    )

}

export default FaqPage;