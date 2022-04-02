// 정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
// 정직원은 시간당 10000원
// 파트타임 직원은 시간당 8000원

// class Employee {
//   #name;
//   #dept;
//   #monthWorkingTime;
//   constructor(name, dept) {
//     this.#name = name;
//     this.#dept = dept;
//   }

//   set monthWorkingTime(time) {
//     this.#monthWorkingTime = time;
//   }

//   get monthWorkingTime() {
//     return this.#monthWorkingTime;
//   }
// }

// class FulltimeWorker extends Employee {
//   #payment;
//   constructor(name, dept, workingTime) {
//     super(name, dept, workingTime);
//     this.#payment = 10000;
//   }

//   get MonthPayment() {
//     console.log('?', super.monthWorkingTime, this.#payment);
//     return super.monthWorkingTime * this.#payment;
//   }
// }

// class ParttimeWorker extends Employee {
//   #payment;
//   constructor(name, dept, workingTime) {
//     super(name, dept, workingTime);
//     this.#payment = 8000;
//   }

//   get MonthPayment() {
//     console.log('?', super.monthWorkingTime, this.#payment);
//     return super.monthWorkingTime * this.#payment;
//   }
// }

// const saem = new FulltimeWorker('서한샘', '개발부');
// saem.monthWorkingTime = 300;
// console.log(saem);
// console.log(saem.MonthPayment);

// ========================================================================================================================
class Employee {
  constructor(name, dept, hoursPerMonth, payRate) {
    this.name = name;
    this.dept = dept;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee {
  static PAY_RATE = 10000;
  constructor(name, dept, hoursPerMonth) {
    super(name, dept, hoursPerMonth, FullTimeEmployee.PAY_RATE);
  }
}
class PartTimeEmployee extends Employee {
  static PAY_RATE = 8000;
  constructor(name, dept, hoursPerMonth) {
    super(name, dept, hoursPerMonth, PartTimeEmployee.PAY_RATE);
  }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);
console.log(ellie.calculatePay());
console.log(bob.calculatePay());
