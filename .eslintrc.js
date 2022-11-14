module.exports = {
  plugins: ["prettier", "unused-imports", "import", "@typescript-eslint"],
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "parent", "sibling", "index"],
      },
    ],
    "prettier/prettier": "error",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json", "./tsconfig.eslint.json"],
  },
};
