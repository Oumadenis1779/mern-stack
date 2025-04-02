import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="p-4">
              <h1>Home Page</h1>
              {/* Your home page content */}
            </div>
          } />
          <Route path="/create" element={
            <div className="p-4">
              <h1>Add Product Page</h1>
              {/* Your add product form */}
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;