# 📘 Product Feedback API Documentation

Base URL: `https://product-feedback-app-1xyt.onrender.com`

## Overview

| Resource         | Method | Endpoint                      | Description                              |
|------------------|--------|-------------------------------|------------------------------------------|
| `suggestions`    | GET    | /get-all-suggestions          | Retrieves all items with with all columns.              |
| `suggestions`    | GET    | /get-suggestions-by-category  | Only returns rows with the specified category.              |
| `suggestions`    | POST   | /add-one-suggestion           | Create and instert a new suggestion.              |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Retrieves all rows in the suggestions table in order of ascending id.

**Example Response:**

```json
[
    {
        "id": 1,
        "feedback_title": "Day & Night",
        "category": "Feature",
        "feedback_description": "Adds a dark and light mode."
    },
    {
        "id": 2,
        "feedback_title": "Cold Steel",
        "category": "UX",
        "feedback_description": "Build animations around the feel of a sleek katana slash."
    }
]
```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Only retrieves rows with the specified category.

**Example Response:** When retrieving UX.

```json
[
    {
        "id": 2,
        "feeback_title": "Cold Steel",
        "category": "UX",
        "feedback_description": "Build animations around the feel of a sleek katana slash."
    }
]
```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds a suggestion to the table. This requires, the feature title, the category, and the feature description.

**Example Request Body:**

```json
{
    "feature_title": "My Title",
    "category": "UI",
    "feature_description": "This is how it would work."
}
```

**Example Response:**

```json
Suggestion was successfully added!
```
---

