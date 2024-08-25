import React from 'react';
import { Link } from 'react-router-dom';

const YujaManageMedia: React.FC = () => {
  return (
    <div className="flex flex-col h-full mt-6"> {/* Added mt-4 for margin-top */}
      <div className="flex justify-between items-center bg-gray-950 text-white p-4 mb-4"> {/* Añadido margen inferior */}
        <h1 className="text-2xl font-bold">Media Library</h1>
        <Link to="/" className="text-white">Back</Link>
      </div>
      <div className="flex flex-1">
        <aside className="bg-gray-950 text-white w-64 p-4">
          <nav>
            <ul className="space-y-2">
              <li><a href="#" className="block py-2">My Media</a></li>
              <li><a href="#" className="block py-2">Default Collection</a></li>
              <li><a href="#" className="block py-2">Shared With Me</a></li>
              <li><a href="#" className="block py-2">Favorites</a></li>
              <li><a href="#" className="block py-2">Shared With Others</a></li>
              <li><a href="#" className="block py-2">Playlists</a></li>
              <li className="font-bold mt-4">SHARED</li>
              <li><a href="#" className="block py-2">UTEP CampusTube</a></li>
              <li><a href="#" className="block py-2">Shared Folders</a></li>
              <li><a href="#" className="block py-2">All Channels</a></li>
            </ul>
          </nav>
        </aside>
        <div className="flex-1 p-6 bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Default Collection</h2>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Manage Media</button>
              <button className="bg-blue-600 text-white py-2 px-4 rounded">Create Recording</button>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">
              <div className="h-24 bg-gray-300 mb-2"></div>
              <p>Kelly Center Interpersonal skills</p>
              <p className="text-gray-500 text-sm">4 months ago</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="h-24 bg-gray-300 mb-2"></div>
              <p>Harriet Tubman Video</p>
              <p className="text-gray-500 text-sm">5 months ago</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="h-24 bg-gray-300 mb-2"></div>
              <p>My Event on Saturday</p>
              <p className="text-gray-500 text-sm">6 months ago</p>
            </div>
            <div className="bg-white p-4 rounded shadow">
              <div className="h-24 bg-gray-300 mb-2"></div>
              <p>HW8 CLASSES AND OBJECTS</p>
              <p className="text-gray-500 text-sm">8 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YujaManageMedia;
