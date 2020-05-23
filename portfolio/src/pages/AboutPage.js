import React from 'react';
import * as data from '../Data/data';

import profilepic from '../assets/images/profilepic.png';

import PortfolioHeader from '../components/PortfolioHeader';
import InfoItem from '../components/InfoItem';
import JobInfo from '../components/JobInfo';
import EducationItem from '../components/EducationItem';
import SkillBar from '../components/SkillBar';

function AboutPage(props) {
 return(

  <div className="about-container">
   <section className="column-left">

    <div className="imgBx">
     <img src={profilepic}/>
    </div>

    <PortfolioHeader title="Info">
     <InfoItem label="Email" value={data.info.email}/>
     <InfoItem label="Phone" value={data.info.phone}/>
     <InfoItem label="LinkedIn" value={data.info.linkedIn}/>
     <InfoItem label="Github" value={data.info.github} />
    </PortfolioHeader>

   </section>

   <section className="column-left">

    <PortfolioHeader title="About">
     <p>As a first-generation college graduate, I realize the value of collaboration, education, and discipline. My love for programming taught me that I require a career that challenges me daily, providing an opportunity to expand my knowledge and to problem solve within a team of like-minded individuals.
     </p>
    </PortfolioHeader>
    <PortfolioHeader title="Education">
     {
      data.education.map((ed, i) => <EducationItem key={`ed-${i}`} institution={ed.institution} achievement={ed.achievement} dateAchieved={ed.dateAchieved} />)
     }
    </PortfolioHeader>

    <PortfolioHeader title="Experience">
     {
      data.jobs.map((job, i) => <JobInfo key={`ed-${i}`} company={job.company} role={job.role} dateHired={job.dateHired} endDate={job.endDate} />)
     }
    </PortfolioHeader>

   </section>

   <section className="column-left">
    <PortfolioHeader title="Languages">
     {
      data.languages.map((lang, i) => <SkillBar key={`ed-${i}`} name={lang.language} value={lang.value} />)
     }
    </PortfolioHeader>


    <PortfolioHeader title="Frameworks">
     {
      data.frameworks.map((fw, i) => <SkillBar key={`ed-${i}`} name={fw.framework} value={fw.value} />)
     }
    </PortfolioHeader>
   </section>

  </div>
 )
}

export default AboutPage;