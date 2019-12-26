const ticketsUrl = '/data/tickets.json';

export const getTickets = async () => {
  const res = await fetch(ticketsUrl);

  if(!res.ok) {
    throw new Error(`Error fetch from ${ticketsUrl}, status: ${res.status}`);
  }

  return res.json();
};
