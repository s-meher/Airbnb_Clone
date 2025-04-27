# Airbnb Clone – Search and Filter Prototype

🏡 A mini-clone of Airbnb’s search and filter experience, built using **HTML**, **CSS**, and **JavaScript**.

---

## 🕹️ Live Demo
[Visit Airbnb Clone](https://s-meher.github.io/Airbnb_Clone/)

---

## 📚 Overview
This project simulates the search and filtering experience of Airbnb.  
Users can search for listings by city, filter by price range, and filter by type of accommodation.

Built to practice working on **modular codebases**, simulating how real-world developers contribute small but important features into large projects.

---

## 🔨 Built With
- HTML5
- CSS3
- JavaScript (ES6+)

---

## ✨ Key Features
- **City Filter:** Search listings by city name (case-insensitive)
- **Price Filter:** Filter listings between selected minimum and maximum price
- **Type Filter:** (Extra Credit) Filter listings by type of accommodation (e.g., Entire Place, Private Room)
- Interactive UI connected with pre-written backend logic (`provided.js`)

---

## 🚀 How It Works
- `filterByCity(targetCity, listingCityArray)` — Returns listings matching the city name.
- `filterByPrice(minPrice, maxPrice, listingPriceArray)` — Returns listings within the given price range.
- `filterByTypes(targetTypes, listingTypeArray)` — Returns listings matching any selected type(s).

The provided JavaScript (`provided.js`) handles user input and triggers these filtering functions.

---

## 📂 Project Structure

- `index.html` — Main HTML page
- `style.css` — Custom CSS styling
- `script.js` — Filtering logic (you wrote this!)
- `provided.js` — Pre-written search integration code
- `listings.js` — Array of all listing data
- `img/` — Folder containing images for different cities (Chicago, Lake Tahoe (lt), San Diego (sd))
- `README.md` — Project description
- `.gitignore` — Files to exclude from GitHub
- `.eslintrc.json` — ESLint configuration
- `package.json` — Project metadata
- `HINTS.md` — Extra help provided (optional)

---

## 🙌 Acknowledgements
- Starter project structure inspired by real-world Airbnb functionality.

---
