import React, { Component } from 'react';
import Header from './Header.jsx';
import { Card,Col, Button, Form, Badge, FormGroup, Label, Input, FormText, Container, Row, InputGroupText } from 'reactstrap';
import { Alert } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

class Inputt extends Component {
  state = {
    code: null,
    name: null,
    gender: null,
    age: null,
    weight: null,
    position: null,
    projection: null,
    fdd: null,
    skin: null,
    kv: null,
    s: null,
    mas: null,
    ma: null,
  }

  componentDidMount() {
    console.log(this.props);
  }

  onChangeUsername = (event, element) => {
    this.setState({[element]: event.target.value})
  }

  postcekups = (data, id) => {
    const cekups = {
      patient_id: id,
      weight: data.weight,
      position: data.position,
      projection: data.projection,
      fdd: data.fdd,
      kv: data.kv,
      ma: data.ma,
      s: data.s,
      mas: data.mas,
      skin: data.skin,
      dap: data.dap,
      code: data.code
    }
    const header = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    axios.post(`http://192.168.100.17:3333/api/cekup/add`, cekups, header)
      .then(response => {
        const { data } = response;
      })
      .catch( error => {
        alert(error);
      })
  }

  submitForm = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const patient = {
      code: this.state.code,
      name: this.state.name,
      gender: this.state.gender,
      age: this.state.age
    }
    const header = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    axios.post('http://192.168.100.112:3333/api/patient/add', patient, header)
      .then(response => {
        const { data } = response.data;
        this.postcekups(this.state, data.id);

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
        <p></p>
        <Col sm="10" md={{ size: 12 }}>
        <div style={{textAlign: 'center'}}>
        <h1>Patients Data Input</h1>
        <Badge color=""> </Badge>
        <Badge color=""> </Badge>
        </div>
      </Col>
        <Col sm="10" md={{ size: 12 }}>
        <Col md={{ offset: 4 }}>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>Code</h6></Label>
        <Col sm={4}>
             <FormGroup>
          <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'code')} name="code"/>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleEmail" sm={2} className="#000000"><h6>Name</h6></Label>
          <Col sm={4}>
             <FormGroup>
          <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'name')} name="name"/>
        </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Gender</h6></Label>
          <Col sm={4}>
            <Input type="select" onChange={(event)=>this.onChangeUsername(event, 'gender')} name="gender">
            <option>Choose Option</option>
            <option>Male</option>
            <option>Female</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Age</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'age')} name="age"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Weight</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'weight')} name="weight"/>
          </Col>
        </FormGroup>  
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Position</h6></Label>
          <Col sm={4}>
            <Input type="select" onChange={(event)=>this.onChangeUsername(event, 'position')} name="position">
            <option>Choose Option</option>
            <option>standing</option>
            <option>supine</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Projection</h6></Label>
          <Col sm={4}>
            <Input type="select" onChange={(event)=>this.onChangeUsername(event, 'projection')} name="projection">
            <option>Choose Option</option>
            <option>oblique</option>
            <option>ap</option>
            <option>pa</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>FDD</h6></Label>
          <Col sm={4}>
            <Input type="select" onChange={(event)=>this.onChangeUsername(event, 'fdd')} name="fdd">
            <option>Choose Option</option>
            <option>oblique</option>
            <option>ap</option>
            <option>pa</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>kV</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'kv')} name="kv"/>
          </Col>
        </FormGroup>
         <FormGroup row>
          <Label sm={2} className="#000000"><h6>mA</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'ma')} name="ma"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>S</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 's')} name="s"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>mAS</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'mas')} name="mas"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>Skin Dose</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'skin')} name="skin"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label sm={2} className="#000000"><h6>DAP</h6></Label>
          <Col sm={4}>
            <Input type="text" onChange={(event)=>this.onChangeUsername(event, 'dap')} name="dap"/>
          </Col>
        </FormGroup>
        
       
        <FormGroup check row>
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="danger">Ready</Button>
            <Badge color=""> </Badge>
            <Badge color=""> </Badge>
            <Button color="info">Collect</Button>
            <Badge color=""> </Badge>
            <Badge color=""> </Badge>
            <Button color="success" type="submit" >Save</Button>
          </Col>
        </FormGroup>
        </Col>
      </Col>
      </Alert>
      </Form>
      </div>
    );
  }
}

export default Inputt; 