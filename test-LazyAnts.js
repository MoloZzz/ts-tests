const array = [
    { place: 6, uid: '1-6', score: 50 },
    { place: 1, uid: '1-1', score: 100 },
    { place: 7, uid: '1-8', score: 40 },
    { place: 2, uid: '1-2', score: 90 },
    { place: 3, uid: '1-3', score: 80 },
    { place: 5, uid: '1-5', score: 60 },
    { place: 4, uid: '1-10', score: 70 },
    { place: 10, uid: '1-4', score: 10 },
    { place: 9, uid: '1-9', score: 20 },
    { place: 8, uid: '1-7', score: 30 },
];

const array2 = [...array];

function changePosition(arr, userId, scores) {
const target = arr.find(el => el.uid === userId);
if (!target) return;
target.score += scores;
for (const current of arr) {
  let count = 1;
  for (const other of arr) {
    if (other !== current && other.score > current.score) {
      count++;
    }
  }
  current.place = count;
}
}

function changePosition2(arr, userId, scores) {
    arr.find((element) => element.uid === userId).score += + scores;
    arr.sort((a,b) => b.score - a.score);
    for(let i = 0; i < arr.length; i++){
      arr[i].place = i + 1;
    }
}

function benchmark(func){
    const start = performance.now();
    func();
    const end = performance.now();
    return end - start;
}

console.log(array, array2);
console.log(benchmark(changePosition.bind(null, array, "1-4", 15)));
console.log(benchmark(changePosition2.bind(null, array2, "1-5", 25)));
console.log(array, array2);