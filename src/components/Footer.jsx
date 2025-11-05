import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hackathon Project — Crafted by Students.
      </div>
    </footer>
  );
};

export default Footer;
