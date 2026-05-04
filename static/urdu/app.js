const DAILY_GOAL_XP = 60;
const MAX_HEARTS = 3;

const CHARACTERS = [
  { id: "alif", glyph: "ا", name: "Alif", sound: "aa / a" },
  { id: "bay", glyph: "ب", name: "Bay", sound: "b" },
  { id: "pay", glyph: "پ", name: "Pay", sound: "p" },
  { id: "tay", glyph: "ت", name: "Tay", sound: "t" },
  { id: "ttay", glyph: "ٹ", name: "Ttay", sound: "retroflex t" },
  { id: "say", glyph: "ث", name: "Say", sound: "s (Arabic loan)" },
  { id: "jeem", glyph: "ج", name: "Jeem", sound: "j" },
  { id: "chay", glyph: "چ", name: "Chay", sound: "ch" },
  { id: "hay", glyph: "ح", name: "Hay", sound: "h (Arabic loan)" },
  { id: "khay", glyph: "خ", name: "Khay", sound: "kh" },
  { id: "daal", glyph: "د", name: "Daal", sound: "d" },
  { id: "ddaal", glyph: "ڈ", name: "Ddaal", sound: "retroflex d" },
  { id: "zaal", glyph: "ذ", name: "Zaal", sound: "z (Arabic loan)" },
  { id: "ray", glyph: "ر", name: "Ray", sound: "r" },
  { id: "rray", glyph: "ڑ", name: "Rray", sound: "retroflex r" },
  { id: "zay", glyph: "ز", name: "Zay", sound: "z" },
  { id: "zhay", glyph: "ژ", name: "Zhay", sound: "zh" },
  { id: "seen", glyph: "س", name: "Seen", sound: "s" },
  { id: "sheen", glyph: "ش", name: "Sheen", sound: "sh" },
  { id: "suad", glyph: "ص", name: "Suaad", sound: "s (Arabic loan)" },
  { id: "zuad", glyph: "ض", name: "Zuaad", sound: "z (Arabic loan)" },
  { id: "toay", glyph: "ط", name: "Toay", sound: "t (Arabic loan)" },
  { id: "zoay", glyph: "ظ", name: "Zoay", sound: "z (Arabic loan)" },
  { id: "ain", glyph: "ع", name: "Ain", sound: "deep a" },
  { id: "ghain", glyph: "غ", name: "Ghain", sound: "gh" },
  { id: "fay", glyph: "ف", name: "Fay", sound: "f" },
  { id: "qaaf", glyph: "ق", name: "Qaaf", sound: "q" },
  { id: "kaaf", glyph: "ک", name: "Kaaf", sound: "k" },
  { id: "gaaf", glyph: "گ", name: "Gaaf", sound: "g" },
  { id: "laam", glyph: "ل", name: "Laam", sound: "l" },
  { id: "meem", glyph: "م", name: "Meem", sound: "m" },
  { id: "noon", glyph: "ن", name: "Noon", sound: "n" },
  { id: "nng", glyph: "ں", name: "Noon Ghunna", sound: "nasal n" },
  { id: "wao", glyph: "و", name: "Wao", sound: "w / oo" },
  { id: "dochashmi", glyph: "ھ", name: "Do Chashmi He", sound: "aspiration marker" },
  { id: "hey", glyph: "ہ", name: "Hey", sound: "h" },
  { id: "hamza", glyph: "ء", name: "Hamza", sound: "glottal stop" },
  { id: "chotiye", glyph: "ی", name: "Choti Ye", sound: "y / ee" },
  { id: "barriye", glyph: "ے", name: "Barri Ye", sound: "ay" }
];

