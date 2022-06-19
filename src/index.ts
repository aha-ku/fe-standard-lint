import { sum, Person } from "./utils";
const a: { hello: number } = { hello: 10 };
const person = new Person(12, "zjf");
person.hello();
console.log(sum(a.hello, 10));

export * from "./utils";
