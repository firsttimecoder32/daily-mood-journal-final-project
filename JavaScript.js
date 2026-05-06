document.addEventListener("DOMContentLoaded", function () {
  // =========================
  // ENTRY PAGE (FORM LOGIC)
  // =========================
  const form = document.querySelector("#moodform");
  const message = document.querySelector("#message");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const mood = document.querySelector("#mood").value;
      const note = document.querySelector("#note").value;

      // Validation
      if (!mood || !note) {
        alert("Please fill in all fields");
        return;
      }

      if (note.trim().length < 3) {
        alert("Please write a slightly longer reflection");
        return;
      }

      // Create entry
      const entry = {
        mood: mood,
        note: note,
        date: new Date().toLocaleString(),
      };

      // Get existing entries
      let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

      // Add newest first
      entries.unshift(entry);

      // Save
      localStorage.setItem("moodEntries", JSON.stringify(entries));

      // Show message ONLY if element exists
      if (message) {
        message.innerHTML = `
          <p class="success">
            Entry saved successfully! You can now view your dashboard to see previous entries.
          </p>

          <a href="./dashboard.html" class="button">Go to Dashboard</a>
        `;
      }

      form.reset();
    });
  }

  // =========================
  // DASHBOARD PAGE LOGIC
  // =========================
  const entriesContainer = document.querySelector("#entries");

  if (entriesContainer) {
    const entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

    if (entries.length === 0) {
      entriesContainer.innerHTML = "<p>No entries yet.</p>";
    } else {
      let allCards = "";

      entries.forEach(function (entry) {
        allCards += `
          <div class="entry-card">
            <h3>${entry.mood}</h3>
            <p>${entry.note}</p>
            <small>${entry.date}</small>
          </div>
        `;
      });

      entriesContainer.innerHTML = allCards;
    }
  }
});
