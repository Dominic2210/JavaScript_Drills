class car {
  carName(name) {
    this.name = name;
  }
  color(color) {
    this.carColor = color;
  }
  wheel(num) {
    this.noOfWheels = num;
  }

}

let toyota = new car();
toyota.carName("Fortuner");
toyota.color("red");
toyota.wheel(4);

class stuDet {
  constructor(name, age, roll) {
    this.fullName = name;
    this.age = age;
    this.rollNo = roll;
    
  }
}
let student = new stuDet("Rishabh Trivedi", 23, 98.5);

class stuPerf extends stuDet {
  constructor(name, age, roll, num, grade) {
    super(name, age, roll);
    this.marks = num;
    this.grades = grade;
  }
  
}

let student2 = new stuPerf("Rishabh Trivedi", 23, "1BY18EC133", 98.3, "A"); 
