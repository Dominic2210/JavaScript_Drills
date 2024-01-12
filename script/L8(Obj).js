const student = {
  fullName: "Rishabh Trivedi",
  occupation: "HCL Team Lead",
  mobileNo: 8919644028,
  emailId: "rishabh@123.com",
  printFunc() {
    console.log(`Email of the student is ${this.emailId}`);
  }
  // Another way of writing a function in an object.
  // printFunc : function () {
  //   console.log(`Email of the student is ${this.emailId}`);
  // }
};

const taxCalc = {
  calcTax : function (sal) {
    let newSal = sal - (0.1 * sal);
    return newSal;
  }
};

const employee = {
  fullName : "Rishabh Trivedi",
  salary : 98000
}

employee.__proto__ = taxCalc;