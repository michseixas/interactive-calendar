import React, { useState } from "react";
import Calendar from "react-calendar";
import "./App.css";
import "react-calendar/dist/Calendar.css";
import EventModal from "./EventModal";

function App() {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleDateClick = (value) => {
    setSelectedDate(value);
    setShowModal(true);
  };

  const addEvent = (event) => {
    const dateKey = selectedDate.toDateString();
    setEvents((prev) => ({
      ...prev,
      [dateKey]: [...(prev[dateKey] || []), event],
    }));
    setShowModal(false);
  };

  return (
    <div className="app">
      <h1>Calendar App</h1>
      <Calendar onClickDay={handleDateClick} value={date} />
      {showModal && (
        <EventModal
          date={selectedDate}
          onClose={() => setShowModal(false)}
          onSave={addEvent}
        />
      )}
      <div className="events">
        {Object.entries(events).map(([date, events]) => (
          <div key={date}>
            <h3>{date}</h3>
            <ul>
              {events.map((event, index) => (
                <li key={index} style={{ color: event.color }}>
                  {event.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;