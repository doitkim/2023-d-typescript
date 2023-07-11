{
  // Array
  const fruits = ["apple", "banana"];
  const scores: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // fruits.push();
  }
  // Tuple -> interface, type alias, class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
  // const [name, age, address] = student;
}
