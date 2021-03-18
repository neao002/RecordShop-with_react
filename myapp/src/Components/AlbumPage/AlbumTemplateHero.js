import React from "react";
import { Jumbotron, Row, Col } from "react-bootstrap";
const AlbumTemplateHero = (props) => {
  const { artist, title, releaseYear, genre, price } = props.albumData;
  return (
    <Jumbotron>
      <Row>
        <Col></Col>
        <Col>
          <h2>{title}</h2>
          <p>{artist}</p>
          <p>{releaseYear}</p>
          <p>{genre}</p>
          <p>{price}</p>
        </Col>
        <Col>{/* <img src='{url}' alt='' /> */}</Col>
      </Row>
    </Jumbotron>
  );
};

export default AlbumTemplateHero;
