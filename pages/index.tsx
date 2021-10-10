import Head from 'next/head';
import Link from 'next/link'
import Subscribe from '../components/Subscribe';


export default function Home() {
	return (
		<div className="content-center font-body">
			<Head >
				<title>Sent2Dance - Sentheia McLeod</title>
				<meta name="description" content="Sentheia McLeod's Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main >
				<div>Hero</div>
				<div>Hero Text</div>
				<div>Book image</div>
				<div>Author image</div>
				<div>Author Text</div>
				<div>Subscribe box</div>
			</main>
		</div>
	);
}
