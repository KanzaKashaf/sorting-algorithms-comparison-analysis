# Interactive Sorting Algorithm Visualizer

An interactive web-based tool for generating random arrays, sorting them using different algorithms, and measuring their average execution time. The project showcases four popular sorting algorithms with performance metrics and allows users to view the sorted output directly in the browser.

---

## Project Overview

This project enables users to:

- Generate arrays of custom size and value range.
- Apply four different sorting algorithms.
- Measure and compare average execution time over multiple iterations.
- View the sorted array interactively.

---

## Group Members

- **Kanza Kashaf** 
- **Hassaan Raza** 

---

## Sorting Algorithms Implemented

### 1. Insertion Sort
- Simple comparison-based sorting.
- Efficient for small arrays.
- **Time Complexity:**
  - Best: O(n)
  - Average/Worst: O(n²)

### 2. Quick Sort
- Divide-and-conquer strategy with pivot partitioning.
- Excellent average performance.
- **Time Complexity:**
  - Best/Average: O(n log n)
  - Worst: O(n²)

### 3. Heap Sort
- Utilizes binary heap structure.
- Consistent O(n log n) performance.
- **Time Complexity:**
  - Best/Worst/Average: O(n log n)

### 4. Counting Sort
- Non-comparison sorting for integer keys.
- Best for small value ranges.
- **Time Complexity:** O(n + k)
- **Space Complexity:** O(n + k)

---

## How It Works

- Users enter:
  - Size of the array
  - Minimum and maximum value range
- The array is generated randomly.
- Each sorting algorithm runs 10 times to measure average execution time.
- The sorted array for each algorithm can be viewed on demand.

---

## Sample Output (Time in ms)

| Size     | Insertion | Quick | Heap | Counting |
|----------|-----------|-------|------|----------|
| 1000     | 1.5333    | 0.2667| 0.7000 | 0.0667 |
| 5000     | 10.0000   | 0.5333| 1.0333 | 0.1333 |
| 10000    | N/A       | 1.0000| 2.0667 | 0.1667 |
| 100000   | N/A       | 12.5000| 30.3333 | 2.2000 |

---

## Technologies Used

- **JavaScript (ES6+)**
  - Core logic and sorting algorithms
- **HTML/CSS**
  - User interface and layout
- **Browser APIs**
  - `performance.now()` for precise time tracking

---

## Learning Objectives

- Compare sorting algorithm efficiency empirically.
- Understand runtime implications of algorithm design.
- Enhance JavaScript development and UI integration skills.

---

## How to Run

1. Open the HTML file in a browser (Chrome recommended).
2. Enter array size and value limits.
3. Click **Generate** to create and sort the array.
4. View performance times and sorted outputs.

---