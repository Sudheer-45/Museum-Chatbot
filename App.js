import React from 'react';
import TicketBookingChatbot from './ChatbotComponent';  // Correct way to import default exports


function App() {
  return (
    <div className="App">
      <h1>Museum Ticket Booking</h1>
      <TicketBookingChatbot />
    </div>
  );
}

export default App;
