import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import About from './About';
import { CiFacebook } from 'react-icons/ci';
import { SiInstagram,SiLinkedin,SiGithub  } from 'react-icons/si';

const crozal = () => {
  return (
    <>
      
      <Carousel data-bs-theme="dark" id='crozal'>
      <Carousel.Item>
        <img
          className="d-block w-100 cr"
          src="https://cdn.pixabay.com/photo/2022/07/20/18/44/reading-7334749_640.png" 
          alt="First slide"
        />
        <Carousel.Caption>
  <div className="caption-content">
    <h3>Hello it's Me</h3>
    <h1>Sandeep Banjara</h1>
    <h3>And I'm a <span className='text-info'>Frontend developer</span></h3>
    <p>I'm a Computer Science student with an immense interest<br/> 
    and I am passionate about my field in coding and development.</p>
  </div>
</Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 cr"
          src="https://cdn.pixabay.com/photo/2016/10/22/01/54/wood-1759566_640.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className='capfont'>
          <h2>Please checkout my social media account for more about me and you also follow this site for Frontend development</h2>
          <div className='cant'>
          <a href='' target='_blank'><CiFacebook className='i'/></a>
          <a href='' target='_blank'><SiInstagram className='i'/></a>
          <a href='https://www.linkedin.com/in/sandeep-banjara-ab1549274/' target='_blank'><SiLinkedin className='i'/></a>
          <a href='https://github.com/Sandeepbanjara45' target='_blank'><SiGithub className='i'/></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <About/>
    </>
  )
}

export default crozal
