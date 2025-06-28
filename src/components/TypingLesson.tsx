import React, { useState, useEffect, useMemo } from 'react';
import type { Lesson } from '../data/lessons';

interface TypingLessonProps {
  lesson: Lesson;
  onComplete: () => void;
}

const TypingLesson: React.FC<TypingLessonProps> = ({ lesson, onComplete }) => {
  const [typedText, setTypedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  const textToType = lesson.sentence;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTypedText(value);

    if (value === textToType) {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
        setTypedText('');
        setIsComplete(false);
      }, 2000); // Wait 2 seconds before moving to the next lesson
    }
  };

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      speechSynthesis.speak(utterance);
    } else {
      console.error('Speech synthesis not supported');
    }
  };

  useEffect(() => {
    speak(lesson.word);
  }, [lesson]);

  const renderedText = useMemo(() => {
    return textToType.split('').map((char, index) => {
      let color = 'gray';
      if (index < typedText.length) {
        color = char === typedText[index] ? 'green' : 'red';
      }
      return <span key={index} style={{ color }}>{char}</span>;
    });
  }, [typedText, textToType]);

  return (
    <div className="typing-lesson">
      <h2>Typing Lesson</h2>
      <div className="rule">Rule: {lesson.rule}</div>
      <div className="word-to-type" onClick={() => speak(lesson.word)}>
        Word: {lesson.word}
      </div>
      <div className="sentence-to-type" onClick={() => speak(lesson.sentence)}>
        <p>{renderedText}</p>
      </div>
      <input
        type="text"
        value={typedText}
        onChange={handleInputChange}
        disabled={isComplete}
        placeholder="Start typing here..."
      />
      {isComplete && <div className="completion-message">Lesson Complete!</div>}
    </div>
  );
};

export default TypingLesson;
