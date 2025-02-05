import React, { useState, useEffect } from "react";

//definition of counter component
const Counter_one = () => {
    //variable defined and state set to zero
    const [count, setCount] = useState(0);

    //useEffect to increment the counter
    useEffect(() => {
        const intervslId = setInterval(() => {
            setCount((prevCount) => {
                const limit = 13;

                if (prevCount + 1 === limit) {
                    clearInterval(intervslId);
                }
                return prevCount + 1;
            });



        }, 50);

        return () => clearInterval(intervslId);
    }, []);

    //return statement to render the counter
    return (
        <div>
            <p>Only {count}% people</p>
            <p>age 65+ rated their ability </p>
            <p>with tech as very good</p>

        </div>
    );
};

export default Counter_one;