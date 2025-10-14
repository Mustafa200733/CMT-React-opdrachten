import { useState, useEffect } from 'react';

function WelcomeMessage() {
  const [message, setMessage] = useState('Welkom!');

  useEffect(() => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    let newMessage = '';

    if (hours < 12) {
      newMessage = 'Goedemorgen!';
    } else if (hours < 18) {
      newMessage = 'Goedemiddag!';
    } else {
      newMessage = 'Goedenavond!';
    }

    setMessage(newMessage);
  }, []);

  return (
    <section className="WelcomeMessage">
      <p>{message}</p>
    </section>
  );
}

export default WelcomeMessage;
