export const transferFormatter = stops => {
  let postfix;
  if ( stops === 1 ) {
    postfix = 'пересадка';
  }

  if ( stops > 1 ) {
    postfix = 'пересадки';
  }

  return postfix;
};
