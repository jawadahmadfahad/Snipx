import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Editor from './pages/Editor';
// import Options from './pages/Options'; // Remove old import
import Features from './pages/Features'; // Import the new Features component
import Technologies from './pages/Technologies';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col"> {/* Changed bg-gray-50 to bg-gray-100 for slightly darker background */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="*"
            element={
              <>
                <Navbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
                <main className="flex-grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/technologies" element={<Technologies />} />
                    <Route path="/editor" element={<Editor />} />
                    {/* <Route path="/options" element={<Options />} /> */} {/* Remove old route */}
                    <Route path="/features" element={<Features />} /> {/* Add new route */}
                  </Routes>
                </main>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
