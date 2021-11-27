import React from 'react'
import Header from './UI/navigation/Header'

const Layout = (props) => {
    return (
        <>
        <Header/>
        {props.children}
        </>
    )
}

export default Layout
