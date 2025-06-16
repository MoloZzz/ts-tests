const fs = require('fs');
const { DEVICE_IDS, SAMPLE_RATE, SPEED_OF_SOUND, AUDIO_DIR } = require('./config');
const { recordWav } = require('./utils/audio');
const { readWavSamples, estimateTDOA } = require('./utils/tdoa');
const { gradientDescent } = require('./utils/math');

const microphones = [
  { x: 0, y: 0, z: 0 },
  { x: 1, y: 0, z: 0 },
  { x: 0, y: 1, z: 0 },
  { x: 0, y: 0, z: 1 }
];

(async () => {
  console.log('Recording audio...');
  if (!fs.existsSync(AUDIO_DIR)) fs.mkdirSync(AUDIO_DIR);

  for (let i = 0; i < DEVICE_IDS.length; i++) {
    await recordWav(DEVICE_IDS[i], `${AUDIO_DIR}/mic${i}.wav`);
  }

  console.log('Reading audio data...');
  const signals = DEVICE_IDS.map((_, i) => readWavSamples(`${AUDIO_DIR}/mic${i}.wav`));

  console.log('Estimating TDOAs...');
  const tdoas = signals.slice(1).map((s, i) => estimateTDOA(signals[0], s, SAMPLE_RATE));

  console.log('Computing source position...');
  const estimated = gradientDescent(microphones, tdoas, SPEED_OF_SOUND);

  console.log('Estimated source position:', estimated);
})();
