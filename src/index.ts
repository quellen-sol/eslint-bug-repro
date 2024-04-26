function main() {
  // Unused variable: "error"
  const unusedVariable = 'Hello, World!';

  // Try to invoke "eqeqeq": "error"
  const cmpA: string = "A";
  const cmpB: string = "B";
  if (cmpA == cmpB) {
    console.log('A equals B');
  }
}

main();