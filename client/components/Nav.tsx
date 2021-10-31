import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CustomLink from './CustomLink'

export default function Nav() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        {
            name: 'About Me',
            link: '/about'
        },
        {
            name: 'My Book',
            link: '/suubis-sunny-smile'
        }
    ]

    function handleMenuClick() {
        setMenuOpen(!menuOpen)
    }

    function manageMenu() {
        if (menuOpen) {
            setMenuOpen(false)
        } else return
    }

    const customLoader = src => {
        return src
    }

    return (
        <nav style={{
            width: '90%',
            maxWidth: 700,
            margin: '0.5rem auto'
        }}>
            <CustomLink
                className=""
                destination={'/'}
                active={false}
                noPadding={true}
                borderBottom={false}
            >
                <div className="logo">

                    <div className='logo next-image-container'>
                        <Image
                            className="next-image"
                            src='/ssanyu-lukoma-logo-dark-bg.svg'
                            alt='brand logo'
                            layout="fill"
                        />
                    </div>
                </div>
            </CustomLink>
            <ul className='call-out'>
                {links.map(link => {
                    return (
                        <li
                            className='call-out-text'
                            key={link.link}
                            onClick={() => manageMenu()}
                        >
                            <CustomLink
                                destination={link.link}
                                active={router.pathname == link.link}
                                noPadding={false}
                                borderBottom={true}
                            >
                                <div className='px-5'>{link.name}</div>
                            </CustomLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
