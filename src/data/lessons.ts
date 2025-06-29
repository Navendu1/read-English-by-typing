export interface Lesson {
  rule: string;
  word: string;
  sentence: string;
}

export const lessons: Lesson[] = [
  // Short Vowels
  { rule: "Short 'a' (as in cat)", word: "cat", sentence: "The cat sat on the mat." },
  { rule: "Short 'e' (as in bed)", word: "bed", sentence: "The red bed is soft." },
  { rule: "Short 'i' (as in sit)", word: "sit", sentence: "Please sit on the chair." },
  { rule: "Short 'o' (as in log)", word: "log", sentence: "A frog sat on the log." },
  { rule: "Short 'u' (as in cup)", word: "cup", sentence: "He drank from a blue cup." },

  // Long Vowels (Vowel-Consonant-e)
  { rule: "Long 'a_e' (as in cake)", word: "cake", sentence: "She made a delicious cake." },
  { rule: "Long 'i_e' (as in bike)", word: "bike", sentence: "He rode his new bike." },
  { rule: "Long 'o_e' (as in home)", word: "home", sentence: "They are going home now." },
  { rule: "Long 'u_e' (as in rule)", word: "rule", sentence: "Follow the golden rule." },

  // Vowel Teams
  { rule: "Vowel Team 'ai' (as in rain)", word: "rain", sentence: "The rain fell all day." },
  { rule: "Vowel Team 'ea' (as in read)", word: "read", sentence: "I like to read books." },
  { rule: "Vowel Team 'ee' (as in see)", word: "see", sentence: "Can you see the bee?" },
  { rule: "Vowel Team 'oa' (as in boat)", word: "boat", sentence: "The boat is on the water." },
  { rule: "Vowel Team 'ay' (as in play)", word: "play", sentence: "The children love to play." },

  // Consonant Blends
  { rule: "Blend 'bl' (as in blue)", word: "blue", sentence: "The sky is blue." },
  { rule: "Blend 'br' (as in bread)", word: "bread", sentence: "Please pass the bread." },
  { rule: "Blend 'cl' (as in clock)", word: "clock", sentence: "Look at the big clock." },
  { rule: "Blend 'cr' (as in crab)", word: "crab", sentence: "A crab walked on the sand." },
  { rule: "Blend 'dr' (as in drum)", word: "drum", sentence: "He plays the drum well." },
  { rule: "Blend 'fl' (as in flag)", word: "flag", sentence: "The flag has many stars." },
  { rule: "Blend 'fr' (as in frog)", word: "frog", sentence: "A green frog jumped." },
  { rule: "Blend 'gl' (as in glass)", word: "glass", sentence: "The glass is full of water." },
  { rule: "Blend 'gr' (as in grass)", word: "grass", sentence: "The grass is green." },
  { rule: "Blend 'pl' (as in plant)", word: "plant", sentence: "She watered the plant." },
  { rule: "Blend 'pr' (as in prize)", word: "prize", sentence: "She won first prize." },
  { rule: "Blend 'sc' (as in scan)", word: "scan", sentence: "The doctor will scan it." },
  { rule: "Blend 'sk' (as in skip)", word: "skip", sentence: "Let's skip to the fun part." },
  { rule: "Blend 'sl' (as in slip)", word: "slip", sentence: "Be careful not to slip." },
  { rule: "Blend 'sm' (as in smile)", word: "smile", sentence: "She has a beautiful smile." },
  { rule: "Blend 'sn' (as in snow)", word: "snow", sentence: "The snow is cold and white." },
  { rule: "Blend 'sp' (as in spot)", word: "spot", sentence: "The dog has a black spot." },
  { rule: "Blend 'st' (as in stop)", word: "stop", sentence: "The car will stop here." },
  { rule: "Blend 'sw' (as in swim)", word: "swim", sentence: "They like to swim in the lake." },
  { rule: "Blend 'tr' (as in tree)", word: "tree", sentence: "The tall tree has green leaves." },

  // Digraphs
  { rule: "Digraph 'ch' (as in chair)", word: "chair", sentence: "Sit on the wooden chair." },
  { rule: "Digraph 'sh' (as in ship)", word: "ship", sentence: "The ship sailed on the sea." },
  { rule: "Digraph 'th' (as in think)", word: "think", sentence: "I think, therefore I am." },
  { rule: "Digraph 'wh' (as in what)", word: "what", sentence: "What is your name?" },

  // R-Controlled Vowels
  { rule: "R-Controlled 'ar' (as in car)", word: "car", sentence: "The car is fast." },
  { rule: "R-Controlled 'er' (as in her)", word: "her", sentence: "This is her book." },
  { rule: "R-Controlled 'ir' (as in bird)", word: "bird", sentence: "The bird can fly high." },
  { rule: "R-Controlled 'or' (as in fork)", word: "fork", sentence: "Use a fork to eat." },
  { rule: "R-Controlled 'ur' (as in fur)", word: "fur", sentence: "The cat has soft fur." },

  // Diphthongs
  { rule: "Diphthong 'oi' (as in coin)", word: "coin", sentence: "He found a shiny coin." },
  { rule: "Diphthong 'oy' (as in toy)", word: "toy", sentence: "The boy has a new toy." },
  { rule: "Diphthong 'ou' (as in house)", word: "house", sentence: "They live in a big house." },
  { rule: "Diphthong 'ow' (as in cow)", word: "cow", sentence: "The brown cow eats grass." },

  // Silent Letters
  { rule: "Silent 'k' (as in know)", word: "know", sentence: "I know the answer." },
  { rule: "Silent 'w' (as in write)", word: "write", sentence: "Please write your name." },
  { rule: "Silent 'b' (as in lamb)", word: "lamb", sentence: "The little lamb is white." },
  { rule: "Silent 'h' (as in hour)", word: "hour", sentence: "We have one hour left." },

  // More Vowel Teams
  { rule: "Vowel Team 'au' (as in sauce)", word: "sauce", sentence: "The sauce is hot." },
  { rule: "Vowel Team 'aw' (as in paw)", word: "paw", sentence: "The dog hurt its paw." },
  { rule: "Vowel Team 'ew' (as in new)", word: "new", sentence: "I have a new book." },
  { rule: "Vowel Team 'igh' (as in high)", word: "high", sentence: "The bird flies high." },
  { rule: "Vowel Team 'oo' (as in book)", word: "book", sentence: "She read a good book." },
  { rule: "Vowel Team 'oo' (as in moon)", word: "moon", sentence: "The moon is bright tonight." },

  // Soft and Hard 'c' and 'g'
  { rule: "Hard 'c' (as in cat)", word: "cat", sentence: "The cat is sleeping." },
  { rule: "Soft 'c' (as in city)", word: "city", sentence: "New York is a big city." },
  { rule: "Hard 'g' (as in game)", word: "game", sentence: "Let's play a game." },
  { rule: "Soft 'g' (as in gym)", word: "gym", sentence: "He goes to the gym." },

  // Common Sight Words
  { rule: "Sight Word 'the'", word: "the", sentence: "The dog is brown." },
  { rule: "Sight Word 'is'", word: "is", sentence: "The sky is blue." },
  { rule: "Sight Word 'are'", word: "are", sentence: "We are friends." },
  { rule: "Sight Word 'was'", word: "was", sentence: "It was a sunny day." },
  { rule: "Sight Word 'said'", word: "said", sentence: "She said hello." },

  // Compound Words
  { rule: "Compound Word 'cupcake'", word: "cupcake", sentence: "The cupcake is a sweet treat." },
  { rule: "Compound Word 'rainbow'", word: "rainbow", sentence: "A beautiful rainbow appeared after the rain." },
  { rule: "Compound Word 'sunglasses'", word: "sunglasses", sentence: "He wears sunglasses on a sunny day." },
  { rule: "Compound Word 'football'", word: "football", sentence: "They love to play football in the park." },
  { rule: "Compound Word 'butterfly'", word: "butterfly", sentence: "A colorful butterfly landed on the flower." },

  // More Sight Words
  { rule: "Sight Word 'have'", word: "have", sentence: "I have a blue car." },
  { rule: "Sight Word 'with'", word: "with", sentence: "She went to the store with her mom." },
  { rule: "Sight Word 'they'", word: "they", sentence: "They are building a new house." },
  { rule: "Sight Word 'from'", word: "from", sentence: "This letter is from my friend." },
  { rule: "Sight Word 'what'", word: "what", sentence: "What time is it?" },
];
