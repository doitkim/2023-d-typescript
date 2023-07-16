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

  abstract class CoffeeMachine implements CoffeeMaker {
    // class level (static) - 공통적으로 쓰이는 데이터는 static으로 선언해서 메모리 낭비를 줄일 수 있다.
    // (메모리 절약) - 클래스와 연결되어 있기 때문에 클래스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    // instance (object) level - 인스턴스가 생성될 때마다 새로 생성된다. (메모리 낭비)
    // 인스턴스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    private coffeeBeans: number = 0;

    public constructor(coffeeBeans: number) {
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

    protected abstract extract(shots: number): CoffeeCup;

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CafeLatteMachine extends CoffeeMachine {
    // 오버라이팅 - 상속받은 클래스에서 상속받은 함수를 재정의하는 것
    // super 키워드 - 부모 클래스의 생성자를 호출하는 것

    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("Steaming some milk...");
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    protected extract(shots: number): CoffeeCup {
      return {
        shots,
        hasSugar: true,
      };
    }
  }

  const machines: CoffeeMaker[] = [
    new CafeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  machines.forEach((machine) => {
    console.log("---------------------");
    machine.makeCoffee(1);
  });
}
