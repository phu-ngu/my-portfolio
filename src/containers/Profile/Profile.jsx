import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImage from '../../assets/images/profilepic.jpg'
import './Profile.css';

export default function Profile() {
  return (
    <section id="about" className="profile">
      <h2 className="profile__label">About me</h2>
      <div className='profile__content'>
        <div>
          <div className="profile__text">
            <p>
              I'm an engineer passionate about using software development practice to solve challenges in the life sciences field. 
              I graudated with a B.S. in Pharmaceutical Sciences from UC Irvine and currently pusrsuing an M.S. in Bioinformatics with a specialization in
              Software Development. My interest in software development has evolved from data science when I decided to create small applications. 
            </p>
            <p>
              Up to this day, I've had the privelege of working at start-up and huge coorporation in Biohub space. 
              My main focus was to build accessible solutions such as scripts, desktop applications, and robotics
            </p>
            <p>
              A few of the tecnologies I've been working on:
            </p>
          </div>
          <div>
            <ul className='skills'>
              <li>Python</li>
              <li>Javascript</li>
              <li>React/CSS/HTML</li>
              <li>Node.js</li>
              <li>Customtkinter</li>
            </ul>
          </div>
        </div>
        <img src={profileImage} alt="ProfilePic" className="profile__image"/>
      </div>

      <div className='profile__scroll-indicator'>
        <ChevronDown className='profile__scroll-icon'/>
      </div>
    </section>
  );
}