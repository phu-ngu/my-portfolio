import React from 'react';
import { ChevronDown } from 'lucide-react';
import profileImage from '../../assets/images/profilepic.jpg'
import './Profile.css';

export default function Profile() {
  return (
    <section id="about" className="profile">
      <div className='profile__intro'>

        <div className='profile__image'>
          <img src={profileImage} alt="Profile Picture" className=''/>

          <p> I'm an engineer passionate about using software development practice to solve life sciences problems. 
          I'm a UC Irvine class of 2019 B.S. in Pharmaceutical Sciences and working towards
          M.S. in Bioinformations Software Development Specialization. My primary interest is data engineering, gene therapy, 
          and my list of interests in the space is constantly growing
          </p>
          
        </div>

      </div>

      <div className='profile__scroll-indicator'>
        <ChevronDown className='profile__scroll-icon'/>
      </div>
    </section>
  );
}