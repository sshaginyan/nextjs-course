import { useRouter } from 'next/router';


import EventSummary from '../../components/event-detail/event-summary';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventContent from '../../components/event-detail/event-content';

import { getEventById } from '../../dummy-data';

function EventDetailPage() {
    
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    
    if(!event) {
        return <p>No event found!</p>
    }
    
    return (
        <div>
            <EventSummary title={event.title} />
            <EventLogistics data={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </div>
    );
}

export default EventDetailPage;