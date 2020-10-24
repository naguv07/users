import React from 'react';
import { Navbar, Nav, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavBar ({sortByFirstName,sortByLastName}){

    return(
        <Navbar collapseOnSelect expand="lg" variant="dark" >
            <Container>
                <Navbar.Brand as={NavLink} exact to={process.env.PUBLIC_URL+"/"}>
                    Users
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    {sortByFirstName &&
                        <Nav>
                            <DropdownButton
                            alignRight
                            title="Sort-by"
                            id="dropdown-menu-align-right"
                            color="danger"
                            variant="outline-light"
                            >
                                <Dropdown.Item onClick={sortByFirstName} >
                                    First Name
                                </Dropdown.Item>
                                <Dropdown.Item onClick={sortByLastName} >
                                    Last Name
                                </Dropdown.Item>
                            </DropdownButton>
                        </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}