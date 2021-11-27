import React from 'react'
import  classes from "./search.module.css"
import {
  MDBInputGroup,
  MDBInputGroupElement,
} from 'mdb-react-ui-kit';

const Search = (props) => {
    return (
    <MDBInputGroup className={classes.search_navigation}>
      <MDBInputGroupElement className={classes.element_input} type='text' placeholder={props.placeholder} />
    </MDBInputGroup>
    )
}

export default Search
