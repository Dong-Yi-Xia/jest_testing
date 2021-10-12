const chunkArray = (arr, len) => {
  const chunkArr = []

  arr.forEach(val => {
    const lastInnerArr = chunkArr[chunkArr.length - 1]

    //if lastInnerArr is undefined or with lastInnerArr length is equal to len
    //add new inner Array into chunkArr
    if(!lastInnerArr || lastInnerArr.length === len){
      chunkArr.push([val])
    }
    //Add val to lastInnerArr
    else {
      lastInnerArr.push(val)
    }
  })

  return chunkArr
}

module.exports = chunkArray
