console.log('simpleFactory.js loaded')

app.factory('simpleFactory', function(){

  // return "Hi from Simple Factory"

  let bologna;

  return {
    //getter
    getThatVar: () => {
      return bologna
    },
    //setter
    setThatVar: (newValue) => {
      bologna = newValue
    }
  }

})
