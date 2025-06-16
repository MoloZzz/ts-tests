// No need to set constants in file, better to use config(json/env...)
module.exports = {
  SAMPLE_RATE: 44100,
  CHANNELS: 1,
  SPEED_OF_SOUND: 343,
  DEVICE_IDS: [0, 1, 2, 3], // ID of the devices used for localization (microphones, etc.)
  AUDIO_DIR: './audio',
};
