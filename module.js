const myModule = (function() {
  let privateVar = 'Hello World!'

  function privateMethod() {
    console.log(privateVar)
  }

  return { privateMethod }
})();

console.log(myModule.privateVar) // undefined
myModule.privateMethod() // Hello World!