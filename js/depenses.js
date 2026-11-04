 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 const groupe = document.getElementById('Groupe');
const payeur = document.getElementById("payeur");
const membresConcernes = document.getElementById("membres-concernes");
 function selectGroupe() {
    let members = JSON.parse(localStorage.getItem("tableMomber")); 
    console.log(members);
     let newMombre;

 groupe.addEventListener("change", function () {   
    console.log(groupe.value);
   newMombre = members.filter(function (element) {
    return element.groupeId == groupe.value;   });
    payeur.innerHTML = "";
   console.log(newMombre);   newMombre.forEach(function (membre) {  
       let option = document.createElement("option");
    
       option.innerHTML = membre.nom; 
         option.value = membre.id;
    payeur.appendChild(option);  
 });   
 membresConcernes.innerHTML ="";
 newMombre.forEach(function (membre) {  
       let option = document.createElement("option");
     option.innerHTML = membre.nom;    
      option.value = membre.id;
    membresConcernes.appendChild(option);   
}); 
});;
 }
 selectGroupe();
 
