import React from 'react'

import Carousel from 'react-bootstrap/Carousel'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Card from 'react-bootstrap/Card';
export default function Home() {
    let product = [
        {
            image: 'https://static.highsnobiety.com/thumbor/pp_XetxMO2WSp1pC0EuetqtKPTQ=/1600x1067/static.highsnobiety.com/wp-content/uploads/2019/02/19153143/best-adidas-sneakers-2019-main.jpg', title: 'Adidas'
        },
        {
            image: 'https://n1.sdlcdn.com/imgs/g/2/d/Puma-Men-Essential-Runner-IDP-SDL809099655-2-da162.jpeg', title: 'Puma'
        }, {
            image: 'https://wallpapercave.com/wp/k7j1hfs.jpg', title: 'Nike'
        }, {
            image: 'https://th.bing.com/th/id/OIP.nMTciaU2a6F2lhBQbxf2jQHaHa?pid=ImgDet&rs=1', title: 'Fila'
        }, {
            image: 'https://www.lesitedelasneaker.com/wp-content/images/2021/06/new-balance-550-white-green-bb550wt1-date-sortie5-1100x772.jpg', title: 'Newbalance'
        }, {
            image: 'https://th.bing.com/th/id/OIP.jx3WXFI8xdjEye5yN26RwQHaHa?pid=ImgDet&rs=1', title: 'Skechers'

        }
    ]
    return (
        <div>
            <div  style={{ width: '100%', height: '400px' }}>

            <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src=""
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px',width:'100%'}}
          className="d-block w-100"
          src="https://terracefashion.com/wp-content/uploads/2021/02/adidas-as-230-2021-cover-768x298.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:'400px',width:'100%'}}
          className="d-block w-100"
          src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_900,h_900/global/377059/01/sv01/fnd/IND/fmt/png/Softride-Pro-Coast-Unisex-Running-Shoes"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>



            </div>
            <div className='mt-4'>
                <h1 style={{ marginLeft: '50px' }}>Favorite Brands </h1>
                <Container >
                    <Row>

                        {
                            product.map(function (data) {
                                return (
                                    <Col>

                                        <Card style={{ width: '18rem', height: '300px' }}>
                                            <Card.Img variant="top" src={data.image} />
                                            <Card.Body>
                                                <Card.Title>{data.title}</Card.Title>

                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )

                            })}


                    </Row>
                </Container>
            </div>
        </div>




    )
}
