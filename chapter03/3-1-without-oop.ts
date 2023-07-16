{
  // 내가 작성한 절차지향적 코드
  //   let coffeeBeans = 0;
  //   function makeCoffee(shot: number) {
  //     coffeeBeans -= shot * 3;
  //     console.log(`make espresso ${shot} shot`);
  //   }
  //   function coffeeMachine() {
  //     makeCoffee(2);
  //   }
  //   coffeeMachine();

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error("Not enough coffee beans!");
    }
    coffeeBeans -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeans += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}
