/*

You have two crystal balls and you're gaol is to find the minimum height you can drop one from and have it break.

The height is represented as and array of ordered booleans.
[false, false, true, true]
:e
When you query a true value, a crystal ball breaks.
You only have two checks.

*/


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
