import { useState } from 'react';
import './App.css';
import TypingLesson from './components/TypingLesson';
import { lessons } from './data/lessons';

interface PhonicsLesson {
  id: string;
  title: string;
  sound: string;
  examples: string[];
  description: string;
}

interface ReadingLesson {
  id: string;
  title: string;
  text: string;
  vocabulary: { word: string; definition: string; pronunciation?: string }[];
  comprehensionQuestions: { question: string; answer: string }[];
}

type LearningMode = 'phonics' | 'typing' | 'reading' | 'pronunciation';

function App() {
  const [learningMode, setLearningMode] = useState<LearningMode>('phonics');
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [currentPhonicsLesson, setCurrentPhonicsLesson] = useState(0);
  const [currentReadingLesson, setCurrentReadingLesson] = useState(0);
  const [currentTypingLesson, setCurrentTypingLesson] = useState(0);
  const [selectedWord, setSelectedWord] = useState<string | null>(null);

  // Phonics lessons based on systematic phonics instruction
  const phonicsLessons: PhonicsLesson[] = [
    {
      id: 'short-a',
      title: 'Short A Sound',
      sound: '/æ/',
      examples: ['cat', 'bat', 'hat', 'mat', 'sat', 'fat', 'rat', 'pat'],
      description: 'The short "a" sound as in "cat". Practice reading words with this vowel sound.'
    },
    {
      id: 'short-e',
      title: 'Short E Sound',
      sound: '/ɛ/',
      examples: ['bed', 'red', 'hen', 'pen', 'ten', 'net', 'pet', 'wet'],
      description: 'The short "e" sound as in "bed". Notice how your mouth opens slightly.'
    },
    {
      id: 'short-i',
      title: 'Short I Sound',
      sound: '/ɪ/',
      examples: ['bit', 'hit', 'sit', 'pit', 'fit', 'kit', 'lit', 'wit'],
      description: 'The short "i" sound as in "bit". Your tongue is high and forward.'
    },
    {
      id: 'short-o',
      title: 'Short O Sound',
      sound: '/ɒ/',
      examples: ['hot', 'pot', 'dot', 'cot', 'lot', 'not', 'got', 'rot'],
      description: 'The short "o" sound as in "hot". Your mouth opens wide.'
    },
    {
      id: 'short-u',
      title: 'Short U Sound',
      sound: '/ʌ/',
      examples: ['cut', 'but', 'hut', 'nut', 'gut', 'rut', 'jut', 'shut'],
      description: 'The short "u" sound as in "cut". A relaxed, central vowel sound.'
    },
    {
      id: 'long-a',
      title: 'Long A Sound',
      sound: '/eɪ/',
      examples: ['cake', 'make', 'take', 'lake', 'wake', 'snake', 'plane', 'game'],
      description: 'The long "a" sound as in "cake". Often spelled with "a_e" pattern.'
    },
    {
      id: 'consonant-blends',
      title: 'Consonant Blends',
      sound: 'bl, cl, fl, etc.',
      examples: ['black', 'clap', 'flag', 'glad', 'plan', 'slip', 'stop', 'trip'],
      description: 'Two or more consonants that blend together while keeping their individual sounds.'
    },
    {
      id: 'digraphs',
      title: 'Consonant Digraphs',
      sound: 'ch, sh, th, wh',
      examples: ['chair', 'ship', 'think', 'whale', 'phone', 'graph', 'knight', 'write'],
      description: 'Two letters that make one sound, like "ch" in chair or "sh" in ship.'
    }
  ]

  // Reading comprehension lessons
  const readingLessons: ReadingLesson[] = [
    {
      id: 'beginner-story',
      title: 'The Cat and the Hat',
      text: 'A big cat sat on a red mat. The cat had a black hat. The hat was too big for the cat. The cat looked funny with the big hat. A little girl saw the cat. She laughed at the funny cat. The cat did not like to be laughed at. The cat took off the hat and ran away.',
      vocabulary: [
        { word: 'mat', definition: 'a small rug or floor covering', pronunciation: '/mæt/' },
        { word: 'funny', definition: 'causing laughter; amusing', pronunciation: '/ˈfʌni/' },
        { word: 'laughed', definition: 'made sounds showing amusement', pronunciation: '/læft/' }
      ],
      comprehensionQuestions: [
        { question: 'What color was the mat?', answer: 'The mat was red.' },
        { question: 'Why did the girl laugh?', answer: 'The girl laughed because the cat looked funny with the big hat.' },
        { question: 'What did the cat do at the end?', answer: 'The cat took off the hat and ran away.' }
      ]
    },
    {
      id: 'intermediate-story',
      title: 'The Magic Garden',
      text: 'Emma discovered a secret garden behind her grandmother\'s house. The garden was filled with colorful flowers that seemed to glow in the moonlight. As she walked through the garden, she noticed that the flowers whispered secrets to each other. Emma listened carefully and learned that each flower had a special power. The roses could heal wounds, the sunflowers could grant wishes, and the lavender could bring peaceful dreams.',
      vocabulary: [
        { word: 'discovered', definition: 'found something for the first time', pronunciation: '/dɪˈskʌvərd/' },
        { word: 'whispered', definition: 'spoke very quietly', pronunciation: '/ˈwɪspərd/' },
        { word: 'lavender', definition: 'a purple aromatic plant', pronunciation: '/ˈlævəndər/' }
      ],
      comprehensionQuestions: [
        { question: 'Where did Emma find the garden?', answer: 'Emma found the garden behind her grandmother\'s house.' },
        { question: 'What special power do sunflowers have?', answer: 'Sunflowers can grant wishes.' },
        { question: 'What happens to the flowers in moonlight?', answer: 'The flowers seem to glow in the moonlight.' }
      ]
    }
  ]

  const pronounceWord = (word: string) => {
    if ('speechSynthesis' in window) {
      try {
        const utterance = new SpeechSynthesisUtterance(word)
        utterance.rate = 0.7
        utterance.pitch = 1
        window.speechSynthesis.speak(utterance)
      } catch (error) {
        console.error('Speech synthesis error:', error)
        alert(`Pronunciation: ${word}`)
      }
    } else {
      alert(`Pronunciation: ${word}`)
    }
  }

  const renderPhonicsMode = () => {
    const lesson = phonicsLessons[currentPhonicsLesson]
    return (
      <div className="phonics-container">
        <div className="lesson-header">
          <h2>{lesson.title}</h2>
          <div className="sound-display">
            Sound: <span className="phonetic">{lesson.sound}</span>
            <button onClick={() => pronounceWord(lesson.examples[0])} className="play-sound-btn">
              🔊 Play Sound
            </button>
          </div>
          <p className="lesson-description">{lesson.description}</p>
        </div>
        
        <div className="examples-grid">
          {lesson.examples.map((word, index) => (
            <div 
              key={index} 
              className={`word-card ${selectedWord === word ? 'selected' : ''}`}
              onClick={() => {
                setSelectedWord(word)
                pronounceWord(word)
              }}
            >
              <span className="word">{word}</span>
              <button className="word-play-btn" onClick={(e) => {
                e.stopPropagation()
                pronounceWord(word)
              }}>
                🔊
              </button>
            </div>
          ))}
        </div>

        <div className="lesson-navigation">
          <button 
            onClick={() => setCurrentPhonicsLesson(Math.max(0, currentPhonicsLesson - 1))}
            disabled={currentPhonicsLesson === 0}
            className="nav-btn"
          >
            ← Previous
          </button>
          <span className="lesson-indicator">
            Lesson {currentPhonicsLesson + 1} of {phonicsLessons.length}
          </span>
          <button 
            onClick={() => setCurrentPhonicsLesson(Math.min(phonicsLessons.length - 1, currentPhonicsLesson + 1))}
            disabled={currentPhonicsLesson === phonicsLessons.length - 1}
            className="nav-btn"
          >
            Next →
          </button>
        </div>
      </div>
    )
  }

  const renderReadingMode = () => {
    const lesson = readingLessons[currentReadingLesson]
    return (
      <div className="reading-container">
        <div className="lesson-header">
          <h2>{lesson.title}</h2>
          <button onClick={() => pronounceWord(lesson.text)} className="read-aloud-btn">
            🔊 Read Aloud
          </button>
        </div>
        
        <div className="reading-text">
          {lesson.text.split(' ').map((word, index) => (
            <span 
              key={index}
              className={`reading-word ${selectedWord === word.replace(/[.,!?]/g, '') ? 'highlighted' : ''}`}
              onClick={() => {
                const cleanWord = word.replace(/[.,!?]/g, '')
                setSelectedWord(cleanWord)
                pronounceWord(cleanWord)
              }}
            >
              {word}{' '}
            </span>
          ))}
        </div>

        <div className="vocabulary-section">
          <h3>Vocabulary</h3>
          <div className="vocabulary-list">
            {lesson.vocabulary.map((item, index) => (
              <div key={index} className="vocabulary-item">
                <div className="vocabulary-word">
                  <strong>{item.word}</strong>
                  {item.pronunciation && <span className="pronunciation">{item.pronunciation}</span>}
                  <button onClick={() => pronounceWord(item.word)} className="vocab-play-btn">🔊</button>
                </div>
                <div className="vocabulary-definition">{item.definition}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="comprehension-section">
          <h3>Comprehension Questions</h3>
          <div className="questions-list">
            {lesson.comprehensionQuestions.map((item, index) => (
              <details key={index} className="question-item">
                <summary className="question">{item.question}</summary>
                <div className="answer">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>

        <div className="lesson-navigation">
          <button 
            onClick={() => setCurrentReadingLesson(Math.max(0, currentReadingLesson - 1))}
            disabled={currentReadingLesson === 0}
            className="nav-btn"
          >
            ← Previous
          </button>
          <span className="lesson-indicator">
            Story {currentReadingLesson + 1} of {readingLessons.length}
          </span>
          <button 
            onClick={() => setCurrentReadingLesson(Math.min(readingLessons.length - 1, currentReadingLesson + 1))}
            disabled={currentReadingLesson === readingLessons.length - 1}
            className="nav-btn"
          >
            Next →
          </button>
        </div>
      </div>
    )
  }

  const renderPronunciationMode = () => {
    const commonWords = [
      { word: 'the', pronunciation: '/ðə/', difficulty: 'easy' },
      { word: 'through', pronunciation: '/θruː/', difficulty: 'hard' },
      { word: 'enough', pronunciation: '/ɪˈnʌf/', difficulty: 'hard' },
      { word: 'beautiful', pronunciation: '/ˈbjuːtɪfəl/', difficulty: 'medium' },
      { word: 'necessary', pronunciation: '/ˈnesəseri/', difficulty: 'hard' },
      { word: 'comfortable', pronunciation: '/ˈkʌmftəbəl/', difficulty: 'medium' },
      { word: 'vegetable', pronunciation: '/ˈveʤtəbəl/', difficulty: 'medium' },
      { word: 'chocolate', pronunciation: '/ˈʧɔklət/', difficulty: 'easy' }
    ]

    const filteredWords = commonWords.filter(item => item.difficulty === difficulty)

    return (
      <div className="pronunciation-container">
        <div className="section-header">
          <h2>Pronunciation Practice</h2>
          <p>Click on words to hear their pronunciation and practice speaking them.</p>
        </div>

        <div className="difficulty-selector">
          <label>Difficulty: </label>
          {(['easy', 'medium', 'hard'] as const).map((level) => (
            <button
              key={level}
              className={`difficulty-btn ${difficulty === level ? 'active' : ''}`}
              onClick={() => setDifficulty(level)}
            >
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        <div className="pronunciation-grid">
          {filteredWords.map((item, index) => (
            <div key={index} className="pronunciation-card">
              <div className="word-display">
                <span className="word-text">{item.word}</span>
                <span className="word-pronunciation">{item.pronunciation}</span>
              </div>
              <button 
                onClick={() => pronounceWord(item.word)} 
                className="pronounce-btn"
              >
                🔊 Pronounce
              </button>
            </div>
          ))}
        </div>

        <div className="pronunciation-tips">
          <h3>Pronunciation Tips</h3>
          <ul>
            <li>Listen carefully to the pronunciation</li>
            <li>Try to repeat the word immediately after hearing it</li>
            <li>Pay attention to stress patterns in longer words</li>
            <li>Practice regularly to improve your accent</li>
          </ul>
        </div>
      </div>
    )
  }

  const handleNextTypingLesson = () => {
    if (currentTypingLesson < lessons.length - 1) {
      setCurrentTypingLesson(currentTypingLesson + 1);
    } else {
      // Optionally, handle completion of all lessons
      alert("Congratulations! You have completed all typing lessons.");
      setLearningMode('phonics'); // Go back to another mode
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 English Reading Academy</h1>
        <p>Master English reading through phonics, pronunciation, and practice</p>
      </header>

      <nav className="learning-modes">
        {[
          { mode: 'phonics' as const, label: '🔤 Phonics', description: 'Learn letter sounds' },
          { mode: 'reading' as const, label: '📖 Reading', description: 'Story comprehension' },
          { mode: 'pronunciation' as const, label: '🗣️ Pronunciation', description: 'Speak correctly' },
          { mode: 'typing' as const, label: '⌨️ Typing', description: 'Type to learn' }
        ].map(({ mode, label, description }) => (
          <button
            key={mode}
            className={`mode-btn ${learningMode === mode ? 'active' : ''}`}
            onClick={() => setLearningMode(mode)}
          >
            <div className="mode-label">{label}</div>
            <div className="mode-description">{description}</div>
          </button>
        ))}
      </nav>

      <main className="main-content">
        {learningMode === 'phonics' && renderPhonicsMode()}
        {learningMode === 'reading' && renderReadingMode()}
        {learningMode === 'pronunciation' && renderPronunciationMode()}
        {learningMode === 'typing' && (
          <TypingLesson lesson={lessons[currentTypingLesson]} onComplete={handleNextTypingLesson} />
        )}
      </main>
    </div>
  )
}

export default App
