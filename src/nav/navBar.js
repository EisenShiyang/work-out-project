import React from 'react';
import classes from '../style/navBar.module.css';
import logo from '../img/logo.png';
import { Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = (props) => {
    
    return (
        <Navbar className={classes.Navbar} expand="lg">
            <Navbar.Brand href="#home"><img src={logo} alt="logo" width="125" /></Navbar.Brand>
            {/*視窗縮小時顯示漢堡*/}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link className={classes.Home}>首頁</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/record">
                        <Nav.Link className={classes.Record}>紀錄</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/visual">
                        <Nav.Link className={classes.Visualization}>查看變化</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link className={classes.About}>關於計畫</Nav.Link>
                    </LinkContainer>             
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;

/*
    <NavDropdown className={classes.NavDropdown} title="開始記錄" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
*/