{
  //   // JavScript
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }
  //   // TypeScript
  //   function add(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }
  //   // JavaScript
  //   function jsFetchNum(id) {
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }
  //   // TypeScript
  //   function fetchNum(id: string): Promise<number> {
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }
  // JavaScript => TypeScript
  // Optional parameter
  //   function printName(firstName: string, lastName?: string) {
  //     if (lastName === undefined) {
  //       console.log(firstName);
  //       return;
  //     }
  //     console.log(firstName);
  //     console.log(lastName);
  //   }
  //   printName("Steve", "Jobs");
  //   printName("test02");
  // Default parameter
  //   function printMessage(message: string = "default message") {
  //     console.log(message);
  //   }
  //   printMessage("hello");
  //   printMessage();

  // Rest parameter
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a: number, b: number) => a + b);
  }

  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 0));
}