const EXAMPLES = {
  alif: [
    { word: "آدمی", transliteration: "aadmi", meaning: "person" },
    { word: "آج", transliteration: "aaj", meaning: "today" }
  ],
  bay: [
    { word: "بادل", transliteration: "baadal", meaning: "cloud" },
    { word: "بات", transliteration: "baat", meaning: "conversation" }
  ],
  pay: [
    { word: "پانی", transliteration: "paani", meaning: "water" },
    { word: "پرندہ", transliteration: "parinda", meaning: "bird" }
  ],
  tay: [
    { word: "تار", transliteration: "taar", meaning: "wire" },
    { word: "تین", transliteration: "teen", meaning: "three" }
  ],
  ttay: [
    { word: "ٹوکری", transliteration: "tokri", meaning: "basket" },
    { word: "ٹماٹر", transliteration: "tamaatar", meaning: "tomato" }
  ],
  say: [
    { word: "ثابت", transliteration: "saabit", meaning: "fixed" },
    { word: "ثانی", transliteration: "saani", meaning: "second" }
  ],
  jeem: [
    { word: "جہاز", transliteration: "jahaaz", meaning: "ship" },
    { word: "جگہ", transliteration: "jagah", meaning: "place" }
  ],
  chay: [
    { word: "چاند", transliteration: "chaand", meaning: "moon" },
    { word: "چاول", transliteration: "chaawal", meaning: "rice" }
  ],
  hay: [
    { word: "حکمت", transliteration: "hikmat", meaning: "wisdom" },
    { word: "حیات", transliteration: "hayaat", meaning: "life" }
  ],
  khay: [
    { word: "خبر", transliteration: "khabar", meaning: "news" },
    { word: "خوشی", transliteration: "khushi", meaning: "happiness" }
  ],
  daal: [
    { word: "دن", transliteration: "din", meaning: "day" },
    { word: "دل", transliteration: "dil", meaning: "heart" }
  ],
  ddaal: [
    { word: "ڈبہ", transliteration: "dabba", meaning: "box" },
    { word: "ڈاک", transliteration: "daak", meaning: "mail" }
  ],
  zaal: [
    { word: "ذکر", transliteration: "zikr", meaning: "mention" },
    { word: "ذہن", transliteration: "zehn", meaning: "mind" }
  ],
  ray: [
    { word: "راستہ", transliteration: "raasta", meaning: "path" },
    { word: "رنگ", transliteration: "rang", meaning: "color" }
  ],
  rray: [
    { word: "گاڑی", transliteration: "gaari", meaning: "vehicle" },
    { word: "پہاڑ", transliteration: "pahaar", meaning: "mountain" }
  ],
  zay: [
    { word: "زمین", transliteration: "zameen", meaning: "earth" },
    { word: "زبان", transliteration: "zubaan", meaning: "language" }
  ],
  zhay: [
    { word: "ژالہ", transliteration: "zhaala", meaning: "hail" },
    { word: "ژرف", transliteration: "zharf", meaning: "deep" }
  ],
  seen: [
    { word: "سورج", transliteration: "sooraj", meaning: "sun" },
    { word: "سفر", transliteration: "safar", meaning: "journey" }
  ],
  sheen: [
    { word: "شام", transliteration: "shaam", meaning: "evening" },
    { word: "شہر", transliteration: "shehar", meaning: "city" }
  ],
  suad: [
    { word: "صبر", transliteration: "sabr", meaning: "patience" },
    { word: "صحت", transliteration: "sehat", meaning: "health" }
  ],
  zuad: [
    { word: "ضروری", transliteration: "zaroori", meaning: "important" },
    { word: "ضلع", transliteration: "zilla", meaning: "district" }
  ],
  toay: [
    { word: "طالب", transliteration: "taalib", meaning: "student" },
    { word: "طریقہ", transliteration: "tareeqa", meaning: "method" }
  ],
  zoay: [
    { word: "ظاہر", transliteration: "zaahir", meaning: "visible" },
    { word: "ظلم", transliteration: "zulm", meaning: "oppression" }
  ],
  ain: [
    { word: "علم", transliteration: "ilm", meaning: "knowledge" },
    { word: "عادت", transliteration: "aadat", meaning: "habit" }
  ],
  ghain: [
    { word: "غلط", transliteration: "ghalat", meaning: "wrong" },
    { word: "غروب", transliteration: "ghuroob", meaning: "sunset" }
  ],
  fay: [
    { word: "فکر", transliteration: "fikr", meaning: "thought" },
    { word: "فتح", transliteration: "fatah", meaning: "victory" }
  ],
  qaaf: [
    { word: "قلم", transliteration: "qalam", meaning: "pen" },
    { word: "قدم", transliteration: "qadam", meaning: "step" }
  ],
  kaaf: [
    { word: "کتاب", transliteration: "kitaab", meaning: "book" },
    { word: "کمرہ", transliteration: "kamra", meaning: "room" }
  ],
  gaaf: [
    { word: "گھر", transliteration: "ghar", meaning: "house" },
    { word: "گلاب", transliteration: "gulaab", meaning: "rose" }
  ],
  laam: [
    { word: "لباس", transliteration: "libaas", meaning: "clothes" },
    { word: "لکھنا", transliteration: "likhna", meaning: "to write" }
  ],
  meem: [
    { word: "میز", transliteration: "mez", meaning: "table" },
    { word: "محبت", transliteration: "mohabbat", meaning: "love" }
  ],
  noon: [
    { word: "نام", transliteration: "naam", meaning: "name" },
    { word: "نیا", transliteration: "naya", meaning: "new" }
  ],
  nng: [
    { word: "ہاں", transliteration: "haan", meaning: "yes" },
    { word: "کہاں", transliteration: "kahaan", meaning: "where" }
  ],
  wao: [
    { word: "وقت", transliteration: "waqt", meaning: "time" },
    { word: "وعدہ", transliteration: "waada", meaning: "promise" }
  ],
  dochashmi: [
    { word: "پھول", transliteration: "phool", meaning: "flower" },
    { word: "بھائی", transliteration: "bhai", meaning: "brother" }
  ],
  hey: [
    { word: "ہوا", transliteration: "hawa", meaning: "air" },
    { word: "ہاتھ", transliteration: "haath", meaning: "hand" }
  ],
  hamza: [
    { word: "مسئلہ", transliteration: "masla", meaning: "issue" },
    { word: "شیء", transliteration: "shay", meaning: "thing" }
  ],
  chotiye: [
    { word: "یاد", transliteration: "yaad", meaning: "memory" },
    { word: "یہ", transliteration: "yeh", meaning: "this" }
  ],
  barriye: [
    { word: "میرے", transliteration: "mere", meaning: "my" },
    { word: "کیے", transliteration: "kiye", meaning: "did" }
  ]
};

