import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NabBar = () => {
  return (
    <div className="container">
      <Navbar className="nav-bar p-4 " expand="lg">
        <Navbar.Brand as={Link} to="/">
          <h2
            style={{
              color: "tomato",
              marginBottom: "17px",
              fontSize: "32px",
              fontWeight: "700",
            }}
          >
            Mahfuz Alam
          </h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            style={{ marginLeft: "150px", marginBottom: "13px" }}
            className="ml-auto text-white mr-5 "
          >
            <Nav.Link
              className=" nav-text mr-3 "
              style={{ color: "white" }}
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>

            <Nav.Link
              className=" nav-text mr-3"
              style={{ color: "white" }}
              as={Link}
              to="/services"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className=" nav-text mr-3"
              style={{ color: "white" }}
              as={Link}
              to="/aboutMe"
            >
              {" "}
              About Me
            </Nav.Link>
            <Nav.Link
              className=" nav-text mr-3"
              style={{ color: "white" }}
              as={Link}
              to="/projects"
            >
              Projects
            </Nav.Link>
            <Nav.Link
              className=" nav-text mr-3"
              style={{ color: "white" }}
              as={Link}
              to="/blog"
            >
              {" "}
              Blogs
            </Nav.Link>
            <Nav.Link
              className=" nav-text mr-3"
              style={{ color: "white" }}
              href="https://drive.google.com/drive/folders/1jCjfK4TsB_34WkNON4v05LnkguoyRpzj?usp=sharing"
              target="_blank"
            >
              {" "}
              Resume
            </Nav.Link>
            <Nav.Link
              className=" nav-text mr-3"
              style={{ color: "white" }}
              as={Link}
              to="/contact"
            >
              Contact Me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NabBar;
