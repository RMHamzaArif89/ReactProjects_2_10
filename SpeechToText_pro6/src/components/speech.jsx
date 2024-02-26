import 'regenerator-runtime/runtime'
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Dictaphone = () => {
    const StartListening=()=>SpeechRecognition.startListening({ continuous: true ,language:'en'})
    const StopListening=()=>SpeechRecognition.stopListening()
    const start=()=>{
    console.log('start')
    }
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p className='mircrophone'>Microphone: {listening ? 'on' : 'off'}</p>
      <p className='transcript'>{transcript}</p>

      <div className="btns">
      <button className='start' onClick={StartListening}>Start</button>
      <button className='stop' onClick={StopListening}>Stop</button>
      <button className='reset' onClick={resetTranscript}>Reset</button>
      </div>
    </div>
  );
};
export default Dictaphone;