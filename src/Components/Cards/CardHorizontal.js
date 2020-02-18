import React from 'react';

// BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

const CardHorizontal = ({icon, title, value}) => {

    return(
        <Row className='d-flex flex-column flex-lg-row bg-mvp-primary m-2 p-2 rounded-lg' >
            <Col className=' align-items-center justify-content-center rounded-lg d-lg-flex  col-3 p-3' >
                <img height={40} src={icon} alt="icon" />
            </Col>
            <Col>
                <h4 className='text-light' >{title}:</h4>
                <h2 className='text-light' >{value}</h2>
            </Col>
        </Row>
    )
}

export { CardHorizontal };