import Head from 'next/head';
import Link from 'next/link'
import Image from 'next/image'
import { client, urlFor } from '../lib/sanity'
import groq from 'groq'
import Subscribe from '../components/Subscribe';
import { Children } from 'react';


export default function HomePage({ siteSettings }) {
	console.log(siteSettings[0].heroImage)
	console.log(urlFor(siteSettings[0].heroImage).url())
	return (
		<div className="content-center font-body">
			<Head >
				<title>Sent2Dance - Sentheia McLeod</title>
				<meta name="description" content="Sentheia McLeod's Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="grid grid-cols-10 grid-rows-8 gap-4 mb-10">
				<div className="sm:hidden relative">
					<Image src={urlFor(siteSettings[0].heroImageMobile).fit('crop').auto('format').url()} width={972} height={452}
						layout="responsive" objectFit alt="brand logo" />
				</div>
				<div className="hidden sm:block relative col-start-1 col-span-10 row-start-1 row-span-4">
					<Image src={urlFor(siteSettings[0].heroImage).fit('crop').auto('format').url()} width={1440} height={371}
						layout="responsive" objectFit alt="brand logo" />
				</div>
				<div className="col-start-4 col-span-4 row-start-1 row-span-3 text-white z-10 pt-5 text-4xl"><p >There is a celebration</p><p>and the celebration is my dance</p></div>
				<div className="bg-yellow-50 col-start-4 col-span-2 row-start-4 row-span-4 z-20">Book image</div>
				<div className="bg-yellow-50 col-start-6 col-span-2 row-start-4 row-span-4 z-20">Author image</div>
				<div></div>
				<div className="bg-white col-start-4 col-span-2 row-start-5 row-span-1 z-20">Author CTA</div>
				<div className="bg-white col-start-6 col-span-2 row-start-5 row-span-1 z-20">Book CTA</div>
				<div className="bg-white col-start-4 col-span-4 row-start-7 row-span-1 z-30">Subscribe box</div>
			</main>
		</div>
	);
}

HomePage.getInitialProps = async () => ({
	siteSettings: await client.fetch(groq`
	*[_type=="siteSettings"] 
	`)
})
