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
    { word: "آدمی", pronunciation: "आदमी", meaning: "person" },
    { word: "آج", pronunciation: "आज", meaning: "today" },
    { word: "آسمان", pronunciation: "आसमान", meaning: "sky" },
    { word: "آپ", pronunciation: "आप", meaning: "you" },
    { word: "ایمان", pronunciation: "इमान", meaning: "faith" }
  ],
  bay: [
    { word: "بادل", pronunciation: "बादल", meaning: "cloud" },
    { word: "بات", pronunciation: "बात", meaning: "conversation" },
    { word: "باغ", pronunciation: "बाग़", meaning: "garden" },
    { word: "لب", pronunciation: "लब", meaning: "lip" },
    { word: "سبب", pronunciation: "सबब", meaning: "reason" }
  ],
  pay: [
    { word: "پانی", pronunciation: "पानी", meaning: "water" },
    { word: "پرندہ", pronunciation: "परिंदा", meaning: "bird" },
    { word: "پتہ", pronunciation: "पता", meaning: "address" },
    { word: "اپنا", pronunciation: "अपना", meaning: "own" },
    { word: "ٹوپی", pronunciation: "टोपी", meaning: "cap" }
  ],
  tay: [
    { word: "تار", pronunciation: "तार", meaning: "wire" },
    { word: "تین", pronunciation: "तीन", meaning: "three" },
    { word: "تلاش", pronunciation: "तलाश", meaning: "search" },
    { word: "متاع", pronunciation: "मता", meaning: "goods" },
    { word: "رات", pronunciation: "रात", meaning: "night" }
  ],
  ttay: [
    { word: "ٹوکری", pronunciation: "टोकरी", meaning: "basket" },
    { word: "ٹماٹر", pronunciation: "टमाटर", meaning: "tomato" },
    { word: "ٹکٹ", pronunciation: "टिकट", meaning: "ticket" },
    { word: "لڑکا", pronunciation: "लड़का", meaning: "boy" },
    { word: "پٹاخہ", pronunciation: "पटाखा", meaning: "firecracker" }
  ],
  say: [
    { word: "ثابت", pronunciation: "साबित", meaning: "fixed" },
    { word: "ثانی", pronunciation: "सानी", meaning: "second" },
    { word: "ثواب", pronunciation: "सवाब", meaning: "reward" },
    { word: "اثاثہ", pronunciation: "असास", meaning: "asset" },
    { word: "وارث", pronunciation: "वारिस", meaning: "heir" }
  ],
  jeem: [
    { word: "جہاز", pronunciation: "जहाज़", meaning: "ship" },
    { word: "جگہ", pronunciation: "जगह", meaning: "place" },
    { word: "جواب", pronunciation: "जवाब", meaning: "answer" },
    { word: "مسجد", pronunciation: "मस्जिद", meaning: "mosque" },
    { word: "تاج", pronunciation: "ताज", meaning: "crown" }
  ],
  chay: [
    { word: "چاند", pronunciation: "चाँद", meaning: "moon" },
    { word: "چاول", pronunciation: "चावल", meaning: "rice" },
    { word: "چشمہ", pronunciation: "चश्मा", meaning: "spring" },
    { word: "بچہ", pronunciation: "बच्चा", meaning: "child" },
    { word: "اچھا", pronunciation: "अच्छा", meaning: "good" }
  ],
  hay: [
    { word: "حکمت", pronunciation: "हिकमत", meaning: "wisdom" },
    { word: "حیات", pronunciation: "हयात", meaning: "life" },
    { word: "حقیقت", pronunciation: "हकीकत", meaning: "reality" },
    { word: "حلال", pronunciation: "हलाल", meaning: "permissible" },
    { word: "حروف", pronunciation: "हुरूफ", meaning: "letters" }
  ],
  khay: [
    { word: "خبر", pronunciation: "ख़बर", meaning: "news" },
    { word: "خوشی", pronunciation: "ख़ुशी", meaning: "happiness" },
    { word: "خواب", pronunciation: "ख़्वाब", meaning: "dream" },
    { word: "آخر", pronunciation: "आख़िर", meaning: "end" },
    { word: "خطرہ", pronunciation: "ख़तरा", meaning: "danger" }
  ],
  daal: [
    { word: "دن", pronunciation: "दिन", meaning: "day" },
    { word: "دل", pronunciation: "दिल", meaning: "heart" },
    { word: "دروازہ", pronunciation: "दरवाज़ा", meaning: "door" },
    { word: "امید", pronunciation: "उम्मीद", meaning: "hope" },
    { word: "دلبر", pronunciation: "दिलबर", meaning: "beloved" }
  ],
  ddaal: [
    { word: "ڈبہ", pronunciation: "डब्बा", meaning: "box" },
    { word: "ڈاک", pronunciation: "डाक", meaning: "mail" },
    { word: "ڈگر", pronunciation: "डगर", meaning: "path" },
    { word: "لڈو", pronunciation: "लड्डू", meaning: "sweet" },
    { word: "ڈھال", pronunciation: "ढाल", meaning: "shield" }
  ],
  zaal: [
    { word: "ذکر", pronunciation: "ज़िक्र", meaning: "mention" },
    { word: "ذہن", pronunciation: "ज़हन", meaning: "mind" },
    { word: "ذوق", pronunciation: "ज़ौक़", meaning: "taste" },
    { word: "اذان", pronunciation: "अज़ान", meaning: "call to prayer" },
    { word: "ذہانت", pronunciation: "ज़हनत", meaning: "intelligence" }
  ],
  ray: [
    { word: "راستہ", pronunciation: "रास्ता", meaning: "path" },
    { word: "رنگ", pronunciation: "रंग", meaning: "color" },
    { word: "روز", pronunciation: "रोज़", meaning: "day" },
    { word: "گھر", pronunciation: "घर", meaning: "house" },
    { word: "سردار", pronunciation: "सरदार", meaning: "leader" }
  ],
  rray: [
    { word: "گاڑی", pronunciation: "गाड़ी", meaning: "vehicle" },
    { word: "پہاڑ", pronunciation: "पहाड़", meaning: "mountain" },
    { word: "لڑکی", pronunciation: "लड़की", meaning: "girl" },
    { word: "مڑنا", pronunciation: "मुड़ना", meaning: "to turn" },
    { word: "بڑھا", pronunciation: "बुड्ढा", meaning: "elderly" }
  ],
  zay: [
    { word: "زمین", pronunciation: "ज़मीन", meaning: "earth" },
    { word: "زبان", pronunciation: "ज़बान", meaning: "language" },
    { word: "زمانہ", pronunciation: "ज़माना", meaning: "era" },
    { word: "انداز", pronunciation: "अंदाज़", meaning: "style" },
    { word: "نماز", pronunciation: "नमाज़", meaning: "prayer" }
  ],
  zhay: [
    { word: "ژالہ", pronunciation: "जाल", meaning: "hail" },
    { word: "ژرف", pronunciation: "ज़रफ़", meaning: "deep" },
    { word: "ٹیلیویژن", pronunciation: "टेलीविज़न", meaning: "television" },
    { word: "ویژن", pronunciation: "विज़न", meaning: "vision" },
    { word: "ژوب", pronunciation: "ज़हब", meaning: "zhob" }
  ],
  seen: [
    { word: "سورج", pronunciation: "सूरज", meaning: "sun" },
    { word: "سفر", pronunciation: "सफर", meaning: "journey" },
    { word: "سبق", pronunciation: "सबक़", meaning: "lesson" },
    { word: "انسان", pronunciation: "इंसान", meaning: "human" },
    { word: "مسافر", pronunciation: "मुसाफ़िर", meaning: "traveler" }
  ],
  sheen: [
    { word: "شام", pronunciation: "शाम", meaning: "evening" },
    { word: "شہر", pronunciation: "शहर", meaning: "city" },
    { word: "شور", pronunciation: "शोर", meaning: "noise" },
    { word: "روشن", pronunciation: "रोशन", meaning: "bright" },
    { word: "بارش", pronunciation: "बारिश", meaning: "rain" }
  ],
  suad: [
    { word: "صبر", pronunciation: "सब्र", meaning: "patience" },
    { word: "صحت", pronunciation: "सेहत", meaning: "health" },
    { word: "صدا", pronunciation: "सदा", meaning: "voice" },
    { word: "اقتصاد", pronunciation: "इक़्तिसाद", meaning: "economy" },
    { word: "قصہ", pronunciation: "क़िस्सा", meaning: "story" }
  ],
  zuad: [
    { word: "ضروری", pronunciation: "ज़रूरी", meaning: "important" },
    { word: "ضلع", pronunciation: "ज़िला", meaning: "district" },
    { word: "ضمانت", pronunciation: "ज़मानात", meaning: "guarantee" },
    { word: "مرض", pronunciation: "मर्ज़", meaning: "disease" },
    { word: "ضبط", pronunciation: "ज़ब्त", meaning: "control" }
  ],
  toay: [
    { word: "طالب", pronunciation: "तलब", meaning: "student" },
    { word: "طریقہ", pronunciation: "तरीक़ा", meaning: "method" },
    { word: "طیارہ", pronunciation: "तैयार", meaning: "airplane" },
    { word: "طوفان", pronunciation: "तूफ़ान", meaning: "storm" },
    { word: "خطاط", pronunciation: "ख़ताती", meaning: "calligrapher" }
  ],
  zoay: [
    { word: "ظاہر", pronunciation: "ज़ाहिर", meaning: "visible" },
    { word: "ظلم", pronunciation: "ज़ुल्म", meaning: "oppression" },
    { word: "مظلوم", pronunciation: "मज़लूम", meaning: "oppressed" },
    { word: "ظرف", pronunciation: "ज़रफ़", meaning: "capacity" },
    { word: "تنظیم", pronunciation: "तंज़ीम", meaning: "organization" }
  ],
  ain: [
    { word: "علم", pronunciation: "इल्म", meaning: "knowledge" },
    { word: "عادت", pronunciation: "आदत", meaning: "habit" },
    { word: "علاج", pronunciation: "इलाज", meaning: "treatment" },
    { word: "موقع", pronunciation: "मौक़ा", meaning: "opportunity" },
    { word: "عمر", pronunciation: "उम्र", meaning: "age" }
  ],
  ghain: [
    { word: "غلط", pronunciation: "ग़लत", meaning: "wrong" },
    { word: "غروب", pronunciation: "ग़रूब", meaning: "sunset" },
    { word: "غم", pronunciation: "ग़म", meaning: "sorrow" },
    { word: "چراغ", pronunciation: "चिराग़", meaning: "lamp" },
    { word: "باغ", pronunciation: "बाग़", meaning: "garden" }
  ],
  fay: [
    { word: "فکر", pronunciation: "फिक्र", meaning: "thought" },
    { word: "فتح", pronunciation: "फतह", meaning: "victory" },
    { word: "فائدہ", pronunciation: "फायदा", meaning: "benefit" },
    { word: "فاصلہ", pronunciation: "फासला", meaning: "distance" },
    { word: "سفر", pronunciation: "सफर", meaning: "journey" }
  ],
  qaaf: [
    { word: "قلم", pronunciation: "क़लम", meaning: "pen" },
    { word: "قدم", pronunciation: "क़दम", meaning: "step" },
    { word: "قانون", pronunciation: "क़ानून", meaning: "law" },
    { word: "قوت", pronunciation: "क़ुव्वत", meaning: "strength" },
    { word: "حق", pronunciation: "हक़", meaning: "right" }
  ],
  kaaf: [
    { word: "کتاب", pronunciation: "किताब", meaning: "book" },
    { word: "کمرہ", pronunciation: "कमरा", meaning: "room" },
    { word: "کل", pronunciation: "कल", meaning: "tomorrow" },
    { word: "نمک", pronunciation: "नमक", meaning: "salt" },
    { word: "سکون", pronunciation: "सुकून", meaning: "peace" }
  ],
  gaaf: [
    { word: "گھر", pronunciation: "घर", meaning: "house" },
    { word: "گلاب", pronunciation: "गुलाब", meaning: "rose" },
    { word: "گانا", pronunciation: "गाना", meaning: "song" },
    { word: "رنگ", pronunciation: "रंग", meaning: "color" },
    { word: "جگہ", pronunciation: "जगह", meaning: "place" }
  ],
  laam: [
    { word: "لباس", pronunciation: "लिबास", meaning: "clothes" },
    { word: "لکھنا", pronunciation: "लिखना", meaning: "to write" },
    { word: "لوگ", pronunciation: "लोग", meaning: "people" },
    { word: "دل", pronunciation: "दिल", meaning: "heart" },
    { word: "سوال", pronunciation: "सवाल", meaning: "question" }
  ],
  meem: [
    { word: "میز", pronunciation: "मेज़", meaning: "table" },
    { word: "محبت", pronunciation: "मोहब्बत", meaning: "love" },
    { word: "مکان", pronunciation: "मकान", meaning: "house" },
    { word: "موسم", pronunciation: "मौसम", meaning: "weather" },
    { word: "علم", pronunciation: "इल्म", meaning: "knowledge" }
  ],
  noon: [
    { word: "نام", pronunciation: "नाम", meaning: "name" },
    { word: "نیا", pronunciation: "नया", meaning: "new" },
    { word: "ندی", pronunciation: "नदी", meaning: "river" },
    { word: "انسان", pronunciation: "इंसान", meaning: "human" },
    { word: "چمن", pronunciation: "चमन", meaning: "garden" }
  ],
  nng: [
    { word: "ہاں", pronunciation: "हाँ", meaning: "yes" },
    { word: "کہاں", pronunciation: "कहाँ", meaning: "where" },
    { word: "میں", pronunciation: "मैं", meaning: "I" },
    { word: "نہیں", pronunciation: "नहीं", meaning: "no/not" },
    { word: "کہیں", pronunciation: "कहीं", meaning: "somewhere" }
  ],
  wao: [
    { word: "وقت", pronunciation: "वक़्त", meaning: "time" },
    { word: "وعدہ", pronunciation: "वादा", meaning: "promise" },
    { word: "وہ", pronunciation: "वो", meaning: "he/she" },
    { word: "نور", pronunciation: "नूर", meaning: "light" },
    { word: "دوست", pronunciation: "दोस्त", meaning: "friend" }
  ],
  dochashmi: [
    { word: "پھول", pronunciation: "फूल", meaning: "flower" },
    { word: "بھائی", pronunciation: "भाई", meaning: "brother" },
    { word: "بھاگ", pronunciation: "भाग", meaning: "run" },
    { word: "تھک", pronunciation: "थक", meaning: "tired" },
    { word: "کھانا", pronunciation: "खाना", meaning: "food" }
  ],
  hey: [
    { word: "ہوا", pronunciation: "हवा", meaning: "air" },
    { word: "ہاتھ", pronunciation: "हाथ", meaning: "hand" },
    { word: "ہنر", pronunciation: "हुनर", meaning: "skill" },
    { word: "چہرہ", pronunciation: "चेहरा", meaning: "face" },
    { word: "راہ", pronunciation: "राह", meaning: "path" }
  ],
  hamza: [
    { word: "مسئلہ", pronunciation: "मसला", meaning: "issue" },
    { word: "شیء", pronunciation: "शय", meaning: "thing" },
    { word: "جزء", pronunciation: "अंश", meaning: "part" },
    { word: "متاثر", pronunciation: "मुतास्सिर", meaning: "affected" },
    { word: "مسئول", pronunciation: "मसूल", meaning: "responsible" }
  ],
  chotiye: [
    { word: "یاد", pronunciation: "याद", meaning: "memory" },
    { word: "یہ", pronunciation: "ये", meaning: "this" },
    { word: "یقین", pronunciation: "यक़ीन", meaning: "belief" },
    { word: "پیار", pronunciation: "प्यार", meaning: "love" },
    { word: "نیکی", pronunciation: "नेकी", meaning: "goodness" }
  ],
  barriye: [
    { word: "میرے", pronunciation: "मेरे", meaning: "my" },
    { word: "کیے", pronunciation: "किए", meaning: "did" },
    { word: "تیرے", pronunciation: "तेरे", meaning: "your" },
    { word: "جیسے", pronunciation: "जैसे", meaning: "like/as" },
    { word: "کیسے", pronunciation: "कैसे", meaning: "how" }
  ]
};

