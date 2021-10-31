import React from 'react'
import Image from 'next/image'
import groq from 'groq'
import { useNextSanityImage } from 'next-sanity-image'
import { motion } from 'framer-motion'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '../lib/customSerializer'
import { client } from '../lib/sanity'
import CustomLink from '../components/CustomLink'

function BookPage({ siteSettings }) {
    const bookImageProps = useNextSanityImage(client, siteSettings[0].bookImage)
    return (
        <div className="sm:w-full lg:w-1/2 m-auto grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-1 px-10 md:p-5 font-sans">
            <div className="">
                <Image
                    {...bookImageProps}
                    sizes='(max-width: 300px) 100vw, 300px'
                    layout='responsive'
                    alt='book image'
                />
                <div className="m-auto md:w-4/5 ">
                    {/* <CustomLink
                        destination={`https://www.amazon.com/Life-Dance-Sentheia-Loren-McLeod/dp/1949826392`}
                        noPadding
                        borderBottom={false}
                        active={false}
                    >
                        <motion.button whileHover={{ scale: 1.1 }} className='w-full my-5 cursor-pointer bg-primary-400 hover:bg-primary-600 text-white text-xl font-bold py-5 px-2 mt-4 rounded-lg uppercase'>
                            Buy the book on Amazon
                        </motion.button>
                    </CustomLink> */}
                </div>
            </div>
            <div className="space-y-3 text-xl">
                <h1 className="text-3xl mt-4">About the Book</h1>
                <BlockContent
                    className="prose prose-lg 2xl:prose-xl"
                    blocks={siteSettings[0].bookDescription}
                    serializers={serializers}
                />
            </div>
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
