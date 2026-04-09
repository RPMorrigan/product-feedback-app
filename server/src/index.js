// Necessary imports
import express from "express";
import pg from "pg";

// Boilerplate code to connect to the database
const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

const app = express();
app.use(express.json());

const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Helper functions
// ------------------------------------------------------------

// 1.Get all suggestions
const getAllSuggestions = async () => {

    let query = await db.query(
        `
        SELECT *
        FROM suggestions
        `);

    return query.rows;
    
}

// 2. Get suggestions by category
const getSuggestionsByCategory = async (category) => { 

    let query = await db.query(
        `
        SELECT *
        FROM suggestions
        WHERE category = $1`, [category]
    );

    return query.rows;
}

// 3. Add a suggestion
const addSuggestion = async (feedback_title, category, feedback_detail) => {

    let query = await db.query(
        `
        INSERT INTO suggestions (feedback_title, category, feedback_detail)
        VALUES ($1, $2, $3)`, [feedback_title, category, feedback_detail]
    );

    console.log(`Suggestion was added succesfully!`);

    return (`Suggestion was added succesfully!`);

}

// Personal Bonus ◊
// Add Category
const addCategory = async (category) => {
    let query = await db.query(
        `
        INSERT INTO categories (category)
        VALUES ($1)`, [category]
    );

    console.log('Category was succesfully added!');

    return ('Category was succesfully added!');
}


// ------------------------------------------------------------
// These are the endpoints for my Product Feedback App API

// 1.Get all suggestions
app.get('/get-all-suggestions', async (req, res) => {
    try {

        const result = await getAllSuggestions();

        res.json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occurred while fetching suggestions, ${error.message}`);
    }
});

// 2. Get suggestions by category
app.get('/get-suggestions-by-category/:category', async (req, res) => {

    try {

        let category = req.params.category;

        const result = await getSuggestionsByCategory(category);
        
        res.json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occurred while fetching suggestions by category:, ${error.message}`);    }
});

// 3. Add a suggestion

app.post('/add-suggestion', async (req, res) => {

    try {
    
        const { feedback_title, category, feedback_description } = req.body;

        const result = await addSuggestion(feedback_title, category, feedback_description);

        res.send(result);

    } catch (error) {
        console.error(error);
        res.status(500).json(`An error occurred during attempt to add suggestion:, ${error.message}`);
    }

});

// Personal Bonus ◊
// Add Category

app.post('/add-category', async (req, res) => {
    
    try {

        const { category } = req.body;
        
        const result = await addCategory(category);
        res.send(result);

    } catch (error) {
    console.error(error);
    res.status(500).json(`An error occurred during attempt to add a category:, ${error.message}`);
    }
    
})