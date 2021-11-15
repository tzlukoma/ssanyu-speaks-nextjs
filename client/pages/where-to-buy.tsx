import React from 'react'
import groq from 'groq'
import { client, urlFor } from '../lib/sanity'
import EventCard from '../components/EventCard'

interface PurchaseLocationProps {
    purchaseLocations: {
        _id: string;
        title: string;
        thumbnail: any;
        purchaseLocation: string;
        purchaseUrl: string;
        status: string;
    }[]
}

function WhereToBuyPage({ purchaseLocations }: PurchaseLocationProps) {
    console.log(purchaseLocations)
    return (
        <div className=''>
            <div className=''>
                <h1 >Where to Buy The Book</h1>
                <div>
                    {purchaseLocations?.length > 0 ? (
                        purchaseLocations?.map((item, index) => (
                            <div key={item._id} >
                                {
                                    item.status === 'available' ? (
                                        <a href={item.status === 'available' ? item.purchaseUrl : ''}>
                                            <div className="event-wrapper" style={{ background: 'white', color: 'var(--happyHueBrown)' }}>
                                                <img src={urlFor(item.thumbnail).url()} alt="location" style={{ alignSelf: 'center' }} />
                                                <h2 style={{ textAlign: 'center', padding: 0, margin: '1em 0' }}>{`Buy from ${item.title}`}</h2>
                                            </div>
                                        </a>
                                    ) : (

                                        <div className="event-wrapper" style={{ background: 'white', color: 'var(--happyHueBrown)' }}>
                                            <img src={urlFor(item.thumbnail).url()} alt="location" style={{ alignSelf: 'center' }} />
                                            <h2 style={{ textAlign: 'center', padding: 0, margin: '1em 0' }}>{`Available soon from ${item.title}`}</h2>
                                        </div>

                                    )
                                }

                            </div>

                        ))
                    ) : (
                        <div className='event-wrapper'>
                            <div className="event-none">No upcoming events</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default WhereToBuyPage;

WhereToBuyPage.getInitialProps = async ctx => {
    const [purchaseLocations,] = await Promise.all([
        client
            .fetch(
                groq`
	*[_type =="purchaseLocation" && status in ["available","pending"]]`
            )
            .catch(console.error),
    ])
    return { purchaseLocations }
}
