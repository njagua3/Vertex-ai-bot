import React, { useState } from 'react';
import TranscriptionForm from './components/TranscriptionForm';
import TranscriptionResult from './components/TranscriptionResult';

const App: React.FC = () => {
  const [transcription, setTranscription] = useState<string>('');

  const handleTranscriptionComplete = (result: string) => {
    setTranscription(result);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Audio Transcription Bot</h1>
      <TranscriptionForm onTranscriptionComplete={handleTranscriptionComplete} />
      {transcription && <TranscriptionResult transcription={transcription} />}
    </div>
  );
};

export default App;