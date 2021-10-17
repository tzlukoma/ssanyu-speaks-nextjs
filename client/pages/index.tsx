import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { client } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import { displayLocalTimeZone } from '../lib/timeFormats'
import groq from 'groq'
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
				<section className='sm:grid sm:grid-cols-8 md:grid-cols-10 grid-rows-4 gap-1 mb-5 p-2'>
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
					<div className='text-center col-start-1 col-end-9 md:col-start-3 md:col-span-6 row-start-1 row-span-2 font-sans text-black  sm:text-white z-30 lg:mb-4 p-8 lg:p-5 text-2xl xl:py-6 2xl:p-10 xl:text-4xl 2xl:text-5xl '>
						<p className='leading-loose'>There is a celebration</p>
						<p>and the celebration is my dance</p>
					</div>
					<h2 className='sm:hidden text-center text-md text-primary-400'>
						Click on my book to learn more about it
					</h2>
					<motion.div
						whileHover={{ scale: 1.1 }}
						className='cursor-pointer bg-transaparent col-start-2 col-end-5 md:col-start-3 md:col-span-3 lg:col-start-4 lg:col-span-2 md:mt-10 row-start-2 md:row-start-2 row-span-4 z-30'
					>
						<Link href='/book' passHref>
							<Image
								{...bookImageProps}
								sizes='(max-width: 650px) 100vw, 650px'
								layout='responsive'
								alt='book image'
							/>
						</Link>
					</motion.div>
					<div className='sm:hidden m-auto sm:w-1/2 lg:w-1/3 '>
						<CustomLink
							destination={`https://www.amazon.com/Life-Dance-Sentheia-Loren-McLeod/dp/1949826392`}
							noPadding
							borderBottom={false}
							active={false}
						>
							<motion.button
								whileHover={{ scale: 1.1 }}
								className='w-full my-5 cursor-pointer bg-primary-400 hover:bg-primary-600 text-white text-xl font-bold py-5 px-2 mt-4 rounded-lg uppercase'
							>
								Buy the book on Amazon
							</motion.button>
						</CustomLink>
					</div>
					<h2 className='sm:hidden text-center text-md text-primary-400'>
						Click on my picture to learn more about me
					</h2>
					<motion.div
						whileHover={{ scale: 1.1 }}
						className='cursor-pointer bg-white col-start-5 col-end-8 md:col-start-6 md:col-span-3 lg:col-start-6 lg:col-span-2 row-start-2 mt-6 md:row-start-2 md:mt-14 row-span-3 z-30 rounded-xl overflow-hidden w-100 shadow-lg '
					>
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
				<div className='hidden sm:block m-auto sm:w-1/2 lg:w-1/3 '>
					<CustomLink
						destination={`https://www.amazon.com/Life-Dance-Sentheia-Loren-McLeod/dp/1949826392`}
						noPadding
						borderBottom={false}
						active={false}
					>
						<motion.button
							whileHover={{ scale: 1.1 }}
							className='w-full my-5 cursor-pointer bg-primary-400 hover:bg-primary-600 text-white text-xl font-bold py-5 px-2 mt-4 rounded-lg uppercase'
						>
							Buy the book on Amazon
						</motion.button>
					</CustomLink>
				</div>
				<section className='m-auto lg:w-1/2 p-5'>
					<h2 className='font-sans text-3xl 2xl:text-4xl my-5 '>
						Upcoming Events
					</h2>
					<div>
						{events?.length > 0 ? (
							events?.slice(-2).map((event: any) => (
								<div
									key={event._id}
									className='space-y-2 my-4 p-5 bg-blue-50 rounded-xl'
								>
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
			*[_type=="siteSettings"]`
			)
			.catch(console.error),
		client
			.fetch(
				groq`
			*[_type =="event" && status == "scheduled"]`
			)
			.catch(console.error)
	])
	return { siteSettings, events }
}
