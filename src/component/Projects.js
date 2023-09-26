import React from 'react'
import Contact from './Contact';
import Dataproject from '../utils/Dataproject';
import Cardproject from './Cardproject';


const Projects = () => {
  const pr = (val) => {
    return(
      <>
        <Cardproject PrImage={val.PrImage} PrButton={val.PrButton}/>
      </>
    )
  }
  return (
    <>
        <section className='myskill py-5  bg-dark' id='project'>
        <div className="container">
        <div className='row'>
            <div className="text-center my-5">
                <h2 className='text-white'>My <span className='text-info'>Projects</span></h2>
                <hr className='w-25 imgwidth'/>
            </div>
            {Dataproject.map(pr)}
            </div>
            </div> 
    </section> 
    <Contact/>
    </>
  )
}

export default Projects
