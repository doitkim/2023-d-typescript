{
  /**
     JavaScript
     old: var 쓰지 말 것
       var age = 5;
       age = 1;
     
     let es6
     
     let age: number = 5;
     age = 1;
    
     const
     const age2: number = 5;
     */

  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   */

  // number
  const num: number = -6;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 단독으로 안 씀
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; //단독으로 안 씀
  let person2: string | null;

  // unknown 가능하면 사용 하지 말 것
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any 가능하면 사용 하지 말 것
  let anything: any = 0;
  anything = "hello";

  // void
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 이런 식 선언은 안 씀

  // never
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }

  // object
  let obj: object; // 가능하면 사용 하지 말 것
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "test" });
  acceptSomeObject({ animal: "cat" });
}
