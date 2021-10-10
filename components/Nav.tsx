import React, { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import CustomLink from './CustomLink';

export default function Nav() {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        {
            name: 'Home',
            link: '/',
        },
        {
            name: 'Book',
            link: '/book',
        },
        {
            name: 'About',
            link: '/about',
        },
    ];

    function handleMenuClick() {
        setMenuOpen(!menuOpen);
    }

    function manageMenu() {
        if (menuOpen) {
            setMenuOpen(false);
        } else return;
    }



    return (
        <header className="text-primary-500 lg:pl-0 pr-6 lg:py-0 bg-white flex flex-wrap items-center fixed w-full z-50 transition-all duration-200">
            <div className="flex items-center justify-between flex-1">
                <CustomLink destination={"/"} active={false} noPadding={true} borderBottom={false}>
                    <Image className="w-36" width={360} height={97} src="/logo.svg" alt="brand logo" />
                </CustomLink>
            </div>
            <button
                className="block pointer-cursor lg:hidden"
                id="openMenu"
                onClick={handleMenuClick}
            >
                {/* heroicons.com - menu */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
            <div
                className={
                    'w-full lg:flex lg:items-center lg:w-auto ' +
                    (menuOpen ? '' : 'hidden')
                }
                id="menu"
            >
                <nav>
                    <ul className="items-center justify-between p-5 text-base lg:flex " style={{ lineHeight: "5.5rem" }}>
                        {links.map((link) => {
                            return (
                                <li key={link.link} onClick={() => manageMenu()} >
                                    <CustomLink destination={link.link} active={router.pathname == link.link} noPadding={false} borderBottom={true}>
                                        <div className="px-5">
                                            {link.name}
                                        </div>

                                    </CustomLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
