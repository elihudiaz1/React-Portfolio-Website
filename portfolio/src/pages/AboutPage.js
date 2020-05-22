import React from 'react';
import Block from '../components/Block';
import Content from '../components/Content';
import Container from 'react-bootstrap/Container';
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
     <p>neiugfihegoi4
      oueougho4igh
      iuge9ouhiuhouhouhiughugh9ugheoiu
      hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
      hjioeeeeeeeeeeeeeeeeeeeeeeeeeeee
      hefpiooooooooooooooooooooooooooooooooo
      eihfoihhhhhhhhhhhhhhhhhhhhhhhhhhdfgh
      giugbs
      iuge9ouhiuhouhouhiughugh9ugheoiuouhoeuwho
      owuehofuewh
      ouhoih40igh
      oih4iho34iht0oi ou4ith230o4h oub4o
      ou4hoti24h oihoih ihoi4h3oi4h
      oi4hofi3h4 oih4oi oi4hoith
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




  
  // <div>
  //  <Block title={props.title} />
  //  <Content>
  //   <p>This is a website all about ME</p>
  //  </Content>
  // </div>
 )
}

export default AboutPage;