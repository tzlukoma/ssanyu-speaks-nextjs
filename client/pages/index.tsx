import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '../lib/sanity';
import { useNextSanityImage } from 'next-sanity-image'
import groq from 'groq';
import Subscribe from '../components/Subscribe';
import { Children } from 'react';

export default function HomePage({ siteSettings }) {
	const heroImageProps = useNextSanityImage(client, siteSettings[0].heroImage)
	const heroImageMobileProps = useNextSanityImage(client, siteSettings[0].heroImageMobile)
	const bookImageProps = useNextSanityImage(client, siteSettings[0].bookImage)
	const authorImageProps = useNextSanityImage(client, siteSettings[0].authorImage)
	console.log(siteSettings[0].heroImage);
	console.log(urlFor(siteSettings[0].heroImage).url());
	return (
		<div className="content-center font-body">
			<Head>
				<title>Sent2Dance - Sentheia McLeod</title>
				<meta name="description" content="Sentheia McLeod's Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main >
				<section className="grid grid-cols-10 grid-rows-8 gap-4 mb-10">

					<div className="sm:hidden relative">
						<Image
							{...heroImageMobileProps}
							sizes="(max-width: 800px) 100vw, 800px"
							layout="responsive"
							alt="brand logo"
						/>
					</div>
					<div className="hidden sm:block relative col-start-1 col-span-10 row-start-1 row-span-4">
						<Image
							{...heroImageProps}
							sizes="(max-width: 1440px) 100vw, 1440px"
							layout="responsive"
							alt="brand logo"
						/>
					</div>
					<div className="hidden sm:block relative col-start-1 col-span-10 row-start-1 row-span-3 bg-black bg-opacity-40 z-20">
					</div>
					<div className="bg-black bg-opacity-60 col-start-4 col-span-4 row-start-1 row-span-3 text-white z-30 mb-4 p-3 md:p-5 text-sm xl:text-4xl ">
						<p className="leading-loose">There is a celebration</p>
						<p>and the celebration is my dance</p>
					</div>
					<div className="bg-transaparent col-start-4 col-span-2 md:mt-2 xl:mt-5 row-start-3 md:row-start-4 row-span-4 z-30">
						{' '}
						<Image
							{...bookImageProps}
							sizes="(max-width: 650px) 100vw, 650px"
							layout="responsive"
							alt="brand logo"
						/>
					</div>
					<div className="bg-white col-start-6 col-span-2 md:mt-2 xl:mt-10 row-start-3 md:row-start-4 row-span-3 z-30 rounded-xl overflow-hidden w-100 shadow-lg">
						{' '}
						<Image
							{...authorImageProps}
							sizes="(max-width: 600px) 100vw, 600px"
							layout="responsive"
							alt="brand logo"
						/>
					</div>
					<div></div><Link href="/book" passHref>
						<div className="bg-white opacity-90 hover:bg-primary-400 hover:text-white col-start-4 col-span-2 row-start-6 row-span-2 z-40 text-center pt-3">
							About the book


						</div></Link>
					<div className="bg-white opacity-90 hover:bg-primary-400 hover:text-white col-start-6 col-span-2 row-start-6 row-span-2 z-40 text-center pt-3">
						About the author
					</div>
				</section>
				<section className="m-auto flex items-center justify-center">
					<div className="">
						<Subscribe />
					</div>
				</section>


			</main>
		</div>
	);
}

HomePage.getInitialProps = async () => ({
	siteSettings: await client.fetch(groq`
	*[_type=="siteSettings"] 
	`).catch(console.error),
});
