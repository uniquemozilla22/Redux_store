import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBIcon,
  MDBNavbarLink,
  MDBBadge,
  MDBBtn
} from 'mdb-react-ui-kit';
import Search from '../search/Search';
import { useDispatch } from 'react-redux';
import toggleCart from '../../redux/actions/modals/cart';
import toggleSidebar from '../../redux/actions/modals/sidebar';
import logo from './commerce.png'
import classes from './header.module.css'


const Header = () => {

  const dispatch = useDispatch()

  return (
    <>
      <MDBNavbar expand='lg' bgColor='dark'>
        <MDBContainer fluid className="px-5">
          <div className="d-flex align-items-center">
            <MDBIcon icon='stream' fas size="lg" onClick ={()=>dispatch(toggleSidebar)}/>
            <img src={logo} alt="Logo" height="45px" className={classes.logo_image}/>
          </div>
          <Search placeholder="Search Item" />
          <div className="d-flex">
            <MDBNavbarLink href='#' className="d-flex" onClick={()=>dispatch(toggleCart)}>
              <MDBBadge pill color='dark'>1</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </MDBNavbarLink>
            <MDBNavbarLink href='#' onClick={()=>dispatch(toggleSidebar)}>
              <MDBIcon fas icon='user' />
            </MDBNavbarLink>
          </div>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header