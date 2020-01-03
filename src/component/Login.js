import React, { Component } from 'react';
import {Jumbotron, Card,Col, Button, Form, FormGroup, Table, Badge, Label, Input, FormText, Container, Row } from 'reactstrap';
import axios from 'axios';

class Login extends Component {
	state = {
		username: null,
		password: null,
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

	 	axios.post('http://192.168.100.17:3333/api/user/login', this.state)
	 		.then(response => {
	 			const { data } = response;
	 			localStorage.setItem('token', data.token);
        history.push('/Satu');
	 		})
	 		.catch( error => {
	 			alert(error);
	 		})
	}
  render() {
    return (
      <div>
       <div color="light">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Form onSubmit={this.submitForm}>
      	<Table className="boxCenter">  
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <FormGroup row>
                  <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
                <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
                <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
                   <Label sm={3} className="text-balck"><h6>Username</h6></Label>
          <Col sm={5}>
            <Input type="text" name="email" onChange={(event)=>this.onChangeUsername(event, 'email')} id="" placeholder="username"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
                <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
                <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
          <Label sm={3} className="text-black"><h6>Password</h6></Label>
          <Col sm={5}>
            <Input type="password" onChange={(event)=>this.onChangeUsername(event, 'password')} name="password" placeholder="password"/>
          </Col>
        </FormGroup>
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 7 }}>
          <Badge color=""> </Badge>
          <Badge color=""> </Badge>
            <Button color="success" type="submit" className="text-white">Login</Button>
          </Col>
          <Badge color=""> </Badge>
            <Badge color=""> </Badge>
            <Badge color=""> </Badge>
        </FormGroup>
       </Table>
      </Form>
       </Col>
      </div>
      </div>
    );
  }
}

export default Login; 