import React from 'react';
import '../../Components/Skill/skill.css';
import {FaGithub,FaLinkedin,FaTwitter,FaEnvelope} from "react-icons/fa";


const Skill = () => {
    return (
       <scetion className='container '>
            <div className='row '>
            <div style={{marginLeft:'50px'}} className='col-lg-6 col-md-8 col-sm-12 pt-3'>
            <div className='mx-5 '>
            <h1 style={{color:'white',fontWeight:'700'}}>My Skill</h1>
            <div className="skill pt-3">
                <p>HTML5</p>
                <div className="skill-bar skill1 wow slideInLeft animated bg-warning">
                    <span className="skill-count1">95%</span>
                </div>
            </div>

            <div className="skill">
                <p>CSS3</p>
                <div  className="skill-bar skill2 wow slideInLeft animated bg-danger">
                    <span className="skill-count2">85%</span>
                </div>
            </div>
            <div class="skill">
                <p>REACT</p>
                <div class="skill-bar skill3 wow slideInLeft animated bg-info">
                    <span class="skill-count3">75%</span>
                </div>
            </div>
            <div class="skill">
                <p>JAVASCRIPT</p>
                <div class="skill-bar skill4 wow slideInLeft animated bg-primary">
                    <span class="skill-count4">75%</span>
                </div>
            </div>
            <div class="skill">
                <p>NODEJS</p>
                <div class="skill-bar skill5 wow slideInLeft animated bg-secondary">
                    <span class="skill-count5">60%</span>
                </div>
            </div>
            <div class="skill">
                <p>MongoDB</p>
                <div class="skill-bar skill6 wow slideInLeft animated bg-success">
                    <span class="skill-count6">60%</span>
                </div>
            </div>
            
            
            </div>

            </div>

            <div className='col-lg-5 col-sm-12 mt-5 '> 
               <div  className='mt-5 mx-4 my-3'>
                  <div style={{backgroundColor:'silver',padding:'85px'}}>
                  <h1 style={{color:'black',fontWeight:'700'}}>Contact Me</h1>
                  <h3>Name:Mahfuz Alam</h3>
                  <p>Phone:+8801521246898</p>
                  <p>Email:mahfuzuralam1996@gmail.com</p>
                  <ul className='header-ul '>
                        
                    
                        <li >
                        <a target='_blank' rel='noreferrer' href="https://github.com/Mahfuz60">
                        <FaGithub className='headerIcon'></FaGithub>
                        </a>
                           
                        </li>
                        <li>
                        <a target='_blank' rel='noreferrer' href="https://www.linkedin.com/in/mahfuz-alam60/"> <FaLinkedin className='headerIcon'></FaLinkedin>
                        </a>
                           
                        </li>
                        
                        
                        <li>
                            <a target='_blank' rel='noreferrer'href="https://twitter.com/mahfuz_alam60">
                            <FaTwitter className='headerIcon'></FaTwitter>
                            </a>
                        </li>
                        <li>
                            <a target='_blank' rel='noreferrer'href="mailto:mahfuzuralam1996@gmail.com">
                            <FaEnvelope className='headerIcon'></FaEnvelope>
                            </a>
                        </li>
                        
                        </ul>
                  </div>
               </div>
                

            </div>

        </div>
       </scetion>
    );
};

export default Skill;