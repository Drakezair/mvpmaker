import React from 'react';

// BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

// COMPONENTS
import { CardHorizontal } from '../../Components';

const Home = () =>{

    return(
        <Row className='my-5' >
            <Col>
                <Row>
                    <Col >
                        <CardHorizontal
                            title='trabajos disponibles'
                        />
                    </Col>
                    <Col >
                        <CardHorizontal />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export {Home}