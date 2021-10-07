export default async function histoire(){
    const url = "https://api.gill-cote-bistro.fr/histoires?_sort=id:asc";
    
    const response = await fetch(url);
    return response.json();
  }