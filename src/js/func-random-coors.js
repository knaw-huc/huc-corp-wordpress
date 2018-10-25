function randomCoors(total_near, randomDistortion) { // total > complete new coors / near > near current coors
  //var randomDistortion = 5;
  var ammount = coors.length;
  coorsBackup = coors;

  if (total_near == 'total') {
    for (var i = 0; i < ammount; i++) {
      coors[i][0] = randomInt((300-divWidth),divWidth);
      coors[i][1] = randomInt((300-divHeight),divHeight);
    }
  }
  if (total_near == 'near') {
    for (var i = 0; i < ammount; i++) {
      coors[i][0] = coors[i][0]+randomInt(0-randomDistortion, randomDistortion);
      coors[i][1] = coors[i][1]+randomInt(0-randomDistortion, randomDistortion);
    }
  }
}
