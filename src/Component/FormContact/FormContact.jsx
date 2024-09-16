import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'

const FormContact = () => {
  return (
    <div>
         <Form>
      <Row>
        <Col>
          <Form.Control placeholder="First name" />
        </Col>
        <Col>
          <Form.Control placeholder="Last name" />
        </Col>
      </Row>
      <Row>
      <Col>
          <Form.Control placeholder="First name" />
        </Col>
      </Row>
    </Form>
    </div>
  )
}

export default FormContact