const FORM_FOCUSED_EXAMPLES = {
  bay: [
    { word: "خواب", pronunciation: "ख्वाब", meaning: "dream" },
    { word: "کبھی", pronunciation: "कभाई", meaning: "sometimes" }
  ],
  pay: [
    { word: "سپاہی", pronunciation: "सिपाही", meaning: "soldier" },
    { word: "آپ", pronunciation: "आप", meaning: "you" }
  ],
  tay: [
    { word: "متاع", pronunciation: "मता", meaning: "goods" },
    { word: "رات", pronunciation: "रात", meaning: "night" }
  ],
  ttay: [
    { word: "لڑکا", pronunciation: "लड़का", meaning: "boy" }
  ],
  jeem: [
    { word: "اجازت", pronunciation: "इज़ाज़त", meaning: "permission" },
    { word: "موج", pronunciation: "मौज", meaning: "wave" }
  ],
  chay: [
    { word: "بچپن", pronunciation: "बच्चापन", meaning: "childhood" },
    { word: "سچ", pronunciation: "सच", meaning: "truth" }
  ],
  khay: [
    { word: "بخار", pronunciation: "बुखार", meaning: "fever" },
    { word: "شیخ", pronunciation: "शेख", meaning: "elder" }
  ],
  seen: [
    { word: "اسکول", pronunciation: "स्कूल", meaning: "school" },
    { word: "لباس", pronunciation: "लिबास", meaning: "clothes" }
  ],
  sheen: [
    { word: "کشش", pronunciation: "कशिश", meaning: "attraction" },
    { word: "خوش", pronunciation: "खुश", meaning: "happy" }
  ],
  ain: [
    { word: "سعادت", pronunciation: "सौदत", meaning: "blessing" },
    { word: "بدیع", pronunciation: "बदी", meaning: "unique" }
  ],
  ghain: [
    { word: "دھوغا", pronunciation: "धोखा", meaning: "deception" },
    { word: "بلاغ", pronunciation: "बलाग़", meaning: "delivery" }
  ],
  fay: [
    { word: "سفر", pronunciation: "सफर", meaning: "journey" },
    { word: "صاف", pronunciation: "साफ", meaning: "clean" }
  ],
  qaaf: [
    { word: "بقلم", pronunciation: "बक़लम", meaning: "by pen" },
    { word: "حق", pronunciation: "हक़", meaning: "right" }
  ],
  kaaf: [
    { word: "مکان", pronunciation: "मकान", meaning: "house" },
    { word: "نمک", pronunciation: "नमक", meaning: "salt" }
  ],
  gaaf: [
    { word: "نگار", pronunciation: "निगार", meaning: "portrait" },
    { word: "رنگ", pronunciation: "रंग", meaning: "color" }
  ],
  laam: [
    { word: "قلم", pronunciation: "क़लम", meaning: "pen" },
    { word: "دل", pronunciation: "दिल", meaning: "heart" }
  ],
  meem: [
    { word: "امید", pronunciation: "उम्मीद", meaning: "hope" },
    { word: "نام", pronunciation: "नाम", meaning: "name" }
  ],
  noon: [
    { word: "انسان", pronunciation: "इंसान", meaning: "human" },
    { word: "چمن", pronunciation: "चमन", meaning: "garden" }
  ],
  hey: [
    { word: "چہرہ", pronunciation: "चेहरा", meaning: "face" },
    { word: "راہ", pronunciation: "राह", meaning: "path" }
  ],
  chotiye: [
    { word: "بیان", pronunciation: "बयान", meaning: "statement" },
    { word: "بندی", pronunciation: "बन्दी", meaning: "bondage" }
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
  newChars: ids.map((id) => CHAR_MAP[id]),
  type: "script"
}));

