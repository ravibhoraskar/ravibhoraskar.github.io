const DAILY_GOAL_XP = 60;
const MAX_HEARTS = 3;

const CHARACTERS = [
  { id: "alif", glyph: "ا", name: "Alif", sound: "aa / a", exampleWord: "آدمی", transliteration: "aadmi", meaning: "person" },
  { id: "bay", glyph: "ب", name: "Bay", sound: "b", exampleWord: "بادل", transliteration: "baadal", meaning: "cloud" },
  { id: "pay", glyph: "پ", name: "Pay", sound: "p", exampleWord: "پانی", transliteration: "paani", meaning: "water" },
  { id: "tay", glyph: "ت", name: "Tay", sound: "t", exampleWord: "تار", transliteration: "taar", meaning: "wire" },
  { id: "ttay", glyph: "ٹ", name: "Ttay", sound: "retroflex t", exampleWord: "ٹوکری", transliteration: "tokri", meaning: "basket" },
  { id: "say", glyph: "ث", name: "Say", sound: "s (Arabic loan)", exampleWord: "ثابت", transliteration: "saabit", meaning: "fixed" },
  { id: "jeem", glyph: "ج", name: "Jeem", sound: "j", exampleWord: "جہاز", transliteration: "jahaaz", meaning: "ship" },
  { id: "chay", glyph: "چ", name: "Chay", sound: "ch", exampleWord: "چاند", transliteration: "chaand", meaning: "moon" },
  { id: "hay", glyph: "ح", name: "Hay", sound: "h (Arabic loan)", exampleWord: "حکمت", transliteration: "hikmat", meaning: "wisdom" },
  { id: "khay", glyph: "خ", name: "Khay", sound: "kh", exampleWord: "خبر", transliteration: "khabar", meaning: "news" },
  { id: "daal", glyph: "د", name: "Daal", sound: "d", exampleWord: "دن", transliteration: "din", meaning: "day" },
  { id: "ddaal", glyph: "ڈ", name: "Ddaal", sound: "retroflex d", exampleWord: "ڈبہ", transliteration: "dabba", meaning: "box" },
  { id: "zaal", glyph: "ذ", name: "Zaal", sound: "z (Arabic loan)", exampleWord: "ذکر", transliteration: "zikr", meaning: "mention" },
  { id: "ray", glyph: "ر", name: "Ray", sound: "r", exampleWord: "راستہ", transliteration: "raasta", meaning: "path" },
  { id: "rray", glyph: "ڑ", name: "Rray", sound: "retroflex r", exampleWord: "گاڑی", transliteration: "gaari", meaning: "vehicle" },
  { id: "zay", glyph: "ز", name: "Zay", sound: "z", exampleWord: "زمین", transliteration: "zameen", meaning: "earth" },
  { id: "zhay", glyph: "ژ", name: "Zhay", sound: "zh", exampleWord: "ژالہ", transliteration: "zhaala", meaning: "hail" },
  { id: "seen", glyph: "س", name: "Seen", sound: "s", exampleWord: "سورج", transliteration: "sooraj", meaning: "sun" },
  { id: "sheen", glyph: "ش", name: "Sheen", sound: "sh", exampleWord: "شام", transliteration: "shaam", meaning: "evening" },
  { id: "suad", glyph: "ص", name: "Suaad", sound: "s (Arabic loan)", exampleWord: "صبر", transliteration: "sabr", meaning: "patience" },
  { id: "zuad", glyph: "ض", name: "Zuaad", sound: "z (Arabic loan)", exampleWord: "ضروری", transliteration: "zaroori", meaning: "important" },
  { id: "toay", glyph: "ط", name: "Toay", sound: "t (Arabic loan)", exampleWord: "طالب", transliteration: "taalib", meaning: "student" },
  { id: "zoay", glyph: "ظ", name: "Zoay", sound: "z (Arabic loan)", exampleWord: "ظاہر", transliteration: "zaahir", meaning: "visible" },
  { id: "ain", glyph: "ع", name: "Ain", sound: "deep a", exampleWord: "علم", transliteration: "ilm", meaning: "knowledge" },
  { id: "ghain", glyph: "غ", name: "Ghain", sound: "gh", exampleWord: "غلط", transliteration: "ghalat", meaning: "wrong" },
  { id: "fay", glyph: "ف", name: "Fay", sound: "f", exampleWord: "فکر", transliteration: "fikr", meaning: "thought" },
  { id: "qaaf", glyph: "ق", name: "Qaaf", sound: "q", exampleWord: "قلم", transliteration: "qalam", meaning: "pen" },
  { id: "kaaf", glyph: "ک", name: "Kaaf", sound: "k", exampleWord: "کتاب", transliteration: "kitaab", meaning: "book" },
  { id: "gaaf", glyph: "گ", name: "Gaaf", sound: "g", exampleWord: "گھر", transliteration: "ghar", meaning: "house" },
  { id: "laam", glyph: "ل", name: "Laam", sound: "l", exampleWord: "لباس", transliteration: "libaas", meaning: "clothes" },
  { id: "meem", glyph: "م", name: "Meem", sound: "m", exampleWord: "میز", transliteration: "mez", meaning: "table" },
  { id: "noon", glyph: "ن", name: "Noon", sound: "n", exampleWord: "نام", transliteration: "naam", meaning: "name" },
  { id: "nng", glyph: "ں", name: "Noon Ghunna", sound: "nasal n", exampleWord: "ہاں", transliteration: "haan", meaning: "yes" },
  { id: "wao", glyph: "و", name: "Wao", sound: "w / oo", exampleWord: "وقت", transliteration: "waqt", meaning: "time" },
  { id: "dochashmi", glyph: "ھ", name: "Do Chashmi He", sound: "aspiration marker", exampleWord: "پھول", transliteration: "phool", meaning: "flower" },
  { id: "hey", glyph: "ہ", name: "Hey", sound: "h", exampleWord: "ہوا", transliteration: "hawa", meaning: "air" },
  { id: "hamza", glyph: "ء", name: "Hamza", sound: "glottal stop", exampleWord: "مسئلہ", transliteration: "masla", meaning: "issue" },
  { id: "chotiye", glyph: "ی", name: "Choti Ye", sound: "y / ee", exampleWord: "یاد", transliteration: "yaad", meaning: "memory" },
  { id: "barriye", glyph: "ے", name: "Barri Ye", sound: "ay", exampleWord: "میرے", transliteration: "mere", meaning: "my" }
];

