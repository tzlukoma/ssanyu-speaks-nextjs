import React from 'react'
import Link from 'next/link'

import classNames from 'classnames';

function CustomLink({ children, destination, active, noPadding, borderBottom, className }) {
    const linkStyle = classNames({
        className: true,
        'border-b-2': borderBottom,
        'visited': active,
    });
    return (
        <Link href={destination} passHref >
            <div className={linkStyle}>
                <a className={className} style={{ padding: noPadding ? 0 : null }}
                >{children}
                </a>
            </div>

        </Link>
    )
}

export default CustomLink
