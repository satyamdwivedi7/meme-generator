import React from 'react';
import { CiGlobe } from "react-icons/ci";
import { LuInstagram } from "react-icons/lu";
import { AiFillLinkedin } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
    return (
      <>
        <section className="section">
          <div className="left-box">
            <div className="title">
              <h1>Meme Generator</h1>
            </div>
            <p className="description">"Unleash your creativity, one meme at a time!"</p>
            <div className="img-div">
              <a href="https://www.instagram.com/satyam_7579/" target="_blank" rel="noopener noreferrer"> <LuInstagram/> </a>
              <a href="https://www.linkedin.com/in/satyam-dwivedi-66434719a/" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin/> </a>
              <a href="https://twitter.com/satyam_7579" target="_blank" rel="noopener noreferrer"> <FaTwitter/> </a>
              <a href="https://github.com/satyamdwivedi7/meme-generator.git" target="_blank" rel="noopener noreferrer"> <AiFillGithub/> </a>
              <a href="https://meme-generator.satyamdwivedi.com.np/" target="_blank" rel="noopener noreferrer"> <CiGlobe/> </a>
            </div>
          </div>
        </section>
        <footer className="footer">
          <p className="description foot-txt">
            © 2024 - Present Meme Generator. All rights reserved.
          </p>
        </footer>
      </>
    );
};

export default Footer;