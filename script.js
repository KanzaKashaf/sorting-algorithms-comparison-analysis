let originalArray = [];
let sortedArrays = {};

function generateArray() {
    const size = parseInt(document.getElementById('arraySize').value);
    const min = parseInt(document.getElementById('minValue').value);
    const max = parseInt(document.getElementById('maxValue').value);

    if (min > max) {
        alert("Minimum value cannot be greater than maximum value.");
        return;
    }

    originalArray = generateRandomArray(size, min, max);
    sortedArrays = {};

    document.getElementById('originalArray').textContent = JSON.stringify(originalArray);

    // Sort and measure time for each algorithm
    measureTime('Insertion Sort', InsertionSort, 'insertion');
    measureTime('Quick Sort', (arr) => QuickSort(arr, 0, arr.length - 1), 'quick');
    measureTime('Heap Sort', (arr) => HeapSort(arr, arr.length), 'heap');
    measureTime('Counting Sort', CountingSort, 'counting');
}

function measureTime(name, algorithm, key) {
    const arrayCopy = [...originalArray]; 
    const iterations = 10; 
    let totalTime = 0;

    for (let i = 0; i < iterations; i++) {
        const startTime = performance.now();
        
        if (key === 'counting') {
            sortedArrays[key] = algorithm([...arrayCopy], arrayCopy.length); 
        } else {
            const tempArray = [...arrayCopy];
            algorithm(tempArray);
            sortedArrays[key] = tempArray;
        }

        const endTime = performance.now();
        totalTime += (endTime - startTime); 
    }

    const averageTime = totalTime / iterations; 
    document.getElementById(`${key}Time`).textContent = `${averageTime.toFixed(4)} ms`; 
}

function showArray(key) {
    document.getElementById('sortedArray').textContent = JSON.stringify(sortedArrays[key]);
}

// Helper Functions
function generateRandomArray(size, min, max) {
    const array = [];
    for (let i = 0; i < size; i++) {
        array.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return array;
}

// Sorting Algorithms
function InsertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = key;
    }
}

function QuickSort(array, start, end) {
    if (start < end) {
        let q = Partition(array, start, end);
        QuickSort(array, start, q - 1);
        QuickSort(array, q + 1, end);
    }
}

function Partition(array, start, end) {
    let x = array[end];
    let i = start - 1;

    for (let j = start; j <= end - 1; j++) {
        if (array[j] <= x) {
            i++;
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    [array[i + 1], array[end]] = [array[end], array[i + 1]];
    return i + 1;
}

function HeapSort(array, size) {
    BuildHeap(array, size);

    for (let m = size - 1; m > 0; m--) {
        [array[0], array[m]] = [array[m], array[0]];
        Heapify(array, 0, m);
    }
}

function BuildHeap(array, size) {
    for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
        Heapify(array, i, size);
    }
}

function Heapify(array, i, size) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < size && array[left] > array[largest]) largest = left;
    if (right < size && array[right] > array[largest]) largest = right;
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        Heapify(array, largest, size);
    }
}

function CountingSort(A, size) {
    let largest = Math.max(...A);
    let C = new Array(largest + 1).fill(0);
    let B = new Array(size);

    for (let i = 0; i < size; i++) C[A[i]]++;
    for (let i = 1; i <= largest; i++) C[i] += C[i - 1];
    for (let i = size - 1; i >= 0; i--) {
        B[C[A[i]] - 1] = A[i];
        C[A[i]]--;
    }

    return B;
}
