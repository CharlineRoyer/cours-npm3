
import plat from './query.js';
import histoire from './history.js';

let sectionCarte = document.getElementById('carte');
let sectionHistoire = document.getElementById('history');




async function showplat(){
  const content = await plat();
  const apiUrl = "https://api.gill-cote-bistro.fr"
  

  for(let i=0; i<content.length; i++){
    

    let titre = document.createElement("h2");
    titre.textContent = content[i].title;

   let image = document.createElement('img');
   image.setAttribute('src', apiUrl + content[i].image.url)
   let description = document.createElement('p');
   description.textContent = content[i].description;


 


    sectionCarte.appendChild(titre);
    sectionCarte.appendChild(image);
    sectionCarte.appendChild(description);


  }





}


showplat();



async function showhistoire(){
  const content1 = await histoire();
  console.log(content1)
    let paragraphe1 = document.createElement("p");
    paragraphe1.innerHTML = content1[0].first_paragraph;

    let paragraphe2 = document.createElement("p");
    paragraphe2.innerHTML = content1[0].second_paragraph;

    sectionHistoire.appendChild(paragraphe1);
    sectionHistoire.appendChild(paragraphe2);



}

showhistoire();