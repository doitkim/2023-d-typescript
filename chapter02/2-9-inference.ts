{
  /**
   * Type Inference (타입 추론)
   */
  let text = "hello";
  text = "hi";
  //   text = 1; Error
  function print(message = "hello") {
    console.log(message);
  }
  print("hello");

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add(1, 2);
}
