import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Product.css'
import Button from '@restart/ui/esm/Button';
import { Link, useNavigate } from "react-router-dom";

const Product = (props) => {
      const {id,img,name,description}=props;
    return (
<div>
    <div data-aos="zoom-in" className="m-2">
    <Col lg={4} xs={12} md={4}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
    <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
      {description}
    </Card.Text>
  <Link to={`/service/${id}`}>
  <Button variant="primary">Browse range</Button>
  </Link>
  </Card.Body>
</Card>
</Col>

    </div>
    
</div>

    );
};

export default Product;