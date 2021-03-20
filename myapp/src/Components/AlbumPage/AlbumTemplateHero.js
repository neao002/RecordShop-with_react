import React from "react";
import {  Row, Col } from "react-bootstrap";
const AlbumTemplateHero = (props) => {
  const { artist, title, releaseYear, genre, price, image } = props.albumData;
  return (
  
      <Row className='m-3' style={{lineHeight:'1'}}>
        <Col className='d-flex flex-align-items-center justify-content-center'>
        <div >
          <h1>{title}</h1>
          <p>{artist}, {releaseYear} {genre}</p>
     
          <p>Price: {price}</p>
          <ul>
            <li>TRACK</li>
            <li>TRACK</li>
            <li>TRACK</li>
            <li>TRACK</li>
            <li>TRACK</li>
            <li>TRACK</li>
            <li>TRACK</li>
          </ul>

        </div>
          
        </Col>
        <Col><img
            style={{ height: "60vh", width: "90%", }}
            src={image}
            alt="album"
          /></Col>
      </Row>
   
  );
};

export default AlbumTemplateHero;
