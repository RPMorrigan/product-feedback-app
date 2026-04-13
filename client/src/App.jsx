import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddFeedback from './pages/AddFeedback';
import About from './pages/About';
import './index.css';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <h1>
            <Link to="/" className="my-company">My Company</Link>
            </h1>
          </li>
          <li>
            <h2>
            <Link to="/about" className="feedback">Feedback Board</Link>
            </h2>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/AddFeedback" element={<AddFeedback />} />
      </Routes>
    </div>
  );
}

export default App;
