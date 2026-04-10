import { useState, useEffect } from "react";
import '../index.css';
import Card from '../components/Card';

// pages/Home.jsx
export default function Home() {

  const [suggestions, setSuggestions] = useState([]);
  // const [filters, setFilters] = useState([]);

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

    <div className="suggestion-nav">
      <h4>Suggestions</h4>
      <button className="add-button big-button">+ Add Feedback</button>
    </div>
  
    <div className="filter-buttons-wrap">
      <button className="filter-button button5">All</button>
      <button className="filter-button button5">UI</button>
      <button className="filter-button button5">UX</button>
      <button className="filter-button button5">Enhancement</button>
      <button className="filter-button button5">Bug</button>
      <button className="filter-button button5">Feature</button>
    </div>

    <div className="request-wrapper">
      {suggestions.map(s => {
        <Card suggestion={s} />
      })}

      <h2>There is no feedback yet.</h2>
      <p className="body-txt1">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>

      <button className="add-button big-button button1">+ Add Feedback</button>
    </div>

  </div>
}
