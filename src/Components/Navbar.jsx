import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';

export default function Navbar() {
    return (
        <div>

            <div  style={{
                height: '56px', Width: '100%', background: 'rgb(2,0,36)',
                background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(177,214,231,1) 0%, rgba(80,159,187,1) 0%, rgba(145,190,208,1) 0%, rgba(143,222,183,1) 0%, rgba(171,220,228,1) 50%, rgba(215,208,239,1) 100%)'
            }}>
                


                <Nav activeKey="/home"
                    
                > 
                   
                              <Nav.Item>
                        <Nav.Link href="/" disabled style={{ fontSize: '20px' }}><b>Home</b></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href='./login'  style={{ fontSize: '20px',color:'black' }} ><b>Login</b></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link  disabled style={{ fontSize: '20px' }}><b>Cart</b></Nav.Link>
                    </Nav.Item>







                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search for products "
                            className="me-2"
                            aria-label="Search"
                        />

                    </Form>
                    <img style={{height:'56px',width:'70px',marginLeft:'37%'}} src='https://th.bing.com/th/id/OIP.78NcXHMvd1MBJgnEaJ9wNgHaH0?w=191&h=201&c=7&r=0&o=5&pid=1.7' alt=''></img>
                <h1 style={{marginLeft:'3%'}}>SHOECART</h1>
                         


                </Nav>
                </div>
                </div>

                )
}
