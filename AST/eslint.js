const { transformSync } = require('@babel/core');
const eslintPlugin = require('./eslintPlugin');
const sourceCode = `
var a = 1;
console.log(a);
var b = 2;
`;
const { code } = transformSync(sourceCode, {
  plugins: [eslintPlugin({ fix: true })]
});
console.log(code);