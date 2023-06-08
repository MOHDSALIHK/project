import React from 'react'

import Carousel from 'react-bootstrap/Carousel'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Casual } from '../data/Casual'

import Card from 'react-bootstrap/Card';
export default function Home() {

  return (
    <div >
      <div style={{ width: '100%', height: '400px' }}>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src=""
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: '400px', width: '100%' }}
              className="d-block w-100"
              src="https://terracefashion.com/wp-content/uploads/2021/02/adidas-as-230-2021-cover-768x298.jpg"
              alt="Second slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img style={{ height: '400px', width: '100%' }}
              className="d-block w-100"
              src="https://media.discordapp.net/attachments/1115968808025325611/1116068194029940786/puma_shoe.png"
              alt="Third slide"
            />

           
          </Carousel.Item>
        </Carousel>



      </div>
      <div style={{width:'100%',background: 'rgb(2,0,36)',
background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,23,172,1) 0%, rgba(145,190,208,1) 0%, rgba(82,84,198,1) 0%, rgba(216,25,216,1) 0%, rgba(182,193,214,1) 0%, rgba(194,214,179,1) 55%, rgba(224,229,155,1) 100%)',padding:'20px'}}>
      <div style={{background: 'rgb(92,83,244)',
background:' linear-gradient(90deg, rgba(92,83,244,1) 0%, rgba(156,219,219,0.9893207282913166) 50%, rgba(124,235,125,1) 100%)',marginTop:'6px',padding:'2px'}}>
      <div style={{marginLeft:'22px',padding:'20px'}}>
      {/* <div style={{ width: '100%', height: '600px', background: 'grey' }}> */}
          {/* <div style={{ width: '100%', height: '500px', background: 'red',marginTop:'30px' }} > */}
          {/* <div className='' style={{ width: '100%', height: '500px',background:'black',marginTop:'50px'  }}> */}
      <Row>

      


            {

              Casual.map(function (data) // used for creating loop.each object content will reach parameter data.
              {
                return (
                 
                  <Col>
                    
                      <Card style={{ width: '16rem', border: '3px solid', height: '25rem', }}>
                        <Card.Img style={{height:'333px'}} variant="top"  src={data.image} className='card-image '  />
                        <Card.Body>
                          <Card.Title className='text-center' className='' >{data.name}</Card.Title>

                        </Card.Body>
                      </Card>
                    
                  </Col>
                  

                )
              }
              )
            }
          
      </Row>
      </div>
      </div>
        </div>


    </div>







  )
}


//style={{ marginLeft: '15px', background: '', width: '100%', height: '450px' 