const FORM_FOCUSED_EXAMPLES = {
  bay: [
    { word: "خواب", transliteration: "khwaab", meaning: "dream" },
    { word: "کبھی", transliteration: "kabhi", meaning: "sometimes" }
  ],
  pay: [
    { word: "سپاہی", transliteration: "sipaahi", meaning: "soldier" },
    { word: "آپ", transliteration: "aap", meaning: "you" }
  ],
  tay: [
    { word: "متاع", transliteration: "mataa", meaning: "goods" },
    { word: "رات", transliteration: "raat", meaning: "night" }
  ],
  ttay: [
    { word: "لڑکا", transliteration: "larka", meaning: "boy" }
  ],
  jeem: [
    { word: "اجازت", transliteration: "ijaazat", meaning: "permission" },
    { word: "موج", transliteration: "mauj", meaning: "wave" }
  ],
  chay: [
    { word: "بچپن", transliteration: "bachpan", meaning: "childhood" },
    { word: "سچ", transliteration: "sach", meaning: "truth" }
  ],
  khay: [
    { word: "بخار", transliteration: "bukhaar", meaning: "fever" },
    { word: "شیخ", transliteration: "shaikh", meaning: "elder" }
  ],
  seen: [
    { word: "اسکول", transliteration: "school", meaning: "school" },
    { word: "لباس", transliteration: "libaas", meaning: "clothes" }
  ],
  sheen: [
    { word: "کشش", transliteration: "kashish", meaning: "attraction" },
    { word: "خوش", transliteration: "khush", meaning: "happy" }
  ],
  ain: [
    { word: "سعادت", transliteration: "saadat", meaning: "blessing" },
    { word: "بدیع", transliteration: "badee", meaning: "unique" }
  ],
  ghain: [
    { word: "دھوغا", transliteration: "dhogha", meaning: "deception" },
    { word: "بلاغ", transliteration: "balaagh", meaning: "delivery" }
  ],
  fay: [
    { word: "سفر", transliteration: "safar", meaning: "journey" },
    { word: "صاف", transliteration: "saaf", meaning: "clean" }
  ],
  qaaf: [
    { word: "بقلم", transliteration: "baqalam", meaning: "by pen" },
    { word: "حق", transliteration: "haq", meaning: "right" }
  ],
  kaaf: [
    { word: "مکان", transliteration: "makaan", meaning: "house" },
    { word: "نمک", transliteration: "namak", meaning: "salt" }
  ],
  gaaf: [
    { word: "نگار", transliteration: "nigaar", meaning: "portrait" },
    { word: "رنگ", transliteration: "rang", meaning: "color" }
  ],
  laam: [
    { word: "قلم", transliteration: "qalam", meaning: "pen" },
    { word: "دل", transliteration: "dil", meaning: "heart" }
  ],
  meem: [
    { word: "امید", transliteration: "umeed", meaning: "hope" },
    { word: "نام", transliteration: "naam", meaning: "name" }
  ],
  noon: [
    { word: "انسان", transliteration: "insaan", meaning: "human" },
    { word: "چمن", transliteration: "chaman", meaning: "garden" }
  ],
  hey: [
    { word: "چہرہ", transliteration: "chehra", meaning: "face" },
    { word: "راہ", transliteration: "raah", meaning: "path" }
  ],
  chotiye: [
    { word: "بیان", transliteration: "bayaan", meaning: "statement" },
    { word: "بندی", transliteration: "bandi", meaning: "bondage" }
  ]
};

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
  placementTarget: null,
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
  startReviewBtn: document.getElementById("startReviewBtn"),
  placementLessonSelect: document.getElementById("placementLessonSelect"),
  startPlacementBtn: document.getElementById("startPlacementBtn")
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

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function examplePoolForChar(char) {
  return [...(EXAMPLES[char.id] || []), ...(FORM_FOCUSED_EXAMPLES[char.id] || [])];
}

