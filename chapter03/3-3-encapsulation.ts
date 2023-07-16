{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 정보은닉 방법
  // public   외부에서 접근 가능
  // private 외부에서 볼 수 없는 것
  // protected 상속을 할 때 외부에서는 접근할 수 없지만, 상속을 한 자식 클래스에서는 접근할 수 있음

  class CoffeeMaker {
    // class level (static) - 공통적으로 쓰이는 데이터는 static으로 선언해서 메모리 낭비를 줄일 수 있다.
    // (메모리 절약) - 클래스와 연결되어 있기 때문에 클래스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    private static BEANS_GRAM_PER_SHOT: number = 7;
    // instance (object) level - 인스턴스가 생성될 때마다 새로 생성된다. (메모리 낭비)
    // 인스턴스 레벨로 지정한다. (클래스와 연결되어 있지 않은 인스턴스 레벨로 지정하면, 인스턴스가 생성될 때마다 데이터가 생성되어 메모리 낭비가 발생한다.)
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(50);

  class User {
    constructor(private firstName: string, private lastName: string) {}

    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name: string) {
      if (name.length === 0) {
        throw new Error("Please enter your name");
      }
      this.firstName = name.split(" ")[0];
      this.lastName = name.split(" ")[1];
    }

    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      this.internalAge = num;
    }
  }

  const user = new User("Steve", "Jobs");
  user.age = 6;
  console.log(user.age);
  console.log(user.fullName);
  user.fullName = "Ellie Kim";
  console.log(user.fullName);
}
