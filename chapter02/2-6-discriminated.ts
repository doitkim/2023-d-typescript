{
  /**
   * discriminated union
   * union type에 공통적인 property를 가지고 있을 때
   * 공통적인 property를 이용해서 구분하는 방법
   */
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      //   result: "success",
      //   response: {
      //     body: "logged in!",
      //   },
      result: "fail",
      reason: "no network",
    };
  }

  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState) {
    if (state.result === "success") {
      console.log(`congratulation ${state.response.body}`);
    } else {
      console.log(`fail ${state.reason}`);
    }
  }

  printLoginState(login());
}
