/*
docker buildx build \
  --platform linux/amd64 \
  -t muuushuuu/profgo-back:1.0.2-amd64 \
  -t muuushuuu/profgo-back:latest \
  --push .

  Va sur Render → ton service → Manual Deploy → Deploy latest image.
*/



// index.js
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// QCM mock
const quizzes = {
  "fixed-1": [
    { q: "Combien font 2 + 2 ?", choices: ["3", "4", "5"], correct: 1 },
    { q: "Capitale de la France ?", choices: ["Paris", "Lyon", "Marseille"], correct: 0 },
    { q: "Swift est un langage pour ?", choices: ["iOS", "Android", "Windows"], correct: 0 }
  ],
  "near-player": [
    { q: "HTTP signifie ?", choices: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hot Transfer Text Protocol"], correct: 0 },
    { q: "Port par défaut HTTP ?", choices: ["80", "3000", "443"], correct: 0 },
    { q: "JSON est…", choices: ["binaire", "texte", "image"], correct: 1 }
  ],
  "fixed-2": [
    { q: "Combien font 2 + 2 ?", choices: ["3", "4", "5"], correct: 1 },
    { q: "Capitale de la France ?", choices: ["Paris", "Lyon", "Marseille"], correct: 0 },
    { q: "Swift est un langage pour ?", choices: ["iOS", "Android", "Windows"], correct: 0 }
  ],
  "fixed-3": [
  { q: "Une application Web JEE est empaquetée dans un fichier…", choices: [".jar", ".war", ".ear"], correct: 1 },
  { q: "Dans une application Web JEE, les servlets sont déclarées dans…", choices: ["web.xml", "persistence.xml", "beans.xml"], correct: 0 },
  { q: "JPA signifie…", choices: ["Java Persistence API", "Java Page API", "Jakarta Presentation API"], correct: 0 }
]

};

// GET /quiz?chestId=...
app.get("/quiz", (req, res) => {
  const id = req.query.chestId || "chest-1";
  const data = quizzes[id] || [];
  res.json({ chestId: id, questions: data });
});

// POST /quiz/verify  { answers:[0,1,2], chestId:"..." }
app.post("/quiz/verify", (req, res) => {
  const { chestId, answers } = req.body || {};
  const qs = quizzes[chestId] || [];
  const score = qs.reduce((acc, q, i) => acc + (answers?.[i] === q.correct ? 1 : 0), 0);
  res.json({ score, total: qs.length, success: score === qs.length });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API ProfGo prête sur http://localhost:${PORT}`));