const VOCABULARY_WORD_DATA = {
  "جنون": { pronunciation: "Junoon", meaning: "obsession", example: "اسے شاعری پڑھنے کا جنون ہے۔", exampleMeaning: "He is obsessed with reading poetry." },
  "الفت": { pronunciation: "Ulfat", meaning: "affection", example: "ان دونوں دوستوں کے درمیان گہری الفت ہے۔", exampleMeaning: "There is deep affection between the two friends." },
  "وصل": { pronunciation: "Wasl", meaning: "union", example: "طویل انتظار کے بعد انہیں وصل کی خوشی ملی۔", exampleMeaning: "After a long wait, they experienced the joy of reunion." },
  "ہجر": { pronunciation: "Hijr", meaning: "separation", example: "ہجر کی رات اس کے لیے بہت طویل تھی۔", exampleMeaning: "The night of separation was very long for him." },
  "فراق": { pronunciation: "Firaaq", meaning: "distance", example: "فراق میں محبوب کی یاد اور بھی ستاتی ہے۔", exampleMeaning: "In separation, memories of one's beloved hurt even more." },
  "آشفتہ": { pronunciation: "Aashufta", meaning: "perplexed; distracted", example: "خبر سن کر اس کا ذہن آشفتہ ہو گیا۔", exampleMeaning: "His mind became troubled after hearing the news." },
  "اخلاص": { pronunciation: "Ikhlaas", meaning: "sincerity", example: "اس نے اخلاص سے اپنے دوست کی مدد کی۔", exampleMeaning: "She helped her friend with sincerity." },
  "رخ": { pronunciation: "Rukh", meaning: "face", example: "اس نے شرم سے اپنا رخ دوسری طرف کر لیا۔", exampleMeaning: "She shyly turned her face away." },
  "زلف": { pronunciation: "Zulf", meaning: "locks of hair", example: "ہوا میں اس کی زلفیں لہرا رہی تھیں۔", exampleMeaning: "Her locks of hair were flowing in the breeze." },
  "گیسو": { pronunciation: "Geesu", meaning: "tresses", example: "اس کے گیسو کندھوں تک آ رہے تھے۔", exampleMeaning: "Her tresses reached her shoulders." },
  "تشنہ": { pronunciation: "Tashna", meaning: "thirsty; desirous", example: "مسافر کئی گھنٹوں کے سفر کے بعد پانی کا تشنہ تھا۔", exampleMeaning: "The traveler was thirsty for water after several hours of travel." },
  "شوخی": { pronunciation: "Shokhi", meaning: "playfulness", example: "بچے کی شوخی نے سب کو ہنسا دیا۔", exampleMeaning: "The child's playfulness made everyone laugh." },
  "جلوہ": { pronunciation: "Jalwa", meaning: "radiant sight", example: "صبح کے وقت پہاڑوں کا جلوہ دیکھنے کے قابل تھا۔", exampleMeaning: "The sight of the mountains at dawn was worth seeing." },
  "تبسم": { pronunciation: "Tabassum", meaning: "smile", example: "اس کے تبسم نے اداس ماحول کو بدل دیا۔", exampleMeaning: "Her smile changed the gloomy atmosphere." },
  "دل": { pronunciation: "Dil", meaning: "heart", example: "اچھی خبر سن کر میرا دل خوش ہو گیا۔", exampleMeaning: "My heart became happy after hearing the good news." },
  "بسمل": { pronunciation: "Bismil", meaning: "wounded", example: "شکاری نے بسمل پرندے کو پانی پلایا۔", exampleMeaning: "The hunter gave water to the wounded bird." },
  "دیوانہ": { pronunciation: "Deewana", meaning: "mad in love", example: "وہ پرانی کتابوں کا دیوانہ ہے۔", exampleMeaning: "He is crazy about old books." },
  "جان": { pronunciation: "Jaan", meaning: "life; soul", example: "میری جان، اپنا خیال رکھنا۔", exampleMeaning: "My dear, take care of yourself." },
  "بے شمار": { pronunciation: "Beshumar", meaning: "countless", example: "آسمان پر بے شمار ستارے چمک رہے تھے۔", exampleMeaning: "Countless stars were shining in the sky." },
  "دل فزا": { pronunciation: "Dil-feza", meaning: "heart-pleasing", example: "باغ کا دل فزا منظر سب کو پسند آیا۔", exampleMeaning: "Everyone liked the heart-pleasing view of the garden." },
  "حسرت": { pronunciation: "Hasrat", meaning: "unfulfilled desire", example: "اسے بیرون ملک پڑھنے کی حسرت رہ گئی۔", exampleMeaning: "She was left with an unfulfilled desire to study abroad." },
  "درد": { pronunciation: "Dard", meaning: "pain", example: "چوٹ کی وجہ سے اس کے ہاتھ میں درد ہے۔", exampleMeaning: "His hand hurts because of the injury." },
  "آہ": { pronunciation: "Aah", meaning: "sigh", example: "بوڑھے شخص نے تھک کر ایک گہری آہ بھری۔", exampleMeaning: "The old man let out a deep sigh after becoming tired." },
  "نالہ": { pronunciation: "Nala", meaning: "lamentation", example: "مظلوم کی نالہ سن کر لوگ جمع ہو گئے۔", exampleMeaning: "People gathered after hearing the victim's lament." },
  "اشک": { pronunciation: "Ashk", meaning: "tears", example: "خوشی کے اشک اس کی آنکھوں میں آ گئے۔", exampleMeaning: "Tears of joy came to her eyes." },
  "الم": { pronunciation: "Alam", meaning: "grief", example: "جنگ کے الم نے پورے شہر کو خاموش کر دیا۔", exampleMeaning: "The grief of the war silenced the whole city." },
  "ملال": { pronunciation: "Malal", meaning: "regret", example: "غلط فیصلہ کرنے کا اسے آج بھی ملال ہے۔", exampleMeaning: "He still regrets making the wrong decision." },
  "قضا": { pronunciation: "Qada", meaning: "fate", example: "انسان قضا کے فیصلے کو نہیں بدل سکتا۔", exampleMeaning: "A person cannot change the decree of fate." },
  "قدر": { pronunciation: "Qadar", meaning: "destiny", example: "وقت کی قدر کرنے والا کبھی پیچھے نہیں رہتا۔", exampleMeaning: "A person who values time never falls behind." },
  "زمانہ": { pronunciation: "Zamana", meaning: "world; age", example: "زمانہ بدل گیا ہے مگر یہ روایت باقی ہے۔", exampleMeaning: "The world has changed, but this tradition remains." },
  "گردش": { pronunciation: "Gardish", meaning: "vicissitudes; cycles", example: "زمانے کی گردش نے اس کے حالات بدل دیے۔", exampleMeaning: "The turn of fortune changed his circumstances." },
  "بلا": { pronunciation: "Bala", meaning: "calamity", example: "طوفان ایک بڑی بلا بن کر شہر پر آیا۔", exampleMeaning: "The storm came upon the city as a great calamity." },
  "فلک": { pronunciation: "Falak", meaning: "sky; heavens", example: "رات کو فلک پر چاند صاف دکھائی دے رہا تھا۔", exampleMeaning: "The moon was clearly visible in the sky at night." },
  "آسمان": { pronunciation: "Aasman", meaning: "sky", example: "بارش کے بعد آسمان صاف ہو گیا۔", exampleMeaning: "The sky cleared after the rain." },
  "گل": { pronunciation: "Gul", meaning: "flower", example: "اس نے میز پر ایک سرخ گل رکھا۔", exampleMeaning: "She placed a red flower on the table." },
  "بلبل": { pronunciation: "Bulbul", meaning: "nightingale", example: "بلبل صبح سویرے باغ میں گانے لگی۔", exampleMeaning: "The nightingale began singing in the garden early in the morning." },
  "صیاد": { pronunciation: "Sayyaad", meaning: "fowler; hunter", example: "صیاد نے جال درخت کے نیچے رکھ دیا۔", exampleMeaning: "The fowler placed a net under the tree." },
  "قفس": { pronunciation: "Qafas", meaning: "cage", example: "اس نے پنجرے کا دروازہ کھول کر پرندے کو آزاد کر دیا۔", exampleMeaning: "He opened the cage and set the bird free." },
  "بہار": { pronunciation: "Bahaar", meaning: "spring", example: "بہار آتے ہی باغ میں نئے پھول کھل گئے۔", exampleMeaning: "As spring arrived, new flowers bloomed in the garden." },
  "خزاں": { pronunciation: "Khazan", meaning: "autumn", example: "خزاں میں درختوں کے پتے زرد ہو جاتے ہیں۔", exampleMeaning: "In autumn, the leaves of the trees turn yellow." },
  "چمن": { pronunciation: "Chaman", meaning: "garden", example: "بچے شام کو چمن میں کھیلنے گئے۔", exampleMeaning: "The children went to play in the garden in the evening." },
  "شب": { pronunciation: "Shab", meaning: "night", example: "شب کے سناٹے میں دور سے اذان کی آواز آئی۔", exampleMeaning: "In the silence of night, the call to prayer came from far away." },
  "سحر": { pronunciation: "Sehar", meaning: "dawn", example: "سحر کے وقت ٹھنڈی ہوا چل رہی تھی۔", exampleMeaning: "A cool breeze was blowing at dawn." },
  "ظلمت": { pronunciation: "Zulmat", meaning: "darkness", example: "چراغ جلتے ہی کمرے کی ظلمت ختم ہو گئی۔", exampleMeaning: "As soon as the lamp was lit, the darkness in the room disappeared." },
  "ماہ": { pronunciation: "Maah", meaning: "moon", example: "ماہ کی روشنی جھیل کے پانی پر پڑ رہی تھی۔", exampleMeaning: "The moon's light was falling on the lake's water." },
  "قمر": { pronunciation: "Qamar", meaning: "full moon", example: "قمر بادلوں کے پیچھے چھپ گیا۔", exampleMeaning: "The full moon disappeared behind the clouds." },
  "آفتاب": { pronunciation: "Aftaab", meaning: "sun", example: "آفتاب نکلتے ہی دھند کم ہونے لگی۔", exampleMeaning: "As the sun rose, the fog began to clear." },
  "صبح": { pronunciation: "Subh", meaning: "morning", example: "صبح میں نے کھڑکی کھولی اور تازہ ہوا محسوس کی۔", exampleMeaning: "In the morning, I opened the window and felt the fresh air." },
  "ساقی": { pronunciation: "Saqi", meaning: "cup-bearer", example: "ساقی نے سب مہمانوں کو پانی پیش کیا۔", exampleMeaning: "The cup-bearer offered water to all the guests." },
  "رند": { pronunciation: "Rind", meaning: "intoxicated free-thinker", example: "رند نے دنیا کی رسموں کی پروا نہیں کی۔", exampleMeaning: "The free-thinker did not care about the world's conventions." },
  "مے خانہ": { pronunciation: "Maikhana", meaning: "tavern", example: "شاعر نے مے خانہ کے بجائے کتابوں کی محفل پسند کی۔", exampleMeaning: "The poet preferred a gathering of books to a tavern." },
  "پیمانہ": { pronunciation: "Paimana", meaning: "goblet", example: "اس نے پیمانہ میز پر رکھ دیا۔", exampleMeaning: "He placed the goblet on the table." },
  "بادہ": { pronunciation: "Bada", meaning: "wine", example: "شاعر کی غزل میں بادہ اور جام کا ذکر ہے۔", exampleMeaning: "The poet's ghazal mentions wine and the cup." },
  "صراحی": { pronunciation: "Suraahi", meaning: "flask", example: "صراحی سے ٹھنڈا پانی گلاس میں ڈالا گیا۔", exampleMeaning: "Cold water was poured from the flask into the glass." },
  "خم": { pronunciation: "Khum", meaning: "wine-jar", example: "قدیم تہہ خانے میں شراب کا ایک بڑا خم رکھا تھا۔", exampleMeaning: "A large wine jar was kept in the old cellar." },
  "منزل": { pronunciation: "Manzil", meaning: "destination", example: "مسافر شام سے پہلے اپنی منزل تک پہنچ گیا۔", exampleMeaning: "The traveler reached his destination before evening." },
  "راہ": { pronunciation: "Raah", meaning: "path", example: "صحیح راہ چننے کے لیے اس نے استاد سے مشورہ کیا۔", exampleMeaning: "He consulted his teacher to choose the right path." },
  "غبار": { pronunciation: "Gubar", meaning: "dust; cloud", example: "تیز ہوا سے سڑک کا غبار ہر طرف پھیل گیا۔", exampleMeaning: "The dust from the road spread everywhere in the strong wind." },
  "جادہ": { pronunciation: "Jada", meaning: "track", example: "پرانا جادہ پہاڑ کے دامن سے گزرتا ہے۔", exampleMeaning: "The old track passes along the foot of the mountain." },
  "گام": { pronunciation: "Gaam", meaning: "stride; step", example: "منزل ابھی دور ہے، مگر ہر گام ہمیں آگے لے جاتا ہے۔", exampleMeaning: "The destination is still far, but every step takes us forward." },
  "راہ نورد": { pronunciation: "Rah-naward", meaning: "wayfarer", example: "راہ نورد نے رات ایک چھوٹے گاؤں میں گزاری۔", exampleMeaning: "The wayfarer spent the night in a small village." },
  "کارواں": { pronunciation: "Karwan", meaning: "caravan", example: "کارواں سورج ڈوبنے سے پہلے اگلے پڑاؤ پر پہنچ گیا۔", exampleMeaning: "The caravan reached the next stop before sunset." },
  "چشم": { pronunciation: "Chashm", meaning: "eye", example: "اس کی چشم میں خوشی صاف نظر آ رہی تھی۔", exampleMeaning: "Joy was clearly visible in her eye." },
  "نظر": { pronunciation: "Nazar", meaning: "gaze", example: "اس نے پہلی نظر میں مسئلہ سمجھ لیا۔", exampleMeaning: "He understood the problem at first glance." },
  "نگاہ": { pronunciation: "Nigaah", meaning: "look; sight", example: "ماں کی نگاہ ہمیشہ اپنے بچوں پر رہتی ہے۔", exampleMeaning: "A mother's gaze is always on her children." },
  "دیدہ": { pronunciation: "Dida", meaning: "eye", example: "اس نے دیدہ و دل سے مہمان کا استقبال کیا۔", exampleMeaning: "He welcomed the guest with all his heart and eyes." },
  "آنکھ": { pronunciation: "Ankh", meaning: "eye", example: "آنکھ میں دھول چلی جانے سے اسے تکلیف ہوئی۔", exampleMeaning: "He felt discomfort when dust got into his eye." },
  "ابرو": { pronunciation: "Abroo", meaning: "eyebrow", example: "اس نے حیرت سے ابرو اٹھائے۔", exampleMeaning: "She raised her eyebrow in surprise." },
  "مژگاں": { pronunciation: "Mizhgan", meaning: "eyelashes", example: "اس کی مژگاں پر شبنم کے قطرے ٹھہرے تھے۔", exampleMeaning: "Dewdrops rested on her eyelashes." },
  "حسن": { pronunciation: "Husn", meaning: "beauty", example: "قدرت کے حسن نے سب کو حیران کر دیا۔", exampleMeaning: "The beauty of nature amazed everyone." },
  "جمال": { pronunciation: "Jamal", meaning: "elegance", example: "قدیم عمارت کا جمال آج بھی قائم ہے۔", exampleMeaning: "The elegance of the old building still endures." },
  "نور": { pronunciation: "Noor", meaning: "light", example: "سورج کا نور کھڑکی سے کمرے میں داخل ہوا۔", exampleMeaning: "The light of the sun entered the room through the window." },
  "پیکر": { pronunciation: "Peykar", meaning: "figure; form", example: "وہ صبر و حوصلے کا پیکر ہے۔", exampleMeaning: "She is the embodiment of patience and courage." },
  "نزاکت": { pronunciation: "Nazakat", meaning: "delicacy", example: "اس پھول کو نزاکت سے ہاتھ میں اٹھاؤ۔", exampleMeaning: "Pick up this flower delicately." },
  "رعنائی": { pronunciation: "Rana'i", meaning: "gracefulness", example: "بہار نے وادی کی رعنائی بڑھا دی۔", exampleMeaning: "Spring increased the gracefulness of the valley." },
  "آفتاب رو": { pronunciation: "Aftaab-roo", meaning: "sun-faced", example: "شاعر نے اپنی محبوبہ کو آفتاب رو کہا۔", exampleMeaning: "The poet called his beloved sun-faced." },
  "وحشت": { pronunciation: "Wahshat", meaning: "wildness; dread", example: "سنسان گھر کی خاموشی نے اس کے دل میں وحشت پیدا کی۔", exampleMeaning: "The silence of the deserted house created dread in his heart." },
  "صحرا": { pronunciation: "Sehra", meaning: "desert", example: "مسافر صحرا میں پانی کی تلاش کرتا رہا۔", exampleMeaning: "The traveler kept searching for water in the desert." },
  "آوارہ": { pronunciation: "Aawara", meaning: "wanderer", example: "آوارہ کتے کو ایک خاندان نے گھر دے دیا۔", exampleMeaning: "A family gave a stray dog a home." },
  "بیابان": { pronunciation: "Biyaban", meaning: "wilderness", example: "وہ بیابان راستے سے گزرنے سے گھبرا رہا تھا۔", exampleMeaning: "He was nervous about traveling through the wilderness." },
  "خرابہ": { pronunciation: "Kharaba", meaning: "ruin", example: "قدیم محل اب ایک خاموش خرابہ بن چکا ہے۔", exampleMeaning: "The ancient palace has now become a silent ruin." },
  "مجنوں": { pronunciation: "Majnoon", meaning: "madman", example: "عاشق کو لوگ اس کی وفا کی وجہ سے مجنوں کہتے تھے۔", exampleMeaning: "People called the lover mad because of his devotion." },
  "گریباں": { pronunciation: "Gireban", meaning: "collar", example: "غم سے اس نے اپنا گریباں پکڑ لیا۔", exampleMeaning: "In grief, he clutched his collar." },
  "وفا": { pronunciation: "Wafa", meaning: "loyalty", example: "سچی دوستی میں وفا اور اعتماد ضروری ہیں۔", exampleMeaning: "Loyalty and trust are essential in true friendship." },
  "جفا": { pronunciation: "Jafa", meaning: "cruelty", example: "اس کی جفا نے پرانے دوست کا دل توڑ دیا۔", exampleMeaning: "His cruelty broke the old friend's heart." },
  "صنم": { pronunciation: "Sanam", meaning: "idol; beloved", example: "شاعر نے اپنی صنم کی تعریف میں غزل لکھی۔", exampleMeaning: "The poet wrote a ghazal praising his beloved." },
  "باوفا": { pronunciation: "Bawafa", meaning: "faithful", example: "وہ ایک باوفا ساتھی ہے جو مشکل وقت میں ساتھ دیتا ہے۔", exampleMeaning: "He is a faithful companion who stays in difficult times." },
  "حرف": { pronunciation: "Harf", meaning: "blame; letter", example: "اس نے میری بات کا ایک حرف بھی نہیں بھلایا۔", exampleMeaning: "She did not forget a single word of what I said." },
  "پیمان": { pronunciation: "Paiman", meaning: "promise", example: "دونوں دوستوں نے ہمیشہ ساتھ رہنے کا پیمان کیا۔", exampleMeaning: "The two friends made a promise to always stay together." },
  "عہد": { pronunciation: "Ahd", meaning: "vow", example: "اس نے اپنے عہد کو پورا کرنے کے لیے محنت کی۔", exampleMeaning: "He worked hard to fulfill his vow." },
  "کلام": { pronunciation: "Kalam", meaning: "speech", example: "استاد کا کلام طلبہ کے لیے بہت متاثر کن تھا۔", exampleMeaning: "The teacher's speech was very inspiring for the students." },
  "بیان": { pronunciation: "Bayan", meaning: "narration", example: "گواہ نے عدالت میں اپنا بیان ریکارڈ کرایا۔", exampleMeaning: "The witness recorded his statement in court." },
  "خاموشی": { pronunciation: "Khamoshi", meaning: "silence", example: "کلاس میں استاد کے آتے ہی خاموشی چھا گئی۔", exampleMeaning: "Silence fell over the class as soon as the teacher arrived." },
  "سکوت": { pronunciation: "Sukoot", meaning: "stillness", example: "رات کے سکوت میں دریا کی آواز سنائی دیتی تھی۔", exampleMeaning: "The sound of the river could be heard in the stillness of night." },
  "آواز": { pronunciation: "Awaaz", meaning: "voice", example: "مجھے باہر سے اپنے بھائی کی آواز سنائی دی۔", exampleMeaning: "I heard my brother's voice from outside." },
  "نغمہ": { pronunciation: "Naghma", meaning: "melody", example: "پرندوں کا نغمہ صبح کو اور خوب صورت بنا دیتا ہے۔", exampleMeaning: "The birds' melody makes the morning more beautiful." },
  "صدا": { pronunciation: "Sada", meaning: "echo; call", example: "دور پہاڑوں سے گھنٹی کی صدا آ رہی تھی۔", exampleMeaning: "The sound of a bell was coming from the distant mountains." }
};