const LESSON_PLAN = [
  ["alif", "bay"],
  ["pay", "tay"],
  ["ttay", "say"],
  ["jeem", "chay"],
  ["hay", "khay"],
  ["daal", "ddaal", "zaal"],
  ["ray", "rray", "zay", "zhay"],
  ["seen", "sheen"],
  ["suad", "zuad"],
  ["toay", "zoay"],
  ["ain", "ghain"],
  ["fay", "qaaf"],
  ["kaaf", "gaaf"],
  ["laam", "meem", "noon"],
  ["nng", "wao"],
  ["dochashmi", "hey"],
  ["hamza", "chotiye", "barriye"]
];

const CHAR_MAP = Object.fromEntries(CHARACTERS.map((item) => [item.id, item]));
const LESSONS = LESSON_PLAN.map((ids, idx) => ({
  id: idx + 1,
  title: `Lesson ${idx + 1}`,
  newChars: ids.map((id) => CHAR_MAP[id])
}));

const state = {
  progress: loadProgress(),
  currentLesson: null,
  lessonSteps: [],
  currentStep: 0,
  score: 0,
  attempts: 0,
  selectedAnswer: null,
  awaitingContinue: false,
  hearts: MAX_HEARTS,
  mode: "lesson"
};

const els = {
  screenPath: document.getElementById("screenPath"),
  screenLesson: document.getElementById("screenLesson"),
  screenResult: document.getElementById("screenResult"),
  lessonPath: document.getElementById("lessonPath"),
  lessonCount: document.getElementById("lessonCount"),
  xpCount: document.getElementById("xpCount"),
  streakCount: document.getElementById("streakCount"),
  goalCount: document.getElementById("goalCount"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonCard: document.getElementById("lessonCard"),
  choices: document.getElementById("choices"),
  nextBtn: document.getElementById("nextBtn"),
  progressBar: document.getElementById("progressBar"),
  progressLabel: document.getElementById("progressLabel"),
  resultTitle: document.getElementById("resultTitle"),
  resultSummary: document.getElementById("resultSummary"),
  resultBreakdown: document.getElementById("resultBreakdown"),
  retryBtn: document.getElementById("retryBtn"),
  pathBtn: document.getElementById("pathBtn"),
  exitLessonBtn: document.getElementById("exitLessonBtn"),
  heartMeter: document.getElementById("heartMeter"),
  lessonModeTag: document.getElementById("lessonModeTag"),
  answerFeedback: document.getElementById("answerFeedback"),
  startReviewBtn: document.getElementById("startReviewBtn")
};

function todayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function yesterdayKey() {
  const now = new Date();
  now.setDate(now.getDate() - 1);
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function normalizeCharStats(stats) {
  const normalized = {};
  if (!stats || typeof stats !== "object") {
    return normalized;
  }

  Object.keys(stats).forEach((key) => {
    const item = stats[key] || {};
    normalized[key] = {
      right: Number(item.right || 0),
      wrong: Number(item.wrong || 0)
    };
  });

  return normalized;
}

function loadProgress() {
  const empty = {
    completed: [],
    bestScores: {},
    xp: 0,
    streak: 0,
    lastActiveDate: "",
    dailyXp: 0,
    dailyDate: todayKey(),
    charStats: {}
  };

  try {
    const raw = localStorage.getItem("urdu-script-quest-progress");
    if (!raw) {
      return empty;
    }
    const parsed = JSON.parse(raw);
    const progress = {
      completed: Array.isArray(parsed.completed) ? parsed.completed : [],
      bestScores: parsed.bestScores || {},
      xp: Number(parsed.xp || 0),
      streak: Number(parsed.streak || 0),
      lastActiveDate: String(parsed.lastActiveDate || ""),
      dailyXp: Number(parsed.dailyXp || 0),
      dailyDate: String(parsed.dailyDate || todayKey()),
      charStats: normalizeCharStats(parsed.charStats)
    };

    if (progress.dailyDate !== todayKey()) {
      progress.dailyDate = todayKey();
      progress.dailyXp = 0;
    }

    return progress;
  } catch {
    return empty;
  }
}

function saveProgress() {
  localStorage.setItem("urdu-script-quest-progress", JSON.stringify(state.progress));
}

function updateStreakOnActivity() {
  const today = todayKey();
  if (state.progress.lastActiveDate === today) {
    return;
  }

  if (state.progress.lastActiveDate === yesterdayKey()) {
    state.progress.streak += 1;
  } else {
    state.progress.streak = 1;
  }

  state.progress.lastActiveDate = today;
}

function shuffle(arr) {
  return [...arr]
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);
}

function sample(arr, count, exclude = []) {
  const excludeSet = new Set(exclude);
  const clean = arr.filter((item) => !excludeSet.has(item));
  return shuffle(clean).slice(0, count);
}

function unlockStatus(index) {
  if (index === 0) {
    return "unlocked";
  }
  return state.progress.completed.includes(index) ? "unlocked" : "locked";
}

function isDone(id) {
  return state.progress.completed.includes(id);
}

function getCharsUpToLesson(lessonId) {
  return LESSON_PLAN.slice(0, lessonId)
    .flat()
    .map((id) => CHAR_MAP[id])
    .filter(Boolean);
}

function getUnlockedChars() {
  if (state.progress.completed.length === 0) {
    return LESSONS[0].newChars;
  }

  const latest = Math.max(...state.progress.completed);
  const upto = Math.min(latest + 1, LESSONS.length);
  return getCharsUpToLesson(upto);
}

function weaknessScore(charId) {
  const stat = state.progress.charStats[charId] || { right: 0, wrong: 0 };
  const attempts = stat.right + stat.wrong;
  return (stat.wrong + 1) / (attempts + 2);
}

function renderTopStats() {
  const completedCount = state.progress.completed.length;
  els.lessonCount.textContent = `${completedCount}/${LESSONS.length}`;
  els.xpCount.textContent = state.progress.xp;
  els.streakCount.textContent = state.progress.streak;
  els.goalCount.textContent = `${Math.min(state.progress.dailyXp, DAILY_GOAL_XP)}/${DAILY_GOAL_XP}`;
}

function renderPath() {
  els.lessonPath.innerHTML = "";

  LESSONS.forEach((lesson, idx) => {
    const node = document.createElement("button");
    node.className = "lesson-node";

    const status = unlockStatus(idx);
    node.classList.add(status);
    if (isDone(lesson.id)) {
      node.classList.add("done");
    }

    node.innerHTML = `
      <strong>${lesson.title}</strong>
      <div class="letters">${lesson.newChars.map((c) => c.glyph).join(" ")}</div>
      <div class="meta">
        ${lesson.newChars.length} new letter${lesson.newChars.length > 1 ? "s" : ""}
        ${state.progress.bestScores[lesson.id] ? ` • Best ${state.progress.bestScores[lesson.id]}%` : ""}
      </div>
    `;

    if (status === "unlocked") {
      node.addEventListener("click", () => startLesson(lesson.id));
    } else {
      node.disabled = true;
      node.title = "Complete the previous lesson first";
    }

    els.lessonPath.appendChild(node);
  });

  renderTopStats();
}

function buildPracticeSteps(chars, introduced) {
  const practice = [];

  chars.forEach((char) => {
    const distractors = sample(introduced, 3, [char]).map((c) => c.glyph);
    const choices = shuffle([char.glyph, ...distractors]).slice(0, 4);
    practice.push({
      type: "pickGlyph",
      prompt: `Pick the letter for sound: ${char.sound}`,
      answer: char.glyph,
      choices,
      char
    });

    const soundChoices = shuffle([
      char.sound,
      ...sample(
        introduced.map((c) => c.sound),
        3,
        [char.sound]
      )
    ]).slice(0, 4);

    practice.push({
      type: "pickSound",
      prompt: "What sound does this letter make?",
      answer: char.sound,
      choices: soundChoices,
      char
    });

    const wordPool = sample(introduced, 3, [char]);
    const translitOptions = shuffle([
      char.transliteration,
      ...wordPool.map((w) => w.transliteration)
    ]).slice(0, 4);

    practice.push({
      type: "readWord",
      prompt: "Read this Urdu word",
      answer: char.transliteration,
      choices: translitOptions,
      char
    });
  });

  const reviewChars = shuffle(introduced.filter((char) => !chars.includes(char))).slice(0, 4);
  reviewChars.forEach((char) => {
    const distractors = sample(introduced, 3, [char]).map((c) => c.glyph);
    practice.push({
      type: "reviewGlyph",
      prompt: `Review: identify the letter for ${char.sound}`,
      answer: char.glyph,
      choices: shuffle([char.glyph, ...distractors]).slice(0, 4),
      char
    });
  });

  return shuffle(practice);
}

function buildLessonSteps(lesson) {
  const introduced = getCharsUpToLesson(lesson.id);
  const introSteps = lesson.newChars.map((char) => ({
    type: "intro",
    char
  }));

  const practice = buildPracticeSteps(lesson.newChars, introduced);
  return [...introSteps, ...practice];
}

function buildReviewSteps() {
  const unlocked = getUnlockedChars();
  const sortedWeak = [...unlocked].sort((a, b) => weaknessScore(b.id) - weaknessScore(a.id));
  const targetChars = sortedWeak.slice(0, Math.min(6, sortedWeak.length));
  return buildPracticeSteps(targetChars, unlocked);
}

function showScreen(name) {
  [els.screenPath, els.screenLesson, els.screenResult].forEach((screen) => {
    screen.classList.remove("active");
  });
  name.classList.add("active");
}

function updateHeartMeter() {
  els.heartMeter.textContent = `Hearts: ${state.hearts}/${MAX_HEARTS}`;
  els.heartMeter.classList.toggle("low", state.hearts <= 1);
}

function startSession(mode, lessonId = null) {
  state.mode = mode;
  state.currentStep = 0;
  state.score = 0;
  state.attempts = 0;
  state.selectedAnswer = null;
  state.awaitingContinue = false;
  state.hearts = MAX_HEARTS;
  els.answerFeedback.textContent = "";
  els.answerFeedback.className = "answer-feedback";

  if (mode === "review") {
    state.currentLesson = {
      id: "review",
      title: "Targeted Review",
      newChars: []
    };
    state.lessonSteps = buildReviewSteps();
    els.lessonTitle.textContent = "Targeted Review: your weakest letters";
    els.lessonModeTag.textContent = "Review";
  } else {
    const lesson = LESSONS.find((l) => l.id === lessonId);
    if (!lesson) {
      return;
    }
    state.currentLesson = lesson;
    state.lessonSteps = buildLessonSteps(lesson);
    els.lessonTitle.textContent = `${lesson.title}: ${lesson.newChars.map((c) => c.name).join(", ")}`;
    els.lessonModeTag.textContent = "Lesson";
  }

  updateHeartMeter();
  showScreen(els.screenLesson);
  renderStep();
}

function startLesson(lessonId) {
  startSession("lesson", lessonId);
}

function startReview() {
  startSession("review");
}

function renderStep() {
  const step = state.lessonSteps[state.currentStep];
  const progress = Math.round((state.currentStep / state.lessonSteps.length) * 100);
  els.progressBar.style.width = `${progress}%`;
  els.progressLabel.textContent = `${progress}%`;

  els.choices.innerHTML = "";
  els.nextBtn.disabled = true;
  state.selectedAnswer = null;
  state.awaitingContinue = false;
  els.answerFeedback.textContent = "";
  els.answerFeedback.className = "answer-feedback";

  if (step.type === "intro") {
    els.lessonCard.innerHTML = `
      <p class="prompt">New letter</p>
      <div class="big-glyph" dir="rtl">${step.char.glyph}</div>
      <h3>${step.char.name}</h3>
      <p class="reading">Sound: ${step.char.sound}</p>
      <p>Example: <span dir="rtl">${step.char.exampleWord}</span> (${step.char.transliteration}) - ${step.char.meaning}</p>
    `;
    els.nextBtn.disabled = false;
    state.awaitingContinue = true;
    return;
  }

  if (step.type === "pickSound") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${step.prompt}</p>
      <div class="big-glyph" dir="rtl">${step.char.glyph}</div>
    `;
  } else if (step.type === "readWord") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${step.prompt}</p>
      <div class="big-glyph" dir="rtl">${step.char.exampleWord}</div>
      <p class="reading">Meaning: ${step.char.meaning}</p>
    `;
  } else if (step.type === "pickGlyph" || step.type === "reviewGlyph") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${step.prompt}</p>
      <p class="reading">Tip: focus on dots and tail shape.</p>
    `;
  }

  step.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice";

    if (/^[\u0600-\u06FF]+$/u.test(choice)) {
      btn.setAttribute("dir", "rtl");
      btn.style.fontFamily = '"Baloo Bhaijaan 2", sans-serif';
      btn.style.fontSize = "1.4rem";
      btn.textContent = choice;
    } else {
      btn.textContent = choice;
    }

    btn.addEventListener("click", () => evaluateAnswer(btn, choice, step.answer, step.char.id));
    els.choices.appendChild(btn);
  });
}

function updateCharStat(charId, wasCorrect) {
  if (!state.progress.charStats[charId]) {
    state.progress.charStats[charId] = { right: 0, wrong: 0 };
  }
  if (wasCorrect) {
    state.progress.charStats[charId].right += 1;
  } else {
    state.progress.charStats[charId].wrong += 1;
  }
}

function evaluateAnswer(button, selected, answer, charId) {
  if (state.awaitingContinue) {
    return;
  }
  state.awaitingContinue = true;
  state.attempts += 1;

  const all = [...els.choices.querySelectorAll(".choice")];
  all.forEach((node) => {
    node.disabled = true;
    if (String(node.textContent) === String(answer)) {
      node.classList.add("correct");
    }
  });

  const isCorrect = selected === answer;
  updateCharStat(charId, isCorrect);

  if (isCorrect) {
    state.score += 1;
    button.classList.add("selected");
    els.answerFeedback.textContent = "Correct. Keep going.";
    els.answerFeedback.classList.add("good");
  } else {
    button.classList.add("wrong");
    state.hearts -= 1;
    updateHeartMeter();
    els.answerFeedback.textContent = `Not quite. Correct answer: ${answer}`;
    els.answerFeedback.classList.add("bad");

    if (state.hearts <= 0) {
      finishSession("outOfHearts");
      return;
    }
  }

  els.nextBtn.disabled = false;
}

function finishSession(reason = "completed") {
  const ratio = state.attempts ? Math.round((state.score / state.attempts) * 100) : 100;
  const passed = reason !== "outOfHearts" && ratio >= 70;

  let xpEarned = 0;
  if (reason === "outOfHearts") {
    xpEarned = 4;
  } else if (ratio >= 85) {
    xpEarned = 35;
  } else if (ratio >= 70) {
    xpEarned = 25;
  } else {
    xpEarned = 12;
  }

  if (state.mode === "lesson" && passed) {
    const firstCompletion = !state.progress.completed.includes(state.currentLesson.id);
    if (firstCompletion) {
      state.progress.completed.push(state.currentLesson.id);
    }
  }

  if (state.mode === "lesson") {
    const prevBest = state.progress.bestScores[state.currentLesson.id] || 0;
    if (ratio > prevBest) {
      state.progress.bestScores[state.currentLesson.id] = ratio;
    }
  }

  state.progress.xp += xpEarned;
  state.progress.dailyXp += xpEarned;
  updateStreakOnActivity();
  saveProgress();

  if (reason === "outOfHearts") {
    els.resultTitle.textContent = "Out of hearts";
    els.resultSummary.textContent = `You scored ${ratio}% and earned ${xpEarned} XP. Try again with careful letter matching.`;
  } else if (passed) {
    els.resultTitle.textContent = state.mode === "review" ? "Review complete" : "Lesson complete";
    els.resultSummary.textContent = `You scored ${ratio}% and earned ${xpEarned} XP.`;
  } else {
    els.resultTitle.textContent = "Keep practicing";
    els.resultSummary.textContent = `You scored ${ratio}% and earned ${xpEarned} XP.`;
  }

  const unlockedNext = state.mode === "lesson" && passed && Number(state.currentLesson.id) < LESSONS.length;
  const nextText =
    state.mode === "review"
      ? "Review mode always stays available from the path screen."
      : passed
      ? "Next lesson unlocked."
      : "Score 70% or above to unlock the next lesson.";

  els.resultBreakdown.innerHTML = `
    <div>Correct answers: ${state.score}/${state.attempts}</div>
    <div>${nextText}</div>
    <div>${unlockedNext ? "Great momentum. Continue while the character shapes are fresh." : "Use targeted review to strengthen weak letters."}</div>
  `;

  renderPath();
  showScreen(els.screenResult);
}

function nextStep() {
  if (!state.currentLesson) {
    return;
  }

  state.currentStep += 1;

  if (state.currentStep >= state.lessonSteps.length) {
    finishSession("completed");
    return;
  }

  renderStep();
}

els.nextBtn.addEventListener("click", nextStep);
els.pathBtn.addEventListener("click", () => {
  renderPath();
  showScreen(els.screenPath);
});
els.retryBtn.addEventListener("click", () => {
  if (state.mode === "review") {
    startReview();
    return;
  }
  if (state.currentLesson && state.currentLesson.id !== "review") {
    startLesson(state.currentLesson.id);
  }
});
els.exitLessonBtn.addEventListener("click", () => {
  renderPath();
  showScreen(els.screenPath);
});
els.startReviewBtn.addEventListener("click", startReview);

renderPath();
showScreen(els.screenPath);
