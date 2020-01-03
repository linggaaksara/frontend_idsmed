import React, { Component } from 'react';
import { Card,Col, Button, Form, FormGroup, Label, Input, FormText, Container, Badge, Row } from 'reactstrap';
import { Alert } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header.jsx';
import axios from 'axios';

class Manage extends Component {
  state = {
    name: null,
    email: null,
    password: null,
    access: null,
  }

  componentDidMount() {
    console.log(this.props);
  }

  onChangeUsername = (event, element) => {
    this.setState({[element]: event.target.value})
  }

  submitForm = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const header = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    axios.post('http://192.168.100.17:3333/api/user/register', this.state, header)
      .then(response => {
        const { data } = response;

        history.push('/Manage');
      })
      .catch( error => {
        alert(error);
      })
  }
  render() {
    return (
      <div>
      <Header/>
      <Form onSubmit={this.submitForm}> 
      <Alert color="dark">
        <Col sm="8" md={{ size: 10, offset: 5 }}>
        <h1>Create Users</h1>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
      </Col>
        <Col sm="10" md={{ size: 12, offset: 3 }}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>Name</h6></Label>
          <Col sm={3}>
             <FormGroup>
          <Input type="text" name="name" onChange={(event)=>this.onChangeUsername(event, 'name')} placeholder="Example(*Akbar Firgiawan*)"/>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>Username</h6></Label>
          <Col sm={3}>
             <FormGroup>
          <Input type="text" name="email" onChange={(event)=>this.onChangeUsername(event, 'email')} placeholder="Example(*akbar@mail.com*)"/>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>Password</h6></Label>
          <Col sm={3}>
             <FormGroup>
          <Input type="password" name="password" onChange={(event)=>this.onChangeUsername(event, 'password')} placeholder="Password Min 6 - Max 20"/>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>User Access</h6></Label>
          <Col sm={3}>
             <FormGroup>
          <Input type="select" name="access" onChange={(event)=>this.onChangeUsername(event, 'access')}>
            <option>Choose Access</option>
            <option value="2">Admin</option>
            <option value="1">Supervisior</option>
            <option value="0">Operator</option>
          </Input>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 4 }}>
            <Button color="secondary" type="submit">Create</Button>
          </Col>
        </FormGroup>
      </Col>
      </Alert>
      </Form>
      </div>
    );
  }
}

export default Manage; 