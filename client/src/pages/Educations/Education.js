import React from 'react';
import {MdSchool} from 'react-icons/md';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Education.css'
const Education = () => {
  return (
    <>
        <div className='continer education' id='education'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                Education Details
            </h2>
            <hr/>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="2021 - present"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<MdSchool/>}
                >    
                    <h3 className="vertical-timeline-element-title">B.SC (HONS) IN INFORMATION TECHNOLOGY</h3>
                    <h4 className="vertical-timeline-element-subtitle ">Sri Lanka Institute Of Information Technology</h4>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'white', color: 'black' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="2015 - 2018"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<MdSchool/>}
                >    
                    <h3 className="vertical-timeline-element-title">G.C.E(A/L)</h3>
                    <h4 className="vertical-timeline-element-subtitle ">Hindu College</h4>
                    <h5 className="vertical-timeline-element-subtitle ">Science for technology-C</h5>
                    <h5 className="vertical-timeline-element-subtitle ">Engineering technology-S</h5>
                    <h5 className="vertical-timeline-element-subtitle ">Information Communication technology-S</h5>
            </VerticalTimelineElement>
            </VerticalTimeline> 
        </div>   
    </>
  )
}

export default Education