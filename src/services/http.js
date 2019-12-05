const url = 'http://localhost:3000/tickets.json';

export const http = async () => {
  const result = await fetch(url).then( data => console.log(data) );

  return result;
};
