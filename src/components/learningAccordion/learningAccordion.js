import React, { useState } from 'react';
//import { DataInfo } from '../../dataInfo';
import styled from 'styled-components';
import { IconContext } from 'react-icons/lib';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { DataInfo2 } from '../../DataInfo_2';

//stylyinh done for accordion within the file
const AccordionSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: relative;
height: 50vh;
width: 100%;
background: #fff;
margin-top: -80px`;
const AccordContainer = styled.div`

box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
width: 100%;
max-width: 600px;
margin: 0 auto;
`;
const Wrap = styled.div`
background: #272727;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
text-align: center;
cursor: pointer;

h1 {
  padding: 2rem;
  font-size: 2rem;
}

span {
  margin-right: 1.5rem;
}

`;

const Dropdown = styled.div`
background: #1c1c1c;
color: #00ffb9;
width: 100%;
height: 100px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-bottom: 1px solid #00ffb9;
border-top: 1px solid #00ffb9;

p {
  font-size: 1rem;
}
`;

//definition of learning accordion component
const LearningAccordion = () => {
    //variable to change state of accordion state set to false
    const [clicked, setClicked] = useState(false)

    //function to toggle
    const toggle = index => {
        if (clicked === index) {
            return setClicked(null)
        }

        setClicked(index)
    }

    //return statement to render the accordion component
    return (

        <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
            {/**iconContext imported */}
            {/**different tags applied from accordion import */}
            <AccordionSection>
                <AccordContainer>
                    {/**map function used to iterate through accordion */}
                    {DataInfo2.map((item, index) => {
                        return (
                            <>
                                {/**onlick to change when option is clicked on */}
                                <Wrap onClick={() => toggle(index)} key={index}>
                                    <h2>{item.question}</h2>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                        <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}

                            </>
                        )
                    })}
                </AccordContainer>
            </AccordionSection>
        </IconContext.Provider>
    )
}

export default LearningAccordion;
