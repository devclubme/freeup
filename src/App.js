import React from 'react';
import Footer from 'components/footer/Footer';
import Hero from 'components/hero/Hero';
import Mentor from 'components/mentor/Mentor';
import Navbar from 'components/navbar/Navbar';
import Offer from 'components/offer/Offer';
import Period from 'components/period/Period';
import Reward from 'components/reward/Reward';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="sections">
        <Hero />
        <Offer />
        <Period />
        <Mentor />
        <Reward />
      </div>
      <Footer />
    </div>
  );
};

export default App;
