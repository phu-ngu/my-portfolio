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
              I'm an engineer passionate about using software development practice to solve challenges. 
              I graduated with a B.S. in Pharmaceutical Sciences from UC Irvine and recently received a Certificate in Bioinformatics with some focus in software development and data engineering.
              My interest include full-stack development, as well as ochestrating data pipelines and building custom solutions.
            </p>
            <p>
              Up to this day, I've had the privelege of working at start-up and huge coorporation in the Biohub space. 
              My primary focus these days is to build accessible custom solutions on outdated processes using such as writing scripts, developing
              web or desktop applications, and creating integration for robotic system.
            </p>
            <p>
              A few of the tecnologies I've been working with:
            </p>
          </div>
          <div>
            <ul className='skills'>
              <li>Python</li>
              <li>Javascript</li>
              <li>React/CSS/HTML</li>
              <li>NodeJS</li>
              <li>Cloud Computing</li>
              {/* <li>Airflow3</li> */}
              <li>AI prompting (OpenAI, Gemini, Ollama)</li>
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