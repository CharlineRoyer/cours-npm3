
export default async function plat(){
  const url2 = "https://api.gill-cote-bistro.fr/specials?_sort=id:asc";
  
  const response2 = await fetch(url2);
  return response2.json();
}