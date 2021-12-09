import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Product.css'
import Button from '@restart/ui/esm/Button';

const Product = (props) => {
    return (
<div>
    <div data-aos="zoom-in" className="m-2">
    <Col lg={4} xs={12} md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={props.img} />
    <Card.Body>
    <Card.Title>{props.name}</Card.Title>
    <Card.Text>
      {props.description}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>

    </div>
    
</div>

    );
};

export default Product;