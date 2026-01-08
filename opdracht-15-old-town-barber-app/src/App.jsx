import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserProfile from './components/UserProfile';
import ShopInfo from './components/ShopInfo';
import BookingForm from './components/BookingForm';
import BookingsList from './components/BookingsList';

import {
  getUserProfile,
  saveUserProfile,
  getAppointments,
  saveAppointments
} from './utils/localStorage.js';

import './App.css';

function App() {
  const [userProfile, setUserProfile] = useState(() => getUserProfile());
  const [appointments, setAppointments] = useState(() => getAppointments());
  const [showProfile, setShowProfile] = useState(() => !getUserProfile());

  // profiel opslaan
  useEffect(() => {
    if (userProfile) {
      saveUserProfile(userProfile);
    }
  }, [userProfile]);

  // afspraken opslaan
  useEffect(() => {
    saveAppointments(appointments);
  }, [appointments]);

  const handleProfileSave = (profile) => {
    setUserProfile(profile);
    setShowProfile(false);
    toast.success('Profiel opgeslagen!');
  };

  const handleBooking = (booking) => {
    if (!userProfile) {
      toast.error('Maak eerst een profiel aan');
      setShowProfile(true);
      return;
    }

    const newAppointment = {
      id: Date.now(),
      ...booking,
      userName: userProfile.name,
      createdAt: new Date().toISOString(),
    };

    setAppointments(prev => [...prev, newAppointment]);
    toast.success('Afspraak geboekt!');
  };

  const handleDeleteAppointment = (id) => {
    setAppointments(prev => prev.filter(app => app.id !== id));
    toast.info('Afspraak verwijderd');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" />

      <header className="flex justify-between items-center p-4 bg-gray-200 shadow">
        <h1 className="text-2xl font-bold">Old Town Barber</h1>

        <button
          onClick={() => setShowProfile(!showProfile)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {userProfile ? 'Bewerk profiel' : 'Maak profiel'}
        </button>
      </header>

      {showProfile && (
        <div className="p-4 bg-white shadow rounded m-4">
          <UserProfile
            initialData={userProfile}
            onSave={handleProfileSave}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="space-y-4">
          <ShopInfo />
          <BookingForm onBook={handleBooking} />
        </div>

        <BookingsList
          appointments={appointments}
          onDelete={handleDeleteAppointment}
        />
      </div>
    </div>
  );
}

export default App;
