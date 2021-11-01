import Head from 'next/head'
import Image from 'next/image'
import { PopupButton } from "react-calendly";
import { client } from '../lib/sanity'
import { useNextSanityImage } from 'next-sanity-image'
import groq from 'groq'
import CustomLink from '../components/CustomLink'
import { Subscribe } from '../components/Subscribe';

export default function HomePage({ siteSettings, events }) {
	const heroImageProps = useNextSanityImage(client, siteSettings[0].heroImage)
	const heroImageMobileProps = useNextSanityImage(
		client,
		siteSettings[0].heroImageMobile
	)
	const bookImageProps = useNextSanityImage(client, siteSettings[0].bookImage)

	return (
		<div className='content-center font-body'>
			<Head>
				<title>{`Ssanyu Speaks`}</title>
				<meta name='description' content="Ssanyu Lukoma's Website" />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main >
				<article className="main-content">
					<CustomLink
						className="promo-banner"
						destination={'/suubis-sunny-smile'}
						active={false}
						noPadding={true}
						borderBottom={false}
					>

						<div className="next-image-container" style={{ marginRight: 20 }}>

							<Image
								{...bookImageProps}
								className="next-image promo-banner-image"
								layout="fill"
								alt={`Suubi's sunny smile book`}
							/>
						</div>
						<h2>Pre-Order My New Book</h2>
					</CustomLink>
					<h1>{`Hi, I'm Ssanyu (which means "Joy")`}</h1>
					<section className="hero">
						<div className="card-container">
							{/* <!-- <h2>cards</h2> --> */}
							<div className="info-card inspire">
								<div className="info-card-heading">
									<h2>I inspire</h2>
								</div>
								<div className="info-card-content">
									<p>
										I am passionate about inspiring teenagers to strive for excellence in their God-given talents
										through one of my workshops or keynote speeches.
									</p>
									<i className="fa fa-info-circle"></i>
								</div>

							</div>
							<div className="info-card bkr">
								<div className="info-card-heading">
									<h2>I lead</h2>
								</div>
								<div className="info-card-content">
									<p>
										At 13 years old, I founded Brown Kids Read Inc., a non-profit to motivate all children, but
										especially children of color, to read more diverse literature.
									</p>
									<i className="fa fa-info-circle"></i>
								</div>

							</div>
							<div className="info-card speaker">
								<div className="info-card-heading">
									<h2>I speak</h2>
								</div>
								<div className="info-card-content">
									<p>
										I am a competitive public speaker and a broadcaster for KiDz HuB Media Network, where I also
										serve
										on the Junior Advisory Board.
									</p>
									<i className="fa fa-info-circle"></i>
								</div>

							</div>
						</div>
						<div className="image-container">
							<div className="hero-image-large">
								<div className="next-image-container hero-image-container">

									<Image
										{...heroImageProps}
										className="next-image "
										layout="fill"
										alt='ssanyu hero image'
									/>
								</div>
							</div>
							<div className="hero-image-mobile">
								<div className="next-image-container hero-image-mobile-container">

									<Image
										{...heroImageMobileProps}
										className="next-image "
										layout="fill"
										alt='ssanyu hero image'
									/>
								</div>
							</div>

						</div>
					</section>

					<section>
						<div className="cta">
							<div className="shedule">
								<PopupButton url="https://calendly.com/llukoma/ssanyu-speaks-consultation" text="Schedule a Consultation" />
							</div>
							<div className="pre-book">
								<PopupButton url='https://calendly.com/brownkidsread/pre-booked' text="Pre-Book an Event" />
							</div>
							<section className="subscribe">
								<Subscribe />
							</section>
						</div>

					</section>

				</article>
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
