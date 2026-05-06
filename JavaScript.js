// Select the form and message elements from the DOM.
const form = document.querySelector("#moodform");
const message = document.querySelector("#message");

// Check if the form exists (important if this JS runs on multiple pages)
if (form) {
  // Listen for form submission
  form.addEventListener("submit", function (event) {
    // Prevent page reload (default form behavior)
    event.preventDefault();

    // Get user input values
    const mood = document.querySelector("#mood").value;
    const note = document.querySelector("#note").value;

    // Validation: ensure both fields are filled
    if (!mood || !note) {
      alert("Please fill in all fields");
      return; // Stop execution if validation fails
    }

    // Validation: ensure note has at least 3 characters (after removing spaces)
    // .trim removes extra space in the beginning and the end of the string.
    if (note.trim().length < 3) {
      alert("Please write a slightly longer reflection");
      return;
    }

    // Create a new mood entry object
    const entry = {
      mood: mood, // selected mood
      note: note, // user's reflection
      date: new Date().toLocaleString(), // current date and time
    };

    // Retrieve existing entries from localStorage (or create empty array if none)
    let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

    // Add the new entry to the beginning of the array (latest first)
    entries.unshift(entry);

    // Save updated entries back to localStorage
    localStorage.setItem("moodEntries", JSON.stringify(entries));

    // Display success message ONLY if message container exists
    if (message) {
      message.innerHTML = `
          <p class="success">
            Entry saved successfully! You can now view your dashboard to see your previous entries.
          </p>

          <a href="./dashboard.html" class="button">Go to Dashboard</a>
        `;
    }

    // Clear the form inputs after submission
    form.reset();
  });
}

// Select the container where entries will be displayed (dashboard page)
const entriesContainer = document.querySelector("#entries");

// Check if the container exists (so this runs only on dashboard page)
if (entriesContainer) {
  // Get saved entries from localStorage
  const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

  // If no entries exist, show a message
  if (entries.length === 0) {
    entriesContainer.innerHTML = "<p>No entries yet.</p>";
  } else {
    let allCards = ""; // Will store all entry HTML

    // Loop through each entry and create a card for it
    entries.forEach(function (entry) {
      allCards += `
          <div class="entry-card">
            <h3>${entry.mood}</h3> <!-- Display mood -->
            <p>${entry.note}</p> <!-- Display note -->
            <small>${entry.date}</small> <!-- Display date -->
          </div>
        `;
    });

    // Insert all generated cards into the page
    entriesContainer.innerHTML = allCards;
  }
}
