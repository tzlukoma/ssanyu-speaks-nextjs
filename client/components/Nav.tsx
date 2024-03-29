import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import CustomLink from './CustomLink'

export default function Nav() {

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
                            className="next-image"
                            src={"https://cdn.sanity.io/images/boechal1/production/2a4902657d129e7ac41709cd6b5ed615286ddd79-1376x392.png"}
                            blurDataURL={"https://cdn.sanity.io/images/boechal1/production/2a4902657d129e7ac41709cd6b5ed615286ddd79-1376x392.png?w=64&blur=50&q=30&fit=clip&auto=format"}
                            placeholder="blur"
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
