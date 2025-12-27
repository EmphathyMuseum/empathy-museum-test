function showResults() {

  // MODAL SADECE BUTONA BASILINCA AÇILIR
  const modal = document.getElementById("resultModal");
  modal.classList.remove("hidden");

  // SAYIM
  const scores = { A:0, B:0, C:0, D:0, E:0 };

  for (let i = 1; i <= 10; i++) {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer) scores[answer.value]++;
  }

  // PROGRESS BAR
  const bar = document.getElementById("bar");
  bar.style.width = "100%";

  // 5 SN SONRA SONUÇ
  setTimeout(() => {
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("finalResult").classList.remove("hidden");

    let result = Object.keys(scores).reduce((a,b)=> scores[a]>scores[b]?a:b);

    const data = {
      A: ["🧭 Self Explorer", "You are searching for identity and meaning."],
      B: ["🤝 Connector", "You value empathy and emotional connection."],
      C: ["🌱 Healing Searcher", "You are healing, gently and honestly."],
      D: ["🧠 Sensitive Thinker", "Depth and reflection shape your world."],
      E: ["🌍 Outsider", "You long to be seen and included."]
    };

    document.getElementById("personaTitle").innerText = data[result][0];
    document.getElementById("personaText").innerText = data[result][1];

  }, 5000);
}
