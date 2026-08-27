// Complete database dictionary splitting 4 subjects x 5 progression tiers x 3 grade brackets
const datasetBank = {
    k: {
        title: "Kindergarten Arena",
        math: [
            { q: "Count the apples: 🍎 🍎 🍎", a: ["3", "5", "2"], c: "3" },
            { q: "What number comes after 4?", a: ["5", "3", "6"], c: "5" },
            { q: "Which shape has 3 sides?", a: ["Triangle", "Square", "Circle"], c: "Triangle" },
            { q: "What is 1 + 1?", a: ["2", "3", "4"], c: "2" },
            { q: "Count the stars: ⭐ ⭐ ⭐ ⭐ ⭐", a: ["5", "4", "6"], c: "5" }
        ],
        iq: [
            { q: "Find the odd pattern out:", a: ["🐶 Dog", "🐱 Cat", "🚗 Car"], c: "🚗 Car" },
            { q: "Which is the biggest animal?", a: ["Elephant", "Mouse", "Frog"], c: "Elephant" },
            { q: "What color means STOP?", a: ["Red", "Green", "Yellow"], c: "Red" },
            { q: "Where does a fish live?", a: ["Water", "Sky", "Tree"], c: "Water" },
            { q: "Which item keeps you dry in rain?", a: ["Umbrella", "Hat", "Socks"], c: "Umbrella" }
        ],
        english: [
            { q: "What letter does 'Apple' start with?", a: ["A", "B", "M"], c: "A" },
            { q: "Complete the alphabet sound: A, B, C, __", a: ["D", "E", "F"], c: "D" },
            { q: "Which vowel is missing from: C _ T?", a: ["A", "O", "I"], c: "A" },
            { q: "What is the small lowercase letter for 'G'?", a: ["g", "q", "p"], c: "g" },
            { q: "Find the rhyming pair word for 'Cat':", a: ["Hat", "Dog", "Sun"], c: "Hat" }
        ],
        arabic: [
            { q: "What letter does 'أرنب' (Rabbit) start with?", a: ["أ", "ب", "ت"], c: "أ" },
            { q: "What is the Arabic word for 'Apple'?", a: ["تفاحة", "موز", "برتقال"], c: "تفاحة" },
            { q: "Choose the letter 'ب' match:", a: ["بطة", "تمر", "جمل"], c: "بطة" },
            { q: "How do you say 'Thank You' in Arabic?", a: ["شكراً", "مرحباً", "وداعاً"], c: "شكراً" },
            { q: "What is the Arabic word for 'Milk'?", a: ["حليب", "ماء", "عصير"], c: "حليب" }
        ]
    },
    elem: {
        title: "Elementary Campus (Grades 1-5)",
        math: [
            { q: "What is 12 x 4?", a: ["48", "44", "52"], c: "48" },
            { q: "Solve: 150 - 65", a: ["85", "75", "95"], c: "85" },
            { q: "What fraction represents half?", a: ["1/2", "1/4", "3/4"], c: "1/2" },
            { q: "How many minutes are in 2 hours?", a: ["120", "60", "180"], c: "120" },
            { q: "What is the perimeter of a 4x4 square?", a: ["16", "8", "12"], c: "16" }
        ],
        iq: [
            { q: "Complete the sequence: 2, 4, 8, 16, __", a: ["32", "20", "24"], c: "32" },
            { q: "Finger is to Hand as Leaf is to __", a: ["Tree", "Root", "Sky"], c: "Tree" },
            { q: "Which word does NOT belong?", a: ["Apple", "Banana", "Carrot"], c: "Carrot" },
            { q: "If yesterday was Tuesday, tomorrow is:", a: ["Thursday", "Wednesday", "Friday"], c: "Thursday" },
            { q: "Water is to Ice as Water Vapor is to:", a: ["Steam", "Rain", "Snow"], c: "Steam" }
        ],
        english: [
            { q: "Identify the noun in: 'The happy dog barked.'", a: ["dog", "happy", "barked"], c: "dog" },
            { q: "What is the opposite antonym of 'Beautiful'?", a: ["Ugly", "Pretty", "Nice"], c: "Ugly" },
            { q: "Choose the correct past-tense verb: 'She __ to school.'", a: ["walked", "walk", "walking"], c: "walked" },
            { q: "Which word is spelled correctly?", a: ["Receive", "Recieve", "Receve"], c: "Receive" },
            { q: "What do you call a person, place, or thing?", a: ["Noun", "Verb", "Adjective"], c: "Noun" }
        ],
        arabic: [
            { q: "Identify the plural form of 'كتاب' (Book):", a: ["كتب", "كتيب", "كاتب"], c: "كتب" },
            { q: "What is the past tense of 'يأكل' (He eats)?", a: ["أكل", "سوف يأكل", "كل"], c: "أكل" },
            { q: "Choose the correct sun letter (حرف شمسي):", a: ["ش", "ج", "ب"], c: "ش" },
            { q: "What is the opposite of 'كبير' (Big)?", a: ["صغير", "طويل", "واسع"], c: "صغير" },
            { q: "Which sentence is a nominal sentence (جملة اسمية)?", a: ["العلمُ نورٌ", "قرأَ الطالبُ", "اذهبْ إلى المدرسة"], c: "العلمُ نورٌ" }
        ]
    },
    middle: {
        title: "Middle School Suite (Grades 6-10)",
        math: [
            { q: "Solve for x: 3x + 7 = 22", a: ["5", "4", "6"], c: "5" },
            { q: "What is the square root of 144?", a: ["12", "14", "10"], c: "12" },
            { q: "What is the value of 5 to the power of 3 (5³)?", a: ["125", "15", "75"], c: "125" },
            { q: "Calculate the area of a triangle with base=10 and height=6:", a: ["30", "60", "16"], c: "30" },
            { q: "If a line passes through (0,0) and (2,4), what is its slope?", a: ["2", "4", "0.5"], c: "2" }
        ],
        iq: [
            { q: "Solve the grid logic: If 3=9, 4=16, 5=25, then 6=__", a: ["36", "30", "42"], c: "36" },
            { q: "Rearrange the letters 'E R T A W' to spell a natural necessity:", a: ["WATER", "EARTH", "WRITE"], c: "WATER" },
            { q: "Which number is prime?", a: ["17", "15", "9"], c: "17" },
            { q: "Book is to Reading as Fork is to __", a: ["Eating", "Cutting", "Cooking"], c: "Eating" },
            { q: "A clock shows 3:15. What is the angle between hands?", a: ["7.5°", "0°", "15°"], c: "7.5°" }
        ],
        english: [
            { q: "Which sentence utilizes correct punctuation?", a: ["Let's eat, Grandpa.", "Lets eat Grandpa.", "Let eat Grandpa"], c: "Let's eat, Grandpa." },
            { q: "Identify the conjunction: 'I wanted to go, but it rained.'", a: ["but", "wanted", "it"], c: "but" },
            { q: "What is a word that modifies a verb or adjective?", a: ["Adverb", "Noun", "Pronoun"], c: "Adverb" },
            { q: "Choose the correct word: 'The weather will affect/effect my mood.'", a: ["affect", "effect"], c: "affect" },
            { q: "What is the term for an extreme exaggeration?", a: ["Hyperbole", "Metaphor", "Simile"], c: "Hyperbole" }
        ],
        arabic: [
            { q: "Choose the correct indicator tool (أداة الجزم):", a: ["لم", "أن", "لن"], c: "لم" },
            { q: "What is the grammatical state of 'المبتدأ' (Subject)?", a: ["مرفوع", "منصوب", "مجرور"], c: "مرفوع" },
            { q: "Identify 'كان وأخواتها' function on nouns:", a: ["ترفع المبتدأ وتنصب الخبر", "تنصب المبتدأ وترفع الخبر", "تجر الطرفين"], c: "ترفع المبتدأ وتنصب الخبر" },
            { q: "What type of word is 'مسافرون'?", a: ["جمع مذكر سالم", "جمع مؤنث سالم", "جمع تكسير"], c: "جمع مذكر سالم" },
            { q: "What is the root (الجذر) of the word 'مستشفى'?", a: ["شفي", "شفا", "مشفى"], c: "شفي" }
        ]
    }
};
