export const load = async ({ fetch, params: { id } }) => {
  const res = await fetch(`http://localhost:1337/api/properties/${id}?populate=*`);
  const post = await res.json();

  return {
    post,
  };
};
