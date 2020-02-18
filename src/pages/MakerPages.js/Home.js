import React , {useState} from 'react';

// BOOTSTRAP
import { Row, Col, Table } from 'react-bootstrap';

// COMPONENTS
import { CardHorizontal, Pagination } from '../../Components';

// ICONS
import ChartIcon from '../../assets/icons/bar-chart.png';
import StadistIcon from '../../assets/icons/statistics.png';

const Home = () =>{

    const [projects, chageProjects] = useState([])
    const [page, changePage] = useState(0)

    const handlePage = (page) =>{
        changePage(page)
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
                            title="trabajos realizados"
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
                            <Col className='d-flex justify-content-end' >
                                <Pagination 
                                    totalItem={3}
                                    onChange={(e, page)=>handlePage(page)}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Proyecto</th>
                                    <th>description</th>
                                    <th>Precio</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    projects.map((project, i) =>{
                                        return(
                                            <tr>
                                                <td>{project.name}</td>
                                                <td>{project.desc}</td>
                                                <td>{project.price}</td>
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