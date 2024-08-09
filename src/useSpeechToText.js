import React,{useState, useEffect, useRef} from "react";

const useSpeechToText = (options) => {
    const [isListening, SetIsListening] = useState(false);
    const [transcript, setTranscript] = useState('');
    const recognitionRef = useRef(null);

    useEffect(() => {
        if(!('webkitSpeechRecognition' in window)){
            console.error("Web Speech API is not supported");
            return;
        }
        recognitionRef.current = new window.webkitSpeechRecognition();
        const recognition = recognitionRef.current;
        recognition.interimResults = options.interimResults || true;
        recognition.lang = options.lang || "en-US"
        recognition.continuous = options.continuous || false;

        if ("webkitSpeechGrammarList" in window){
            const grammar = "#JSGF V1.0; grammar punctuation; public <punc> = . | , | ? | ; | : ;"
            const speechRecognitionList = new window.webkitSpeechGrammarList();
            speechRecognitionList.addFromString(grammar,1)
        }

        recognition.onresult = (event) => {
            let text = ""
            for (let i = 0; i < event.results.length; i++){
                text += event.results[i][0].transcript
            }
            setTranscript(text)
        }

        recognition.onerror = (event) => {
            console.error("speech recognition error:", event.error)
        }

        recognition.onend = () => {
            SetIsListening(false)
            setTranscript("")
        }

        return () => {
            recognition.stop();
        }

    }, [])

    const startListening = () => {
        if (recognitionRef.current && !isListening){
            recognitionRef.current.start()
            SetIsListening(true);
        }
    }

    
    const stopListening =( ) => {
        if (recognitionRef.current && isListening){
            recognitionRef.current.stop()
            SetIsListening(false);
        }
    }

    return{
        isListening,
        transcript,
        startListening,
        stopListening
    }
}

export default useSpeechToText