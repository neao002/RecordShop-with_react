import React from 'react'
import { Jumbotron, Row, Col } from 'react-bootstrap'
const AlbumTemplateHero = () => {
    return (
        <Jumbotron>
            <Row>
                <Col>
                    <h2>{title}</h2>
                    <p>{artist}</p>
                    <p>{year}</p>
                    <p>{genre}</p>
                </Col>
                <Col>
                    <img src='{url}' alt='' />
                </Col>
            </Row>
        </Jumbotron>
    )
}

export default AlbumTemplateHero
