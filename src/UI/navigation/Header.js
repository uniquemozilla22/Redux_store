import React,{useState} from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBIcon,
  MDBNavbarLink,
  MDBBadge
} from 'mdb-react-ui-kit';
import Search from '../search/Search';

 const Header= ()=>{
  return (
    <>
       <MDBNavbar expand='lg'  bgColor='light'>
      <MDBContainer fluid className="px-5">
        <MDBIcon icon='bars' fas />
        <Search placeholder="Search Item" />
        <div className="d-flex">
            <MDBNavbarLink href='#' className="d-flex">
              <MDBBadge pill color='dark'>1</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </MDBNavbarLink>
            <MDBNavbarLink href='#'>
              <MDBIcon fas icon='user' />
            </MDBNavbarLink>
          </div>
            
      </MDBContainer>
    </MDBNavbar>
    </>
  );
}

export default Header