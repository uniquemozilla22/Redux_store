import React from 'react'
import Header from './UI/navigation/Header'
import SideBar from './UI/navigation/SideBar'

const Layout = (props) => {
    return (
        <>
        <Header/>
        <SideBar/>
        {props.children}
        </>
    )
}

export default Layout
