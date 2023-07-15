{
  /**
   * Intersection Types: & (AND) => 두가지 이상의 타입을 합쳐준다.
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWrok(person: Student & Worker) {
    console.log(person.name, person.employeeId);
    person.work();
  }

  internWrok({
    name: "student001",
    score: 1,
    employeeId: 123,
    work: () => {
      console.log("work work");
    },
  });
}
