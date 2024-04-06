import React from 'react';
import './home.css';
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/resume.txt';

const Home = () => {
  return (
    <>
      <div className='container-fluid home-container'>
        <div className='container home-content'>
          <h2>
            Hi, I'm a
          </h2>
          <h1>
          <Typewriter
  options={{
    strings: ['Web Developer !', 'AIML Student !', 'Singer !','Dancer !'],
    autoStart: true,
    loop: true,
  }}
/>
          </h1>
          <div className='home-buttons'>
            <button className='btn btn-hire'>Hire Me</button><t></t>
            <a className='btn btn-cv' href={Resume} download='Sucheta.pdf'>My Resume</a>
          </div>
        </div>
      </div>
        
    </>
  );
};

export default Home