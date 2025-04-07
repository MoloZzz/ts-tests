const input = [	9, 3, 7, 4, 6, 9, 3, 13, 5, 0];

function getLongestGrowingSequence(input) {
  let result = [];
  while (input.length > result.length) {
    const subSeq = [];
    let elementToRemove = null;
    for(let j = 0; j < input.length; j++){
      if(!subSeq.length || input[j] > subSeq[subSeq.length - 1]) {
        subSeq.push(input[j]);
      } else if (elementToRemove === null) {
      	elementToRemove = subSeq[subSeq.length - 1];
      }
    }
    if(subSeq.length > result.length) {
    	result = subSeq;
    }
    input.splice(input.indexOf(elementToRemove),1);
  }
	return result;
}

console.log(getLongestGrowingSequence(input));

function longestIncreasingSubsequence(arr) {
	const n = arr.length;
	const tails = []; // зберігає індекси останніх елементів LIS довжини i
	const prev = Array(n).fill(-1); // зберігає попередній елемент у LIS
  
	for (let i = 0; i < n; i++) {
	  let left = 0, right = tails.length;
	  while (left < right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[tails[mid]] < arr[i]) left = mid + 1;
		else right = mid;
	  }
	  if (left > 0) {
		prev[i] = tails[left - 1];
	  }
	  if (left < tails.length) {
		tails[left] = i;
	  } else {
		tails.push(i);
	  }
	}
	const lis = [];
	let k = tails[tails.length - 1];
	while (k !== -1) {
	  lis.push(arr[k]);
	  k = prev[k];
	}
  
	return lis.reverse();
  }
  
  console.log(longestIncreasingSubsequence([9, 3, 7, 4, 6, 9, 3, 13, 5, 0]));
  
  

  