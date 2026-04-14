import Categories from "../components/Categories"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AddFeedback() {

    // Allows us to use buttons as links through an onClick arrow function
    const navigate = useNavigate();

    // Where we store the requested categories
    const [categories, setCategories] = useState([]);

    // Where we store our form data
    const [formData, setFormData] = useState({
        feedback_title: '',
        category: '',
        feedback_detail: ''
    });

    // Requests categories from the categories table. Then ignores the first category, 'All' and provides the corrected array to generate the appropriate options in the dropdown menu/selector
    const fetchCategories = async () => {
        const response = await fetch("api/get-all-categories");
        const data = await response.json();

        // Slice tells the new array to begin an the specified position in the array
        const noAll = data.slice(1);
        setCategories(noAll);

    };

    // Updates our useState whenever user input changes.
    const inputHandler = (e) => {
        const { name, value } = e.target;
        // Iterates through previous data then dynamically replaces key pair values.
        setFormData({ ...formData, [name]: value });
    }

    const storeFormData = async (formData) => {
        const response = await fetch(
            'api/add-suggestion',
        {
            // Request Type
            method: 'POST',
            headers: {
            'Content-type': 'application/json',
            },
            
            // Converts to string
            body: JSON.stringify(
                {
                    feedback_title: formData.feedback_title,
                    category: formData.category,
                    feedback_detail: formData.feedback_detail,
                }),
            }
        );

        const result = await response.text();
        console.log('result', result);

        return response;

    };

    const submitHandler = async (e) => {
        e.preventDefault();

        console.log('submission:', formData);

        // Calls function to store the data at this point
        const response = await storeFormData(formData);

        // Resets the form
        setFormData({
            feedback_title: '',
            category: '',
            feedback_detail: ''
        });

        if (response.ok) {
            navigate('/');
        }
    }

    // Makes sure to load categories every time someone visits the page.
    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        fetchCategories();
    },[]);

    return (
        <>
            <button className="button big-button big-button3" onClick={() => navigate('/')}>‹<span>Go Back</span></button>

            {/* Wrap used for easier styling */}
            <div className="form-wrap">
                <form onSubmit={submitHandler}>

                    <h3>Create New Feedback</h3>
                    <label htmlFor="feedback_title">
                        <h4>Feedback Title</h4>
                        <p className="body-txt2 grey-txt">
                            Add a short, descriptive headline
                        </p>
                    </label>
                    <input
                        type="text"
                        name="feedback_title"
                        value={formData.feedback_title}
                        onChange={inputHandler} />

                    <label htmlFor="category">
                        <h4>Category</h4>
                        <p className="body-txt2 grey-txt">
                            Choose a category for your feedback
                        </p>
                    </label>
                    <select
                        onChange={inputHandler}
                        name="category"
                        id="category"
                        value={formData.category}>
                        
                        {categories.map(c => <Categories key={`catNum${c.category_id}`} onChange={inputHandler} 
                            category={c} />)}
                        
                    </select>
                    
                    <label htmlFor="feedback_detail">
                        <h4>Feedback Detail</h4>
                        <p className="body-txt2 grey-txt">Include any specific comments on what should be improved, added, etc.</p>
                    </label>
                    <textarea
                        name="feedback_detail"
                        id="feedback_detail"
                        onChange={inputHandler}
                        value={formData.feedback_detail}>
                        </textarea>

                    {/* This submits all of the input from each field */}
                    <button type="submit" className="button small-button button1">Submit Feedback</button>

                    {/* This is just a link back to the home page if a user decides they would rather not submit anything. */}
                    <button className="button small-button button3" onClick={() => navigate('/')}>Cancel</button>
                </form>
            </div>

        </>
    )
}