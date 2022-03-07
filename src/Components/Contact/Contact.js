import React from 'react';
import emailjs from 'emailjs-com';
import { Form } from "react-bootstrap";
const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs
          .sendForm(
            "gmail",
            "template_wdol4qm",
            e.target,
            "user_bTOBhujcytBVcq4fIcrei"
          )
          .then(
            (result) => {
            //   alert("Email Submitted successfully! 👍");
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
          e.target.reset()

        };
    return (
        <div className='container col-lg-12 col-sm-4 col-md-8 pt-5'>
          <h1  style={{color:'tomato',fontWeight:'700',textAlign: 'center'}}>Get In Touch</h1>
      <Form 
      style={{backgroundColor:'#1CC2C1',borderRadius:'30px '}}
      className="contact-form mb-5 p-5 rounded-lg mt-5"
       onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name='message' rows={4} />
        </Form.Group>
        <input  type="submit" value="Send" className="px-3 bg-danger fw-bold mt-2 p-2 text-black" />
        <p >Receiving By <span style={{color:'black',fontWeight:'600',fontSize:'15px'}}>mahfuzuralam1996@gmail.com</span></p>
      </Form>

    

            
        </div>
);
    };


export default Contact;