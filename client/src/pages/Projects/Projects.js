import React from 'react'
import Spin from "react-reveal/Spin";
import './Projects.css'
const Projects = () => {
  return (
    <>
        <div className='continer project' id='projects'>
            <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
                Top Recent Projects
            </h2>
            <hr/>
            <p className='pb-3 text-center'>
                here are my top 3 recent project with live links and source code
            </p>
            <div className='row' id='ads'>
            <Spin>    
              <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Full Stack</span>
                        <img src='https://www.volusion.com/assets/images/index/create.png' alt='ecommerce_pic' /> 
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>React</span>
                        <span className='card-detail-badge'>Mongodb</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                 Portfolio Website
                            </h5>
                        </div>
                        <a className='ad-btn' href='https://github.com/Dilaxshan/Portfolio-mern-project.git'>View</a>
                    </div>
                </div>
              </div>  
              <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Mobile App</span>
                        <img src='https://www.softsuave.com/blog/wp-content/uploads/2020/07/Food-Delivery-App-Development-Services-997x1024.png' alt='Foodies_pic' /> 
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>React Native</span>
                        <span className='card-detail-badge'>IOS / ANDROID</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                  Foodies App
                            </h5>
                        </div>
                        <a className='ad-btn' href='https://github.com/Dilaxshan/Portfolio-mern-project.git'>View</a>
                    </div>
                </div>
              </div>  
              <div className='col-md-4'>
                <div className='card rounded'>
                    <div className='card-image'>
                        <span className='card-notify-badge'>Backend</span>
                        <img src='https://www.interviewbit.com/blog/wp-content/uploads/2022/05/Asset-24.png' alt='ecommerce_pic' /> 
                    </div>
                    <div className='card-image-overly m-auto mt-3'>
                        <span className='card-detail-badge'>Node</span>
                        <span className='card-detail-badge'>Express</span>
                        <span className='card-detail-badge'>NoSQL</span>
                    </div>
                    <div className='card-body text-center'>
                        <div className='ad-title m-auto'>
                            <h5 className='text-uppercase'>
                                Job Portal
                            </h5>
                        </div>
                        <a className='ad-btn' href='https://github.com/Dilaxshan/Portfolio-mern-project.git'>View</a>
                    </div>
                </div>
              </div>  
            </Spin>            
            </div>
        </div>
    </>
  )
}

export default Projects