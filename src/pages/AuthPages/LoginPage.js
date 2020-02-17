import React from 'react';

// BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CONTAINER
import { AuthContainer } from '../../Containers';

// FORMS
import { LoginForm } from '../../forms/AuthForms';

// COMPONENTS
import { Link } from '../../Components';

const LoginPage = () => {

    return (
        <AuthContainer >
            <Row>
                <Col>
                    <LoginForm />
                </Col>
            </Row>
            <Row className='my-4' >
                <Col className='text-center' >
                    <Link text='Sign-up' to='register' />
                </Col>
                <Col className='text-center' >
                    <Link text='Forgot password?' to='forgot' />
                </Col>
            </Row>
        </AuthContainer>
    )
}

export { LoginPage }