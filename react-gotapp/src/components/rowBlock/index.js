import React from 'react';
import {Col, Row} from "reactstrap";

const RowBlock = ({left, right}) => (
    <Row className='mb-4'>
        <Col md='6'>
            {left}
        </Col>
        <Col md='6'>
            {right}
        </Col>
    </Row>
);

export default RowBlock;