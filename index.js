// Your code here
class Polygon{
  constructor(array) {
      this.array = array;
    }
    get countSides(){
      return this.array.length;
    }
    get perimeter(){
      let sum=0;
      let countsides=this.countSides;
      for(let i=0 ; i<=countsides;i++)
      {
      sum +=countsides[i]
      }
      return sum;

    }
}
class Triangle extends Polygon {
  // inherits constructor
}

class Square extends Polygon {
  area(){
    return this.array[0]*this.array[0]
  }

}
