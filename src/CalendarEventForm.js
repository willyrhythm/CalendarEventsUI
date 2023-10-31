import React, { useState } from 'react';
import axios from 'axios';

// need to add input fields before this page is complete
const CalendarEventForm = ({ onEventCreated }) => {
    const [eventData, setEventData] = useState({
        title: '',
        startDateTime: '',
        endDateTime: '',
        description: '',
    });

    const handleInputChange = (e) => {
        setEventData({ ...eventData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://a1d13nt7dj.execute-api.ca-central-1.amazonaws.com/prod/events', eventData);
            console.log(response.data);
            onEventCreated();
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields for event data */}
            <input
                name="title"
                value={eventData.title}
                onChange={handleInputChange}
            />
            {/* Similar inputs for startDateTime, endDateTime, description */}
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CalendarEventForm;