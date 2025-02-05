import React from "react";

const mesList = ({ mes }) => {
    return (
        <>
            <div>
                {mes.map((chat, index) => (
                    <div key={index}>
                        {chat.sender}:{chat.text}

                    </div>
                ))

                }

            </div>
        </>
    );

}

export default mesList;