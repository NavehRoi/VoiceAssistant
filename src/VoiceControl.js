import React, { useState, useEffect } from "react";
import { fetchOpenAIResponse } from "./apiServices";
import useSpeechToText from "./useSpeechToText";
import Speech from 'react-speech';

function VoiceControl() {
  const [text, setText] = useState('');
  const [response, setResponse] = useState('');
  const [finalText, setFinalText] = useState('');
  const { isListening, transcript, startListening, stopListening } = useSpeechToText({ continuous: true });

  const startStopListening = () => {
    isListening ? stopVoiceInput() : startListening();
  };

  const stopVoiceInput = () => {
    stopListening();
    setFinalText(prevVal => prevVal + (transcript.length ? (prevVal.length ? ' ' : '') + transcript : ''));
  };

  const textToSpeech = (text) => {
    const value = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(value);

  };
  useEffect(() => {
    const sendTextToAPI = async () => {
      try {
        const openAIResponse = await fetchOpenAIResponse(finalText);
        console.log("The response is:", openAIResponse);
        setResponse(openAIResponse);
        textToSpeech(openAIResponse);
      } catch (error) {
        console.error('Error fetching response from OpenAI:', error);
      }
    };

    if (finalText) {
      sendTextToAPI();
    }
  }, [finalText]);

  return (
    <div style={{
      position: 'absolute',
      top: `700px`,
      left: `50px`,
      transition: 'top 0.5s, left 0.5s',
    }}>
      <button id="start-btn"
        onClick={startStopListening}
        style={{
          backgroundColor: isListening ? '#d62d20' : "#008744"
        }}>
        {isListening ? "Stop Listening" : "Speak"}
      </button>
      <textarea
        disabled={isListening}
        value={isListening ? text + (transcript.length ? (text.length ? ' ' : '') + transcript : ' ') : text}
        onChange={(e) => { setText(e.target.value) }}
        style={{ display: 'none' }}
      />
      <div > {response}</div>
        
    </div>
  );
}

export default VoiceControl;