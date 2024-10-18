import React from 'react';
import { Headphones } from 'lucide-react';

interface TranscriptionResultProps {
  transcription: string;
}

const TranscriptionResult: React.FC<TranscriptionResultProps> = ({ transcription }) => {
  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Headphones className="mr-2" />
        Transcription Result
      </h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <p className="text-gray-800 whitespace-pre-wrap">{transcription}</p>
      </div>
    </div>
  );
};

export default TranscriptionResult;