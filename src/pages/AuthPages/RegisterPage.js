import React from 'react';

// BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CONTAINER
import { AuthContainer } from '../../Containers';

// COMPONENTS
import { Button } from '../../Components';


const RegisterPage = ({history}) => {

    const handleRedirect = (to) => {
        history.push(`register/${to}`)
    }

    return (
        <AuthContainer >
            <Row>
                <Col>
                    <h4 className='text-center color-primary ' >¿Que tipo de usuario eres?</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={()=>handleRedirect('maker')} block text='Freelance' />
                </Col>
                <Col>
                    <Button block text='Recluter' onClick={()=>handleRedirect('creative')} />
                </Col>
            </Row>
        </AuthContainer>
    )
}

export { RegisterPage }