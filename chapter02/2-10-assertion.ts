{
  /**
   * Type Assertions (타입 단언) - 타입스크립트보다 개발자가 더 잘 알고 있을 때 사용
   */

  function jsStrFunc(): any {
    return "hello";
  }

  const result = jsStrFunc();

  // 타입 단언을 하기전에는 에러
  console.log((result as string).length);
  console.log((<string>result).length);
  // 타입 단언을 하게 되면 타입이 다르거나 없을 때 에러가 나지 않는다.
  // 남발하면 타입스크립트를 사용하는 의미가 없어진다.

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1));
  // 런타임 전에는 에러가 안나기에 런타임 때 죽을 수 있다.

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  numbers!.push(2); // !를 붙이면 undefined가 아니라고 확신할 때 사용

  const button = document.querySelector("class")!;
  // if (button) {
  //   button.nodeValue;
  // }
  // 100% 확신할 때 사용
}