function randomExampleForChar(char) {
  return randomChoice(examplePoolForChar(char));
}

function inferForm(exampleWord, glyph) {
  const idx = exampleWord.indexOf(glyph);
  if (idx === -1 || exampleWord.length === 1) {
    return "standalone";
  }
  if (idx === 0) {
    return "initial";
  }
  if (idx === exampleWord.length - 1) {
    return "final";
  }
  return "medial";
}

function formExamplesForIntro(char) {
  const pool = shuffle(examplePoolForChar(char));
  const grouped = { initial: [], medial: [], final: [], standalone: [] };

  pool.forEach((example) => {
    const form = inferForm(example.word, char.glyph);
    grouped[form].push({ ...example, form });
  });

  const chosen = [];
  ["initial", "medial", "final", "standalone"].forEach((form) => {
    if (grouped[form][0]) {
      chosen.push(grouped[form][0]);
    }
  });

  if (chosen.length < 3) {
    pool.forEach((example) => {
      if (!chosen.find((item) => item.word === example.word)) {
        chosen.push({ ...example, form: inferForm(example.word, char.glyph) });
      }
    });
  }

  return chosen.slice(0, 4);
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

function populatePlacementSelector() {
  els.placementLessonSelect.innerHTML = "";

  LESSONS.slice(1).forEach((lesson) => {
    const option = document.createElement("option");
    option.value = String(lesson.id);
    option.textContent = `Lesson ${lesson.id}`;
    els.placementLessonSelect.appendChild(option);
  });

  const unlockedMax = state.progress.completed.length > 0 ? Math.max(...state.progress.completed) + 1 : 1;
  const suggested = Math.min(Math.max(unlockedMax + 1, 2), LESSONS.length);
  els.placementLessonSelect.value = String(suggested);
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
  populatePlacementSelector();
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

    const targetExample = randomExampleForChar(char);
    const wordPool = sample(introduced, 3, [char]);
    const translitOptions = shuffle([
      targetExample.transliteration,
      ...wordPool.map((w) => randomExampleForChar(w).transliteration)
    ]).slice(0, 4);

    practice.push({
      type: "readWord",
      prompt: "Read this Urdu word",
      answer: targetExample.transliteration,
      choices: translitOptions,
      char,
      example: targetExample
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
    char,
    example: randomExampleForChar(char),
    formExamples: formExamplesForIntro(char)
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

function buildPlacementSteps(targetLessonId) {
  const testedChars = getCharsUpToLesson(targetLessonId - 1);
  const sortedWeak = [...testedChars].sort((a, b) => weaknessScore(b.id) - weaknessScore(a.id));
  const focusChars = sortedWeak.slice(0, Math.min(8, sortedWeak.length));
  const practice = buildPracticeSteps(focusChars, testedChars);
  return practice.slice(0, Math.min(16, practice.length));
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
  state.placementTarget = null;
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
  } else if (mode === "placement") {
    state.placementTarget = lessonId;
    state.currentLesson = {
      id: "placement",
      title: `Placement to Lesson ${lessonId}`,
      newChars: []
    };
    state.lessonSteps = buildPlacementSteps(lessonId);
    els.lessonTitle.textContent = `Placement Test: unlock Lesson ${lessonId}`;
    els.lessonModeTag.textContent = "Placement";
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

function startPlacement() {
  const targetLessonId = Number(els.placementLessonSelect.value);
  if (!targetLessonId || targetLessonId <= 1) {
    return;
  }
  startSession("placement", targetLessonId);
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
      <p>Example: <span dir="rtl">${step.example.word}</span> (${step.example.transliteration}) - ${step.example.meaning}</p>
      <p class="prompt">Shape practice in words</p>
      <div>
        ${step.formExamples
          .map(
            (item) =>
              `<div><strong>${item.form}</strong>: <span dir="rtl">${item.word}</span> (${item.transliteration}) - ${item.meaning}</div>`
          )
          .join("")}
      </div>
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
      <div class="big-glyph" dir="rtl">${step.example.word}</div>
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
      btn.style.fontFamily = '"Noto Nastaliq Urdu", sans-serif';
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
  const passThreshold = state.mode === "placement" ? 80 : 70;
  const passed = reason !== "outOfHearts" && ratio >= passThreshold;

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

  if (state.mode === "placement" && passed) {
    const unlockedLessons = Array.from({ length: state.placementTarget - 1 }, (_, index) => index + 1);
    const completed = new Set(state.progress.completed);
    unlockedLessons.forEach((lessonId) => completed.add(lessonId));
    state.progress.completed = [...completed].sort((a, b) => a - b);
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
    els.resultTitle.textContent = state.mode === "review" ? "Review complete" : state.mode === "placement" ? "Placement passed" : "Lesson complete";
    els.resultSummary.textContent = `You scored ${ratio}% and earned ${xpEarned} XP.`;
  } else {
    els.resultTitle.textContent = "Keep practicing";
    els.resultSummary.textContent = `You scored ${ratio}% and earned ${xpEarned} XP.`;
  }

  const unlockedNext = state.mode === "lesson" && passed && Number(state.currentLesson.id) < LESSONS.length;
  const nextText =
    state.mode === "review"
      ? "Review mode always stays available from the path screen."
      : state.mode === "placement"
      ? passed
        ? `Lessons 1-${state.placementTarget - 1} marked complete. Lesson ${state.placementTarget} is now unlocked.`
        : `Score ${passThreshold}% or above to unlock Lesson ${state.placementTarget}.`
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
els.startPlacementBtn.addEventListener("click", startPlacement);

renderPath();
showScreen(els.screenPath);
