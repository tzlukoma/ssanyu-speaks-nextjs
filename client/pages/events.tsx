import React from 'react'
import Image from 'next/image'
import groq from 'groq'
import { displayLocalTimeZone } from '../lib/timeFormats'
import { useNextSanityImage } from 'next-sanity-image'
import CustomLink from '../components/CustomLink'
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from '../lib/customSerializer'
import { client } from '../lib/sanity'
import EventCard from '../components/EventCard'

function EventsPage({ events }) {
    const sortedEvents = events.sort(function (a: any, b: any) {
        const firstItem: any = new Date(a.date)
        const secondItem: any = new Date(b.date)
        return firstItem - secondItem;
    });
    console.log(sortedEvents)
    return (
        <div className='sm:w-2/3 lg:w-1/2 m-auto grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-1 p-5 font-sans'>
            <div className=''>
                {/* <Image
                    {...authorImageProps}
                    sizes='(max-width: 300px) 100vw, 300px'
                    layout='responsive'
                    alt='book image'
                /> */}
            </div>
            <div className='space-y-3 text-xl'>
                <h1 className='text-3xl mt-4'>My Upcoming Events</h1>
                <div>
                    {events?.length > 0 ? (
                        events?.map((event: any) => (
                            <EventCard key={event._id} event={event} emptyCard={false} />
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

export default EventsPage;

EventsPage.getInitialProps = async ctx => {
    const events = await client
        .fetch(
            groq`
	*[_type=="event"] 
	`
        )
        .catch(console.error)

    return { events }
}
