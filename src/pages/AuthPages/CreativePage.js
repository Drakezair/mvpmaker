import React from 'react';

// BOOTSTRAP
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// CONTAINER
import { AuthContainer } from '../../Containers';

// FORMS
import { CreativeForm } from '../../forms/AuthForms';


const CreativePage = ({history}) => {

    return (
        <AuthContainer >
            <Row>
                <Col>
                    <h4 className='color-primary text-center' >Freelance</h4>
                </Col>
            </Row>
            <Row>
                <Col>
                    <CreativeForm history={history} />
                </Col>
            </Row>
        </AuthContainer>
    )
}

export { CreativePage }