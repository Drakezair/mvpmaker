import React , {useState, useEffect} from 'react';

// BOOTSTRAP
import { Row, Col, Table } from 'react-bootstrap';

// COMPONENTS
import { CardHorizontal, Button } from '../../Components';

// ICONS
import ChartIcon from '../../assets/icons/bar-chart.png';
import StadistIcon from '../../assets/icons/statistics.png';

// REPOSITORY
import { getProjectsToApply, takeProject } from '../../repositories/MakeRepository';

const Home = ({history}) =>{

    const [projects, changeProjects] = useState([])

    useEffect(()=>{
        const projectsListener = async () => await getProjectsToApply(changeProjects)
        projectsListener()
    }, [])

    const applyAction = async  (project_id) =>{

        let resp  = await takeProject(project_id)
        if (resp.succes){
            history.push(`/maker/project/${project_id}`)
        }
    }

    return(
        <Row className='my-5' >
            <Col>
                <Row>
                    <Col className='col-12 col-lg-6' >
                        <CardHorizontal
                            title='trabajos disponibles'
                            icon={ChartIcon}
                            value='0'
                            />
                    </Col>
                    <Col className='col-12 col-lg-6' >
                        <CardHorizontal
                            title='trabajos disponibles'
                            icon={StadistIcon}
                            value='0'
                            />
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col>
                        <Row>
                            <Col >
                                <h3 className='mx-3'>Piscina de trabajos</h3>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row  >
                    <Col style={{height:500, background: '#232020', overflowY: 'scroll', padding: 0}} >
                        <Table striped bordered hover variant="dark">
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
                                                    <Button onClick={()=>applyAction(project.id)} text='Take' />
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

export {Home}