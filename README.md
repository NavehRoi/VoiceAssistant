# Voice-Controlled Smart Assistant

A voice-controlled smart assistant built with React and Node.js, utilizing OpenAI's GPT-3.5-turbo model, Web Speech API, and text-to-speech API to provide real-time, context-aware conversational interactions. This project demonstrates the integration of advanced speech recognition, AI-based response generation, and a seamless user interface.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Usage](#usage)


## Features
- **Voice Recognition**: Utilizes the Web Speech API for continuous speech recognition, converting spoken words into text.
- **Intelligent Responses**: Integrates OpenAI's GPT-3.5-turbo model to generate context-aware, intelligent responses based on user input.
- **Text-to-Speech**: Converts the assistant's responses into spoken words, creating a seamless conversational experience.
- **Real-time Interaction**: Real-time interaction and dynamic UI updates using React hooks and state management.
- **Full-Stack Integration**: Backend API built with Node.js and Express, communicating with the frontend via a proxy setup in React.

## Technologies Used

### Frontend
- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: The programming language used for logic and interactions.
- **HTML & CSS**: For structuring and styling the application.

### Backend
- **Node.js**: A JavaScript runtime for server-side programming.
- **Express.js**: A minimal and flexible Node.js web application framework.

### APIs
- **OpenAI API**: Used for generating intelligent, context-aware responses.
- **Web Speech API**: Used for speech-to-text functionality.
- **Text-to-Speech API**: Converts text responses into spoken words.

### Tools
- **Axios**: For making HTTP requests from the frontend to the backend.
- **Dotenv**: For managing environment variables.
- **CORS**: Middleware to allow cross-origin resource sharing.

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Click the "Speak" button to start recording your voice.
3. Speak your query, and the assistant will transcribe it in real-time.
4. The assistant will process your query using GPT-3.5-turbo and respond with an intelligent answer, which will be spoken back to you.
