export default function bs_list(haystack: number[], needle: number): boolean {

  let hi: number = haystack.length
  let lo: number = 0

  do {
    const middle = Math.floor(lo + (hi - lo)/2 )
    const val = haystack[middle]

    if (val === needle) {
      return true
    } else if (val > needle) {
      hi = middle
    } else {
      lo = middle + 1
    }
  } while (lo < hi)

  return false
}
