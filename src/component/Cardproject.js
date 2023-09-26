import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Cardproject = ({PrImage,PrButton}) => {
  return (
    <>
     <div className='col-sm-12 col-md-4 col-lg-4 col-12 mb-5 d-flex justify-content-center'>
            <Card style={{ width: '18rem' }} className='bb'>
            <Card.Img src= {PrImage} className='wh'/>
                 <Card.Body>
                 <Button variant="" className='btt bg-info' >{PrButton}</Button>
                 </Card.Body>
             </Card>
            </div>
      
    </>
  )
}

export default Cardproject
