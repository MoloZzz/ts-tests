import { SortType } from "../common/enums/sort-type.enum";

export class SortService{
    constructor(){}
    //Можливо додати ще змінну isSwapped і повертати масив якщо не було swap. Невелика оптимізація
    private async sortBubble(array: number[]): Promise<number[]> {
        let temporary: number;
        for (let n = 0; n < array.length - 1; n++) { 
            for (let j = 0; j < array.length - n - 1; j++) { 
                if (array[j] > array[j + 1]) { 
                    temporary = array[j];
                    array[j] = array[j + 1]; // Оптимальніше -[array[j], array[j + 1]] = [array[j + 1], array[j]];
                    array[j + 1] = temporary;
                }
            }
        }
        return array;
    }
    //Можливо додати ще змінну isSwapped і повертати масив якщо не було swap. Невелика оптимізація
    private async sortInsertion(array: number[]): Promise<number[]> {
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > current) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = current;
        }
        return array;
    }

    //**Binary insertion sort */
    /* Замість лінійного пошуку позиції вставки використовуємо бінарний пошук. */
    private async binaryInsertionSort(array: number[]): Promise<number[]> {
        for (let i = 1; i < array.length; i++) {
            let current = array[i];
            let pos = await this.binarySearch(array, current, 0, i);
            for (let j = i; j > pos; j--) {
                array[j] = array[j - 1];
            }
            array[pos] = current;
        }
        return array;
    }

    private async binarySearch(arr: number[], item: number, low: number, high: number): Promise<number> {
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] > item) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }

    private async bubbleSort(array: number[]): Promise<number[]> {
        let n = array.length;
        let swapped;
        do {
            swapped = false;
            for (let i = 0; i < n - 1; i++) {
                if (array[i] > array[i + 1]) {
                    [array[i], array[i + 1]] = [array[i + 1], array[i]];
                    swapped = true;
                }
            }
            n--;
        } while (swapped);
        return array;
    }

    private async insertionSort(array: number[]): Promise<number[]> {
        for (let i = 1; i < array.length; i++) {
            let key = array[i];
            let j = i - 1;
            while (j >= 0 && array[j] > key) {
                array[j + 1] = array[j];
                j--;
            }
            array[j + 1] = key;
        }
        return array;
    }

    private async mergeSort(array: number[]): Promise<number[]> {
        if (array.length < 2) return array;
        const mid = Math.floor(array.length / 2);
        const left = await this.mergeSort(array.slice(0, mid));
        const right = await this.mergeSort(array.slice(mid));
        
        let merged: number[] = [];
        let i = 0, j = 0;
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                merged.push(left[i++]);
            } else {
                merged.push(right[j++]);
            }
        }
        return [...merged, ...left.slice(i), ...right.slice(j)];
    }

    private async quickSort(array: number[]): Promise<number[]> {
        if (array.length < 2) return array;
        const pivot = array[Math.floor(array.length / 2)];
        const left = array.filter(el => el < pivot);
        const right = array.filter(el => el > pivot);
        const middle = array.filter(el => el === pivot);
        return [...await this.quickSort(left), ...middle, ...await this.quickSort(right)];
    }

    private async heapify(arr: number[], n: number, i: number) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && arr[left] > arr[largest]) largest = left;
        if (right < n && arr[right] > arr[largest]) largest = right;
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            await this.heapify(arr, n, largest);
        }
    }
    private async heapSort(array: number[]): Promise<number[]> {
        let n = array.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) await this.heapify(array, n, i);
        for (let i = n - 1; i > 0; i--) {
            [array[0], array[i]] = [array[i], array[0]];
            await this.heapify(array, i, 0);
        }
        return array;
    }

    private async selectionSort(array: number[]): Promise<number[]> {
        for (let i = 0; i < array.length - 1; i++) {
            let minIndex = i;
            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minIndex]) minIndex = j;
            }
            if (minIndex !== i) {
                [array[i], array[minIndex]] = [array[minIndex], array[i]];
            }
        }
        return array;
    }

    private async shellSort(array: number[]): Promise<number[]> {
        let n = array.length;
        for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < n; i++) {
                let temp = array[i];
                let j;
                for (j = i; j >= gap && array[j - gap] > temp; j -= gap) {
                    array[j] = array[j - gap];
                }
                array[j] = temp;
            }
        }
        return array;
    }

    private async countingSort(array: number[]): Promise<number[]> {
        let min = Math.min(...array);
        let max = Math.max(...array);
        let count = new Array(max - min + 1).fill(0);
        array.forEach(num => count[num - min]++);
        let sortedArray: number[] = [];
        count.forEach((num, index) => {
            while (num > 0) {
                sortedArray.push(index + min);
                num--;
            }
        });
        return sortedArray;
    }

    public async sort(array: number[], type: SortType): Promise<number[]> {
        const sortService : SortService = new SortService();
        switch (type) {
            case SortType.Bubble:
                return await sortService.sortBubble([...array]);
            case SortType.Insertion:
                return await sortService.insertionSort([...array]);
            case SortType.Merge:
                return await sortService.mergeSort([...array]);
            case SortType.Quick:
                return await sortService.quickSort([...array]);
            case SortType.Heap:
                return await sortService.heapSort([...array]);
            case SortType.Selection:
                return await sortService.selectionSort([...array]);
            case SortType.Shell:
                return await sortService.shellSort([...array]);
            case SortType.Counting:
                return await sortService.countingSort([...array]);
            default:
                throw new Error("Unknown sort type");
        }
    }
}