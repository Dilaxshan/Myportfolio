import React,{useState} from 'react'
import { toast } from 'react-toastify';
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import axios from 'axios'
import {AiFillFacebook, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import './Contact.css'
const Contact = () => {
   const[name,setname] = useState("")
   const[email,setEmail] = useState("") 
   const[msg,setMsg] = useState("") 
   
//    handle submit button
    const handleSubmit =async (e) => {
        e.preventDefault();
        try{
            if(!name || !email || !msg){
                toast.error("Please Provide all fields");
            }
            const res = await axios.post("/api/V1/portfolio/sendEmail",{
                name,
                email,
                msg,
            });
            // validation success
            if(res.data.success){
                toast.success(res.data.message);
                setname("");
                setEmail("");
                setMsg("");
            }else{
                toast.error(res.data.message);
            }
        } catch(error){
            console.log(error);
        }
    }
  return (
    <>
    <div className=' contact' id='contact'>
        <div className='card card0 border-0'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xk-6 col-sm-12'>
                    <div className="card1">
                        <div className="row border-line">
                            <LightSpeed>
                                <img className='image' src="https://thumbs.dreamstime.com/b/writing-9812125.jpg" alt="contact_pic" />
                            </LightSpeed>
                        </div>
                    </div>
                </div>            
                <div className="col-lg-6 col-md-6">
                  <Rotate>
                    <div className="card2 d-flex card border-0 px-4 py-5">
                    <div className="row">
                        <div className="row">
                            <h6>Contact With 
                                <AiFillLinkedin color='blue' size={30} className='ms-2'/>
                                <AiFillGithub color='black' size={30} className='ms-2'/>
                                <AiFillFacebook color='blue' size={30} className='ms-2'/>
                            </h6>
                        </div>
                    <div className="row px-3 mb-4">
                        <div className="line"/>
                        <small className="or text-center">OR</small>
                        <div className="line"/>
                    </div>
                    <div className="row px-3">
                        <input type="text" name='name' placeholder='Enter Your Name' className='mb-3' value={name} onChange={(e) => setname(e.target.value)}/>
                    </div>
                    <div className="row px-3">
                        <input type="email" name='email' placeholder='Enter Your Email' className='mb-3' value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div className="row px-3">
                        <textarea type="text" name='msg' placeholder='Enter Your Message' className='mb-3' value={msg} onChange={(e) => setMsg(e.target.value)}/>
                    </div>
                    <div className="row px-3">
                        <button className='button' onClick={handleSubmit}>Send Message</button>
                    </div>
                    </div>    
                </div>
                </Rotate>
                </div>
            </div>
        </div>
    </div> 
    </>
  )
}

export default Contact;