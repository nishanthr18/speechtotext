import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './App.css';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    browserSupportsContinuousListening
  } = useSpeechRecognition();

   SpeechRecognition.startListening({ continuous: true })

  
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


 


  return (
    <div >
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button className="btn btn-outline-success px-md-5" onClick={SpeechRecognition.startListening}>Start</button>
      <button  className="btn btn-outline-danger  px-md-5" onClick={SpeechRecognition.stopListening}>Stop</button>
      <button className='btn btn-outline-warning px-md-5' onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;