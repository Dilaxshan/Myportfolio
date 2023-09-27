import React from 'react'
import './Menus.css'
import pro from './images/profile.jpg'
import { Link } from 'react-scroll'
import {FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReading, FcRules} from 'react-icons/fc'
const Menus = ({toggle}) => {
  return (
    <>
      {toggle ? (       
        <>
            <div className='navbar-profile-pic'>
                <img src={pro} alt='profile_pic' />
            </div>
            <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcHome/>Home
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcAbout/>About
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcReading/>Education
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='tech stack' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBiotech/>Tech Stack
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcRules/>Projects
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='work experience' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcPortraitMode/>Work Experience
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBusinessContact/>Contact
                        </Link>
                    </div>
                </div>
            </div>
        </>
      ) : (
        <>
        <div className='nav-items'>
                <div className='nav-item'>
                    <div className='nav-link'>
                        <Link to='home' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcHome title='Home'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='about' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcAbout title='About'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='education' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcReading title='Education'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='tech stack' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBiotech title='Tech Stack'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcRules title='Projects'/>  
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='work experience' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcPortraitMode title='Work Expreience'/>
                        </Link>
                    </div>
                    <div className='nav-link'>
                        <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}>
                        <FcBusinessContact title='Contact'/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
      )} 
        </>
  )
}

export default Menus