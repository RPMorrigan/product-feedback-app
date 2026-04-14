import { useState, useEffect } from "react";
import '../index.css';
import Card from '../components/Card';
import FilterButton from "../components/FilterButton";
import { useNavigate } from 'react-router-dom';

// pages/Home.jsx
export default function Home() {

  // Allows us to use buttons as links through an onClick arrow function
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState([]);
  const [filters, setFilters] = useState([]);

  const fetchSuggestions = async () => {
    const response = await fetch("/api/get-all-suggestions");
    const data =  await response.json();

    setSuggestions(data);

  }; 

  const fetchFilters = async () => {
    const response = await fetch("/api/get-all-categories");
    const data = await response.json();

    setFilters(data);

  };

  const changeFilter = async (filter) => {
    if (filter === 'All') {
      fetchSuggestions();
    } else {
      const response = await fetch(`/api/get-suggestions-by-category/${filter}`)
      const data = await response.json();

      setSuggestions(data);
    }
};

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchFilters()
    fetchSuggestions()
  }, []);

  return <div className="home-body">

    <div className="suggestion-nav">
      <h4>Suggestions</h4>
      <button className="add-button big-button" onClick={() => navigate('/AddFeedback')}>+ Add Feedback</button>
    </div>
  
    <div className="filter-buttons-wrap">
      {filters.map(f => {
        return <FilterButton key={`filt${f.category_id}`} filter={f} onClick={() => changeFilter(f.category_name)} />
      })}
    </div>

    <div className="request-wrapper">
      {suggestions.map(s => {
        return <Card key={`cardNum${s.id}`} suggestion={s} />
      })}

      <h2>There is no feedback yet.</h2>
      <p className="body-txt1">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>

      <button className="add-button big-button button1" onClick={() => navigate('/AddFeedback')}>+ Add Feedback</button>
    </div>

  </div>
}
