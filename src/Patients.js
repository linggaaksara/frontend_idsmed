import React, { Component } from 'react';
import Header from './Header.jsx';
import { Table, Col, Alert, Badge, Label, FormGroup, Input, Pagination, PaginationItem, PaginationLink} from 'reactstrap';
import activityIcon from './assets/image/icons8-edit-25.png';
import activityIcon1 from './assets/image/icons8-delete-bin-25.png';
import activityIcon2 from './assets/image/icons8-menu-25.png';
import activityIcon3 from './assets/image/icons8-calendar-25.png';
import activityIcon4 from './assets/image/icons8-download-25.png';
import activityIcon5 from './assets/image/icons8-add-30.png';
import axios from 'axios';

class Patients extends Component {
  state = {
    patient: []
  }
  componentDidMount(){
    const header = {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
  }
  axios.get('http://192.168.100.112:3333/api/patient', header)
      .then(response => {
        const { data } = response;
        this.setState({patient: data})

      })
      .catch( error => {
        alert(error);
      })
  }

  render() {
    let list = null;
    if(this.state.patient.length){
      console.log(this.state.patient);
      list = this.state.patient.map( (patient, index) => {
        return (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{patient.code}</td>
            <td>{patient.name}</td>
            <td>{patient.gender}</td>
            <td>{patient.age}</td>
            <td>{patient.checkup[0].weight}</td>
            <td>{patient.checkup[0].position}</td>
            <td>{patient.checkup[0].projection}</td>
            <td>{patient.checkup[0].fdd}</td>
            <td>{patient.checkup[0].kv}</td>
            <td>{patient.checkup[0].ma}</td>
            <td>{patient.checkup[0].s}</td>
            <td>{patient.checkup[0].mas}</td>
            <td>{patient.checkup[0].skin}</td>
            <td>{patient.checkup[0].dap}</td>
            <td width="9%">
              <a href="#"><img src={activityIcon} /></a>
              <i> </i>
              <i> </i>
              <i> </i>
              <a href="#"><img src={activityIcon1} /></a>
              <i> </i>
              <i> </i>
              <i> </i>
              <a href="#"><img src={activityIcon2} /></a>
            </td>
          </tr>
        )
      }
        
      )
    }
    return (
      <div>
      <Header/> 
      <Alert color="dark">
      <h1>Patients List</h1>
      <Badge color=""> </Badge>
       <Col sm="2" md={{ size: 12, offset: 1 }}>
      <FormGroup row>
          <Label for="exampleSelect" sm={0}>Show</Label>
          <Col sm={1}>
            <Input type="select" name="select" bsSize="sm">
              <option>10</option>
              <option>9</option>
              <option>8</option>
              <option>7</option>
              <option>6</option>
              <option>5</option>
            </Input>
          </Col>
          <label>Etries</label>
          <Badge color=""> </Badge>
          <Label for="exampleSelect" sm={0}><img src={activityIcon3} /></Label>
          <Col sm={1.2}>
            <Input type="date" name="date" bsSize="sm"/>
          </Col>
          <Badge color=""> </Badge>
          <p>-</p>
          <Badge color=""> </Badge>
          <Col sm={1.2}>
            <Input type="date" name="date" bsSize="sm"/>
          </Col>
          <Badge color=""> </Badge>
          <p>OR</p>
          <Badge color=""> </Badge>
           <Col sm={1.3}>
            <Input type="select" name="select" bsSize="sm">
              <option>Month</option>
              <option>Januari</option>
              <option>Februari</option>
              <option>Maret</option>
              <option>April</option>
              <option>Mei</option>
              <option>Juni</option>
            </Input>
          </Col>
          <Badge color=""> </Badge>
          <p>OR</p>
          <Badge color=""> </Badge>
          <Col sm={1.2}>
            <Input type="text" name="date" placeholder="Search Name" bsSize="sm"/>
          </Col>
          <Badge color=""> </Badge>
          <Badge color=""> </Badge>
          <Badge color=""> </Badge>
          <a href="#"><img src={activityIcon4} /></a>
          <Badge color=""> </Badge>
          <a href="/Inputt/"><img src={activityIcon5} /></a>
          <Badge color=""> </Badge>
        </FormGroup>
      </Col>
        <Col sm="2" md={{ size: 12, offset: -3 }}>
      <Table striped>
        <thead>
          <tr>
            <th>No</th>
            <th>Code</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Weight</th>
            <th>Position</th>
            <th>Projection</th>
            <th>FDD</th>
            <th>kV</th>
            <th>mA</th>
            <th>s</th>
            <th>mAS</th>
            <th>Skin</th>
            <th>DAP</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {list}
         </tbody>
      </Table>
    </Col>

    <Col md={{ offset: 9 }} >
    <Pagination aria-label="Page navigation example">
      <PaginationItem disabled>
          <PaginationLink first href="#" />
        </PaginationItem>
        <PaginationItem disabled>
          <PaginationLink previous href="#" />
        </PaginationItem>
        <PaginationItem active>
          <PaginationLink href="#">
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            3
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            4
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">
            5
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink next href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink last href="#" />
        </PaginationItem>
      </Pagination>
      </Col>
  </Alert>
      </div>
    );
  }
}

export default Patients; 