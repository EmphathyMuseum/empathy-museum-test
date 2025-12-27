function showResults() {

  const modal = document.getElementById("resultModal");
  modal.classList.remove("hidden");

  const scores = { A:0, B:0, C:0, D:0, E:0 };

  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) scores[answer.value]++;
  }

  document.getElementById("bar").style.width = "100%";

  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("finalResult").classList.remove("hidden");

    const result = Object.keys(scores).reduce((a,b)=>scores[a]>scores[b]?a:b);

    const personas = {
      A: ["🧭 Self Explorer", "You are searching for meaning, identity, and clarity."],
      B: ["🤝 Connector", "You value emotional connection and shared understanding."],
      C: ["🌱 Healing Searcher", "You are healing at your own pace, gently and honestly."],
      D: ["🧠 Sensitive Thinker", "You live in depth, reflection, and meaning."],
      E: ["🌍 Outsider", "You long to be seen, included, and understood."]
    };

    document.getElementById("personaTitle").innerText = personas[result][0];
    document.getElementById("personaText").innerText = personas[result][1];

  }, 5000);
}
