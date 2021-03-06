import React, { Children } from 'react'
import { Header, Navbar } from '.'

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default Layout
