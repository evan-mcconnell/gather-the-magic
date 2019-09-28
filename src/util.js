// helper functions


const formatSearch = (params) => {
  console.log('params:', params)
  let colorStr = '';
  let typeStr = '';
  if (params.colors.length === 1) { 
    colorStr = 'c%3A' + params.colors[0]
  } else if (params.colors.length > 1) {
    params.colors.join('')
    colorStr = params.union ?  'c%3E%3D' + params.colors.join('') : 'c%3A' + params.colors.join('');
  }
  if (params.cardTypes.length) {
    params.cardTypes.forEach((type) => {
      typeStr = typeStr.concat('+t%3', type)
      console.log(typeStr)
    })
  }
  console.log("type string", typeStr)
  const queryStr = 'q=' + colorStr + typeStr;
  console.log(queryStr)
  return queryStr

}

export {
  formatSearch
}