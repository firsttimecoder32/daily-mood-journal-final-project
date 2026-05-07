# The Daily Mood Journal

## Project Description

The Daily Mood Journal is a web application that allows users to track their daily moods and write short reflections about their emotional state. Users can select their mood, add a personal note, and save the entry. The application stores all data in localStorage and displays past entries on a dashboard for easy reflection over time.

The main goal of this project is to help users build emotional awareness by consistently recording their moods and reviewing patterns in their daily life.

---

## How It Works

The user is first introduced to a Home Page (index.html) where they are welcomed and given two options:

- Start a new mood entry  
- View the dashboard directly  

If the user selects Start Entry, they are taken to a form where they select their mood and write a reflection.

The application captures the mood, note, and current date using JavaScript.

The data is stored in localStorage so it remains available even after refreshing the page.

After saving an entry, the user receives a success message confirming that the entry has been saved and is given a button to view the dashboard.

The Dashboard page retrieves stored entries and displays them dynamically as cards.

New entries appear at the top of the dashboard.

Each entry also includes a delete button that allows the user to remove individual mood entries. When an entry is deleted, it is removed from both the dashboard and localStorage.

---

## Author Information

Name: Warda Haithar  
Email: wardaibrahim200714@gmail.com  
GitHub: https://github.com/firsttimecoder32/daily-mood-journal-final-project  

---

## Setup Instructions

### Prerequisites

A modern web browser (Chrome, Firefox, Safari, or Edge)  
A text editor (optional)

### Installation

Clone or download the project:

```bash
git clone https://github.com/firsttimecoder32/daily-mood-journal-final-project
cd daily-mood-journal
```

### Open the application

Open the index.html file in your browser.

No server setup is required.

### Using the application

- Open the Home Page  
- Choose to start an entry or view dashboard  
- Fill in the mood form and save entry  
- View saved entries on dashboard  
- Delete entries if needed using the delete button  

---

## BDD (Behavior Driven Development)

Feature: User can track, view, and manage mood entries

Scenario 1: User accesses the application  
Given the user opens the application  
When the Home Page loads  
Then the user is welcomed and presented with two options

Scenario 2: User saves a mood entry  
Given the user is on the entry page  
When they select a mood and write a reflection  
And click "Save Entry"  
Then the entry is saved in localStorage  
And a success message is displayed  
And the user is given a button to view the dashboard  

Scenario 3: User views dashboard  
Given the user has saved entries  
When they open the dashboard page  
Then all saved entries are displayed as cards  
And each entry shows mood, reflection, and date  

Scenario 4: User deletes an entry  
Given the user is on the dashboard page  
When they click the delete button on an entry  
Then that entry is removed from the dashboard  
And it is deleted from localStorage  

Scenario 5: No entries exist  
Given no entries have been saved  
When the dashboard is opened  
Then a message is displayed saying "No entries yet"

---

## Technologies Used

HTML: Page structure  
CSS: Styling and responsive design  
JavaScript: Application logic  
localStorage: Data storage  
DOM Manipulation: Dynamic rendering  
Event Listeners: Form handling  

---

## Project Structure

the-daily-mood-journal/

index.html - Home page  
entry.html - Mood entry form  
dashboard.html - Displays entries  
styles.css - Styling  
JavaScript.js - Logic  
logo1.png - Project logo  
README.md - Documentation  

---

## How Data Storage Works

Entries are stored using localStorage.

Each entry contains:

- mood  
- note  
- date  

Save example:

localStorage.setItem("moodEntries", JSON.stringify(entries));

Retrieve example:

JSON.parse(localStorage.getItem("moodEntries")) || [];

---

## Features

- Mood selection system  
- Reflection input  
- Home page navigation system  
- localStorage persistence  
- Dashboard display of entries  
- Success message after saving entry  
- Responsive design  
- Delete functionality for individual entries  

---

## Contact Information

Email: wardaibrahim200714@gmail.com  
GitHub: https://github.com/firsttimecoder32/daily-mood-journal-final-project  

---

## License

This project is for educational purposes. You are free to use and modify it.

---

## Last Updated

May 2026