import React from 'react';
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
import img5 from '../../images/img5.png'
import img6 from '../../images/img6.png'
import ServiceCard from './ServiceCard';
const ServicesData=[
    {
        id:1,
        pic:img1,
        title:'React Developer',
        description:'React. js Developers design and implement user interface components for JavaScript-based web and mobile applications using the React open-source library ecosystem'
    },
    {
        id:2,
        pic:img2,
        title:'Node.Js Developer',
        description:'Node.js developers deploy and maintain network applications. They manage the exchange of data between servers and users, develop back-end components, and connect applications with other web services'
    },
    {
        id:3,
        pic:img3,
        title:'JavaScript Developer',
        description:'A JavaScript Developer is responsible for completing the design of applications and software using Java programming language. '
    },
    {
        id:4,
        pic:img4,
        title:'Front-End Developer' ,
        description:' I have strong knowledge about frontend development tools and techniques.a front-end web developer is responsible for implementing visual elements that users see and interact with in a web application'
    },
    {
        id:5,
        pic:img5,
        title:'Back-End Developer', 
        description:'I have familiarity with restful api services using node js.Back end developers are responsible for creating and maintaining technology at the back end of a website (the server, database and application). The attractive visuals created by designers, UX professionals and front end developers'
    },
    {
        id:6,
        pic:img6,
        title:'Web Designer ', 
        description:'Web designers plan, create and code internet sites and web pages, many of which combine text with sounds, pictures, graphics and video clips. A web designer is responsible for creating the design and layout of a website or web pages.'
    }
]

const Services = () => {
    
    return (
        <section className='container pt-3 mt-5'>
            <div className='text-center'>
            <h4 style={{color:'#1CC7C1',fontSize:'30px',fontWeight:'700'}}>My SERVICES</h4>
            <p style={{color:'white',marginTop:'15px',fontSize:'20px',textAlign:'center'}}>Our web development company does its best to figure out the current needs and preferences of people to satisfy them on their online products and solutions. Any self-respecting web development company will always seek surprising, new ways to show off their services to potential clients and make them desire collaborations.</p>
        </div>
           <div className='d-flex justify-content-center'>
                <div className='row w-100 card-deck px-3 py-3'>
                    {
                        ServicesData.map(service=><ServiceCard service={service} key={service.title}></ServiceCard>)
                    }

                </div>

            </div>
            
        </section>
    );
};

export default Services;