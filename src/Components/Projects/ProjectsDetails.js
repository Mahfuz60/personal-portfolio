import React from 'react';
import { Card, Col, Image } from "react-bootstrap";
import github from "../../images/github.svg";
import liveLink from "../../images/live.svg";
import "./ProjectDetails.css";

const ProjectsDetails = (props) => {
    const { img, title, live, code,text} = props.data;
    return (
        <Col xs={12} md={12} lg={6}>
        <Card className="mb-5 project-details border-0 p-2 shadow-lg p-3">
          <Card.Img variant="top" src={img} height={200}/>
          
          <Card.Body>
            <Card.Title
              className="font-weight-bolder"
              style={{ color: "tomato",fontWeight:'700' }}
            >
              {title}
            </Card.Title>
            <Card.Text>
             {text}
            </Card.Text>
          </Card.Body>
          <Card.Footer className="d-flex pr-3 justify-content-between align-items-center">
           <div className="d-flex">
           <h6 style={{ color: "gray" ,marginTop:'4px'}} className="mr-2 ">Preview</h6>
            <a href={live} target="__blank" className="d-flex">
              <Image src={liveLink} height={25}></Image>
            </a>
           </div>
          <div className="d-flex">
          <h6 style={{ color: "gray",marginTop:'4px' }} className="mr-2">Source Code</h6>
            <a href={code} target="__blank" className="d-flex">
              <Image src={github} height={25}></Image>
            </a>
          </div>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default ProjectsDetails;