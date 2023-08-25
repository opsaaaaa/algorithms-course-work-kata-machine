export default class MinHeap {
  public length: number;
  private data: number[];

  /*
  // c,p,l,r = Current, Parent, Left, Right
  // x,v = indeX, Value
  */

  constructor() {
    this.data = []
    this.length = 0
  }

  insert(value: number): void {
    this.data[this.length] = value
    this.heepifyUp(this.length)
    this.length ++
  }

  delete(): number {
    if(this.length == 0) { return -1 }

    this.length --
    
    this.swap(0,this.length)
    this.heepifyDown(0)

    return this.data.pop() as number
  }


  private heepifyDown(x: number): void {
 
    let cX = x // Current indeX
    let lX = 0 // Left indeX
    let rX = 0 // Right indeX

    let cV = 0 // Current Value
    let lV = 0 // Left Value
    let rV = 0 // Right Value

    while(cX < this.length) {
      lX = this.leftX(cX)
      rX = this.rightX(cX)

      cV = this.data[cX]
      lV = this.data[lX]
      rV = this.data[rX]

      if(rX < this.length && lV > rV && cV > rV) {
        this.swap(rX, cX)
        cX = rX
      } else if (lX < this.length && cV > lV) {
        this.swap(lX, cX)
        cX = lX
      } else {
        return
      }
    }

  }

  private heepifyUp(x: number): void {

    let cX = x // Current indeX
    let pX = 0 // Parent indeX

    let cV = 0 // Current Value
    let pV = 0 // Parent Value

    while (cX > 0) {

      pX = this.parentX(cX)

      cV = this.data[cX]
      pV = this.data[pX]

      if (cV < pV) {
        this.swap(pX,cX)
        cX = pX
      } else {
        return
      }
    }
    
  }

  private swap(a: number,b: number): void {
    [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
  }

  private parentX(x: number): number {
    return Math.floor( (x-1)/2 )
  }

  private leftX(x: number): number {
    return (x*2)+1
  }

  private rightX(x: number): number {
    return (x*2)+2
  }


}
