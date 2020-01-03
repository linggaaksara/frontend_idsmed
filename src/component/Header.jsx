import React from 'react';
import activityIcon3 from './assets/image/icons8_raspberry_pi_filled_50px.png';
import activityIcon4 from './assets/image/icons8_user_male_circle_60px_1.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge } from 'reactstrap';
import Satu from './component/Satu';

  class Header extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
        return (
          <div>
            <Navbar color="secondary" light expand="md">
              <NavbarBrand href="/Satu/" className="text-white">Raspberry PI <img src={activityIcon3} /></NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/Device" className="text-white">Device</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Patients/" className="text-white">Patients List</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Manage/" className="text-white">Manage Users</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Login/" className="text-white">Log Out</NavLink>
                  </NavItem>
                </Nav>
                  <img src={activityIcon4} />
              </Collapse>
            </Navbar>
          </div>
        );
      }
    
  }
  export default Header;