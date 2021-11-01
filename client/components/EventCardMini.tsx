import React from 'react'
import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { displayLocalTimeZone } from '../lib/timeFormats'
import { client } from '../lib/sanity'

const EventCardMini
    = ({ event, emptyCard = false }) => {
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
                    </div>
                </div>
            </div>
        )
    }

export default EventCardMini

