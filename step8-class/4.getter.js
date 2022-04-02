// wjqrmswk vmfhvjxl (Accessor Property)
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }
  set fullName(value) {
    console.log('set', value);
  }
}

const student = new Student('한샘', '서');
student.firstName = '철수';
console.log(student.firstName);
console.log(student.lastName);
console.log(student.fullName);
student.fullName = '김안나';
