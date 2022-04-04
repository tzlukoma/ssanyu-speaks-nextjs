import React from 'react'
import groq from 'groq'
import { client } from '../lib/sanity'
import EventCard from '../components/EventCard'

function EventsPage({ upcomingEvents, pastEvents }) {
    const sortedUpcomingEvents = upcomingEvents?.sort(function (a: any, b: any) {
        const firstItem: any = new Date(a.date)
        const secondItem: any = new Date(b.date)
        return firstItem - secondItem;
    });
    const sortedPastEvents = pastEvents?.sort(function (a: any, b: any) {
        const secondItem: any = new Date(a.date)
        const firstItem: any = new Date(b.date)
        return firstItem - secondItem;
    });
    return (
        <div className='sm:w-2/3 lg:w-1/2 m-auto grid lg:grid-cols-2 grid-cols-1 grid-rows-1 gap-1 p-5 font-sans'>
            <div className='space-y-3 text-xl'>
                <h1 className='text-3xl mt-4'>My Upcoming Events</h1>
                <div>
                    {sortedUpcomingEvents?.length > 0 ? (
                        sortedUpcomingEvents?.map((event: any) => (
                            <EventCard key={event._id} event={event} emptyCard={false} />
                        ))
                    ) : (
                        <div className='event-wrapper'>
                            <div className="event-none">No upcoming events</div>
                        </div>
                    )}
                </div>
            </div>
            <div className='space-y-3 text-xl'>
                <h1 className='text-3xl mt-4'>Past Events</h1>
                <div>
                    {sortedPastEvents?.length > 0 && (
                        sortedPastEvents?.map((event: any) => (
                            <EventCard key={event._id} event={event} emptyCard={false} />
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}

export default EventsPage;

EventsPage.getInitialProps = async ctx => {
    const [upcomingEvents, pastEvents] = await Promise.all([
        client
            .fetch(
                groq`
	*[_type =="event" && status == "scheduled"]`
            )
            .catch(console.error),
        client
            .fetch(
                groq`
	*[_type =="event" && status == "completed"]`
            )
            .catch(console.error),
    ])
    return { upcomingEvents, pastEvents }
}
