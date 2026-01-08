import { useState } from 'react';
import { toast } from 'react-toastify';

const UserProfile = ({ initialData, onSave }) => {
  const [name, setName] = useState(initialData?.name || '');
  const [email, setEmail] = useState(initialData?.email || '');
  const [phone, setPhone] = useState(initialData?.phone || '');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error('Vul alle velden in!');
      return;
    }

    onSave({ name, email, phone });
    toast.success('Profiel opgeslagen!');
  };

  return (
    <section className="p-4 bg-white shadow rounded">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h2 className="text-xl font-bold">Jouw Profiel</h2>

        <input
          type="text"
          placeholder="Naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"/>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded" />

        <input
          type="tel"
          placeholder="Telefoon"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded"/>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Opslaan
        </button>
      </form>
    </section>
  );
};

export default UserProfile;

