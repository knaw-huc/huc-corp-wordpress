// randon number
function randomInt(min,max) {
  min= min*10;
  max=max*10;
  var rand = (Math.floor(Math.random()*(max-min+1)+min)/10);

    return rand;

}
