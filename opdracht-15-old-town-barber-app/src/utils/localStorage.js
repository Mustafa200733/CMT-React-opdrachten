export const saveUserProfile = (profile) => {
  localStorage.setItem('userProfile', JSON.stringify(profile));
};

export const getUserProfile = () => {
  const profile = localStorage.getItem('userProfile');
  return profile ? JSON.parse(profile) : null;
};

export const saveAppointments = (appointments) => {
  localStorage.setItem('appointments', JSON.stringify(appointments));
};

export const getAppointments = () => {
  const appointments = localStorage.getItem('appointments');
  return appointments ? JSON.parse(appointments) : [];
};

