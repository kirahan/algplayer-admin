module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:nuxt/recommended"],
  // add your custom rules here
  rules: {
    "eol-last": "OFF",
    quotes: "OFF",
    semi: "OFF",
    "no-console": "OFF",
    "padded-blocks": "OFF",
    "object-curly-spacing": "OFF",
    "space-before-blocks": "OFF",
    "no-unused-vars": "OFF",
    "@typescript-eslint/no-unused-vars": "OFF",
    "space-before-function-paren": "OFF"
  }
};
