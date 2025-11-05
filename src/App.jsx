import React from 'react';
import Navbar from './components/Navbar';
import ShadowHero from './components/ShadowHero';
import Shades from './components/Shades';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Navbar />
      <ShadowHero />
      <Shades />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
