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
    { word: "آدمی", pronunciation: "आदमि", meaning: "person" },
    { word: "آج", pronunciation: "आज", meaning: "today" },
    { word: "آسمان", pronunciation: "आसमान", meaning: "sky" },
    { word: "آپ", pronunciation: "आप", meaning: "you" },
    { word: "ایمان", pronunciation: "इमान", meaning: "faith" }
  ],
  bay: [
    { word: "بادل", pronunciation: "बादल", meaning: "cloud" },
    { word: "بات", pronunciation: "बात", meaning: "conversation" },
    { word: "باغ", pronunciation: "बाघ", meaning: "garden" },
    { word: "لب", pronunciation: "लब", meaning: "lip" },
    { word: "سبب", pronunciation: "सबब", meaning: "reason" }
  ],
  pay: [
    { word: "پانی", pronunciation: "पानि", meaning: "water" },
    { word: "پرندہ", pronunciation: "परिनद", meaning: "bird" },
    { word: "پتہ", pronunciation: "पत", meaning: "address" },
    { word: "اپنا", pronunciation: "अपन", meaning: "own" },
    { word: "ٹوپی", pronunciation: "तोपि", meaning: "cap" }
  ],
  tay: [
    { word: "تار", pronunciation: "तार", meaning: "wire" },
    { word: "تین", pronunciation: "तीन", meaning: "three" },
    { word: "تلاش", pronunciation: "तलाश", meaning: "search" },
    { word: "متاع", pronunciation: "मता", meaning: "goods" },
    { word: "رات", pronunciation: "रात", meaning: "night" }
  ],
  ttay: [
    { word: "ٹوکری", pronunciation: "तोकरि", meaning: "basket" },
    { word: "ٹماٹر", pronunciation: "तमातर", meaning: "tomato" },
    { word: "ٹکٹ", pronunciation: "तिcकेत", meaning: "ticket" },
    { word: "لڑکا", pronunciation: "लरक", meaning: "boy" },
    { word: "پٹاخہ", pronunciation: "पताख", meaning: "firecracker" }
  ],
  say: [
    { word: "ثابت", pronunciation: "साबित", meaning: "fixed" },
    { word: "ثانی", pronunciation: "सानि", meaning: "second" },
    { word: "ثواب", pronunciation: "सवाब", meaning: "reward" },
    { word: "اثاثہ", pronunciation: "असास", meaning: "asset" },
    { word: "وارث", pronunciation: "वारिस", meaning: "heir" }
  ],
  jeem: [
    { word: "جہاز", pronunciation: "जहाज़", meaning: "ship" },
    { word: "جگہ", pronunciation: "जगह", meaning: "place" },
    { word: "جواب", pronunciation: "जवाब", meaning: "answer" },
    { word: "مسجد", pronunciation: "मसजिद", meaning: "mosque" },
    { word: "تاج", pronunciation: "ताज", meaning: "crown" }
  ],
  chay: [
    { word: "چاند", pronunciation: "चानद", meaning: "moon" },
    { word: "چاول", pronunciation: "चावल", meaning: "rice" },
    { word: "چشمہ", pronunciation: "चशम", meaning: "spring" },
    { word: "بچہ", pronunciation: "बच", meaning: "child" },
    { word: "اچھا", pronunciation: "अचह", meaning: "good" }
  ],
  hay: [
    { word: "حکمت", pronunciation: "हिकमत", meaning: "wisdom" },
    { word: "حیات", pronunciation: "हयात", meaning: "life" },
    { word: "حقیقت", pronunciation: "हक़ईक़अत", meaning: "reality" },
    { word: "حلال", pronunciation: "हलाल", meaning: "permissible" },
    { word: "حروف", pronunciation: "हुरूफ", meaning: "letters" }
  ],
  khay: [
    { word: "خبر", pronunciation: "खबर", meaning: "news" },
    { word: "خوشی", pronunciation: "खुशि", meaning: "happiness" },
    { word: "خواب", pronunciation: "खवाब", meaning: "dream" },
    { word: "آخر", pronunciation: "आखिर", meaning: "end" },
    { word: "خطرہ", pronunciation: "खतर", meaning: "danger" }
  ],
  daal: [
    { word: "دن", pronunciation: "दिन", meaning: "day" },
    { word: "دل", pronunciation: "दिल", meaning: "heart" },
    { word: "دروازہ", pronunciation: "दरवाज़अ", meaning: "door" },
    { word: "امید", pronunciation: "उमीद", meaning: "hope" },
    { word: "دلبر", pronunciation: "दिलबर", meaning: "beloved" }
  ],
  ddaal: [
    { word: "ڈبہ", pronunciation: "दबब", meaning: "box" },
    { word: "ڈاک", pronunciation: "दाक", meaning: "mail" },
    { word: "ڈگر", pronunciation: "दगर", meaning: "path" },
    { word: "لڈو", pronunciation: "लडु", meaning: "sweet" },
    { word: "ڈھال", pronunciation: "धाल", meaning: "shield" }
  ],
  zaal: [
    { word: "ذکر", pronunciation: "ज़इकर", meaning: "mention" },
    { word: "ذہن", pronunciation: "ज़एहन", meaning: "mind" },
    { word: "ذوق", pronunciation: "ज़अउक़", meaning: "taste" },
    { word: "اذان", pronunciation: "अज़आन", meaning: "call to prayer" },
    { word: "ذہانت", pronunciation: "ज़एहानत", meaning: "intelligence" }
  ],
  ray: [
    { word: "راستہ", pronunciation: "रासत", meaning: "path" },
    { word: "رنگ", pronunciation: "रङ", meaning: "color" },
    { word: "روز", pronunciation: "रोज़", meaning: "day" },
    { word: "گھر", pronunciation: "घर", meaning: "house" },
    { word: "سردار", pronunciation: "सरदार", meaning: "leader" }
  ],
  rray: [
    { word: "گاڑی", pronunciation: "गारि", meaning: "vehicle" },
    { word: "پہاڑ", pronunciation: "पहार", meaning: "mountain" },
    { word: "لڑکی", pronunciation: "लरकि", meaning: "girl" },
    { word: "مڑنا", pronunciation: "मुरन", meaning: "to turn" },
    { word: "بڑھا", pronunciation: "बरह", meaning: "elderly" }
  ],
  zay: [
    { word: "زمین", pronunciation: "ज़अमीन", meaning: "earth" },
    { word: "زبان", pronunciation: "ज़उबान", meaning: "language" },
    { word: "زمانہ", pronunciation: "ज़अमान", meaning: "era" },
    { word: "انداز", pronunciation: "अनदाज़", meaning: "style" },
    { word: "نماز", pronunciation: "नमाज़", meaning: "prayer" }
  ],
  zhay: [
    { word: "ژالہ", pronunciation: "ज़हाल", meaning: "hail" },
    { word: "ژرف", pronunciation: "ज़हरफ", meaning: "deep" },
    { word: "ٹیلیویژن", pronunciation: "तेलेविसिओन", meaning: "television" },
    { word: "ویژن", pronunciation: "विसिओन", meaning: "vision" },
    { word: "ژوب", pronunciation: "ज़होब", meaning: "zhob" }
  ],
  seen: [
    { word: "سورج", pronunciation: "सूरज", meaning: "sun" },
    { word: "سفر", pronunciation: "सफर", meaning: "journey" },
    { word: "سبق", pronunciation: "सबक़", meaning: "lesson" },
    { word: "انسان", pronunciation: "इनसान", meaning: "human" },
    { word: "مسافر", pronunciation: "मुसाफिर", meaning: "traveler" }
  ],
  sheen: [
    { word: "شام", pronunciation: "शाम", meaning: "evening" },
    { word: "شہر", pronunciation: "शेहर", meaning: "city" },
    { word: "شور", pronunciation: "शोर", meaning: "noise" },
    { word: "روشن", pronunciation: "रोशन", meaning: "bright" },
    { word: "بارش", pronunciation: "बारिश", meaning: "rain" }
  ],
  suad: [
    { word: "صبر", pronunciation: "सबर", meaning: "patience" },
    { word: "صحت", pronunciation: "सेहत", meaning: "health" },
    { word: "صدا", pronunciation: "सदा", meaning: "voice" },
    { word: "اقتصاد", pronunciation: "इक़तिसाद", meaning: "economy" },
    { word: "قصہ", pronunciation: "क़इसस", meaning: "story" }
  ],
  zuad: [
    { word: "ضروری", pronunciation: "ज़अरूरि", meaning: "important" },
    { word: "ضلع", pronunciation: "ज़इळअ", meaning: "district" },
    { word: "ضمانت", pronunciation: "ज़अमानत", meaning: "guarantee" },
    { word: "مرض", pronunciation: "मरज़", meaning: "disease" },
    { word: "ضبط", pronunciation: "ज़अबत", meaning: "control" }
  ],
  toay: [
    { word: "طالب", pronunciation: "तालिब", meaning: "student" },
    { word: "طریقہ", pronunciation: "तरीक़अ", meaning: "method" },
    { word: "طیارہ", pronunciation: "तययार", meaning: "airplane" },
    { word: "طوفان", pronunciation: "तूफान", meaning: "storm" },
    { word: "خطاط", pronunciation: "खटात", meaning: "calligrapher" }
  ],
  zoay: [
    { word: "ظاہر", pronunciation: "ज़आहिर", meaning: "visible" },
    { word: "ظلم", pronunciation: "ज़उलम", meaning: "oppression" },
    { word: "مظلوم", pronunciation: "मज़लूम", meaning: "oppressed" },
    { word: "ظرف", pronunciation: "ज़अरफ", meaning: "capacity" },
    { word: "تنظیم", pronunciation: "तनज़ईम", meaning: "organization" }
  ],
  ain: [
    { word: "علم", pronunciation: "इलम", meaning: "knowledge" },
    { word: "عادت", pronunciation: "आदत", meaning: "habit" },
    { word: "علاج", pronunciation: "इलाज", meaning: "treatment" },
    { word: "موقع", pronunciation: "मुक़अ", meaning: "opportunity" },
    { word: "عمر", pronunciation: "उमर", meaning: "age" }
  ],
  ghain: [
    { word: "غلط", pronunciation: "घलत", meaning: "wrong" },
    { word: "غروب", pronunciation: "घुरूब", meaning: "sunset" },
    { word: "غم", pronunciation: "घम", meaning: "sorrow" },
    { word: "چراغ", pronunciation: "चिराघ", meaning: "lamp" },
    { word: "باغ", pronunciation: "बाघ", meaning: "garden" }
  ],
  fay: [
    { word: "فکر", pronunciation: "फिकर", meaning: "thought" },
    { word: "فتح", pronunciation: "फतह", meaning: "victory" },
    { word: "فائدہ", pronunciation: "फिद", meaning: "benefit" },
    { word: "فاصلہ", pronunciation: "फासल", meaning: "distance" },
    { word: "سفر", pronunciation: "सफर", meaning: "journey" }
  ],
  qaaf: [
    { word: "قلم", pronunciation: "क़अलम", meaning: "pen" },
    { word: "قدم", pronunciation: "क़अदम", meaning: "step" },
    { word: "قانون", pronunciation: "क़अनून", meaning: "law" },
    { word: "قوت", pronunciation: "क़उववत", meaning: "strength" },
    { word: "حق", pronunciation: "हक़", meaning: "right" }
  ],
  kaaf: [
    { word: "کتاب", pronunciation: "किताब", meaning: "book" },
    { word: "کمرہ", pronunciation: "कमर", meaning: "room" },
    { word: "کل", pronunciation: "कल", meaning: "tomorrow" },
    { word: "نمک", pronunciation: "नमक", meaning: "salt" },
    { word: "سکون", pronunciation: "सुकून", meaning: "peace" }
  ],
  gaaf: [
    { word: "گھر", pronunciation: "घर", meaning: "house" },
    { word: "گلاب", pronunciation: "गुलाब", meaning: "rose" },
    { word: "گانا", pronunciation: "गान", meaning: "song" },
    { word: "رنگ", pronunciation: "रङ", meaning: "color" },
    { word: "جگہ", pronunciation: "जगह", meaning: "place" }
  ],
  laam: [
    { word: "لباس", pronunciation: "लिबास", meaning: "clothes" },
    { word: "لکھنا", pronunciation: "लिखन", meaning: "to write" },
    { word: "لوگ", pronunciation: "लोग", meaning: "people" },
    { word: "دل", pronunciation: "दिल", meaning: "heart" },
    { word: "سوال", pronunciation: "सवाल", meaning: "question" }
  ],
  meem: [
    { word: "میز", pronunciation: "मेज़", meaning: "table" },
    { word: "محبت", pronunciation: "मोहबबत", meaning: "love" },
    { word: "مکان", pronunciation: "मकान", meaning: "house" },
    { word: "موسم", pronunciation: "मुसम", meaning: "weather" },
    { word: "علم", pronunciation: "इलम", meaning: "knowledge" }
  ],
  noon: [
    { word: "نام", pronunciation: "नाम", meaning: "name" },
    { word: "نیا", pronunciation: "नय", meaning: "new" },
    { word: "ندی", pronunciation: "नदि", meaning: "river" },
    { word: "انسان", pronunciation: "इनसान", meaning: "human" },
    { word: "چمن", pronunciation: "चमन", meaning: "garden" }
  ],
  nng: [
    { word: "ہاں", pronunciation: "हान", meaning: "yes" },
    { word: "کہاں", pronunciation: "कहान", meaning: "where" },
    { word: "میں", pronunciation: "मिन", meaning: "I" },
    { word: "نہیں", pronunciation: "नहिन", meaning: "no/not" },
    { word: "کہیں", pronunciation: "कहिन", meaning: "somewhere" }
  ],
  wao: [
    { word: "وقت", pronunciation: "वक़त", meaning: "time" },
    { word: "وعدہ", pronunciation: "वाद", meaning: "promise" },
    { word: "وہ", pronunciation: "वोह", meaning: "he/she" },
    { word: "نور", pronunciation: "नूर", meaning: "light" },
    { word: "دوست", pronunciation: "दोसत", meaning: "friend" }
  ],
  dochashmi: [
    { word: "پھول", pronunciation: "फूल", meaning: "flower" },
    { word: "بھائی", pronunciation: "भि", meaning: "brother" },
    { word: "بھاگ", pronunciation: "भाग", meaning: "run" },
    { word: "تھک", pronunciation: "थक", meaning: "tired" },
    { word: "کھانا", pronunciation: "खान", meaning: "food" }
  ],
  hey: [
    { word: "ہوا", pronunciation: "हव", meaning: "air" },
    { word: "ہاتھ", pronunciation: "हाथ", meaning: "hand" },
    { word: "ہنر", pronunciation: "हुनर", meaning: "skill" },
    { word: "چہرہ", pronunciation: "चेहर", meaning: "face" },
    { word: "راہ", pronunciation: "राह", meaning: "path" }
  ],
  hamza: [
    { word: "مسئلہ", pronunciation: "मसल", meaning: "issue" },
    { word: "شیء", pronunciation: "शय", meaning: "thing" },
    { word: "جزء", pronunciation: "जुज़", meaning: "part" },
    { word: "متاثر", pronunciation: "मुतासिर", meaning: "affected" },
    { word: "مسئول", pronunciation: "मसूल", meaning: "responsible" }
  ],
  chotiye: [
    { word: "یاد", pronunciation: "याद", meaning: "memory" },
    { word: "یہ", pronunciation: "येह", meaning: "this" },
    { word: "یقین", pronunciation: "यक़ईन", meaning: "belief" },
    { word: "پیار", pronunciation: "पयार", meaning: "love" },
    { word: "نیکی", pronunciation: "नेकि", meaning: "goodness" }
  ],
  barriye: [
    { word: "میرے", pronunciation: "मेरे", meaning: "my" },
    { word: "کیے", pronunciation: "किये", meaning: "did" },
    { word: "تیرے", pronunciation: "तेरे", meaning: "your" },
    { word: "جیسے", pronunciation: "जिसे", meaning: "like/as" },
    { word: "کیسے", pronunciation: "किसे", meaning: "how" }
  ]
};

