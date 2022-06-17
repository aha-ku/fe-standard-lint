import { sum } from "./utils";
const a: { hello: number } = { hello: 10 };
console.log(sum(a.hello, 10));

export { a, sum };
