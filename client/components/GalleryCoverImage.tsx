import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import React from 'react'
import { client } from '../lib/sanity'
import Link from 'next/link'
import CustomLink from './CustomLink'

const GalleryCoverImage = ({ gallery }) => {
    const coverImageProps = useNextSanityImage(
        client,
        gallery?.coverImage
    )
    return (
        <div >
            <CustomLink
                className=''
                destination={`/gallery/${gallery?.slug?.current}`}
                noPadding
                borderBottom={false}
                active={false}
            >
                <h2>{gallery.title}</h2>
            </CustomLink>
            <div className="next-image-container gallery-image-container" style={{ marginRight: 20 }}>
                <Image
                    {...coverImageProps}
                    className='next-image '
                    layout='fill'
                    placeholder="blur"
                    alt={`${gallery.title} cover art`}
                />
            </div>

        </div >


    )
}

export default GalleryCoverImage