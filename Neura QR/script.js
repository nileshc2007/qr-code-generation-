const data = {
  1: {
    clue: "I am a place where students gather, ideas are shared, and learning comes alive. Find the spot where your journey often begins.",
    hint: "Think of a common student gathering or learning area on your campus."
  },
  2: {
    clue: "Look around for the place where knowledge is kept in rows, but silence speaks louder than words.",
    hint: "Think books, shelves, and study."
  },
  3: {
    clue: "Your final destination is close. Find the place where campus moments are captured, teams meet, and memories are made.",
    hint: "Think of a prominent common area used for college activities."
  }
};

const params = new URLSearchParams(location.search);
const n = Math.min(3, Math.max(1, Number(params.get("clue")) || 1));
const item = data[n];

document.getElementById("clueNumber").textContent = n;
document.getElementById("clueText").textContent = item.clue;
document.getElementById("hint").textContent = "Hint: " + item.hint;

if (n === 3) {
  document.getElementById("title").textContent = "Final Challenge";
  document.getElementById("final").classList.remove("hidden");
}

document.getElementById("hintBtn").addEventListener("click", () => {
  const h = document.getElementById("hint");
  h.classList.toggle("hidden");
  document.getElementById("hintBtn").textContent = h.classList.contains("hidden") ? "💡 Show Hint" : "🙈 Hide Hint";
});