const wav = require('node-wav');
const fft = require('fft-js').fft;
const fftUtil = require('fft-js').util;
const fs = require('fs');

function computeGCCPHAT(signal1, signal2) {
  const N = Math.pow(2, Math.ceil(Math.log2(signal1.length + signal2.length - 1)));
  const fft1 = fft(signal1, N);
  const fft2 = fft(signal2, N);
  const cross = fft1.map((val, i) => val * mathConj(fft2[i]));
  const result = fftUtil.ifft(cross);
  return result.map(c => (typeof c === 'object' ? c[0] : c)); // real part only
}

function mathConj(c) {
  return Array.isArray(c) ? [c[0], -c[1]] : c;
}

function estimateTDOA(signal1, signal2, sampleRate) {
  const gcc = computeGCCPHAT(signal1, signal2);
  const peakIndex = gcc.indexOf(Math.max(...gcc));
  const delay = (peakIndex - gcc.length / 2) / sampleRate;
  return delay;
}

function readWavSamples(path) {
  const buffer = fs.readFileSync(path);
  const result = wav.decode(buffer);
  return result.channelData[0];
}

module.exports = { estimateTDOA, readWavSamples };
