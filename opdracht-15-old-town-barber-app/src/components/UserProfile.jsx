import { useState } from 'react';

const UserProfile = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [phone, setPhone] = useState(initialData?.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email || !phone) {
      alert('Vul alle velden in!');
      return;
    }
    
    onSave({ name, email, phone });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-xl rounded-lg space-y-4 max-w-md mx-auto border border-gray-200"
    >
      <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">Jouw Profiel</h2>
      
      <input
        type="text"
        placeholder="Naam"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <input
        type="tel"
        placeholder="Telefoon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg shadow hover:bg-blue-600 transition transform hover:-translate-y-1"
      >
        Opslaan
      </button>
    </form>
  );
};

export default UserProfile;
