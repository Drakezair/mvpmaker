import React from 'react'

// BOOTSTRAP
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// ICONS
import LogoIcon from '../assets/icons/conference.png'


const AuthContainer = ({children}) => {

    return (
        <div className='AuthContainer-bg' >
        <Container  >
            <Row className='vh-100 d-lg-flex align-items-center justify-content-center ' >
                <Col className='bg-white  shadow-lg col-12 col-lg-5 p-3 rounded-lg' >
                    <Row >
                        <Col className="d-flex justify-content-center my-3" >
                            <img src={LogoIcon} height={100} alt='Logo' />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            {children}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export {AuthContainer}