const vocabularyWord = (word) => ({
  word,
  ...VOCABULARY_WORD_DATA[word]
});

const VOCABULARY_LESSONS = [
  { id: "vocab-1", title: "Vocabulary 1: Love & Devotion", words: [
    vocabularyWord("جنون"), vocabularyWord("الفت"), vocabularyWord("وصل"), vocabularyWord("ہجر"), vocabularyWord("فراق"), vocabularyWord("آشفتہ"), vocabularyWord("اخلاص")
  ] },
  { id: "vocab-2", title: "Vocabulary 2: The Beloved", words: [
    vocabularyWord("رخ"), vocabularyWord("زلف"), vocabularyWord("گیسو"), vocabularyWord("تشنہ"), vocabularyWord("شوخی"), vocabularyWord("جلوہ"), vocabularyWord("تبسم")
  ] },
  { id: "vocab-3", title: "Vocabulary 3: The Lover & Heart", words: [
    vocabularyWord("دل"), vocabularyWord("بسمل"), vocabularyWord("دیوانہ"), vocabularyWord("جان"), vocabularyWord("بے شمار"), vocabularyWord("دل فزا")
  ] },
  { id: "vocab-4", title: "Vocabulary 4: Sorrow & Grief", words: [
    vocabularyWord("حسرت"), vocabularyWord("درد"), vocabularyWord("آہ"), vocabularyWord("نالہ"), vocabularyWord("اشک"), vocabularyWord("الم"), vocabularyWord("ملال")
  ] },
  { id: "vocab-5", title: "Vocabulary 5: Destiny & World", words: [
    vocabularyWord("قضا"), vocabularyWord("قدر"), vocabularyWord("زمانہ"), vocabularyWord("گردش"), vocabularyWord("بلا"), vocabularyWord("فلک"), vocabularyWord("آسمان")
  ] },
  { id: "vocab-6", title: "Vocabulary 6: Nature & Spring", words: [
    vocabularyWord("گل"), vocabularyWord("بلبل"), vocabularyWord("صیاد"), vocabularyWord("قفس"), vocabularyWord("بہار"), vocabularyWord("خزاں"), vocabularyWord("چمن")
  ] },
  { id: "vocab-7", title: "Vocabulary 7: Night & Dawn", words: [
    vocabularyWord("شب"), vocabularyWord("سحر"), vocabularyWord("ظلمت"), vocabularyWord("ماہ"), vocabularyWord("قمر"), vocabularyWord("آفتاب"), vocabularyWord("صبح")
  ] },
  { id: "vocab-8", title: "Vocabulary 8: Tavern & Wine", words: [
    vocabularyWord("ساقی"), vocabularyWord("رند"), vocabularyWord("مے خانہ"), vocabularyWord("پیمانہ"), vocabularyWord("بادہ"), vocabularyWord("صراحی"), vocabularyWord("خم")
  ] },
  { id: "vocab-9", title: "Vocabulary 9: Paths & Destinations", words: [
    vocabularyWord("منزل"), vocabularyWord("راہ"), vocabularyWord("غبار"), vocabularyWord("جادہ"), vocabularyWord("گام"), vocabularyWord("راہ نورد"), vocabularyWord("کارواں")
  ] },
  { id: "vocab-10", title: "Vocabulary 10: Eyes & Gaze", words: [
    vocabularyWord("چشم"), vocabularyWord("نظر"), vocabularyWord("نگاہ"), vocabularyWord("دیدہ"), vocabularyWord("آنکھ"), vocabularyWord("ابرو"), vocabularyWord("مژگاں")
  ] },
  { id: "vocab-11", title: "Vocabulary 11: Beauty & Radiance", words: [
    vocabularyWord("حسن"), vocabularyWord("جمال"), vocabularyWord("نور"), vocabularyWord("پیکر"), vocabularyWord("نزاکت"), vocabularyWord("رعنائی"), vocabularyWord("آفتاب رو")
  ] },
  { id: "vocab-12", title: "Vocabulary 12: Madness & Wandering", words: [
    vocabularyWord("وحشت"), vocabularyWord("صحرا"), vocabularyWord("آوارہ"), vocabularyWord("بیابان"), vocabularyWord("خرابہ"), vocabularyWord("مجنوں"), vocabularyWord("گریباں")
  ] },
  { id: "vocab-13", title: "Vocabulary 13: Fidelity & Betrayal", words: [
    vocabularyWord("وفا"), vocabularyWord("جفا"), vocabularyWord("صنم"), vocabularyWord("باوفا"), vocabularyWord("حرف"), vocabularyWord("پیمان"), vocabularyWord("عہد")
  ] },
  { id: "vocab-14", title: "Vocabulary 14: Silence & Speech", words: [
    vocabularyWord("کلام"), vocabularyWord("بیان"), vocabularyWord("خاموشی"), vocabularyWord("سکوت"), vocabularyWord("آواز"), vocabularyWord("نغمہ"), vocabularyWord("صدا")
  ] }
];

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
  vocabularyPath: document.getElementById("vocabularyPath"),
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
    vocabularyCompleted: [],
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
      vocabularyCompleted: Array.isArray(parsed.vocabularyCompleted) ? parsed.vocabularyCompleted : [],
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

