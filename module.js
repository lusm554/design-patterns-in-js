const myModule = (function() {
  let privateVar = 'Hello World!'

  function privateMethod() {
    console.log(privateVar)
  }

  return { privateMethod }
})();

console.log(myModule.privateVar) // undefined
myModule.privateMethod() // Hello World!


// Open module
const myRevealingModule = (function() {
  let _ = 'some private value'
  let publicVar = 'Hello World!'

  function _func() {
    console.log(`"_" = ${_}`)
  }

  function setPrivate(val) {
    _ = val
  }

  function getPrivate() {
    _func()
  }

  return {
    setVar: setPrivate,
    getVar: getPrivate,
    greeting: publicVar
  }
})();

myRevealingModule.setVar('new value!')
myRevealingModule.getVar() // "_" = new value!