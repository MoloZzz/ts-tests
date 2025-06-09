const crypto = require('crypto');

console.time('Total time');

for (let i = 0; i < 10; i++) {
  console.time(`pbkdf2-${i}`);
  crypto.pbkdf2('password', 'salt', 200_000, 64, 'sha512', () => {
    console.timeEnd(`pbkdf2-${i}`);
  });
}

/**Result
 * $ UV_THREADPOOL_SIZE=6 node libuv-threads.js
pbkdf2-5: 220.132ms
pbkdf2-0: 228.623ms
pbkdf2-4: 231.362ms
pbkdf2-1: 242.06ms
pbkdf2-2: 251.389ms
pbkdf2-3: 253.983ms
pbkdf2-6: 409.518ms
pbkdf2-8: 412.451ms
pbkdf2-7: 412.731ms
pbkdf2-9: 426.296ms
 */