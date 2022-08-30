import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CustomLink from './CustomLink'
import { useNextSanityImage } from 'next-sanity-image'
import { client } from '../lib/sanity'

export default function Nav({ logoImageData }) {
    const logoImageProps = useNextSanityImage(client, logoImageData)
    console.log("logoImageProps", logoImageProps)

    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Book',
            link: '/suubis-sunny-smile'
        },
        {
            name: 'Where to Buy',
            link: '/where-to-buy'
        },
        {
            name: 'Events',
            link: '/events'
        },
        {
            name: 'Galleries',
            link: '/gallery'
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

    return (
        <nav style={{
            width: '90%',
            maxWidth: 700,
            margin: '0.5rem auto'
        }}>
            <CustomLink
                className=".main"
                destination={'/'}
                active={false}
                noPadding={true}
                borderBottom={false}
            >
                <div className="logo">
                    <div className='logo next-image-container'>
                        <Image
                            {...logoImageProps}
                            className="next-image "
                            layout="fill"
                            placeholder='blur'
                            alt='ssanyu hero image'
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
                                className=".main"
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
