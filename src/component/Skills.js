import React from 'react';
// import Card from 'react-bootstrap/Card';
import { SiHtml5, SiPhp, SiReact, SiBootstrap, SiJavascript, SiCss3 } from 'react-icons/si';
import Projects from './Projects';
import ImageCard from './ImageCard';
import Dataskills from '../utils/Dataskills';

const Skills = () => {

  const sk = (val) => {
    return (
      <ImageCard skillIcon={val.skillIcon} skillTitle={val.skillTitle}/>
    )
  }

  return (
    <>
      <section className='myskill py-5 mt-5 bg-dark ' id='skills'>
        <div className="container">
        <div className="row">
           <div className="text-center my-5">
            <h2 className='text-white mt-3'>My <span className='text-info'>Skills</span></h2>
            <hr className='w-25 m-auto bg-info'/>
          </div> 
          {Dataskills.map(sk)}
          </div>
          </div>
      </section>
      <Projects/>
    </>
  )
}

export default Skills;
