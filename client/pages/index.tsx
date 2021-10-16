import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import groq from 'groq'
import Subscribe from '../components/Subscribe'
import { Children } from 'react'

export default function HomePage({ siteSettings }) {
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
	console.log(siteSettings[0].heroImage)
	console.log(urlFor(siteSettings[0].heroImage).url())
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
					<div className='hidden sm:block relative col-start-1 col-span-10 row-start-1 row-span-2 bg-black bg-opacity-40 z-20'></div>
					<div className='bg-black bg-opacity-60 col-start-3 col-span-6 lg:col-start-4 lg:col-span-4 row-start-1 row-span-2  text-white z-30 lg:mb-4 p-8 lg:p-5 text-2xl xl:py-8 xl:text-3xl 2xl:text-4xl '>
						<p className='leading-loose'>There is a celebration</p>
						<p>and the celebration is my dance</p>
					</div>
					<div className='bg-transaparent col-start-4 col-span-2 md:mt-10 row-start-2 md:row-start-2 row-span-4 z-30'>
						{' '}
						<Image
							{...bookImageProps}
							sizes='(max-width: 650px) 100vw, 650px'
							layout='responsive'
							alt='book image'
						/>
					</div>
					<div className='bg-white col-start-6 col-span-2 row-start-3 md:row-start-2 md:mt-14 row-span-3 z-30 rounded-xl overflow-hidden w-100 shadow-lg'>
						{' '}
						<Image
							{...authorImageProps}
							sizes='(max-width: 800px) 90vw, 800px'
							layout='responsive'
							alt='author image'
						/>
					</div>

					{/* <Link href='/book' passHref>
						<div className='bg-white opacity-90 hover:bg-primary-400 hover:text-white cursor-pointer col-start-4 col-span-2 row-start-6 row-span-2 z-40 text-center py-3'>
							About the book
						</div>
					</Link>
					<Link href='/about' passHref>
						<div className='bg-white opacity-90 hover:bg-primary-400 hover:text-white cursor-pointer col-start-6 col-span-2 row-start-6 row-span-2 z-40 text-center py-3'>
							About the author
						</div>
					</Link> */}
				</section>
				<section className="m-auto flex items-center justify-center">
					<h2 className="text-2xl xl:text-3xl 2xl:text-4xl">Upcoming Events</h2>
				</section>
				<section className='m-auto flex items-center justify-center'>
					<div className=''>
						<Subscribe />
					</div>
				</section>
			</main>
		</div>
	)
}

HomePage.getInitialProps = async () => ({
	siteSettings: await client
		.fetch(
			groq`
	*[_type=="siteSettings"] 
	`
		)
		.catch(console.error)
})
