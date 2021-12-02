import React from "react";
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from "react-redux";
import toggleSidebar from "../../../redux/actions/modals/sidebar";


  
const SideBar = () => {

  const isActive =useSelector(state=>state.Modal.sidebar)
  const dispatch = useDispatch()

    return (
     <>
     <MDBModal fade={"false"} className="Sidebar" isOpen={isActive} toggle={()=>dispatch(toggleSidebar)} fullHeight position="right">
     <MDBModalHeader >MDBModal title</MDBModalHeader>
     <MDBModalBody>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
       magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
       consequat.
     </MDBModalBody>
     <MDBModalFooter>
       <MDBBtn color="secondary" onClick={()=>dispatch(toggleSidebar)}>Close</MDBBtn>
       <MDBBtn color="primary">Save changes</MDBBtn>
     </MDBModalFooter>
   </MDBModal>
   </>
    );
};

export default SideBar;
