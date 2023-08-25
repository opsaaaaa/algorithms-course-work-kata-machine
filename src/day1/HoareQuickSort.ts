export default function hoare_quick_sort(arr: number[]): void {
  quicksort_recursive(arr, 0, arr.length - 1)
}

function quicksort_recursive(arr: number[], lo: number, hi: number): void {
  if (lo < hi) {
    const pivot = partition(arr, lo, hi)
    quicksort_recursive(arr, pivot + 1, hi)
    quicksort_recursive(arr, lo, pivot)
  }
}


function partition(arr: number[], lo: number, hi: number): number {

  const pivot = arr[Math.floor((hi-lo)/2) + lo]

  let left = lo - 1
  let right = hi + 1

  while(true) {
    do {left++} while (arr[left] < pivot)
    do {right--} while (arr[right] > pivot)
    if (left >= right) {return right}
    swap(arr, left, right)
  }
}

function swap(arr: number[] ,a: number, b:number): void {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}

