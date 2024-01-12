// a. Create a Class "User". It has 2 properties, Name & Email. Add a method - viewData() to view a website.

let webData = "You can see me!"

class User {
  constructor(name, mail) {
    this.Name = name;
    this.EmailId = mail;
  }
  viewData() {
    console.log(`Website Data = ${webData}`);
  }
}

let user1 = new User("Rishabh", "rishabh@123.com");

class Admin extends User {
  constructor(name, mail, usrdet) {
    super(name, mail);
    this.UserName = usrdet;
  }
  editData() {
    webData = "Edited data";
    console.log(`The website has been edited = ${webData}`)
  }
}

let user2 = new Admin("Trivedi", "trivedi@456.com", "trivedi@2210");