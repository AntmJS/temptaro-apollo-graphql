module.exports = {
  '**/*.{js,jsx,ts,tsx,graphql}': ['npx eslint -c eslint.config.js --fix'],
  '**/*.ts?(x)': () => 'npx tsc -p tsconfig.json --skipLibCheck',
  '**/*.{css,less}': ['npx stylelint --aei --config stylelint.config.js --fix'],
  '**/*.{js,jsx,ts,tsx,md,html,css,less,graphql}': ['npx prettier --write'],
}
