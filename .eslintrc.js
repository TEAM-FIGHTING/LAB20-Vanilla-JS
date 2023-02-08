module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    // var는 사용할 수 없다.
    "no-unused-vars": "warn",
    // 불필요한 반복문은 사용할 수 없다
    "no-unreachable-loop": ["error"],
    // 도달하지 못하는 코드는 사용할 수 없다
    "no-unreachable": ["error"],
    // 선언하지 않은 코드를 사용할 수 없다
    // "no-use-before-define": ["error"],
    // 중첩된 배열 앞뒤에는 공백이 있으면 안된다
    "array-bracket-spacing": ["error", "never"],
    // 중괄호의 스타일을 통일
    "brace-style": ["error"],
    // debugger 는 사용을 권장하지 않는다
    "no-debugger": ["warn"],
    // no-alert 룰과 충돌하므로 끔
    "no-restricted-globals": ["off"],
    // alert, confirm, prompt 는 사용을 권장하지 않는다
    "no-alert": ["warn"],
    // console.log 는 사용할 수 없다
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
  },
};
