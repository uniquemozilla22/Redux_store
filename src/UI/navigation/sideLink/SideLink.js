import React from 'react'
import { Link } from 'react-router-dom'

const SideLink = ({title , link}) => {
    return (
        <Link to="./" className="sidenav-link">
            <i class="fas fa-grin fa-fw me-3"></i>
            <span>Category 1</span>
        </Link>
    )
}

export default SideLink
