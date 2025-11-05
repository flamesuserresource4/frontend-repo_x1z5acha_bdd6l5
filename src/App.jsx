import Navbar from './components/Navbar';
import ShadowHero from './components/ShadowHero';
import Shades from './components/Shades';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';

function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950 py-10 text-zinc-400">
      <div className="mx-auto max-w-6xl px-6 text-sm">
        <p>© {new Date().getFullYear()} Lord of Shadows. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <ShadowHero />
      <main>
        <Shades />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
