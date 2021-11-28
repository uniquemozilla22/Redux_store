import React, { useState } from "react";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import toggleSidebar from "../../../redux/actions/modals/sidebar";


  
const SideBar = () => {

  const isActive =useSelector(state=>state.Modal.sidebar)
  const toggleSidebar = useDispatch(toggleSidebar())

    return (
     <>
     <MDBModal isOpen={isActive} toggle={()=>{}} fullHeight position="right">
     <MDBModalHeader toggle={()=>{}}>MDBModal title</MDBModalHeader>
     <MDBModalBody>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
       consequat.
     </MDBModalBody>
     <MDBModalFooter>
       <MDBBtn color="secondary" onClick={()=>{}}>Close</MDBBtn>
       <MDBBtn color="primary">Save changes</MDBBtn>
     </MDBModalFooter>
   </MDBModal>
   </>
    );
};

export default SideBar;
