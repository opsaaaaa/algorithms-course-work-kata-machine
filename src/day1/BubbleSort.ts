export default function bubble_sort(arr: number[]): void {

  for (let m = arr.length; m > 1; m--) {
    for(let a = 0; a < m - 1; a++) {
      const b = a+1
      if (arr[a] > arr[b]) {
        const tmp = arr[b]
        arr[b] = arr[a]
        arr[a] = tmp
      }
    }
  }

}
