import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import YujaManageMedia from './pages/YujaManageMedia';
import YujaCreateRecording from './pages/YujaCreateRecording';
import RespondusLockdown from './pages/RespondusLockdown';

const App: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:4000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const createProduct = async (name: string) => {
    try {
      const response = await fetch('http://localhost:4000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });
      const data = await response.json();
      fetchProducts(); // Refresh the products list
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await fetch(`http://localhost:4000/products/${id}`, {
        method: 'DELETE',
      });
      fetchProducts(); // Refresh the products list
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <Router>
      <div className="flex h-screen">
        <aside className="bg-blue-950 text-white w-64 p-4 flex flex-col z-10 relative h-screen">
          <nav>
            <ul className="space-y-2">
              <li className="flex flex-col items-center">
                <img src="https://ssc.cybershare.utep.edu/img/utep-logo.png" alt="Logo" className="h-10 mb-2" />
                <a href="#" className="text-2xl text-white text-center">Blackboard</a>
              </li>
              <li><Link to="/" className="block py-2">Institution Page</Link></li>
              <li><Link to="/" className="block py-2">Activity Stream</Link></li>
              <li><Link to="/" className="block py-2">Courses</Link></li>
              <li><Link to="/" className="block py-2">Calendar</Link></li>
              <li><Link to="/" className="block py-2">Messages</Link></li>
              <li><Link to="/" className="block py-2">Grades</Link></li>
              <li><Link to="/" className="block py-2">Tools</Link></li>
              <li><Link to="/" className="block py-2">Sign Out</Link></li>
            </ul>
          </nav>
        </aside>
        <div className="flex flex-col flex-1">
          <header className="relative">
            <img src="https://www.utep.edu/engineering/mmlde/_Files/Centennial-Plaza-after.jpg" alt="Header Image" className="w-full h-48 object-cover" />
            <div className="absolute top-0 left-0 w-full h-48"></div>
            <div className="absolute top-0 left-0 w-full h-48 flex justify-between items-center p-4">
              <img src="https://ssc.cybershare.utep.edu/img/utep-logo.png" alt="Logo" className="h-10" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-4" style={{ background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))' }}>
              <h1 className="text-3xl text-white font-serif">The University of Texas at El Paso</h1>
            </div>
          </header>
          <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
            <div className="container mx-auto">
              <div className="mb-4">
                <SearchBar onSearch={(term) => {
                  if (term === 'Yuja Manage Media') {
                    window.location.href = '/yuja-manage-media';
                  } else if (term === 'Yuja Create Recording') {
                    window.location.href = '/yuja-create-recording';
                  } else if (term === 'Respondus Lockdown') {
                    window.location.href = '/respondus-lockdown';
                  }
                }} />
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-semibold mb-4">Product List</h2>
                <ul className="space-y-2">
                  {products.map((product) => (
                    <li key={product._id} className="flex justify-between items-center p-2 bg-white rounded shadow">
                      {product.name}
                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </li>
                  ))}
                </ul>
                <button onClick={() => createProduct('New Product')} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 mt-4 rounded">Add Product</button>
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/yuja-manage-media" element={<YujaManageMedia />} />
                <Route path="/yuja-create-recording" element={<YujaCreateRecording />} />
                <Route path="/respondus-lockdown" element={<RespondusLockdown />} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex space-x-6 mt-6">
        <section className="w-2/3 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Courses</h2>
          <ul className="mt-4 space-y-2">
            <li>Calculus II</li>
            <li>Data Structures</li>
            <li>Digital Systems Design</li>
            <li>ESOL</li>
          </ul>
        </section>
        <section className="w-1/3 bg-white p-4 rounded shadow">
          <h2 className="text-xl font-bold">Upcoming</h2>
          <ul className="mt-4 space-y-2">
            <li>Fall classes begin</li>
            <li>Labor Day holiday</li>
            <li>Fall Census Day</li>
            <li>Freshman Midterm grades</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default App;