const FORM_FOCUSED_EXAMPLES = {
  bay: [
    { word: "خواب", pronunciation: "खवाब", meaning: "dream" },
    { word: "کبھی", pronunciation: "कभि", meaning: "sometimes" }
  ],
  pay: [
    { word: "سپاہی", pronunciation: "सिपाहि", meaning: "soldier" },
    { word: "آپ", pronunciation: "आप", meaning: "you" }
  ],
  tay: [
    { word: "متاع", pronunciation: "मता", meaning: "goods" },
    { word: "رات", pronunciation: "रात", meaning: "night" }
  ],
  ttay: [
    { word: "لڑکا", pronunciation: "लरक", meaning: "boy" }
  ],
  jeem: [
    { word: "اجازت", pronunciation: "इजाज़अत", meaning: "permission" },
    { word: "موج", pronunciation: "मुज", meaning: "wave" }
  ],
  chay: [
    { word: "بچپن", pronunciation: "बचपन", meaning: "childhood" },
    { word: "سچ", pronunciation: "सच", meaning: "truth" }
  ],
  khay: [
    { word: "بخار", pronunciation: "बुखार", meaning: "fever" },
    { word: "شیخ", pronunciation: "शिख", meaning: "elder" }
  ],
  seen: [
    { word: "اسکول", pronunciation: "सचूल", meaning: "school" },
    { word: "لباس", pronunciation: "लिबास", meaning: "clothes" }
  ],
  sheen: [
    { word: "کشش", pronunciation: "कशिश", meaning: "attraction" },
    { word: "خوش", pronunciation: "खुश", meaning: "happy" }
  ],
  ain: [
    { word: "سعادت", pronunciation: "सादत", meaning: "blessing" },
    { word: "بدیع", pronunciation: "बदी", meaning: "unique" }
  ],
  ghain: [
    { word: "دھوغا", pronunciation: "धोघ", meaning: "deception" },
    { word: "بلاغ", pronunciation: "बलाघ", meaning: "delivery" }
  ],
  fay: [
    { word: "سفر", pronunciation: "सफर", meaning: "journey" },
    { word: "صاف", pronunciation: "साफ", meaning: "clean" }
  ],
  qaaf: [
    { word: "بقلم", pronunciation: "बक़अलम", meaning: "by pen" },
    { word: "حق", pronunciation: "हक़", meaning: "right" }
  ],
  kaaf: [
    { word: "مکان", pronunciation: "मकान", meaning: "house" },
    { word: "نمک", pronunciation: "नमक", meaning: "salt" }
  ],
  gaaf: [
    { word: "نگار", pronunciation: "निगार", meaning: "portrait" },
    { word: "رنگ", pronunciation: "रङ", meaning: "color" }
  ],
  laam: [
    { word: "قلم", pronunciation: "क़अलम", meaning: "pen" },
    { word: "دل", pronunciation: "दिल", meaning: "heart" }
  ],
  meem: [
    { word: "امید", pronunciation: "उमीद", meaning: "hope" },
    { word: "نام", pronunciation: "नाम", meaning: "name" }
  ],
  noon: [
    { word: "انسان", pronunciation: "इनसान", meaning: "human" },
    { word: "چمن", pronunciation: "चमन", meaning: "garden" }
  ],
  hey: [
    { word: "چہرہ", pronunciation: "चेहर", meaning: "face" },
    { word: "راہ", pronunciation: "राह", meaning: "path" }
  ],
  chotiye: [
    { word: "بیان", pronunciation: "बयान", meaning: "statement" },
    { word: "بندی", pronunciation: "बनदि", meaning: "bondage" }
  ]
};

