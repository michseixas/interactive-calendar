import React, { useState } from "react";

function EventModal({ date, onClose, onSave }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSave = () => {
    onSave({ name, color });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Event for {date.toDateString()}</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EventModal;