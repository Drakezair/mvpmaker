import React, { useState, useEffect } from 'react';

// BOOTSTRAP
import { Row, Col } from 'react-bootstrap';

// COMPONENTS
import { CardProduct } from '../../Components';

// REPOSITORY
import { getProducts } from '../../repositories/CreativeRepository';

const Home = ({history}) =>{
    
    
    const [products, changeProducts] = useState([])


    useEffect(() =>{
        const fetchData =  async () => {
            let arr = await getProducts()
            if(arr.succes){
                changeProducts(arr.data)
            }
        }

        fetchData()
    }, [])

    return(
        <Row className='my-5' >
            <Col>
                <Row>
                    <Col className='col-12' >
                        <h1 className='text-center' >Elije tu MVP</h1>
                    </Col>
                </Row>
                <Row className='' >
                    {
                        products.map((products, i) => {
                            return <Col  key={i} className='col-12 col-lg-4' ><CardProduct history={history}  {...products} /></Col>
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}

export {Home}