import React from 'react';
import { Container, Row } from 'react-bootstrap';
import autoCar from '../../images/autoCar.png';
import HealthCare from '../../images/healthCare.png';
import Automed from '../../images/automed.png';
import penguin from '../../images/penguin.png';
import food from '../../images/food.png';
import brigate from '../../images/brigate.png';
import Kitsware from '../../images/kitsware.png';
import Epic from '../../images/epic.png';
import Travel from '../../images/travel.png';
import ProjectsDetails from './ProjectsDetails';

const projectData = [
  {
    img: `${Travel}`,
    cols: 1,
    text: 'A single page Tour Booking Website,User booking their hotel room and places, users must be logged in by their gmail account .This web app has an admin page where the admin can add a new service, update the current status, delete a service, and make a new admin.',
    title: 'TravelBD App',
    live: 'https://travelbd-app.web.app/',
    code: 'https://github.com/Mahfuz60/tour-booking-app',
  },
  {
    img: `${HealthCare}`,
    cols: 1,
    text: 'A single page Health Care Center Website,Patients place their Booking Appointment, users must be logged in by their google account .This web app has an admin page where the admin can add a new service, update the current status, delete a service, and make a new admin.',
    title: 'Health Care Center',
    live: 'https://health-care-center-9ee24.web.app/',
    code: 'https://github.com/Mahfuz60/health-care-center-client',
  },
  {
    img: `${Automed}`,
    cols: 2,
    text: 'A single page Automed Mechanics Website,where people can find many Services Web applications.This web app has an admin page where the admin can add a new service, update the current status, delete a service, and make a new admin.',
    title: 'AutoMed Mechanics',
    live: 'https://automed-mechanics-e11c2.web.app/',
    code: 'https://github.com/Mahfuz60/AutoMed-Mechanics',
  },
  {
    img: `${Epic}`,
    cols: 3,
    text: 'This Website is about food ordering services. you will find some names of foods, their prices, and their descriptions. Customer Used Stripe Payment Gateway System',
    title: 'Epic Eateries',
    live: 'https://epic-eateries-238ce.web.app/',
    code: 'https://github.com/Mahfuz60/Epic-Eateries',
  },

  {
    img: `${Kitsware}`,
    cols: 4,
    text: 'A single page Kitsware Technology Website,It is mainly kitsware service type website.User canbe contact then kitsware team provide this service',
    title: 'Kitsware Technologies',
    live: 'https://kitsware20.netlify.app/',
    code: 'https://github.com/Mahfuz60/kitsware-website',
  },
  {
    img: `${autoCar}`,
    cols: 6,
    title: 'Auto Car service',
    text: 'Auto Car service is Car servicing Website ,People Book their Service and repair their Car and review their service,Admin added new Service ',
    live: 'https://car-service-36e1f.web.app/',
    code: 'https://github.com/Mahfuz60/auto-car-service-client',
  },

  {
    img: `${penguin}`,
    cols: 5,
    title: 'Penguin Fashion',
    text: 'A single page Penguin Shop app where people are able to select Product and buy it with their information .',
    live: 'https://mahfuz60.github.io/penguin-fashion-website/',
    code: 'https://github.com/Mahfuz60/penguin-fashion-website',
  },

  {
    img: `${food}`,
    cols: 7,
    title: 'Hungry-Monster',
    text: 'A single page restaurant app where people are able to select food in their cart and checkout the cart with their information .',
    live: 'https://mahfuz60.github.io/Hungry-Monster/',
    code: 'https://github.com/Mahfuz60/Hungry-Monster',
  },
  {
    img: `${brigate}`,
    cols: 8,
    title: 'Brigate',
    text: 'A Brigate  is construction Building app People Choose their design and build up your Building ',
    live: 'https://mahfuz60.github.io/brigate-website/',
    code: 'https://github.com/Mahfuz60/brigate-website',
  },
];

const Projects = () => {
  return (
    <Container>
      <Row className='mt-5 mx-2 pt-5 '>
        <h1 style={{ color: 'white', fontWeight: '700', marginBottom: '10px' }}>LATEST WORKS</h1>
        <p style={{ color: 'white', marginBottom: '50px' }}>
          Here are some of my work. For more project click the button below.
        </p>
        {projectData.map((data) => (
          <ProjectsDetails data={data}></ProjectsDetails>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
