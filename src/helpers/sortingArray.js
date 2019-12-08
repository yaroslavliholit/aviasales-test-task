function sortRule(a, b) {
  if ( a.price < b.price ) return -1;
  if ( a.price > b.price ) return 1;

  return 0;
}

export const sortingArray = array => {
  if ( Array.isArray(array) ) {
    return array.sort(sortRule)
  }

  return false;
};

