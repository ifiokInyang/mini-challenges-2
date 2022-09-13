function isolateDuplicates(text) {
    if(arguments.length <1 || typeof(text) != "string"){
      throw "Please enter a valid string"
    }
    let newArray= []
    let totalDuplicateCount= 0;
    let totalCount= 0
    let splitText= text.split('');
    for(let i=0; i < splitText.length; i++){
      newArray.push(splitText[i])
      if(splitText[i+1] != null && splitText[i].toLowerCase() == splitText[i+1].toLowerCase()){
        totalDuplicateCount++
        if(totalDuplicateCount==2){
          newArray.push('[')
          totalCount++
        }
  
      }else if(splitText[i+1] != null && splitText[i].toLowerCase() !== splitText[i+1].toLowerCase() || i == splitText.length-1){
        if(totalDuplicateCount > 1){
          newArray.push(']')
        }
        totalDuplicateCount= 0
      }
    }
    return [newArray.join(''), totalCount]
  }
  console.log(isolateDuplicates("aaaabbcdefffffffg"))


module.exports = isolateDuplicates;
