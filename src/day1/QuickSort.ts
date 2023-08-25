export default function quick_sort(arr: number[]): void {
  quicksort_recursive(arr, 0, arr.length - 1)
}

function quicksort_recursive(arr: number[], lo: number, hi: number): void {
  if (lo < hi) {
    const pivot = partition(arr, lo, hi)
    quicksort_recursive(arr, pivot + 1, hi)
    quicksort_recursive(arr, lo, pivot - 1)
  }
}

function partition(arr: number[], lo: number, hi:number): number {

  // optional, pivot in the middle instead of the end
  swap(arr, hi, Math.floor((hi - lo)/2) + lo)

  const pivot = hi
  let slot = lo

  for(let cursor = lo; cursor < hi; cursor++) {
    if(arr[cursor] <= arr[pivot]) {

      swap(arr, slot, cursor)
      slot++
    }
  }

  swap(arr, slot, pivot)
  return slot
}

function swap(arr: number[] ,a: number, b:number): void {
  [arr[a], arr[b]] = [arr[b], arr[a]]
}
