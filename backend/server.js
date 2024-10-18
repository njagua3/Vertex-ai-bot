const express = require('express');
const cors = require('cors');
const multer = require('multer');
const speech = require('@google-cloud/speech');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());

const upload = multer({ dest: 'uploads/' });

const client = new speech.SpeechClient({
  keyFilename: path.join(__dirname, 'config', 'vertex-437914-key.json'),
});

app.post('/transcribe', upload.single('audio'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const audio = {
    content: req.file.buffer,
  };

  const config = {
    encoding: 'LINEAR16',
    sampleRateHertz: 16000,
    languageCode: 'en-US',
  };

  const request = {
    audio: audio,
    config: config,
  };

  try {
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    res.json({ transcription });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('An error occurred during transcription.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});