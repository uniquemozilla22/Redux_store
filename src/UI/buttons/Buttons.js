import { MDBBtn as Btn } from 'mdb-react-ui-kit'
import React from 'react'

export const BlueButton = (props) => <Btn {...props} color="primary">{props.children}</Btn>
export const GreyButton = (props) => <Btn {...props}  color="secondary">{props.children}</Btn>
export const GreenButton = (props) => <Btn {...props}  color="success">{props.children}</Btn>

