import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

export default [
  ...next,
  {
    ignores: ["node_modules", ".next"],
    plugins: ["prettier"],
    rules: {
      "prettier/prettier": "error",
    },
  },
  prettier,
];
