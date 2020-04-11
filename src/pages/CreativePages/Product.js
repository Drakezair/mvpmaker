import React, { useEffect, useState } from 'react';

// BOOTSTRAP
import { Row, Col, ListGroup } from 'react-bootstrap';

// REPOSITORY
import { getProductByUrl } from '../../repositories/CreativeRepository';
import { ProjectRequestForm } from '../../forms/CreativeForms';

const Product = ({location, history}) => {

    const [product, changeProduct] = useState({features: []})

    useEffect(()=>{
        const initData = async () =>{
            if(location.state === undefined){
                const prod = await getProductByUrl(window.location.pathname.split('product')[1])
                console.log(prod)
                changeProduct(prod.data)
            }
            else{
                changeProduct(location.state)
            }
        } 

        initData()

    }, [location])


    return(
        <Row>
            <Col className='col-12 col-lg-6' >
                <Row className='my-4 d-lg-flex align-items-center' >
                    <Col>
                        <h1 className='color-primary' >{product.title}</h1>
                    </Col>
                    <Col className='d-flex justify-content-end' >
                        <img height={80} src={product.image} alt='icon' />
                    </Col>
                </Row>
                <p>{product.desc}</p>
                <p className='text-bolder' >price: ${product.price}</p>
                <Row>
                    <Col>
                        <h4 className='my-4' >features</h4>
                        <ListGroup>
                            {
                                product.features.map((item,i)=>{
                                    return <ListGroup.Item key={i} >{item}</ListGroup.Item>
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Col>
            <Col className='col-12 col-lg-6' >
                <ProjectRequestForm price={product.price} history={history} />
            </Col>
        </Row>
    )
}

export {Product}