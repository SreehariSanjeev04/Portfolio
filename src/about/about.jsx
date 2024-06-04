import React from 'react';
import self from '../assets/self.jpg'
function About() {
    return (
        <div className="about">
            <img src={self} className='self-image'></img>
            <div className="about-text">
                <h1>About Me</h1>
                <p>I am Sreehari Sanjeev, an aspiring engineer, currently pursuing B-Tech Computer Science and Engineering in <b> National Institute Of Technology, Calicut</b>, with a keen interest in coding, specially in the field of development. I am deeply passionate about crafting innovative solution to real-world problems. I am looking forward to explore the latest trends in software development and highlight my skills in this domain. I commited to sharpening my knowledge and contributing meaningfully to the tech community.<b /> Let's connect and embark on this exciting journey together</p>
            </div>
        </div>
        
    );
}
export default About;