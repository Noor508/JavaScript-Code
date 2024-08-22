//Lexing scoping

function init() 
{
    var name = "Mozilla"; 
    function displayName() {
      console.log(name); 
    }
    displayName();
}
  init();
  
//Closure

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();
  
//IIFY (immediately invoked function expression)

(function sum()
{
    return "sum";
})();