import React from 'react'
import Image from 'next/image'
import groq from 'groq'
import { useNextSanityImage } from 'next-sanity-image'
import { ProductBrowser, BuyNowButton } from '@ecwid/nextjs-ecwid-plugin'
import BlockContent from '@sanity/block-content-to-react'
import { client } from '../lib/sanity'
import CustomLink from '../components/CustomLink'

function BookPage({ siteSettings }) {

    const bookImageProps = useNextSanityImage(client, siteSettings[0]?.bookImage)

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
                    blocks={siteSettings[0]?.bookDescription}
                />
            </section>
            <section className="shipping-notice">
                <h2>Buy The Bundle Exclusive (Book + Coloring Book)</h2>
                <h3>Only Available on This Site</h3>
                <div className="buy-button">
                    <Image src={'/suubi-sunny-smile-bundle.png'} width={600} height={404} alt={`Suubi's Sunny Smile bundle - both books`} />
                    <BuyNowButton
                        storeId={process.env.NEXT_PUBLIC_ECWID_STORE_ID}
                        productId={400650737}
                        isShowPrice={true}
                    />
                </div>
                <h2>Want to Buy Just the Book?</h2>
                <h2 style={{ margin: 0, fontSize: '1.5em' }}>Buy it at <span> <CustomLink className='' destination="/where-to-buy" noPadding borderBottom={true} active={false} >these locations.</CustomLink></span></h2>
                <h2>Want to Buy In Bulk?</h2>
                <p>If you would like to order more than 10 books at our bulk discount, please <CustomLink className='' destination="/bulk-request-form" noPadding borderBottom={false} active={false} >submit an inquiry.</CustomLink>
                </p>
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
