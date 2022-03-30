import React from 'react';
import "../Projects/ProjectDetails.css";

const ServiceCard = ({service}) => {
    return (
        <div className='col-sm-12 col-md-4 col-12 card-group p-2  text-center project-details'>
        <div className="card shadow-sm textAlign-center  justify-content-center">
     <div className='card-body '>
         <img  style={{marginTop:'10px',height:'180px',width:'180px',color:'info'}} src={service.pic} alt=""/>
         <h3 className='mt-4 mb-4 text-dark fw-bold'>{service.title}</h3>
         <p className='text-dark text-center'>{service.description}</p>
         
     </div>
     </div>
     </div>
    );
};

export default ServiceCard;