

let keys = {};

function handleKeyDown(event){
  if(event.repeat) return;
  keys[event.keyCode] = true;
}
function handleKeyUp(event){
  delete keys[event.keyCode];
}

document.addEventListener("keyup",handleKeyUp,false);
document.addEventListener("keydown",handleKeyDown,false);


module.exports = keys;
