import React from 'react'
import Footer from './Footer'
import Nav from './Nav'

function Layout({ children }) {
    return (
        <div>
            <Nav />
            <div className='pt-32 md:pt-40 px-4'>
                {children}
            </div>

            <Footer />
        </div>
    )
}

export default Layout
