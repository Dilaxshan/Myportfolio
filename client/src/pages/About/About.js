import React from 'react'
import './About.css'
import pro from './images/profile.jpg'
function About() {
  return (
    <>
        <div className='about'id='about'>
            <div className='row'>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img'>
                    <img
                        // src='https://media.licdn.com/dms/image/D5603AQEyOaalpr82sA/profile-displayphoto-shrink_800_800/0/1690821141888?e=2147483647&v=beta&t=N50MqnlJovzi1x-AC1-j0j5wYvIvRSsiMn5iSCPgF5w'alt='profile_pic'
                        src={pro} alt='profile_pic'
                    />
                </div>
                <div className='col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content'>
                    <h1>About me</h1>
                    <p>
                        I am highly motivated software engineer and undergraduate pursuing a bachelor's degree in Information Technology. With excellent problem-solving and analytical skills, as well as the ability to work collaboratively as part of a team, I am confident in my ability to contribute to the success of any software development project. Passionate about staying up to date with the latest technologies and best practices. I'm also the kind of person that would never pass up an opportunity, no matter how small. As a result, I always seize the chance I have, and I try to learn from my mistakes so that I might succeed more often in the future.
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}

export default About