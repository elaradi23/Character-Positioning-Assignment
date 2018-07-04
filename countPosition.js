function countPosition(str){
  str = str.split(" ").join("");

  var tempObj = {};

  for(var i = 0; i < str.length; i++){
    var tempChar = str[i];
    if(tempObj.hasOwnProperty(tempChar)){
      tempObj[tempChar].push(i);
    } else {
      tempObj[tempChar] = [i];
    }
  }

  return tempObj;
}

console.log(countPosition("lighthouse in the house"));