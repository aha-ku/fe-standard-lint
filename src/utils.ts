function sum(a: number, b: number) {
  return a + b;
}
class Person {
  name: string;
  age: number;
  private t: number;
  constructor(age: number, name: string) {
    this.age = age;
    this.name = name;
    this.t = 12;
  }
  hello() {
    console.log(this.name, this.age);
  }
}
export { sum, Person };
