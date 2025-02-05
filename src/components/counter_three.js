import React, { useState, useEffect } from "react";

//definition of counter component
const Counter_three = () => {
    //variable defined and state set to zero
    const [count, setCount] = useState(0);

    //useEffect to increment the counter
    useEffect(() => {
        const intervslId = setInterval(() => {
            setCount((prevCount) => {
                const limit = 57;

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
            <p>{count}% of people age 65+</p>
            <p>would like to improve </p>
            <p>their knowledge on technology</p>

        </div>
    );
};

export default Counter_three;