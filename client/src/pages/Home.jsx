import { useState, useEffect } from "react";
import '../index.css';
import Card from '../components/Card';

// pages/Home.jsx
export default function Home() {

  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async () => {
    const response = await fetch('api/get-all-suggestions');
    const data =  await response.json();

    setSuggestions(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchSuggestions()
  }, []);

  return <div className="home-body">
  
    <div className="filter-buttons">
      <button>All</button>
      <button>UI</button>
      <button>UX</button>
      <button>Enhancement</button>
      <button>Bug</button>
      <button>Feature</button>
    </div>

    <div className="requests-wrapper">
      {suggestions.map(s => {
        <Card suggestion={s} />
      })}
    </div>

  </div>
}
