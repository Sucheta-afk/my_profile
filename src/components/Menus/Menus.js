import React from 'react';
import "./Menus.css";
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { SiSnapcraft } from "react-icons/si";
import { FaUserCheck } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
export const Menus = ({toggle}) => {
  return (
    <>
    {toggle ? (
        <><div className='navbar-profile-pic'>
        <img src="https://hips.hearstapps.com/hmg-prod/images/meghan-markle-bts-suits-photos-6513ed4940c4f.jpg?crop=0.665xw:1.00xh;0.179xw,0&resize=640:*" alt="profile pic"/>
    </div>
    
    <div className='nav-items'>
            <div className='nav-link'><TiHome/>Home</div>
        </div>
        <div className='nav-items'>
            <div className='nav-link'><FaUser/>About</div>
        </div>
        <div className='nav-items'>
            <div className='nav-link'><IoMdSchool/>Education</div>
        </div><div className='nav-items'>
            </div><div className='nav-items'>
            <div className='nav-link'><FaLaptopCode/>Work</div>
        
            <div className='nav-link'><GrProjects/>Projects</div>
        </div><div className='nav-items'>
            <div className='nav-link'><SiSnapcraft/>Extra-Curricular</div>
        </div><div className='nav-items'>
            <div className='nav-link'><FaUserCheck/>Testimonial</div>
        </div><div className='nav-items'>
            <div className='nav-link'><MdContactPhone/>Contact</div>
        </div>
        </>
        
    ) : (
        <>
        <div className='nav-items'>
                <div className='nav-link'><TiHome title='Home'/></div>
            </div>
            <div className='nav-items'>
                <div className='nav-link'><FaUser title='About'/></div>
            </div>
            <div className='nav-items'>
                <div className='nav-link'><IoMdSchool title='Education'/></div>
            </div><div className='nav-items'>
                </div><div className='nav-items'>
                <div className='nav-link'><FaLaptopCode title='Work'/></div>
            
                <div className='nav-link'><GrProjects title='Projects'/></div>
            </div><div className='nav-items'>
                <div className='nav-link'><SiSnapcraft title='Extra-Curricular'/></div>
            </div><div className='nav-items'>
                <div className='nav-link'><FaUserCheck title='Testimonial'/></div>
            </div><div className='nav-items'>
                <div className='nav-link'><MdContactPhone title='Contact'/></div>
            </div></>
    )}
    </>
    
    
  
  );
};

