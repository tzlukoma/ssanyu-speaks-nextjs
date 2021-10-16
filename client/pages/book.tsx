import React from 'react'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import groq from 'groq'

function BookPage({ siteSettings }) {
    console.log(siteSettings)
    const bookImageProps = useNextSanityImage(client, siteSettings[0].bookImage)
    return (
        <div className="w-2/3 lg:w-2/2 m-auto grid lg:grid-cols-2 grid-cols-1 lg:grid-rows-2 gap-1 p-5 font-sans">
            <div className="row-start-1 row-end-1">

                <Image
                    {...bookImageProps}
                    sizes='(max-width: 300px) 100vw, 300px'
                    layout='responsive'
                    alt='book image'
                />
            </div>
            <div className="space-y-3 text-xl">
                <h1 className="text-3xl mt-4">About the Book</h1>
                <p>
                    Dear God, where are you? I prayed. I think you made a big mistake and put me in the wrong family!
                </p>
                <p>
                    I never felt like I belonged, and I always wanted out. The things I dreamed of and aspired to be were never evident in the people assigned to care for me, the only people I knew and loved. This is my story. It’s a story of pain, neglect, abuse, rejection, and chaos, but it’s also a story of grace, faith, forgiveness, acceptance, restoration, and love.
                </p>
                <p>
                    Journey with me as I share how desire changed my life and how I came to know that God never makes a mistake! “We know that in all things God works for the good of those who love him, who have been called according to his purpose” (Romans 8:28, ESV). Let your heart find joy as you peek into my life and learn that through it all, God was there! There is a celebration, and the celebration is in my dance! New Life, New Dance is a heartfelt and inspiring story of victory.
                </p>
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
