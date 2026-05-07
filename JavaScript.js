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
      return;
    }

    // Validation: ensure note has at least 3 characters
    if (note.trim().length < 3) {
      alert("Please write a slightly longer reflection");
      return;
    }

    // Create a new mood entry object
    const entry = {
      mood: mood,
      note: note,
      date: new Date().toLocaleString(),
    };

    // Retrieve existing entries from localStorage
    let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

    // Add newest entry to the top
    entries.unshift(entry);

    // Save updated entries back to localStorage
    localStorage.setItem("moodEntries", JSON.stringify(entries));

    // Display success message
    if (message) {
      message.innerHTML = `
        <p class="success">
          Entry saved successfully! You can now view your dashboard to see your previous entries.
        </p>

        <a href="./dashboard.html" class="button">
          Go to Dashboard
        </a>
      `;
    }

    // Clear form fields
    form.reset();
  });
}

// Select the dashboard container
const entriesContainer = document.querySelector("#entries");

// Run only if dashboard exists
if (entriesContainer) {
  // Retrieve saved entries
  let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

  // If no entries exist
  if (entries.length === 0) {
    entriesContainer.innerHTML = "<p>No entries yet.</p>";
  } else {
    let allCards = "";

    // Generate dashboard cards
    entries.forEach(function (entry, index) {
      allCards += `
        <div class="entry-card">
          <h3>${entry.mood}</h3>
          <p>${entry.note}</p>
          <small>${entry.date}</small>

          <button class="delete-btn" data-index="${index}">
            Delete Entry
          </button>
        </div>
      `;
    });

    // Display all cards
    entriesContainer.innerHTML = allCards;

    // Select all delete buttons
    const deleteButtons = document.querySelectorAll(".delete-btn");

    // Add click event to each button
    deleteButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Get the selected entry index
        const index = button.dataset.index;

        // Remove the selected entry
        entries.splice(index, 1);

        // Save updated entries
        localStorage.setItem("moodEntries", JSON.stringify(entries));

        // Reload dashboard
        location.reload();
      });
    });
  }
}
