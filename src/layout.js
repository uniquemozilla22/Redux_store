import React from 'react'
import Modals from './UI/modals/Modals'
import Header from './UI/navigation/Header'

const Layout = (props) => {
    return (
        <>
        <Header/>
        {props.children}
        <Modals/>
        </>
    )
}

export default Layout
