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

const LoginPage = ({history}) => {

    return (
        <AuthContainer >
            <Row>
                <Col>
                    <LoginForm history={history} />
                </Col>
            </Row>
            <Row className='my-4' >
                <Col className='text-center' >
                    <Link text='Sign-up' to='/auth/register' />
                </Col>
                <Col className='text-center' >
                    <Link text='Forgot password?' to='/auth/forgot' />
                </Col>
            </Row>
        </AuthContainer>
    )
}

export { LoginPage }