const COMPREHENSION_PASSAGES = [
  {
    id: "c1",
    level: 1,
    text: "آج علی اسکول دیر سے پہنچا۔ راستے میں بارش ہو رہی تھی، اس لئے وہ بس کا انتظار کرتا رہا۔ کلاس میں پہنچ کر اس نے استاد سے معذرت کی۔",
    questions: [
      {
        prompt: "علی دیر سے کیوں پہنچا؟",
        choices: ["بارش ہو رہی تھی", "وہ بیمار تھا", "اسکول بند تھا", "اسے راستہ نہیں ملا"],
        answer: "بارش ہو رہی تھی"
      },
      {
        prompt: "علی نے کلاس میں جا کر کیا کیا؟",
        choices: ["گھر واپس چلا گیا", "دوست سے لڑا", "استاد سے معذرت کی", "فوراً کھیلنے لگا"],
        answer: "استاد سے معذرت کی"
      }
    ]
  },
  {
    id: "c2",
    level: 1,
    text: "فاطمہ نے بازار سے پھل خریدے۔ گھر آ کر اس نے سیب اور کیلے دھوئے اور سب کو پلیٹ میں رکھ دیا۔ شام کو مہمان آئے تو سب نے خوشی سے پھل کھائے۔",
    questions: [
      {
        prompt: "فاطمہ نے بازار سے کیا خریدا؟",
        choices: ["کتابیں", "پھل", "کپڑے", "کھلونے"],
        answer: "پھل"
      },
      {
        prompt: "مہمان کب آئے؟",
        choices: ["صبح", "دوپہر", "شام", "رات گئے"],
        answer: "شام"
      }
    ]
  },
  {
    id: "c3",
    level: 2,
    text: "محلے کی لائبریری میں اس ہفتے مطالعے کی نشست ہوئی۔ بچوں کو مختلف کہانیاں دی گئیں اور ہر بچے نے اپنی پسند کی کہانی پر مختصر گفتگو کی۔ آخر میں منتظم نے کہا کہ روزانہ بیس منٹ مطالعہ عادت بنانی چاہیے۔",
    questions: [
      {
        prompt: "نشست کہاں ہوئی؟",
        choices: ["پارک میں", "لائبریری میں", "اسکول کے میدان میں", "کسی دکان پر"],
        answer: "لائبریری میں"
      },
      {
        prompt: "بچوں نے کس چیز پر گفتگو کی؟",
        choices: ["اپنی پسند کی کہانی", "صرف ہوم ورک", "کھیلوں کے قوانین", "موسم کی تبدیلی"],
        answer: "اپنی پسند کی کہانی"
      },
      {
        prompt: "منتظم نے کیا مشورہ دیا؟",
        choices: ["روزانہ بیس منٹ مطالعہ", "روزانہ ایک فلم", "ہفتے میں ایک دن چھٹی", "صرف امتحان کے وقت پڑھائی"],
        answer: "روزانہ بیس منٹ مطالعہ"
      }
    ]
  },
  {
    id: "c4",
    level: 2,
    text: "شہر میں صفائی مہم کے دوران طلبہ نے سڑکوں کے کنارے کچرا جمع کیا۔ کچھ لوگوں نے انہیں دستانے اور تھیلے فراہم کیے، جبکہ مقامی دکانداروں نے پانی اور جوس کا انتظام کیا۔ اس سرگرمی کے بعد علاقے کی فضا واضح طور پر بہتر محسوس ہوئی۔",
    questions: [
      {
        prompt: "صفائی مہم میں طلبہ نے کیا کیا؟",
        choices: ["درخت کاٹے", "کچرا جمع کیا", "دکانیں بند کیں", "ٹریفک روکی"],
        answer: "کچرا جمع کیا"
      },
      {
        prompt: "دکانداروں نے کیا انتظام کیا؟",
        choices: ["کتابیں", "پانی اور جوس", "کھیل کا سامان", "بس سروس"],
        answer: "پانی اور جوس"
      },
      {
        prompt: "سرگرمی کے بعد کیا تبدیلی آئی؟",
        choices: ["فضا بہتر محسوس ہوئی", "بارش شروع ہوگئی", "اسکول بند ہوگئے", "لوگ گھروں میں رہے"],
        answer: "فضا بہتر محسوس ہوئی"
      }
    ]
  },
  {
    id: "c5",
    level: 3,
    text: "کالج کے طلبہ نے ایک سائنسی نمائش منعقد کی جس میں توانائی کے متبادل ذرائع پر ماڈل پیش کیے گئے۔ ایک گروپ نے شمسی توانائی سے چلنے والا چھوٹا آبپاشی نظام دکھایا، جبکہ دوسرے گروپ نے بارش کے پانی کو محفوظ کرنے کا طریقہ سمجھایا۔ اساتذہ نے زور دیا کہ مقامی مسائل کے حل کے لئے سادہ مگر پائیدار ٹیکنالوجی اہم کردار ادا کر سکتی ہے۔",
    questions: [
      {
        prompt: "نمائش میں مرکزی موضوع کیا تھا؟",
        choices: ["متبادل توانائی", "قدیم تاریخ", "اردو شاعری", "بینکنگ نظام"],
        answer: "متبادل توانائی"
      },
      {
        prompt: "ایک گروپ نے کون سا نظام دکھایا؟",
        choices: ["شمسی آبپاشی نظام", "ریلوے سگنل نظام", "ہوائی جہاز کا ڈیزائن", "موبائل گیم"],
        answer: "شمسی آبپاشی نظام"
      },
      {
        prompt: "اساتذہ کے مطابق کون سی ٹیکنالوجی ضروری ہے؟",
        choices: ["سادہ اور پائیدار", "مہنگی اور پیچیدہ", "صرف درآمد شدہ", "صرف تجرباتی"],
        answer: "سادہ اور پائیدار"
      }
    ]
  },
  {
    id: "c6",
    level: 4,
    text: "ایک مقامی تنظیم نے دیہی اسکولوں میں ڈیجیٹل تعلیم متعارف کرانے کے لئے مرحلہ وار منصوبہ شروع کیا۔ پہلے مرحلے میں اساتذہ کی تربیت کی گئی تاکہ وہ آن لائن مواد کو نصاب سے جوڑ سکیں۔ دوسرے مرحلے میں طلبہ کو محدود انٹرنیٹ کے باوجود آف لائن مواد تک رسائی دینے کے لئے کم لاگت حل فراہم کیے گئے۔ ابتدائی رپورٹ کے مطابق حاضری میں اضافہ ہوا اور طلبہ کی تجزیاتی صلاحیت میں واضح بہتری دیکھی گئی۔",
    questions: [
      {
        prompt: "پہلے مرحلے میں کس چیز پر توجہ دی گئی؟",
        choices: ["اساتذہ کی تربیت", "نئی عمارت", "امتحان کی منسوخی", "کتب خانے کی بندش"],
        answer: "اساتذہ کی تربیت"
      },
      {
        prompt: "دوسرے مرحلے کا اہم مقصد کیا تھا؟",
        choices: ["آف لائن مواد تک رسائی", "فیس میں اضافہ", "کھیل کے میدان کی مرمت", "صرف شہری علاقوں میں کلاس"],
        answer: "آف لائن مواد تک رسائی"
      },
      {
        prompt: "ابتدائی رپورٹ میں کیا مثبت نتیجہ آیا؟",
        choices: ["حاضری اور تجزیاتی صلاحیت میں بہتری", "اساتذہ کی کمی", "امتحانات میں تاخیر", "طلبہ کی دلچسپی میں کمی"],
        answer: "حاضری اور تجزیاتی صلاحیت میں بہتری"
      }
    ]
  },
  {
    id: "c7",
    level: 1,
    text: "احمد نے سالگرہ کے دن پارک میں اپنے دوستوں کے ساتھ کھیل کھیلا۔ وہ سب نے بیڑی کامیابی سے فٹ بال کا میچ جیتا۔ شام کو تمام دوست احمد کے گھر آئے اور مزے سے کیک اور پھل کھائے۔",
    questions: [
      {
        prompt: "احمد نے سالگرہ کا دن کہاں منایا؟",
        choices: ["پارک میں", "گھر پر", "سکول میں", "ہسپتال میں"],
        answer: "پارک میں"
      },
      {
        prompt: "شام میں احمد کے دوست کیا کھانے کے لئے آئے؟",
        choices: ["کیک اور پھل", "نوڈلز", "سب زیاں", "مچھلی"],
        answer: "کیک اور پھل"
      }
    ]
  },
  {
    id: "c8",
    level: 2,
    text: "ہمارے شہر میں ہر سال بہار کے موسم میں ایک بڑا میلہ لگتا ہے۔ اہل شہر یہاں روایتی کھیل، گانے اور ناچ کا لطف لیتے ہیں۔ بچوں کے لیے جھولے اور پھوٹبال کی سہولیات ہوتی ہیں۔ بہت سے خاندار اپنے پرانے دوستوں سے یہاں ملاقات کرتے ہیں اور یادیں تروتاز کرتے ہیں۔",
    questions: [
      {
        prompt: "میلہ کون سے موسم میں لگتا ہے؟",
        choices: ["سردیوں میں", "موسم گرما میں", "بہار میں", "برسات میں"],
        answer: "بہار میں"
      },
      {
        prompt: "میلے میں بچوں کے لیے کیا تھا؟",
        choices: ["کتابیں", "جھولے اور فٹبال", "گیمز اور موبائل", "صرف کھانا"],
        answer: "جھولے اور فٹبال"
      },
      {
        prompt: "لوگ میلے میں کیا کرتے تھے؟",
        choices: ["صرف کھانا کھاتے", "روایتی کھیل اور ملاقات کرتے", "صرف سوتے", "کام کرتے"],
        answer: "روایتی کھیل اور ملاقات کرتے"
      }
    ]
  },
  {
    id: "c9",
    level: 3,
    text: "شہر کے قریب ایک جنگل میں شہری منتظمین نے ایک جدید پارک تیار کیا۔ اس میں سیاہ روغن کی بجائے سبز راہ داری بنائی گئی جو ماحول کے لیے نقصان دہ نہیں ہے۔ مختلف درخت اور پھول لگائے گئے۔ اب یہ جگہ کنبہ کے ساتھ وقت گزارنے اور قابل تجدید توانائی کے فوائل سے آگاہ ہونے کا ایک بہترین مقام ہے۔",
    questions: [
      {
        prompt: "پارک کہاں بنایا گیا؟",
        choices: ["شہر کے بیچ میں", "شہر کے قریب جنگل میں", "سمندر کے کنارے", "پہاڑوں پر"],
        answer: "شہر کے قریب جنگل میں"
      },
      {
        prompt: "راہ داری کیسی بنائی گئی؟",
        choices: ["سیاہ روغن سے", "سبز ماحول کے موافق", "پتھر سے", "ریت سے"],
        answer: "سبز ماحول کے موافق"
      },
      {
        prompt: "یہ پارک لوگوں کے لیے کیا فائدہ دیتا ہے؟",
        choices: ["صرف سونے کی جگہ", "خاندار کے ساتھ وقت اور ماحول کی سمجھ", "صرف کام کے لیے", "صرف کھیلنے کے لیے"],
        answer: "خاندار کے ساتھ وقت اور ماحول کی سمجھ"
      }
    ]
  },
  {
    id: "c10",
    level: 4,
    text: "عالمی تنظیمات نے دیکھا کہ روایتی کمیونٹی کی تقریریں سماج میں بہت طاقتور کردار ادا کرتی ہیں۔ انہوں نے مختلف ممالک میں ماہر خطیبین کو بلایا تاکہ وہ نوجوانوں کو بتائیں کہ کیسے تقریر کی طاقت سے معاشرتی بدلاؤ لایا جا سکتا ہے۔ اس پروگرام میں شرکت کنندوں نے اپنی برادریوں میں واپس جا کر شعور بیدار کرنے کے لیے مختلف کیمپین شروع کیے۔",
    questions: [
      {
        prompt: "عالمی تنظیمات کا مقصد کیا تھا؟",
        choices: ["صرف فلمیں دکھانا", "تقریر کی طاقت سے معاشرتی بدلاؤ دکھانا", "سیاحت کو فروغ دینا", "کھیلوں کا مقابلہ"],
        answer: "تقریر کی طاقت سے معاشرتی بدلاؤ دکھانا"
      },
      {
        prompt: "اس پروگرام میں کون شرکت کر رہے تھے؟",
        choices: ["صرف بزرگ", "ماہر خطیب اور نوجوان", "صرف اساتذہ", "صرف سیاسی لوگ"],
        answer: "ماہر خطیب اور نوجوان"
      },
      {
        prompt: "شرکت کنندوں نے واپسی پر کیا کیا؟",
        choices: ["کام چھوڑ دیا", "تنہائی میں رہے", "اپنی برادری میں شعور کمپیڈن", "صرف سوتے رہے"],
        answer: "اپنی برادری میں شعور کمپیڈن"
      }
    ]
  }
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
  ["hamza", "chotiye", "barriye"],
  [],
  [],
  [],
  []
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

function getComprehensionLevelForLesson(lessonId) {
  if (lessonId <= 17) {
    return 0;
  }
  return Math.min(4, lessonId - 17);
}

function buildComprehensionSteps(level) {
  const pool = COMPREHENSION_PASSAGES.filter((item) => item.level <= level);
  if (pool.length === 0) {
    return [];
  }

  const selectedPassage = randomChoice(pool);
  return selectedPassage.questions.map((question) => ({
    type: "comprehension",
    prompt: question.prompt,
    passage: selectedPassage.text,
    choices: shuffle([...question.choices]),
    answer: question.answer,
    char: { id: "comprehension" }
  }));
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

    const isComprehensionLesson = lesson.newChars.length === 0;
    node.innerHTML = `
      <strong>${lesson.title}</strong>
      <div class="letters">${isComprehensionLesson ? "مطالعہ" : lesson.newChars.map((c) => c.glyph).join(" ")}</div>
      <div class="meta">
        ${isComprehensionLesson ? "Reading comprehension" : `${lesson.newChars.length} new letter${lesson.newChars.length > 1 ? "s" : ""}`}
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
  const comprehensionLevel = getComprehensionLevelForLesson(lesson.id);
  if (comprehensionLevel > 0) {
    return buildComprehensionSteps(comprehensionLevel);
  }

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
  const base = buildPracticeSteps(targetChars, unlocked);

  const highestCompleted = state.progress.completed.length ? Math.max(...state.progress.completed) : 0;
  if (highestCompleted >= 18) {
    const reviewLevel = Math.min(4, highestCompleted - 17);
    return [...base, ...buildComprehensionSteps(reviewLevel)];
  }

  return base;
}

function buildPlacementSteps(targetLessonId) {
  const testedChars = getCharsUpToLesson(targetLessonId - 1);
  const sortedWeak = [...testedChars].sort((a, b) => weaknessScore(b.id) - weaknessScore(a.id));
  const focusChars = sortedWeak.slice(0, Math.min(8, sortedWeak.length));
  const isComprehensionPlacement = targetLessonId >= 18;
  const letterQuestionCap = isComprehensionPlacement ? 10 : 16;
  const practice = buildPracticeSteps(focusChars, testedChars).slice(0, letterQuestionCap);

  // Placement for post-script lessons should also test reading comprehension.
  if (isComprehensionPlacement) {
    const comprehensionLevel = Math.min(4, targetLessonId - 17);
    const comprehensionSteps = buildComprehensionSteps(comprehensionLevel).slice(0, 2);
    return [...practice, ...comprehensionSteps];
  }

  return practice;
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
    const label = lesson.newChars.length > 0 ? lesson.newChars.map((c) => c.name).join(", ") : "Reading Comprehension";
    els.lessonTitle.textContent = `${lesson.title}: ${label}`;
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

  // Helper to wrap prompt in Noto Nastaliq if it contains Urdu
  function renderPrompt(text) {
    if (text && text.match(/[\u0600-\u06FF]/u)) {
      return `<span style="font-family: 'Noto Nastaliq Urdu', sans-serif;" dir="rtl">${text}</span>`;
    }
    return text;
  }

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
      <p class="prompt">${renderPrompt(step.prompt)}</p>
      <div class="big-glyph" dir="rtl">${step.char.glyph}</div>
    `;
  } else if (step.type === "comprehension") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${renderPrompt("مطالعہ")}</p>
      <div class="reading" dir="rtl">${step.passage}</div>
      <p class="prompt">${renderPrompt(step.prompt)}</p>
    `;
  } else if (step.type === "readWord") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${renderPrompt(step.prompt)}</p>
      <div class="big-glyph" dir="rtl">${step.example.word}</div>
    `;
  } else if (step.type === "pickGlyph" || step.type === "reviewGlyph") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${renderPrompt(step.prompt)}</p>
      <p class="reading">Tip: focus on dots and tail shape.</p>
    `;
  }

  step.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.className = "choice";

    if (choice && choice.match(/[\u0600-\u06FF]/u)) {
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
