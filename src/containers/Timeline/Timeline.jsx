import './Timeline.css';
import { careerData } from '../../data/careerData';

export default function Timeline() {
  return (
    <section id="experience">
      <div className='resume'>
        <div className='resume-header'>
          <h2>Work Experience</h2>
          <div className='header-underline'></div>
        </div>
        <div className='resume-container'>
          <div className='timeline-wrap'>
            {careerData.map((job, index) => (
              <div key={index} className='timeline-block'>
                <div className='timeline-ico'>
                  <i className='fa fa-briefcase'></i>
                </div>
                <div className='timeline-header'>
                  <h3 className='timeline-header__position'>{job.title}</h3>
                  <h3 className='timeline-header__period'>{job.period}</h3>
                </div>
                <div className='timeline-content'>
                  <h4 className='job-description__co'>{job.company}</h4>
                  <div className='job-description'>{job.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}