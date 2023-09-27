import React from 'react'
 import './Home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/Dilaxshan.pdf'
import { useTheme } from '../../context/ThemeContext';
import {HiMoon} from 'react-icons/hi'
import { BsFillSunFill } from 'react-icons/bs';
const Home = () => {
    const[theme,setTheme] = useTheme(); 
    const handleTheme = () => {
        setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
    };
  return (
    <>
        <div className='container-fluid home-container' id='home'>
            <div className="theme-btn" onClick={handleTheme}>
                {theme === 'light' ? (<HiMoon size={30}/>) : (<BsFillSunFill/>)}
            </div>
            <div className='container home-content'>
                <h2>Hi 👋 I'm a S.Dilaxshan </h2>
                <h1>
                    <Typewriter
                        options={{
                            strings:["FullStack Developer !!","Mern Stack Developer!!"],
                            autoStart: true,
                            loop: true,
                        }}
                    />    
                </h1>
                <div className='home-buttons'>
                    <a className='btn btn-hire' href="https://api.whatsapp.com/send?phone=0765553407" rel='noreferrer' target='_blank'>Hire Me</a>    
                    <a className='btn btn-cv' href={Resume} download="Dilaxshan.S.pdf"> My Resume </a>
                    <a className='btn btn-Event' href="https://calendar-event.onrender.com/" >Event Details</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home