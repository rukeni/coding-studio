function validAnagram(str1, str2){
  if(str1.length !== str2.length) return false;
  
  const stringTable = {};
  
  for (let i = 0; i < str1.length; i++) {
      stringTable[str1[i]] ? stringTable[str1[i]]++ : stringTable[str1[i]] = 1;
  }
  
  for (let j = 0; j < str2.length; j++) {
      if(!stringTable[str2[j]]) return false;
      stringTable[str2[j]]--;
  }
  
  return true;
  
}