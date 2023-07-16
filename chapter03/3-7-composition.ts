{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  // 정보은닉 방법
  // public: 외부에서 접근 가능
  // private: 외부에서 볼 수 없는 것
  // protected: 상속을 할 때 외부에서는 접근할 수 없지만, 상속을 한 자식 클래스에서는 접근할 수 있음

  class CoffeeMachine implements CoffeeMaker {
    // class level (static) - 공통적으로 쓰이는 데이터는 static으로 선언해서 메모리 낭비를 줄일 수 있다.
    // (메모리 절약) - 클래스와 연결되어 있기 때문에 클래스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    // instance (object) level - 인스턴스가 생성될 때마다 새로 생성된다. (메모리 낭비)
    // 인스턴스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    private coffeeBeans: number = 0;

    public constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("Value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    clean() {
      console.log("Cleaning the machine...");
    }

    // 추상화 - 외부에서 알 필요가 없는 정보를 감추는 것 (캡슐화와는 다른 개념) - private으로 선언된 함수는 외부에서 접근할 수 없다.
    private grindBeans(shots: number) {
      console.log(`Grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat(): void {
      console.log("Heating up...");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return {
        shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }

  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }

  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }

  // 싸구려 우유 거픔기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 비싼 우유 거품기
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  // 차가운 우류 거품기
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Cold Steaming some milk...");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }

  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // 사탕으로 설탕만드는 제조기
  class AutomaticSugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // 설탕 제조기
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar...");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  // Milk
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();

  // Sugar
  const candySugar = new AutomaticSugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 머신 만들기
  const sweetCandyMachine = new CoffeeMachine(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMachine(12, noMilk, sugar);
  const latteMachine = new CoffeeMachine(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMachine(12, coldMilkMaker, noSugar);
  const sweetLatteMachine = new CoffeeMachine(12, fancyMilkMaker, sugar);
}
