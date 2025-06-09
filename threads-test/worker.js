const { parentPort, workerData } = require('worker_threads');

function heavyCalculation(duration = 3000) {
  const start = Date.now();
  while (Date.now() - start < duration) {
    // imitate heavy work
    Math.sqrt(Math.random()); 
  }
}

parentPort.postMessage(`Started at ${new Date().toISOString()}`);
heavyCalculation(3000); // 3 seconds of heavy work
parentPort.postMessage(`Finished at ${new Date().toISOString()}`);
