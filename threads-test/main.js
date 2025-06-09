const { Worker } = require('worker_threads');

function runWorker(id) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: id });

    worker.on('message', (msg) => {
      console.log(`Worker ${id}: ${msg}`);
    });

    worker.on('exit', () => {
      resolve();
    });

    worker.on('error', reject);
  });
}

async function run() {
  console.time('Total');
  const workers = [];

  for (let i = 1; i <= 4; i++) {
    workers.push(runWorker(i));
  }

  await Promise.all(workers);
  console.timeEnd('Total');
}

run();
