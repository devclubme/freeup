import { useState } from 'react';
import {Head} from "next/document";

import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import Mentor from '../components/mentor/Mentor';
import Navbar from '../components/navbar/Navbar';
import Offer from '../components/offer/Offer';
import Period from '../components/period/Period';
import Reward from '../components/reward/Reward';
import Sidebar from '../components/sidebar/Sidebar';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>FreeUP</title>
      </Head>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
          <Hero/>
          <Offer/>
          <Period/>
          <Mentor/>
          <Reward/>
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;
