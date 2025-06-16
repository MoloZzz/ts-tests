function distance(a, b) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
}

function computeTDOA(source, microphones, speed) {
  const t0 = distance(source, microphones[0]) / speed;
  return microphones.slice(1).map(m => distance(source, m) / speed - t0);
}

function computeError(source, microphones, tdoas, speed) {
  const t = computeTDOA(source, microphones, speed);
  return tdoas.reduce((sum, val, i) => sum + (t[i] - val) ** 2, 0);
}

function gradientDescent(microphones, tdoas, speed, lr = 0.01, iterations = 1000) {
  let source = { x: 0, y: 0, z: 0 };

  for (let i = 0; i < iterations; i++) {
    const grad = { x: 0, y: 0, z: 0 };
    const eps = 0.0001;

    ['x', 'y', 'z'].forEach(coord => {
      const orig = source[coord];
      source[coord] = orig + eps;
      const err1 = computeError(source, microphones, tdoas, speed);
      source[coord] = orig - eps;
      const err2 = computeError(source, microphones, tdoas, speed);
      grad[coord] = (err1 - err2) / (2 * eps);
      source[coord] = orig;
    });

    source.x -= lr * grad.x;
    source.y -= lr * grad.y;
    source.z -= lr * grad.z;
  }

  return source;
}

module.exports = { distance, computeTDOA, computeError, gradientDescent };
