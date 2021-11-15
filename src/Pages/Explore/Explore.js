import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';
import Footer from '../Shared/Footer/Footer'
const Explore = () => {
    const [allItems,setAllItems] = useState([])

    useEffect(()=>{
        fetch('https://vast-tor-10730.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setAllItems(data))
    },[])
    return (
        <div>
            <NavBar/>
            <Container className="py-5 mt-5 bg-danger bg-opacity-10">
                {
                    allItems.length ? <Row xs={1} md={4} className="g-4">
                    {
                        allItems.map(item => <Col key={item._id}>
                            <Card className="bg-light bg-opacity-10">
                              <Card.Img style={{height:'150px'}} variant="top" src={item?.img} />
                              <Card.Body>
                                <Card.Title>{item?.name}</Card.Title>
                                <Card.Title>${item?.price}</Card.Title>
                                <Card.Text>{item?.detail}</Card.Text>
                                <Link to={`/purchase/${item._id}`}><Button>Purchase</Button></Link>
                              </Card.Body>
                            </Card>
                          </Col>)
                    }
                    </Row> : <h2>Loading...</h2>
                }
            </Container>
            <Footer/>
        </div>
    );
};

export default Explore;