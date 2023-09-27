import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {SiReact} from 'react-icons/si'
import './WorkExp.css'
const WorkExp = () => {
  return (
    <>
        <div className='work' id='work_experience'>
            <div className='continer work-exp'>
                <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                    Top recent projects
                </h2>
                <hr/>
                <VerticalTimeline lineColor='#1e1e2c'>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: '#1e1e2c' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2011 - present"
                        iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                        icon={<SiReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">My Portfolio</h4>
                        <p>
                        Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: '#1e1e2c' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2011 - present"
                        iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                        icon={<SiReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle">e-Learning System</h4>
                        <p>
                           This system was developed in PHP, jQuery with Ajax. I was responsible to do a subsystem called e-Examination. This whole system was managing under the Agile project management using Kanban tool
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'white', color: '#1e1e2c' }}
                        contentArrowStyle={{ borderRight: '7px solid  white' }}
                        date="2011 - present"
                        iconStyle={{ background: '#1e1e2c', color: '#fff' }}
                        icon={<SiReact />}
                    >
                        <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                        <h4 className="vertical-timeline-element-subtitle"> Online Educational Games</h4>
                        <p>
                            In this system I have done basic functions like Register, Profile Management, and a automated Quiz system, which was done by JSON concept with JS
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>    
        </div>    
    </>
  )
};

export default WorkExp;