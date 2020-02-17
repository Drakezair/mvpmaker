import React from 'react';

// BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

const CardHorizontal = ({icon, title, value}) => {

    return(
        <Row>
            <Col className='d-none d-lg-block col-2' >
                <img src={icon} alt="icon" />
            </Col>
            <Col>
                <p>{title}</p>
                <p>{value}</p>
            </Col>
        </Row>
    )
}

export { CardHorizontal };