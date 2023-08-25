export default function two_crystal_balls(breaks: boolean[]): number {
  
  const jump = Math.floor(Math.sqrt(breaks.length))

  for (let ball1 = jump; ball1 < breaks.length; ball1 += jump) {
    if (breaks[ball1]) {
      for (let ball2 = ball1 - jump; ball2 < ball1; ball2++) {
        if (breaks[ball2]) {
          return ball2
        }
      }
    }
  }
  return -1

}
