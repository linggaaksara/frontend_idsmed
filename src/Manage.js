 import React, { Component } from 'react';
import {Jumbotron} from 'reactstrap';
import Header from './Header.jsx';
import Eman from './Eman';
import { Table, Col, Alert, Badge, Label, FormGroup, Input, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import activityIcon from './assets/image/icons8-edit-25.png';
import activityIcon1 from './assets/image/icons8-delete-bin-25.png';
import activityIcon5 from './assets/image/icons8-add-30.png';
import axios from 'axios';

class Manage extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const header = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    }
    axios.get('http://192.168.100.17:3333/api/user', header)
      .then(response => {
        const { data } = response;
        this.setState({users: data})

      })
      .catch( error => {
        alert(error);
      })
  }
  render() {
    let rows = null;
    if(this.state.users.length) {
      rows = this.state.users.map( (user, index) => {
          let role
            switch(user.access){
              case 0:
                role = 'Operator';
                break;
              case 1: 
                role = 'SuperVisor';
                break;
              case 2:
                role = 'Admin';
                break
              default:
                role=''
            }
            return (
              <tr>
                <th scope="row">{index+1}</th>
                <td>{user.name}</td>
                <td>{role}</td>
                <td width="21%">
                  <a href="/Eman/"><img src={activityIcon} /></a>
                  <i> </i>
                  <i> </i>
                  <i> </i>
                  <a href="#"><img src={activityIcon1} /></a>
                </td>
              </tr>
            )
          })
    }
    return (
      <div>
      <Header/> 
      <Alert color="dark">
      <h1>Manager Users</h1>
      <Badge color=""> </Badge>
       <Col sm="2" md={{ size: 12, offset: 9 }}>
      <FormGroup row>
          <a href="/Inman/"><img src={activityIcon5} /></a>
        </FormGroup>
      </Col>
        <Col sm="2" md={{ size: 8, offset: 2 }}>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>User Access</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows}
         </tbody>
      </Table>
      </Col>
  </Alert>
      </div>
    );
  }
}

export default Manage; 