# 📝 Product-feedback-app

## 📌 Project Description & Purpose

This project exhibits my skills as a fullstack engineer. You'll be able to add data and see it rendered in adition to the stock data already loaded into the application. It features a persistent navigation pane, as well as variable pages.

## 🚀 Live Site

Here's the link to view the live app: https://priss-product-feedback-app.netlify.app/

## 🖼️ Screenshots

![mobile site](https://i.imgur.com/vedFd8J.png) ![add page](https://i.imgur.com/WAhyLtH.png)

## ✨ Features

This is what you can do on the app: 
- Browse suggestions formatted into cards.
- These cards automatically generate for each entry in our database.
- Add feedback. The app provides you with a form you can use to enter your own suggestions.
- See your feedback rendered on the main page. The app will automatically load your new suggestion from the database when you return to the main page.

## 🛠️ Tech Stack

**Frontend**

- **Languages:** HTML5, CSS/SASS, JS, Markdown
- **Framework:** React, npm
- **Deployment:** Netlify, GitHub

**Server/API**

- **Languages:** JS
- **Framework:** Express, npm
- **Deployment:** Render, GitHub

**Database**

- **Languages:** PostgreSQL, pg
- **Deployment:** Neon, GitHub

**Version Control**

- **Language**: Git, GitHub

## 🔹 API Documentation

These are the API endpoints I built: 
1. /get-all-suggestions
2. /get-suggestions-by-category/:category
3. /add-suggestion
4. /get-all-categories
5. / delete-suggestion/:id

Here's the link to the full [API documentation](https://github.com/RPMorrigan/product-feedback-app/blob/main/api-documentation.md)

## 🗄️ Database Schema

Here’s the SQL I used to create my tables:  

```sql
CREATE TABLE suggestions (
  id 				SERIAL PRIMARY KEY,
  feedback_title 	VARCHAR NOT NULL UNIQUE,
  category 			VARCHAR NOT NULL,
  feedback_detail 	VARCHAR NOT NULL);

  INSERT INTO suggestions (feedback_title, category, feedback_detail)
	VALUES 	('Everything Computer!', 'UI', 'Everythings Computer!'),
    		('Smellovision', 'Enhancement', 'Make it smell like computer!'),
            ('Dark Light', 'Feature', 'Add dark and light mode');

CREATE TABLE categories (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR UNIQUE NOT NULL
);

INSERT INTO categories (category_name)
VALUES ('All'),
       ('UI'),
       ('UX'),
       ('Enhancement'),
       ('Bug'),
       ('Feature');


```

## 💭 Reflections

**What I learned:** I learned how all components of an application string together and network to produce a final product.

**What I'm proud of:** I'm proud that it really wasn't very difficult to do everything after having taken the time to learn each thing on its own.

**What challenged me:** Making the tables wasn't too bad. But learning how to make the endpoints actually interact with the front end and how to fetch from the front end was the difficult bit for me. But It's thankfully, become second nature.

**Future ideas for how I'd continue building this project:** 
1. I have already begun to put together a delete button.
2. I'd like to make a different portion of the app that is specifically for admins to review the data and then prune it or mark it as done or denied.
3. I would then like to have employee logins so that they can see if their request has been approved.

## 🙌 Credits & Shoutouts 

I couldn't have done it without my excellent instructors. Shout outs to Haniya, Cat, Arrianna, & Phil. Honorable mentions to Xavier and Nichole ✨

