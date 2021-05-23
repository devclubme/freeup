import { useState } from 'react';
import Head from 'next/head';

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
        <meta
          name="description"
          content="FreeUP je informativna i praktična obuka za sve mlade na početku karijere koji žele da se oprobaju kao frilenseri na globalnom tržištu."
        />
        {/* TODO: use actual url */}
        <meta property="og:url" content="https://elastic-almeida-b7f4be.netlify.app"/>
        <meta property="og:title" content="FreeUP" />
        <meta
          property="og:description"
          content="FreeUP je informativna i praktična obuka za sve mlade na početku karijere koji žele da se oprobaju kao frilenseri na globalnom tržištu."
        />
        <meta
          property="og:image"
          content="https://elastic-almeida-b7f4be.netlify.app/assets/freeup-logo.png"
        />
      </Head>
      <div className="app">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Sidebar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Hero />
          <Offer />
          <Period />
          <Mentor />
          <Reward />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
