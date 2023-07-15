// 글로벌 스코프가 적용이 되어 충돌이 나므로 방지하기 위해 로컬 스코프에서 예시 연습
{
  /**
   * JavaScript
   * let es6
   * let name = 'hello';
   * name = 'hi';
   
   * old: var 사용하지 말 것
   * var age = 5;
   * age =1;
   * 
   * JavaScript
   * Primitive: number, string, boolean, bigint, symbol, null, undefined
   * Object: function, array...
   * 
   */
  // number
  //   const num: number = 'd' error
  //   const num: number = 1;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  let name: undefined; // 단독으로 사용하지 않음
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(age: number): number | undefined {
    if (age) {
      return age;
    }
    return undefined;
  }

  // null
  let person: null; // 단독으로 사용하지 않음
  let person2: string | null;
  person2 = "hello";
  person2 = null;

  // unknown: 가능하면 사용하지 않는 것이 좋음 (타입스크립트에서 자바스크립트를 이용하는 경우 타입을 알 수 없는 경우가 있기 때문에 사용하기도 함)
  let notSure: unknown = 0;
  notSure = "he";
  notSure = true;

  // any: 가능하면 사용하지 않는 것이 좋음 (어떤 것이든 담을 수 있음)
  let anything: any = 0;
  anything = "hello";

  // void: 함수에서 아무것도 리턴하지 않을 때 사용 생략도 가능하지만 회사의 스타일 가이드에 따름
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 단독으로 사용하지 않음

  // never: 함수에서 절대 리턴하지 않을 때 사용
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    // while (true) {}
  }

  let neverEnding: never; // 단독으로 사용하지 않음

  // object: 원시타입을 제외한 모든 object 타입을 담을 수 있음

  let obj: object; // 어떤 것이든 담는 타입은 가능하면 사용하지 말 것
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "night" });
  acceptSomeObject({ animal: "lion" });
}
