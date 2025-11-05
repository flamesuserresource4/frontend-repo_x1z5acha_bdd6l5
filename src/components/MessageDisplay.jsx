import React from 'react';

const MessageDisplay = ({ message }) => {
  if (!message) return null;
  return (
    <div className="mx-auto mt-10 w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <p className="text-center text-xl font-semibold text-gray-900">Your message</p>
      <p className="mt-3 break-words text-center text-lg text-gray-700">{message}</p>
    </div>
  );
};

export default MessageDisplay;
