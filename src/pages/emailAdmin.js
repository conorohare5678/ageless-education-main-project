import React, { useRef } from "react";
import emailjs from '@emailjs/browser';

//definition of email admin component
const EmailAdmin = () => {
    //useref defined inside formMEssage variable
    const formMessage = useRef()
    const imageURL = "https://res.cloudinary.com/dlhgjamvc/image/upload/v1709486363/sending-email-process-on-desktop-screen-concept-email-person-working-on-computer-modern-flat-design-for-web-banner-website-element-brochures-or-book-cover-vector_g789ql.jpg"

    //function to send email to admin using email js
    //send form function used here with connection and template key
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_qprn1ki', 'template_9ye2jyc', formMessage.current, {
                publicKey: 'ZmCWhT5-1fSAL4hah',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset();
    };

    //return satement to render the email admin page 
    return (
        <>
            <div className="homePage">
                <div className="requestimageRight">
                    {/**image imported from variable above with styling applied */}
                    <img src={imageURL} style={{ height: '600px' }} />
                </div>
                <div className="EmailContain">
                    <h2 className="centerTitle">Email us</h2>
                    <p className="centerTitle">Here you can send you and email which will appear in our emails and we will respond to you shortly with a response</p>
                    {/**form to send email to admin with input boxes and labels */}
                    <form ref={formMessage} onSubmit={sendEmail}>
                        <div className="InputBoxes">
                            {/**various input feilds and labels for text */}
                            <p>Please enter your name</p>
                            <input type="text" placeholder="Full Name" name="user_name" required></input>
                            <p>Please enter your email address(Optional) and phone number followed by the Subject</p>
                            <input type="email" placeholder="Email address" name="user_email"></input>
                            <input type="number" placeholder="Phone Number" name="user_phone"></input>
                            <input type="text" placeholder="Subject" name="Subject" required></input>
                            <p>Please enter your message</p>
                            <textarea name="message"></textarea>
                            {/**button to send email upon enter of data which executes send function */}
                            <button style={{ margin: '10px auto ' }} placeholder='Please eneter message in here' type="submit">Send Message</button>
                        </div>

                    </form>

                </div>

            </div>
        </>
    )

}

export default EmailAdmin;