import React from "react";
import pic5 from "../../images/pic5.png";
import resume from "../../images/mahfuz-resume.pdf"



const About = () => {
  return (
    <section  className="container pt-5 ">
      <div className="row ">
        <div className="col-lg-5 col-sm-12 mt-3">
          <div className="about-img">
            <img src={pic5} alt=""style={{width:'350px',height:'350px'}}/>
            <button className='button btn-outline mt-3 mx-5'>
                        <a target='_blank' rel='noreferrer' href={resume}>Download CV</a>
                            
            </button>
          </div>
         
        </div>
        <div className="col-lg-7 col-sm-12  mt-5 my-5 ">
         
          <div className="about-details mx-2">
            <h1 style={{textAlign: 'center'}}>About Me</h1>
            <h1 style={{textAlign: 'center'}}>
              I'm <span style={{ color: "tomato", }}>Mahfuz Alam</span>
            </h1> 

             <p >
              A self-motivated and enthusiastic web developer with a deep
              interest in JavaScript. To work in the Software industry with
              modern web technologies of different local & multinational
              Software/ IT agencies of Bangladesh and grow rapidly with
              increasing responsibilities.I consider myself a hard-working person. Not only that, but I am passionate to build up myself as a challenging and responsible person to utilize my knowledge to show my creativity. I am to specialize in front end technologies like HTML5, CSS3, Bootstrap, JavaScript, React JS etc. I have also worked with back end technologies like Node JS, MongoDB, Express, Heroku. Likewise, I have also experienced some hosting tools like GitHub, Firebase and Netlify.</p>
          </div>
          
         
           
        </div>
      </div>
    </section>
  );
};

export default About;
