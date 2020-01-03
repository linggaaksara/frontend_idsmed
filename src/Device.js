import React, { Component } from 'react';
import Header from './Header.jsx';
import {Alert, Card, Col, Button, Form, FormGroup, Label, Input, FormText, Container, Badge, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Device extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Alert color="dark">
        <Col sm="8" md={{ size: 10, offset: 5 }}>
        <h1>Device Setting</h1>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
      </Col>
        <Col sm="10" md={{ size: 12, offset: 3 }}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>Port</h6></Label>
          <Col sm={3}>
             <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>COM1</option>
            <option>COM2</option>
            <option>COM3</option>
            <option>COM4</option>
            <option>COM5</option>
          </Input>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>Name</h6></Label>
          <Col sm={3}>
             <FormGroup>
          <Input type="select" name="select" id="exampleSelect">
            <option>VacuDAP</option>
            <option>VacuDAP1</option>
            <option>VacuDAP2</option>
            <option>VacuDAP3</option>
            <option>VacuDAP4</option>
          </Input>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Port per second [baud rate]</h6></Label>
          <Col sm={3}>
            <Input type="text" name="" id="" placeholder="19000"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Data Bits</h6></Label>
          <Col sm={3}>
            <Input type="text" name="" placeholder="7"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Parity</h6></Label>
          <Col sm={3}>
            <Input type="text" placeholder="OOD"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Stop bits</h6></Label>
          <Col sm={3}>
            <Input type="text" placeholder="1"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Flow Control</h6></Label>
          <Col sm={3}>
            <Input type="text" placeholder="Yes"/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col md={{ size: 10, offset: 4 }}>
            <Button color="success">OK</Button>
          </Col>
        </FormGroup>
      </Col>
      </Alert>
      </div>
    );
  }
}

export default Device; 