import React from 'react';
import { Link } from 'react-router-dom';

const YujaCreateRecording: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-end mb-4">
        <Link to="/" className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-sm">Back</Link>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-6">Create Recording</h2>
        <div className="bg-white p-8 rounded shadow w-full max-w-lg">
          <div className="mb-4">
            <label htmlFor="recordingOptions" className="block text-gray-700 mb-2">Choose Recording Option:</label>
            <select id="recordingOptions" className="w-full p-2 border border-gray-300 rounded">
              <option>Record from your Windows PC or Mac</option>
              <option>Record with Browser Capture Studio</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Start</button>
          <p className="mt-4 text-center text-sm text-gray-500">First time user? <a href="#" className="text-blue-600 underline">Download</a> and install</p>
        </div>
      </div>
    </div>
  );
};

export default YujaCreateRecording;
