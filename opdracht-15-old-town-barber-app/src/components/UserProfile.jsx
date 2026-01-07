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
<section>
 
    <form
      onSubmit={handleSubmit}
    >
      <h2>Jouw Profiel</h2>
      
      <input
        type="text"
        placeholder="Naam"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      
      <input
        type="tel"
        placeholder="Telefoon"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      
      <button
        type="submit"
      >
        Opslaan
      </button>
    </form>
    </section>

  );
};

export default UserProfile;
