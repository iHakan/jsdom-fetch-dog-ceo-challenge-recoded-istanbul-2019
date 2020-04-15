console.log('%c HI', 'color: firebrick')

window.addEventListener("load", function(e){
  e.preventDefault();
  
  //////////////////challenge-1 /////////////////////
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

  fetch(imgUrl)
  .then(response => response.json())
  .then(data => getImages(data.message))
  
 function getImages(images){
   let imgDiv = document.getElementById("dog-image-container");
   
   images.forEach(img => {
     let createImg = document.createElement("img");
     createImg.src = img;
     createImg.width = 150;
     createImg.height = 150;
     imgDiv.appendChild(createImg);
   });
 }
 
 //////////////////challenge-2///////////////////////
 const breedUrl = 'https://dog.ceo/api/breeds/list/all';
 
 fetch(breedUrl)
 .then(response => response.json())
 .then(data => getBreeds(data.message));
 
 
 function getBreeds(breedInfo){
   let ulTag = document.getElementById("dog-breeds");
   
   //console.log(breedInfo)
   //since we are getting an object of arrays we should use "for....in"
   for(breed in breedInfo){  
   
     let createList = document.createElement("li");
     let listText = document.createTextNode(breed);
     createList.appendChild(listText);
     ulTag.appendChild(createList);
   }
   changeOnClick();
 } 
 
 ///////////////////challenge-3////////////////////
 function changeOnClick(){
   const list = document.querySelectorAll('ul#dog-breeds li');
   for(const li of list){
     li.addEventListener("click", (e) => handleClick(e));
   }
 }
 
 function handleClick(e){
   e.target.style.color == "red"? e.target.style.color = "black" : e.target.style.color = "red";
 }
 
 //////////////////challenge-4//////////////////////
 document.querySelector("select").addEventListener("change",(e) => handleFilter(e.target.value))
 function handleFilter(inputStr){
   const breeds = document.querySelectorAll("ul#dog-breeds li");
   
   for(const li of breeds){
     if(li.textContent.charAt(0) == inputStr){
        li.style.display = "list-item"; //element will be rendered as a list
     }
     else{
        li.style.display = none;
     }
   }
 }
});

  
  