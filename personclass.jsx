/\* Base Person class \*/
class Person {
constructor(name, age) {
this.name = name;
this.age = age;
}

displayInfo() {
return `Name: ${this.name}, Age: ${this.age}`;
}
}

/\* Student subclass \*/
class Student extends Person {
constructor(name, age, course) {
super(name, age); // call parent constructor
this.course = course;
}

// Override method
displayInfo() {
return `${super.displayInfo()}, Course: ${this.course}`;
}
}

/\* Teacher subclass \*/
class Teacher extends Person {
constructor(name, age, subject) {
super(name, age);
this.subject = subject;
}

// Override method
displayInfo() {
return `${super.displayInfo()}, Subject: ${this.subject}`;
}
}

/\* Creating instances \*/
const student1 = new Student("Alice", 20, "Computer Science");
const teacher1 = new Teacher("Mr. John", 40, "Mathematics");

/\* Demonstrating output \*/
console.log(student1.displayInfo());
// Output: Name: Alice, Age: 20, Course: Computer Science

console.log(teacher1.displayInfo());
// Output: Name: Mr. John, Age: 40, Subject: Mathematics
