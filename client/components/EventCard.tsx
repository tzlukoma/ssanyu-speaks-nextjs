import React from 'react'
import Image from 'next/image'
import BlockContent from '@sanity/block-content-to-react'
import { useNextSanityImage } from 'next-sanity-image'
import { displayLocalTimeZone } from '../lib/timeFormats'
import CustomLink from '../components/CustomLink'
import { client } from '../lib/sanity'

const EventCard = ({ event, emptyCard = false }) => {
    const cardImageProps = useNextSanityImage(
        client,
        event.thumbnail
    )
    return (
        <div key={event._id} className='event-wrapper'>
            <div className='next-image-container event-image-wrapper'>
                <Image
                    {...cardImageProps}
                    className='next-image event-image'
                    layout='fill'
                    alt='event thumbnail'
                />
            </div>
            <div className="event-content">
                <div className="event-header">
                    <h2 className='event-title'>
                        {emptyCard ? <>There are no upcoming events</> : event?.title}
                    </h2>
                    <h3 className='event-time'>
                        {`${displayLocalTimeZone(event?.date, 'MMMM Do YYYY, h:mm a')}`}
                    </h3>
                    <div className='event-location'>{`${event?.location}`}</div>
                    {event?.registrationUrl && (
                        <CustomLink
                            className=''
                            destination={event.registrationUrl}
                            noPadding
                            borderBottom={false}
                            active={false}
                        >
                            <button style={{ marginLeft: 0, cursor: 'pointer' }}>Register for Event</button>
                        </CustomLink>
                    )}
                </div>
            </div>
            <div className='event-description-wrapper'>
                {emptyCard ? null : (
                    <>

                        {event.synopsis ? (
                            <div className='event-description'>
                                <BlockContent
                                    className='prose prose-lg 2xl:prose-xl'
                                    blocks={event.synopsis}
                                />
                            </div>
                        ) : null}


                    </>
                )}
            </div>
        </div>
    )
}

export default EventCard
