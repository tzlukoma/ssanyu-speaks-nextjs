import React from 'react'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import groq from 'groq'

function AboutPage({ siteSettings }) {
    const authorImageProps = useNextSanityImage(
        client,
        siteSettings[0].authorImage
    )
    return (
        <div className='sm:w-2/3 lg:w-2/2 m-auto grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-1 p-5 font-sans'>
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
                <p>
                    Minister Sentheia McLeod gave her life to the Lord at an early age. A
                    native of Canton, Ohio, she graduated high school and moved to New
                    Jersey to pursue her college career. Since then, she has received her
                    Bachelor of Arts and Master of Arts in Psychology/Early Childhood
                    Education and Advanced Curriculum and teaching.
                </p>
                <p>
                    While Sentheia has served as a teacher and lead educator for the past
                    21 years in the Plainfield Public School district, she has also
                    committed her life to service for God’s Kingdom here on earth. She is
                    a member of Cathedral International (the Historic Second Baptist
                    Church) of Perth Amboy, New Jersey. In 2001, she answered her call to
                    dance ministry and currently serves as Director of Dance Ministry.
                    Sentheia answered her call and was licensed to preach the Gospel in
                    2013 by her pastor, Bishop Donald Hilliard, Jr. Soon after she
                    graduated from Drew Theological Seminary in 2016 with a M.A in Worship
                    and Liturgical Arts. Her seminary experience led her to serve as a
                    dance liaison and a Peace Ambassador for various peace Initiative at
                    the United Nations (Annual International Day of Peace, Women’s Rights,
                    Gun Violence Awareness). She completed her Internship at the Church
                    Center for the United Nations, where she gathered children and
                    worshippers to share the gospel in through dance and spoken word.{' '}
                </p>
                <p>
                    With a desire to answer the next call on her life, Sentheia graduated
                    from EITI Dance Year 1 Course and received her Dance Minister’s
                    License in 2016 and was ordained Pastor under Set Free Ministries in
                    2018. She is a 2018 graduate of The Eagles Network (TEN) New Jersey
                    and currently serves as the USA Director and a staff developer for the
                    EITI. She is appointed ambassador to the nations of Suriname and
                    England. Sentheia enjoys sharing the Word of God through dance around
                    the world.{' '}
                </p>
                <p>
                    Above all these earthly accomplishments, Min. Sentheia McLeod is a
                    fervent and lifelong worshiper servant of God, who loves the Lord and
                    the Lord’s people! She counts it an extreme honor to be called to
                    serve in the Kingdom for such a time as this. Min. Sentheia McLeod’s
                    life mission is supported by two of her favorite scriptures: Genesis
                    50:20 and Isaiah 61.
                </p>
            </div>
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
