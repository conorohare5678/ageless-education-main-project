import React from "react";

export const quiz = {
    Topic: 'Test on Technology',
    level: 'easy',
    QuesTotal: '5',
    QuesScor1: '1',
    Ques: [
        {
            Question: 'How do you find your wifi router password',
            choice: ['On the back', 'On the bottom', 'On the front', 'All of the above'],
            type: 'MCQs',
            correctAns: 'On the back'
        },
        {
            Question: 'What is it type in to connect to the wifi?',
            choice: ['WIFI Password', 'Router name', 'Your name', 'All of the above'],
            type: 'MCQs',
            correctAns: 'WIFI Password'
        },
        {
            Question: 'What button do you hit when you have enter a phone number',
            choice: ['# button', 'Dial button', '* button', 'All of the above'],
            type: 'MCQs',
            correctAns: 'Dial button'
        },
        {
            Question: 'What do you need to browse the web?',
            choice: ['A laptop', 'Wifi Connection', 'Broswer opened', 'All of the above'],
            type: 'MCQs',
            correctAns: 'All of the above'
        },
        {
            Question: 'Where do you need to go to connect your phone to the WIFI',
            choice: ['Settings', 'Camera', 'Phone', 'All of the above'],
            type: 'MCQs',
            correctAns: 'Settings'
        }
    ]

}