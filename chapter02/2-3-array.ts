{
  // Array
  const fruits: string[] = ["tomato", "banana", "apple"];
  const scores: Array<number> = [1, 2, 3];

  // 일관성있게 코드 작성하는 걸 추천
  function printArray(fruits: readonly string[]) {
    // fruits.push();
  }

  // Tuple -> interface, type alias, class 대체해서 사용

  // 튜플 사용 권장하지 않음 (데이터가 정확하게 들어오지 않을 수 있고 어떤게 들어있는지 알기 어려움)
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // 가독성이 안좋아서 구조분해를 써서 사용할 수 있음
  console.log(name, age);
}
