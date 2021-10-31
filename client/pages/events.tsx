import React from 'react'
import Image from 'next/image'
import groq from 'groq'
import { useNextSanityImage } from 'next-sanity-image'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '../lib/tailwindSerializer'
import { client } from '../lib/sanity'

function EventsPage({ siteSettings }) {
    const authorImageProps = useNextSanityImage(
        client,
        siteSettings[0].authorImage
    )
    return (
        <div className='sm:w-2/3 lg:w-1/2 m-auto grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-1 p-5 font-sans'>
            <div className=''>
                <Image
                    {...authorImageProps}
                    sizes='(max-width: 300px) 100vw, 300px'
                    layout='responsive'
                    alt='book image'
                />
            </div>
            <div className='space-y-3 text-xl'>
                <h1 className='text-3xl mt-4'>My Bio</h1>
                <BlockContent
                    className="prose prose-lg 2xl:prose-xl"
                    blocks={siteSettings[0].authorBio}
                    serializers={serializers}
                />
            </div>
        </div>
    )
}

export default EventsPage;

EventsPage.getInitialProps = async ctx => {
    const siteSettings = await client
        .fetch(
            groq`
	*[_type=="siteSettings"] 
	`
        )
        .catch(console.error)

    return { siteSettings }
}
