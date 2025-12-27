function showResults() {

  // MODALI AÇ
  const modal = document.getElementById("resultModal");
  modal.classList.remove("hidden");

  // LOADING GÖRÜNÜR, SONUÇ GİZLİ BAŞLASIN
  document.getElementById("loading").classList.remove("hidden");
  document.getElementById("finalResult").classList.add("hidden");

  // PROGRESS BAR SIFIRLA
  const bar = document.getElementById("bar");
  bar.style.width = "0%";

  // PUAN TABLOSU
  const scores = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0
  };

  // 1–10 TÜM SORULARI OKU
  for (let i = 1; i <= 10; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected) {
      scores[selected.value]++;
    }
  }

  // BAR'I DOLDUR
  setTimeout(() => {
    bar.style.width = "100%";
  }, 100);

  // 5 SANİYE SONRA SONUÇ
  setTimeout(() => {

    // EN YÜKSEK PUANI BUL
    let result = "A";
    for (let key in scores) {
      if (scores[key] > scores[result]) {
        result = key;
      }
    }

    const personas = {
      A: {
        title: "🧭 Self Explorer",
        text: "You are in a phase of self-discovery, searching for meaning and direction."
      },
      B: {
        title: "🤝 Connector",
        text: "You value empathy, communication, and emotional connection with others."
      },
      C: {
        title: "🌱 Healing Searcher",
        text: "You are carrying emotional weight and learning how to heal gently."
      },
      D: {
        title: "🧠 Sensitive Thinker",
        text: "You experience life with depth, reflection, and emotional awareness."
      },
      E: {
        title: "🌍 Outsider",
        text: "You often feel unseen, yet you deeply value inclusion and belonging."
      }
    };

    // LOADING KAPAT, SONUÇ AÇ
    document.getElementById("loading").classList.add("hidden");
    document.getElementById("finalResult").classList.remove("hidden");

    // SONUCU YAZ
    document.getElementById("personaTitle").innerText = personas[result].title;
    document.getElementById("personaText").innerText = personas[result].text;

  }, 5000);
}
