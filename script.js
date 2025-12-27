function calculateResult() {
  const scores = {
    self: 0,
    connector: 0,
    healing: 0,
    thinker: 0,
    outsider: 0
  };

  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (!answer) {
      alert("Please answer all questions.");
      return;
    }

    switch (answer.value) {
      case "A": scores.self++; break;
      case "B": scores.connector++; break;
      case "C": scores.healing++; break;
      case "D": scores.thinker++; break;
      case "E": scores.outsider++; break;
    }
  }

  document.getElementById("modal").classList.remove("hidden");

  let progress = 0;
  const bar = document.getElementById("progress");

  const interval = setInterval(() => {
    progress++;
    bar.style.width = progress + "%";

    if (progress >= 100) {
      clearInterval(interval);
      showResult(scores);
    }
  }, 50);
}

function showResult(scores) {
  const personas = {
    self: { name: "Self Explorer", emoji: "🧭", color: "#6C63FF" },
    connector: { name: "Connector", emoji: "🤝", color: "#00C9A7" },
    healing: { name: "Healing Searcher", emoji: "🌱", color: "#A3D977" },
    thinker: { name: "Sensitive Thinker", emoji: "🧠", color: "#F4A261" },
    outsider: { name: "Outsider", emoji: "🌍", color: "#E76F51" }
  };

  const winner = Object.keys(scores).reduce((a, b) =>
    scores[a] > scores[b] ? a : b
  );

  document.getElementById("analysis").style.display = "none";

  const result = document.getElementById("result");
  result.style.borderColor = personas[winner].color;

  result.innerHTML = `
    <h2>${personas[winner].emoji} ${personas[winner].name}</h2>
    <p>This space reflects your dominant emotional pattern.</p>
  `;

  result.classList.remove("hidden");
}
