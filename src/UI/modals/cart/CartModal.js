import React from 'react'
import {  MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import toggleCart from '../../../redux/actions/modals/cart';


const CartModal = () => {

    const isActive = useSelector(state => state.Modal.cart)
    const dispatch = useDispatch();

    return (
        <MDBModal className ="CartModal" isOpen={isActive} toggle={()=>dispatch(toggleCart)}>
        <MDBModalHeader toggle={()=>dispatch(toggleCart)}>MDBModal title</MDBModalHeader>
        <MDBModalBody>
          This is body.
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={()=>dispatch(toggleCart)}>Close</MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    )
}

export default CartModal
