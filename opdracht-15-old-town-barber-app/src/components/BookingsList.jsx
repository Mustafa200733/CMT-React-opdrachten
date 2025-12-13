const BookingsList = ({ appointments, onDelete }) => {
  if (appointments.length === 0) {
    return <p className="text-gray-500">Geen afspraken geboekt</p>;
  }

  return (
    <section className="p-4 bg-white shadow rounded space-y-4">
      <h2 className="text-xl font-bold mb-2">Jouw Afspraken</h2>
      
      {appointments.map(appointment => (
        <div key={appointment.id} className="p-3 border border-gray-200 rounded flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{appointment.service}</h3>
            <p>Datum: {appointment.date}</p>
            <p>Tijd: {appointment.time}</p>
            <p>Voor: {appointment.userName}</p>
          </div>
          <button
            onClick={() => onDelete(appointment.id)}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Verwijderen
          </button>
        </div>
      ))}
    </section>
  );
};

export default BookingsList;
