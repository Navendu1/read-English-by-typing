# 📚 Read English by Typing

An interactive web application designed to improve English reading comprehension and typing skills simultaneously. Practice typing while reading engaging English texts at different difficulty levels.

## ✨ Features

- **Three Difficulty Levels**: Easy, Medium, and Hard texts to match your skill level
- **Real-time Statistics**: Track your Words Per Minute (WPM), accuracy, correct characters, and errors
- **Visual Feedback**: Color-coded characters showing correct, incorrect, and pending text
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient design with smooth animations and transitions
- **Instant Results**: Get immediate feedback on your typing performance

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm run dev
   ```
2. Open your browser and navigate to `http://localhost:5173`
3. Start improving your English typing skills!

### Building for Production

```bash
npm run build
```

## 🎯 How to Use

1. **Select Difficulty**: Choose between Easy, Medium, or Hard difficulty levels
2. **Read the Text**: A passage will appear on screen for you to type
3. **Start Typing**: Click in the text area and begin typing the displayed text
4. **Monitor Progress**: Watch your real-time statistics as you type
5. **Complete the Text**: Finish typing to see your final results
6. **Practice More**: Click "New Text" to get another passage

## 📊 Statistics Tracked

- **WPM (Words Per Minute)**: Your typing speed
- **Accuracy**: Percentage of correctly typed characters
- **Correct Characters**: Number of characters typed correctly
- **Errors**: Number of typing mistakes

## 🛠️ Technologies Used

- **React 19**: Modern React with hooks for state management
- **TypeScript**: Type-safe JavaScript development
- **Vite**: Fast build tool and development server
- **CSS3**: Modern styling with gradients and animations
- **ESLint**: Code quality and consistency

## 📱 Browser Support

This application works on all modern browsers including:
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🎨 Design Features

- Gradient background with purple-blue theme
- Responsive grid layout for statistics
- Smooth hover animations
- Real-time character highlighting
- Modern card-based interface
- Mobile-optimized design

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Adding new text samples
- Improving the UI/UX
- Optimizing performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎓 Educational Value

This application helps users:
- Improve typing speed and accuracy
- Enhance English reading comprehension
- Build muscle memory for common English words
- Practice with texts of varying complexity
- Track progress over time

Perfect for students, professionals, and anyone looking to improve their English typing skills!
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
