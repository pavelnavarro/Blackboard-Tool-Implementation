import React from 'react';
import { Link } from 'react-router-dom';

const RespondusLockdown: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-end mb-4">
        <Link to="/" className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700 text-sm">Back</Link>
      </div>
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">LockDown Browser</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Overview</h2>
            <img src="https://ssc.cybershare.utep.edu/img/utep-logo.png" alt="Overview" className="mb-4 mx-auto"/>
            <p className="text-center">This brief video explains the basic features of LockDown Browser and why it’s used at your institution.</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Version</h2>
            <img src="https://ssc.cybershare.utep.edu/img/utep-logo.png" alt="Version" className="mb-4 mx-auto"/>
            <p className="text-center">
              Version: 2.1.2.08<br />
              Your system: Windows 10<br />
              Download size: 122.0 MB<br />
              System requirements<br />
              <br />
              <a href="#" className="text-blue-600 underline">Do you need the Mac version?</a>
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-xl font-bold mb-4 text-center">Download</h2>
            <p className="text-center">Download LockDown Browser for:</p>
            <p className="text-center font-bold mb-4">University of Texas - El Paso</p>
            <button className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">DOWNLOAD</button>
            <p className="mt-4 text-xs text-gray-600 text-center">
              Note: Your antivirus software must allow you to install software.<br />
              By clicking the "Download" button, you acknowledge that you have read and agree to the Respondus Inc. License Agreement.
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Copyright © 2024 Respondus, Inc. All rights reserved.<br />
          <a href="#" className="text-blue-600 underline">Privacy & Cookies</a>
        </p>
      </div>
    </div>
  );
};

export default RespondusLockdown;
