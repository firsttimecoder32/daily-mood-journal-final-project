const form = document.querySelector("#moodform");

if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const mood = document.querySelector("#mood").value;
    const note = document.querySelector("#note").value;

    if (!mood || !note) {
      alert("Please fill in all fields");
      return;
    }

    if (note.trim().length < 3) {
      alert("Please write a slightly longer reflection");
      return;
    }

    const entry = {
      mood: mood,
      note: note,
      date: new Date().toLocaleString(),
    };

    let entries = JSON.parse(localStorage.getItem("moodEntries")) || [];

    entries.unshift(entry);

    localStorage.setItem("moodEntries", JSON.stringify(entries));

    alert("Entry saved!");

    form.reset();

    // 👉 redirect to dashboard
    window.location.href = "./dashboard.html";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const entriesContainer = document.querySelector("#entries");

  if (!entriesContainer) {
    console.log("entries container not found");
    return;
  }

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
});
