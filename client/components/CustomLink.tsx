import React from 'react'
import Link from 'next/link'

import classNames from 'classnames';

function CustomLink({ children, destination, active, noPadding, borderBottom, className }) {
    const linkStyle = classNames({
        'block px-0 border-transparent lg:p-4 hover:text-secondary-300 hover:border-primary-300 transition-all duration-500': true,
        'border-b-2': borderBottom,
        'text-secondary-100 bg-primary-500': active,
    });
    return (
        <Link href={destination} passHref >
            <a className={className} style={{ padding: noPadding ? 0 : null }}
            >{children}
            </a>
        </Link>
    )
}

export default CustomLink
