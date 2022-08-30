import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({ children, logoImageData }) {
    return (
        <div className='layout-wrapper'>
            <Nav logoImageData={logoImageData} />
            <div style={{ paddingBottom: "12em" }}>
                <div className='layout'>
                    {children}
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Layout
