import React from "react";

export const quiz = {
    Topic: 'Test on Technology',
    level: 'easy',
    QuesTotal: '5',
    QuesScor1: '1',
    Ques: [
        {
            Question: 'What button you click when taking a picture',
            choice: ['Lock button', 'Capture button', 'volumne button', 'All of the above'],
            type: 'MCQs',
            correctAns: 'Capture button'
        },
        {
            Question: 'Where do you download an app?',
            choice: ['App store', 'Photo library app', 'Contacts', 'All of the above'],
            type: 'MCQs',
            correctAns: 'App store'
        },
        {
            Question: 'What icon do you hit when sending a message',
            choice: ['Compose button', 'Send button', 'lock button', 'All of the above'],
            type: 'MCQs',
            correctAns: 'Compose button'
        },
        {
            Question: 'Where do you type a web address',
            choice: ['In any text box', 'In a text message', 'Search bar', 'All of the above'],
            type: 'MCQs',
            correctAns: 'Search bar'
        },
        {
            Question: 'What way do you interact with a phone?',
            choice: ['Talk to it', 'Look at it', 'Turn it off', 'Touch the screen'],
            type: 'MCQs',
            correctAns: 'Touch the screen'
        }
    ]

}