function pickSpeechVoice() {
  if (!("speechSynthesis" in window)) {
    return null;
  }

  const synth = window.speechSynthesis;
  const voices = synth.getVoices ? synth.getVoices() : [];
  const preferred = ["hi-IN", "hi", "ur-IN", "ur-PK"];

  const preferredVoice = voices.find(
    (voice) => voice && voice.lang && preferred.some((lang) => voice.lang.toLowerCase().startsWith(lang.toLowerCase()))
  );

  if (preferredVoice) {
    return preferredVoice;
  }

  return voices.find((voice) => voice && voice.default) || voices[0] || null;
}

function speakWord(word, pronunciation = "") {
  if (!("speechSynthesis" in window)) {
    return;
  }

  const synth = window.speechSynthesis;
  const text = pronunciation && pronunciation.trim() ? pronunciation : word;
  const utterance = new SpeechSynthesisUtterance(text);
  const voice = pickSpeechVoice();

  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
  } else {
    utterance.lang = "hi-IN";
  }

  utterance.rate = 0.9;
  utterance.pitch = 1;
  utterance.volume = 1;

  if (synth.speaking || synth.pending) {
    synth.cancel();
  }

  try {
    synth.resume();
  } catch (error) {
    // Ignore browser resume quirks.
  }

  synth.speak(utterance);
}

