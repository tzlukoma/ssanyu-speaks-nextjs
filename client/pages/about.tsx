import React from 'react'
import Image from 'next/image'
import groq from 'groq'
import { useNextSanityImage } from 'next-sanity-image'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '../lib/customSerializer'
import { client } from '../lib/sanity'

function AboutPage({ siteSettings }) {
    const authorImageProps = useNextSanityImage(
        client,
        siteSettings[0]?.authorImage
    )
    const authorImageMobileProps = useNextSanityImage(
        client,
        siteSettings[0]?.authorImageMobile
    )

    return (
        <div>
            <main>
                <article className='main-content'>
                    <h1>Who is Ssanyu?</h1>
                    <section className='hero bio-hero'>
                        <div className='bio-container'>
                            <div className='image-container'>
                                <div className='bio-image-large'>
                                    <div className='next-image-container bio-image-container'>
                                        <Image
                                            {...authorImageProps}
                                            className='next-image '
                                            layout='fill'
                                            alt='ssanyu hero image'
                                        />
                                    </div>
                                </div>
                                <div className='bio-image-mobile'>
                                    <div className='next-image-container'>
                                        <Image
                                            {...authorImageMobileProps}
                                            className='next-image '
                                            layout='fill'
                                            alt='ssanyu author image'
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bio-content'>
                            <BlockContent
                                className='prose prose-lg 2xl:prose-xl'
                                blocks={siteSettings[0]?.authorBio}
                            />
                        </div>
                    </section>
                </article>
            </main>
        </div>
    )
}

export default AboutPage

AboutPage.getInitialProps = async ctx => {
    const siteSettings = await client
        .fetch(
            groq`
	*[_type=="siteSettings"] 
	`
        )
        .catch(console.error)

    return { siteSettings }
}
