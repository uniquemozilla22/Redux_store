import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBRipple } from 'mdb-react-ui-kit';
import { BlueButton } from '../buttons/Buttons';
import classes from "./Card.module.css"

export const ProductCard = ({title,description}) => {
    return (
        <MDBCard className={classes.productCard__wrapper}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <BlueButton outline href='#'>Button</BlueButton>
      </MDBCardBody>
    </MDBCard>
    )
}

export default ProductCard
