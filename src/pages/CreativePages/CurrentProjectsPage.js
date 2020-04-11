import React, {useEffect, useState} from 'react';

// BOOTSTRAP
import { Col, Row, Table} from 'react-bootstrap';

// COMPONENT
import { Button } from '../../Components';
// REPOSITORY
import { projectCurrents } from '../../repositories/GeneralRepository';


const CurrentProjectsPage = ({history}) => {

    const [projects, changeProjects] = useState([])

    useEffect(()=>{
        const projectsListener = async () => await projectCurrents(changeProjects, 'creative_id')
        projectsListener()
    }, [])

    return(
        <Row >
            <Col>
                <Row>
                    <Col>
                        <h3 className='color-primary text-center my-5' >Project history</h3>
                    </Col>
                </Row>
                <Row>
                    <Col style={{height:500, background: '#232020', overflowY: 'scroll', padding: 0}} >
                        <Table striped bordered hover variant="dark" >
                        <thead>
                                <tr>
                                    <th>Proyecto</th>
                                    <th>description</th>
                                    <th>Precio</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                        projects.map((project, i) =>{
                                            return(
                                                <tr key={i}>
                                                    <td><p>{project.title}</p></td>
                                                    <td><p>{project.desc}</p></td>
                                                    <td><p>${project.price}</p></td>
                                                    <td>
                                                        <Button onClick={()=>history.push(`/creative/project/${project.uid}`)} text='See details' />
                                                    </td>
                                                </tr>
                                            )
                                        })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export {
    CurrentProjectsPage
}