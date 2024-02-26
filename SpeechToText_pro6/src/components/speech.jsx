import 'regenerator-runtime/runtime'
import React, { useState } from 'react';
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './css/speech.css'
import './css/copy.css'

const Dictaphone = () => {
    const[text,setText]=useState('')
    const [isCopied, setCopied] = useClipboard(text);

    const StartListening=()=>SpeechRecognition.startListening({ continuous: true ,language:'en'})
    const StopListening=()=>SpeechRecognition.stopListening()
   
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }


  //copy text functions
 const copyFunc=()=>{
    setText(transcript)
    setCopied(text)
 }

  return (
    <>
      <button className='copy' onClick={copyFunc}>
        Copy To ClipBoard
     {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>

    <div className='con'>
      <div className='microphone'>Microphone: {listening ? 'on' : 'off'}</div>
      <div className='transcript'>{transcript}</div>

      <div className="btns">
      <button className='start' onClick={StartListening}>Start</button>
      <button className='stop' onClick={StopListening}>Stop</button>
      <button className='reset' onClick={resetTranscript}>Reset</button>
      </div>
    </div>
    </>
  );
};
export default Dictaphone;