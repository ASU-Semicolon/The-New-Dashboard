export default function filterArray(unfilteredArray,filteredArray){
  const arrayIds = filteredArray.map(item => item.id);

  return unfilteredArray.filter(item => arrayIds.includes(item.Id));

}