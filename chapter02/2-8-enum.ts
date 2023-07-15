{
  /**
   * Enum
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;
  console.log(dayOfToday);

  // TypeScript의 Enum은 가능한한 사용하지 말 것
  // Enum 타입이 된 변수에 다른 타입의 값을 할당할 수 있음
  //   enum Days {
  //     Monday = 100,
  //     Tuesday,
  //     Wednesday,
  //     Thursday,
  //     Friday,
  //     Saturday,
  //     Sunday,
  //   }

  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";

  //   console.log(Days.Friday);
  //   console.log(Days);

  let DaysOfWeek: DaysOfWeek = "Monday";
  //   DaysOfWeek = "test"; Error

  //   Enum -> Union으로 대체하고 안드로이드나 IOS에서는 Enum을 사용
}
