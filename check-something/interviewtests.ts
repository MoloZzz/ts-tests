const trees = ["xyz", "xxxx", "test", "ryan", "apple"];
delete trees[3];
console.log(trees.length);
console.log(trees[3]);

function processArray(array: number[]): { unique: number[], uniqueDuplicates: number[] } {
    const myMap: { [key: number]: number } = {};

    array.forEach(item => {
        myMap[item] = (myMap[item] || 0) + 1; 
    });

    const unique: number[] = [];
    const uniqueDuplicates: number[] = [];

    for (const key in myMap) {
        const numKey = Number(key); 
        if (myMap[key] === 1) {
            unique.push(numKey); 
        } else if (myMap[key] > 1) {
            uniqueDuplicates.push(numKey);
        }
    }

    return { unique, uniqueDuplicates };
}

const source1 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const { unique : unique1, uniqueDuplicates : uniqueDuplicates1 } = processArray(source1);
console.log(unique1);           
console.log(uniqueDuplicates1); 

function processArray1(array: number[]): { unique: number[], uniqueDuplicates: number[] } {
    const myMap: { [key: number]: number } = {};
    const unique: number[] = [];
    const uniqueDuplicates: number[] = [];
    const seenDuplicates: { [key: number]: boolean } = {};

    array.forEach(item => {
        if (!(item in myMap)) {
            myMap[item] = 1;
            unique.push(item);
        } else if (!seenDuplicates[item]) {
            myMap[item]++;
            uniqueDuplicates.push(item);
            seenDuplicates[item] = true;
        } else {
            myMap[item]++;
        }
    });

    return { unique, uniqueDuplicates };
}

const source2 = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
const { unique: unique2, uniqueDuplicates:  uniqueDuplicates2} = processArray(source2);
console.log(unique2);           
console.log(uniqueDuplicates2);


function removeDublicates(data: number[]): {array : number[], dublicates: number[]} {
    const array : number[] = [];
    const dublicates : number[] = [];
    const freqencyMap: { [key: number]: number } = {};

    data.forEach(item => {
            if (!freqencyMap[item]){
                freqencyMap[item] = 1;
                array.push(item);
            }else{ 
                freqencyMap[item] += 1;
                dublicates.push(item)
            }
        }
    )
    return {array, dublicates};
}

const { array, dublicates } = removeDublicates(source2);
console.log(array);           
console.log(dublicates);

const obj = {
    name: "Vova",
    secondName: "Simba",
    age: 15,
    parents: {
        mother: {
            name: "Natali",
            secondName: "Simba",
            age: 38
        },
        father: {
            name: "Oleg",
            secondName: "Simba",
            age: 45,
            job: "driver"
        }
    }
};

const {
    parents: {
      mother: {
        name: motherName,
        secondName: motherSecondName,
        age: motherAge,
      },
      father: {
        name: fatherName, 
        secondName: fatherSecondName,
        job: fatherJob,
      }
    }
  } = obj;
  
  const fatherInitials = { name: fatherName, secondName: fatherSecondName };
  
  console.log(motherName);      
  console.log(motherSecondName); 
  console.log(motherAge);        
  console.log(fatherInitials);   


  async function asyncObjectMap(obj, callback) {
    const keys = Object.keys(obj); // Отримуємо ключі об’єкта
    const results = await Promise.all(
      keys.map(async (key) => {
        const value = await callback(obj[key]); // Чекаємо результат асинхронного callback
        return [key, value]; // Повертаємо пару [ключ, значення]
      })
    );
    
    // Перетворюємо масив пар у об’єкт
    return Object.fromEntries(results);
  }
  
  // Приклад використання
  (async () => {
    const result = await asyncObjectMap({ qwe: 123, fds: 32 }, async (x) => x * 2);
    console.log(result); // { qwe: 246, fds: 64 }
  })();