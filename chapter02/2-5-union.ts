{
  /**
   * Union Types: OR => 타입을 묶어서 사용할 수 있게 해준다.
   */

  // 발생한 케이스 중 하나만 할당 가능
  //   type Direction = "left" | "right" | "up" | "down";

  //   function move(direction: Direction): string {
  //     return direction;
  //   }

  //   console.log(move("down"));

  //   type TileSize = 8 | 16 | 32;
  //   const tile: TileSize = 32;

  //   type result = "success" | "fail";

  //   function login(id: string, pw: string): result {
  //     if (id === "admin" && pw === "1234") {
  //       return "success";
  //     }
  //     return "fail";
  //   }

  //   console.log(login("admin", "1234")); // success
  //   console.log(login("admin", "12345")); // fail

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in!",
      },
      // reason: "no network",
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState) {
    if ("response" in state) {
      console.log(`congratulation ${state.response.body}`);
    } else {
      console.log(`fail ${state.reason}`);
    }
  }

  printLoginState(login());
}
