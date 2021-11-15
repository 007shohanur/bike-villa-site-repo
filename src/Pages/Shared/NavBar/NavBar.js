
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import "./NavBar.css";
import DashBord from './../../DashBord/DashBord';
const NavBar = () => {

        const {user,logOut} = useAuth()
    return (
            <>
            <Navbar className="nav" >
                    <Container>
                    <Navbar.Brand style={{fontSize:'2rem'}} className="m-0   text-light fw-bold"  as={Link} to="/home">Bike <span className="text-success">Villa</span></Navbar.Brand>
                    <Nav className="ms-auto text-center ">
                    <Nav.Link className="text-light" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="text-light" as={Link} to="/explore">More Product</Nav.Link>
                    {
                        user?.email && <Nav.Link className="text-light" as={Link} to="/dash">DashBord</Nav.Link>
                    }
                    {
              (user?.email) ? <Link to="/login">
              <button  className="bg-danger text-light rounded " onClick={logOut}>Log out</button>
            </Link> : <Link to="/login">
              <button className="bg-danger text-light rounded" >Login</button>
            </Link>
            }
                    
                    
                    </Nav>
                    </Container>
                    
            </Navbar>
            </>
    );
};

export default NavBar;