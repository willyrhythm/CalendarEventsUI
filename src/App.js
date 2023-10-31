import React, { useState, useEffect } from 'react';
import MyCalendar from './MyCalendar';
import axios from 'axios';

const App = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from your API
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://a1d13nt7dj.execute-api.ca-central-1.amazonaws.com/prod/events');
        const formattedEvents = response.data.map(event => ({
          ...event,
          start: new Date(event.startDateTime),
          end: new Date(event.endDateTime)
        }));
        setEvents(formattedEvents);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return <MyCalendar events={events} />;
};

export default App;
