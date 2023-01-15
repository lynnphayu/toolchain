/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/array-type": ["warn", { default: "array-simple" }],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: false },
    ],
    "@typescript-eslint/no-empty-interface": "off",
  },
  extends: [
    // recommended eslint config
    "eslint:recommended",

    // from typescript-eslint plugin
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",

    // make prettier work with eslint
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["node_modules", "dist"],
  overrides: [
    {
      files: ["*.ts"],
      excludedFiles: ["*.test.ts", "*.spec.ts"],
      extends: [
        // enable strict rules only for non-test files
        "plugin:@typescript-eslint/strict",
      ],
    },
    {
      files: ["*.test.ts", "*.spec.ts"],
      rules: {
        "@typescript-eslint/no-empty-function": "off",
      },
    },
  ],
};
