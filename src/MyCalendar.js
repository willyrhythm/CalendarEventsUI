import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = ({ events }) => {

  const handleEventSelect = (event) => {
    // Assuming event.start and event.end are Date objects
    const oneHour = 60 * 60 * 1000; // milliseconds in an hour

    const eventBefore = {
      title: 'Before Event',
      start: new Date(event.start.getTime() - oneHour),
      end: new Date(event.start.getTime()),
    };

    const eventAfter = {
      title: 'After Event',
      start: new Date(event.end.getTime()),
      end: new Date(event.end.getTime() + oneHour),
    };

    console.log('Event Selected:', event)
    console.log('Event Before:', eventBefore);
    console.log('Event After:', eventAfter);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleEventSelect}
        style={{ height: 500 }}
        // ... other props
      />
    </div>
  );
};

export default MyCalendar;
