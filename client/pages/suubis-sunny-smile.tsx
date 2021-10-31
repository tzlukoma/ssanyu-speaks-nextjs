import React from 'react'
import Image from 'next/image'
import groq from 'groq'
import { useNextSanityImage } from 'next-sanity-image'
import { ProductBrowser } from '@ecwid/nextjs-ecwid-plugin'
import BlockContent from '@sanity/block-content-to-react'
import { client } from '../lib/sanity'

function BookPage({ siteSettings }) {
    const bookImageProps = useNextSanityImage(client, siteSettings[0].bookImage)
    return (
        <div className="">
            <h1>{`Suubi's Sunny Smile`}</h1>
            <h2 className="book-subtitle">by Ssanyu Lukoma</h2>
            <h2 className="book-subtitle">illustrated by Sutekina Ame</h2>
            <section className="hero book-hero">
                <div className="image-container">
                    <div className="book-image-large">
                        <div className='next-image-container'>
                            <Image
                                {...bookImageProps}
                                className='next-image '
                                layout='fill'
                                alt='ssanyu hero image'
                            />
                        </div>
                    </div>
                </div>
                <BlockContent
                    className="prose prose-lg 2xl:prose-xl"
                    blocks={siteSettings[0].bookDescription}
                />
            </section>
            <section className="shipping-notice">
                <h2>Pre-Order Your Copies Today!</h2>
                <h3>Books will begin shipping on November 18th</h3>
                <ul>
                    <li>If you would like to order more than 10 books, please inquire about our wholesale pricing at
                        ssanyuspeaks | @ | gmail.com.</li>
                </ul>
                <p></p>
                <div className="embedded-store">
                    <ProductBrowser
                        storeId={process.env.NEXT_PUBLIC_ECWID_STORE_ID}
                    />
                </div>

            </section>
        </div>
    )
}

export default BookPage

BookPage.getInitialProps = async ctx => {
    const siteSettings = await
        client
            .fetch(
                groq`
	*[_type=="siteSettings"] 
	`
            )
            .catch(console.error)

    return { siteSettings }
}
