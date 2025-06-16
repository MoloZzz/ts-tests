const fs = require('fs');
const { once } = require('events');
const portAudio = require('naudiodon');
const wav = require('wav');
const { SAMPLE_RATE, CHANNELS } = require('../config');

async function recordWav(deviceId, filename, durationSec = 3) {
  const ai = new portAudio.AudioIO({
    inOptions: {
      channelCount: CHANNELS,
      sampleFormat: portAudio.SampleFormat16Bit,
      sampleRate: SAMPLE_RATE,
      deviceId: deviceId,
    }
  });

  const fileWriter = new wav.FileWriter(filename, {
    channels: CHANNELS,
    sampleRate: SAMPLE_RATE,
    bitDepth: 16
  });

  ai.pipe(fileWriter);
  ai.start();

  await new Promise(res => setTimeout(res, durationSec * 1000));
  ai.quit();
  await once(fileWriter, 'finish');
}

module.exports = { recordWav };
