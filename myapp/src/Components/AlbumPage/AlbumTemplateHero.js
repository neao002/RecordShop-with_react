import React from "react";
import { Row, Col } from "react-bootstrap";
const AlbumTemplateHero = (props) => {
  const {
    artist,
    title,
    releaseYear,
    genre,
    price,
    image,
    trackList,
  } = props.albumData;
  return (
    <Row className="m-3 pb-4" style={{ lineHeight: "1" }}>
      <Col className="d-flex flex-align-items-center justify-content-center">
        <div className="mt-3">
          <h1>{title}</h1>
          <p>
            {artist}, {releaseYear} {genre}
          </p>

          <p>Price: {price} €</p>
          {props.albumData.trackList.map((track, index) => {
            return (
              <>
                <tr key={index}>
                  <td>{track.no}</td>
                  <td>{track.title}</td>
                  <td>{track.length}</td>
                </tr>
              </>
            );
          })}
        </div>
      </Col>
      <Col>
        <img style={{ height: "60vh", width: "90%" }} src={image} alt="album" />
      </Col>
    </Row>
  );
};

export default AlbumTemplateHero;
