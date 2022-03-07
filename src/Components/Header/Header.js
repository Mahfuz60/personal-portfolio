import React from 'react';
import About from '../About/About';
import HeaderMain from '../HeaderMain/HeaderMain';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skill from '../Skill/Skill';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const Header = () => {
    return (
        <div className='header'>
            
            <HeaderMain></HeaderMain>
            <Services></Services>
            <About></About>
            <Projects></Projects>
            <Skill></Skill>
            <Contact></Contact>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Header;