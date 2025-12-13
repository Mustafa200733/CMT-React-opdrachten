// User Profile opslaan
export const saveUserProfile = (profile) => {
  localStorage.setItem('userProfile', JSON.stringify(profile));
};

// User Profile ophalen
export const getUserProfile = () => {
  const profile = localStorage.getItem('userProfile');
  return profile ? JSON.parse(profile) : null;
};

// Appointments opslaan
export const saveAppointments = (appointments) => {
  localStorage.setItem('appointments', JSON.stringify(appointments));
};

// Appointments ophalen
export const getAppointments = () => {
  const appointments = localStorage.getItem('appointments');
  return appointments ? JSON.parse(appointments) : [];
};