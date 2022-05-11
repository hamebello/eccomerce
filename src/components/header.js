import React, {useState} from 'react';
import './layout.css';
import {Button} from 'react-bootstrap'
import brandlogo from './images/shopping.png'
import shoppingcart from './images/cart-shopping-solid.svg'
import { Outlet} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavbarBrand, NavDropdown, NavLink} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Modal } from 'react-responsive-modal';

const Header = () => {
    const [Signin, setSignin] = useState(false);

    const [Signup, setSignup] = useState(false);

    const onOpenModal = () => setSignin(true);
    const onCloseModal = () => setSignin(false);

    const onOpenModalup = () => setSignup(true);
    const onCloseModalup = () => setSignup(false);

  return (
      <div >
  
      <Navbar bg="brandhead" variant="dark"
      sticky='top' expand="lg" className='mb-1 px-3' collapseOnSelect>
          <NavbarBrand>
             <h2>Shoppers</h2>
          </NavbarBrand>
          <Navbar.Toggle />
          <Navbar.Collapse>
          <Nav>
                <LinkContainer to="/">
                    <NavLink >Products</NavLink>
                </LinkContainer>
                <NavDropdown title="Categories" >
                    <NavDropdown.Item href="#product/shoes" >Shoes</NavDropdown.Item>
                    <NavDropdown.Item href="#product/belts">Belts</NavDropdown.Item>
                    <NavDropdown.Item href="#product/trousers">Trousers</NavDropdown.Item>
                    <NavDropdown.Item href="#product/skirts">Skirts</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Help" >
                    <NavDropdown.Item href="#product/shoes" >Help Center</NavDropdown.Item>
                    <NavDropdown.Item href="#product/belts">Return & refund</NavDropdown.Item>
                    <NavDropdown.Item href="#product/trousers">Order Cancellation</NavDropdown.Item>
                    <NavDropdown.Item href="#product/skirts">Become a Mercahnt</NavDropdown.Item>
                </NavDropdown>
                <LinkContainer to="/signup">
                
                <NavLink >Sign up</NavLink>
                </LinkContainer>
                <Nav>
                <form class="input-group mx-3 w-100">
                  <input class="formicontrol mx-1" type="search" placeholder='Search Item' aria-label='Search'></input>
                  <button class="btn btn-light my-sm-o" type='submit'>Search</button>

                </form>
                </Nav>
                <Nav className='mx-5 my-1'>
                <Button variant="outline-light" onClick={onOpenModal}>Sign In/ Sign Up</Button>
                <Modal open={Signin} onClose={onCloseModal} center>
                <form class="m-5">
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"></input>
                  </div >
 
                  <button type="submit" class="btn btn-primary w-100">Sign In</button>
                  <LinkContainer to="/signup">
                    <a>Don't have an account?Sign Up</a>
                </LinkContainer>
                  
                </form>
                  
                </Modal>
                </Nav>
                <Nav className='mx-5'>
                <Button variant="outline-light" onClick={onOpenModalup}>Sign Up</Button>
                <Modal open={Signup} onClose={onCloseModalup} center>
                
        <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"></input>
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"></input>
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"></input>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" class="form-control" id="inputCity"></input>
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip"></input>
          </div>
        </div>
        <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck"></input>
            <label class="form-check-label" for="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
      </form>
                </Modal>
                </Nav>
              
          </Nav>
          
          <Nav class="text-danger">
          <img src={shoppingcart} alt='' width="=50px" height="30px"></img>
          <span>0</span>
          </Nav>
          </Navbar.Collapse>
          
      </Navbar>
      

      <Outlet />
      </div>
  
  );
};

export default Header;