import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({ children }) {
    return (
        <div className='layout-wrapper'>
            <Nav />
            <div className='layout'>
                {children}
            </div>
            {/* 
            <Footer /> */}
        </div>
    )
}

export default Layout
