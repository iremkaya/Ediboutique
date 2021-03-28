import React, { Component } from 'react'
import { Row, Col } from "reactstrap"
import CategoryList from "../categories/CategoryList"
import ProductList from "../products/ProductList"
import Navi from "../navi/Navi";


export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Navi />
                </Row>
                <br>
                </br>
                <br></br>
                <Row>
                    <Col xs="2">
                        <CategoryList />
                    </Col>
                    <Col xs="10">
                        <ProductList />
                    </Col>
                </Row>
            </div>
        )
    }
}
