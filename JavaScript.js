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

    entries.push(entry);

    localStorage.setItem("moodEntries", JSON.stringify(entries));

    alert("Entry saved!");

    form.reset();
  });
}
