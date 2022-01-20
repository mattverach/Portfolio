module.exports = {
  extends: ["./node_modules/@spm/eslint-config/index.js"],
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["google"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {},
};
