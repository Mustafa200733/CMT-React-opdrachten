import { useState } from 'react';

const BookingForm = ({ onBook }) => {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const services = ['Knippen', 'Baard trimmen', 'Knippen + Baard', 'Hot Towel Shave'];
  const timeSlots = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!service || !date || !time) {
      alert('Vul alle velden in!');
      return;
    }
    
    onBook({ service, date, time });
    
    setService('');
    setDate('');
    setTime('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold mb-2">Boek je Afspraak</h2>
      
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Kies een service</option>
        {services.map(s => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        min={new Date().toISOString().split('T')[0]}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <select
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Kies een tijd</option>
        {timeSlots.map(t => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-2 rounded hover:bg-blue-600 transition"
      >
        Boek Afspraak
      </button>
    </form>
  );
};

export default BookingForm;
