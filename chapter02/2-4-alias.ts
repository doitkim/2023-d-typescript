{
  /**
   * Type Aliases (타입 별칭)
   */
  type Text = string;
  const name: Text = "test";
  const address: Text = "korea";

  type Num = number;
  type Student = {
    name: string;
    grade: number;
  };

  const student: Student = {
    name: "test",
    grade: 3,
  };

  console.log(student.name, student.grade);

  /**
   * String Literal Types
   */

  type Name = "name";
  let studentName: Name;
  studentName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
  const isCat: Boal = true;
}
