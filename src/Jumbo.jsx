import React from 'react';
import {Jumbotron, Button, FormGroup, Col} from 'reactstrap';
import Satu from './component/Satu';

  class Jumbo extends React.Component{
      render() {
        return (
          <div>
            <Jumbotron>
         <h1 className="display-3" body className="text-center">Welcome To My React Application</h1>
         <p className="lead" body className="text-center">Make your job so simple</p>
         <hr className="my-2" />
         <p className="lead">
           <FormGroup check row>
           <Col sm={{ size: 10, offset: 10 }}>
             <Button color="success" href="/Device/" className="text-white">Begin</Button>
             <link to="/Logout">Logout</link>
           </Col>
         </FormGroup>
         </p>
       </Jumbotron>
          </div>
        );
      }
    
  }
  export default Jumbo;