function bindIntroWordAudio(container) {
  const buttons = container.querySelectorAll(".intro-word");

  buttons.forEach((button) => {
    if (button.dataset.ttsBound === "true") {
      return;
    }

    button.dataset.ttsBound = "true";
    button.onclick = (event) => {
      event.preventDefault();
      const word = button.dataset.word || button.textContent.trim();
      const pronunciation = button.dataset.pronunciation || "";
      speakWord(word, pronunciation);
    };
  });
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
  const completedCount = state.progress.completed.length + state.progress.vocabularyCompleted.length;
  els.lessonCount.textContent = `${completedCount}/${LESSONS.length + VOCABULARY_LESSONS.length}`;
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

  renderVocabularyPath();

  renderTopStats();
  populatePlacementSelector();
}

function renderVocabularyPath() {
  els.vocabularyPath.innerHTML = "";

  VOCABULARY_LESSONS.forEach((lesson, index) => {
    const node = document.createElement("button");
    const unlocked = index === 0 || state.progress.vocabularyCompleted.includes(VOCABULARY_LESSONS[index - 1].id);
    node.className = `lesson-node ${unlocked ? "unlocked" : "locked"}`;
    if (state.progress.vocabularyCompleted.includes(lesson.id)) {
      node.classList.add("done");
    }
    node.innerHTML = `
      <strong>${lesson.title}</strong>
      <div class="letters">${lesson.words.map((item) => item.word).join(" · ")}</div>
      <div class="meta">${lesson.words.length} vocabulary words${state.progress.vocabularyCompleted.includes(lesson.id) ? " • Complete" : ""}</div>
    `;

    if (unlocked) {
      node.addEventListener("click", () => startVocabularyLesson(lesson.id));
    } else {
      node.disabled = true;
      node.title = "Complete the previous vocabulary lesson first";
    }

    els.vocabularyPath.appendChild(node);
  });
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
      targetExample.pronunciation,
      ...wordPool.map((w) => randomExampleForChar(w).pronunciation)
    ]).slice(0, 4);

    practice.push({
      type: "readWord",
      prompt: "Read this Urdu word",
      answer: targetExample.pronunciation,
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

function buildVocabularySteps(lesson) {
  const steps = lesson.words.map((vocabularyItem) => ({
    type: "vocabIntro",
    vocabularyItem,
    char: { id: `vocab-intro-${lesson.id}-${vocabularyItem.word}` }
  }));
  const questionSteps = [];

  lesson.words.forEach((vocabularyItem) => {
    const otherWords = lesson.words.filter((item) => item.word !== vocabularyItem.word);
    questionSteps.push({
      type: "wordToMeaning",
      prompt: "What does this word mean?",
      answer: vocabularyItem.meaning,
      choices: shuffle([vocabularyItem.meaning, ...sample(otherWords, 3).map((item) => item.meaning)]),
      vocabularyItem,
      char: { id: `vocab-${vocabularyItem.word}` }
    });
    questionSteps.push({
      type: "meaningToWord",
      prompt: "Which Urdu word matches this meaning?",
      answer: vocabularyItem.word,
      choices: shuffle([vocabularyItem.word, ...sample(otherWords, 3).map((item) => item.word)]),
      vocabularyItem,
      char: { id: `vocab-${vocabularyItem.word}` }
    });
  });

  return [...steps, ...shuffle(questionSteps)];
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
  } else if (mode === "vocabulary") {
    const vocabularyLesson = VOCABULARY_LESSONS.find((lesson) => lesson.id === lessonId);
    if (!vocabularyLesson) {
      return;
    }
    state.currentLesson = vocabularyLesson;
    state.lessonSteps = buildVocabularySteps(vocabularyLesson);
    els.lessonTitle.textContent = vocabularyLesson.title;
    els.lessonModeTag.textContent = "Vocabulary";
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

function startVocabularyLesson(lessonId) {
  startSession("vocabulary", lessonId);
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
      <p>
        Example:
        <button type="button" class="intro-word" data-word="${step.example.word}" data-pronunciation="${step.example.pronunciation}" dir="rtl">${step.example.word}</button>
        (${step.example.pronunciation}) - ${step.example.meaning}
      </p>
      <p class="prompt">Shape practice in words</p>
      <div>
        ${step.formExamples
          .map(
            (item) =>
              `<div><strong>${item.form}</strong>: <button type="button" class="intro-word" data-word="${item.word}" data-pronunciation="${item.pronunciation}" dir="rtl">${item.word}</button> (${item.pronunciation}) - ${item.meaning}</div>`
          )
          .join("")}
      </div>
    `;
    bindIntroWordAudio(els.lessonCard);
    els.nextBtn.disabled = false;
    state.awaitingContinue = true;
    return;
  }

  if (step.type === "vocabIntro") {
    const vocabularyItem = step.vocabularyItem;
    els.lessonCard.innerHTML = `
      <p class="prompt">New vocabulary word</p>
      <button type="button" class="big-glyph intro-word" data-word="${vocabularyItem.word}" data-pronunciation="${vocabularyItem.pronunciation}" dir="rtl">${vocabularyItem.word}</button>
      <h3>${vocabularyItem.pronunciation}</h3>
      <p class="reading">${vocabularyItem.meaning}</p>
      <p>
        Example:<br/>
        <span class="vocabulary-example" dir="rtl">${vocabularyItem.example}</span>
        <span class="vocabulary-example-meaning">${vocabularyItem.exampleMeaning}</span>
      </p>
    `;
    bindIntroWordAudio(els.lessonCard);
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
  } else if (step.type === "wordToMeaning") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${renderPrompt(step.prompt)}</p>
      <div class="big-glyph" dir="rtl">${step.vocabularyItem.word}</div>
      <p class="reading">${step.vocabularyItem.pronunciation}</p>
      <p class="vocabulary-example" dir="rtl">${step.vocabularyItem.example}</p>
    `;
  } else if (step.type === "meaningToWord") {
    els.lessonCard.innerHTML = `
      <p class="prompt">${renderPrompt(step.prompt)}</p>
      <div class="reading vocabulary-meaning">${step.vocabularyItem.meaning}</div>
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

  if (state.mode === "vocabulary" && passed && !state.progress.vocabularyCompleted.includes(state.currentLesson.id)) {
    state.progress.vocabularyCompleted.push(state.currentLesson.id);
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
    els.resultTitle.textContent =
      state.mode === "review"
        ? "Review complete"
        : state.mode === "placement"
        ? "Placement passed"
        : state.mode === "vocabulary"
        ? "Vocabulary lesson complete"
        : "Lesson complete";
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

  const vocabularyNextText =
    state.mode === "vocabulary"
      ? passed
        ? "Next vocabulary lesson unlocked."
        : "Score 70% or above to unlock the next vocabulary lesson."
      : nextText;

  els.resultBreakdown.innerHTML = `
    <div>Correct answers: ${state.score}/${state.attempts}</div>
    <div>${vocabularyNextText}</div>
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
    if (state.mode === "vocabulary") {
      startVocabularyLesson(state.currentLesson.id);
    } else {
      startLesson(state.currentLesson.id);
    }
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
