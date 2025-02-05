import React, { useState, useEffect } from "react";

//definition of conunter component
const Counter_two = () => {
    //variable of counter intialised and state set to zero
    const [count, setCount] = useState(0);

    //use effect to increment the counter
    useEffect(() => {
        const intervslId = setInterval(() => {
            setCount((prevCount) => {
                const limit = 61;

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
            <p>{count}%</p>
            <p>people age 65+</p>
            <p>in 2021 has a Smartphone</p>

        </div>
    );
};

export default Counter_two;