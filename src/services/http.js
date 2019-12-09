export const http = async (url) => {
  const res = await fetch(`${url}`);

  if(!res.ok) {
    throw new Error(`Error fetch from ${url}, status: ${res.status}`);
  }

  return res.json();
};
