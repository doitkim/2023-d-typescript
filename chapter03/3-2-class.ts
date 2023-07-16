{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    // class level (static) - 공통적으로 쓰이는 데이터는 static으로 선언해서 메모리 낭비를 줄일 수 있다.
    // (메모리 절약) - 클래스와 연결되어 있기 때문에 클래스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    static BEANS_GRAM_PER_SHOT: number = 7;
    // instance (object) level - 인스턴스가 생성될 때마다 새로 생성된다. (메모리 낭비)
    // 인스턴스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(30);
  console.log(maker);
  const maker2 = new CoffeeMaker(10);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}
