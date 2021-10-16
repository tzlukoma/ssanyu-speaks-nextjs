import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { client, urlFor } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { displayLocalTimeZone } from '../utils/timeFormats'
import groq from 'groq'
import Subscribe from '../components/Subscribe'
import { Children } from 'react'
import CustomLink from '../components/CustomLink'

export default function HomePage({ siteSettings, events }) {
	const heroImageProps = useNextSanityImage(client, siteSettings[0].heroImage)
	const heroImageMobileProps = useNextSanityImage(
		client,
		siteSettings[0].heroImageMobile
	)
	const bookImageProps = useNextSanityImage(client, siteSettings[0].bookImage)
	const authorImageProps = useNextSanityImage(
		client,
		siteSettings[0].authorImage
	)
	return (
		<div className='content-center font-body'>
			<Head>
				<title>Sent2Dance - Sentheia McLeod</title>
				<meta name='description' content="Sentheia McLeod's Website" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main>
				<section className='grid grid-cols-10 grid-rows-4 gap-1 mb-5'>
					<div className='sm:hidden relative'>
						<Image
							{...heroImageMobileProps}
							sizes='(max-width: 800px) 100vw, 800px'
							layout='responsive'
							alt='brand logo'
						/>
					</div>
					<div className='hidden sm:block relative col-start-1 col-span-10 row-start-1 row-span-4'>
						<Image
							{...heroImageProps}
							sizes='(max-width: 1440px) 100vw, 1440px'
							layout='responsive'
							alt='brand logo'
						/>
					</div>
					<div className='hidden sm:block relative col-start-1 col-span-10 row-start-1 row-span-2 bg-black bg-opacity-70 z-20'></div>
					<div className='text-center col-start-3 col-span-6 row-start-1 row-span-2 font-sans  text-white z-30 lg:mb-4 p-8 lg:p-5 text-2xl xl:py-6 2xl:p-10 xl:text-4xl 2xl:text-5xl '>
						<p className='leading-loose'>There is a celebration</p>
						<p>and the celebration is my dance</p>
					</div>

					<motion.div whileHover={{ scale: 1.1 }} className='cursor-pointer bg-transaparent col-start-3 col-span-3 lg:col-start-4 lg:col-span-2 md:mt-10 row-start-2 md:row-start-2 row-span-4 z-30'>
						<Link href='/book' passHref>
							<Image
								{...bookImageProps}
								sizes='(max-width: 650px) 100vw, 650px'
								layout='responsive'
								alt='book image'
							/>
						</Link>
					</motion.div>

					<motion.div whileHover={{ scale: 1.1 }} className='cursor-pointer bg-white col-start-6 col-span-3 lg:col-start-6 lg:col-span-2 row-start-3 md:row-start-2 md:mt-14 row-span-3 z-30 rounded-xl overflow-hidden w-100 shadow-lg '>
						<Link href='/about' passHref>
							<Image
								{...authorImageProps}
								sizes='(max-width: 800px) 90vw, 800px'
								layout='responsive'
								alt='author image'
							/>
						</Link>
					</motion.div>
				</section>
				<section className='m-auto lg:w-1/2 p-5'>
					<h2 className='font-sans text-3xl 2xl:text-4xl '>Upcoming Events</h2>
					<div>
						{events?.length > 0 ? (
							events?.slice(-2).map((event: any) => (
								<div key={event._id} className='space-y-2 my-4 p-5 bg-blue-50 rounded-xl'>
									<h2 className='font-sans py-4 text-3xl text-primary-400 '>
										{event?.title}
									</h2>
									<div className='text-xl lg:text-2xl'>
										{displayLocalTimeZone(event?.date, 'MMMM Do YYYY, h:mm a')}
									</div>
									<div className='text-lg: lg:text-xl'>{event?.location}</div>
									{event?.registrationUrl && (
										<CustomLink
											destination={event.registrationUrl}
											noPadding
											borderBottom={false}
											active={false}
										>
											<button className='bg-primary-400 hover:bg-primary-600 text-white font-bold py-2 px-4 mt-4 rounded-lg uppercase'>
												Register
											</button>
										</CustomLink>
									)}
								</div>
							))
						) : (
							<div className='font-sans text-3xl  py-4 text-primary-500'>
								No upcoming events
							</div>
						)}
					</div>
				</section>
			</main>
		</div>
	)
}

HomePage.getInitialProps = async ctx => {
	const [siteSettings, events] = await Promise.all([
		client
			.fetch(
				groq`
	*[_type=="siteSettings"] 
	`
			)
			.catch(console.error),
		client
			.fetch(
				groq`
		*[_type =="event" && status == "scheduled"]
`
			)
			.catch(console.error)
	])
	return { siteSettings, events }
}
