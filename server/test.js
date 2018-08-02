const scripts = document.getElementsByTagName('script');
const index = scripts.length - 1;
const myScript = scripts[index];
let scriptUrl = myScript.src;
console.log(scriptUrl);