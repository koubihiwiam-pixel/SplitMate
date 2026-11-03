let depenses = [];
let groupeConter = 1;
const groupes = document.getElementById('Groupe');
//console.log(groupes.value);


    const ajouter = document.getElementById('ajouter');
    const titre = document.getElementById('titre');
    const montant = document.getElementById('montant');
    
    
    const categorie = document.getElementById('categorie');
    const date = document.getElementById('date2');
    const payeur = document.getElementById('payeur');
    const membresConcernes = document.getElementById('membres-concernes');
function addDepense() {
   


    selectGroup ();


    
    ajouter.addEventListener('click', function(e){
        e.preventDefault();
        let objetDepenses = {};
   if(titre.value && montant.value && date.value ){
        objetDepenses.id = groupeConter;
        objetDepenses.groupId = groupe.value;
        objetDepenses.titre = titre.value;
        objetDepenses.montant = montant.value;
        objetDepenses.categorie = categorie.value;
        objetDepenses.date = date.value;
        objetDepenses.payeurId = payeur.value;
        groupeConter++;

        depenses.push(objetDepenses);
        console.log(objetDepenses);
        console.log(depenses);
    localStorage.setItem('information', JSON.stringify(depenses));
    window.location.href = 'depense.html';
   }
   else{
    alert('remplir les champs');
   }
   
    })
    
}

let depenseRecue = localStorage.getItem('information');
let depenseTable = JSON.parse(depenseRecue);
//console.log(depenseTable);

function afficherDepense(){
    
}


let groupesLocal = JSON.parse(localStorage.getItem('infoPartagee')) 
console.log(groupesLocal);

function selectGroup (){
    //const groupe = document.getElementById('Groupe');



groupesLocal.forEach(function(element){
    //console.log(element.id);
    let option = document.createElement('option');
    option.innerHTML = element.nom;
    option.value = element.id;
    groupes.appendChild(option);

    //console.log(option.value);
    
    
    
});
}


addDepense();










let members = JSON.parse(localStorage.getItem('tableMomber'));
console.log(members);

let newMombre;

groupes.addEventListener('change', function () {
   console.log(groupes.value);
 
     newMombre = members.filter(function (element) {
   return element.groupeId == groupes.value})
  
   console.log(newMombre);
    newMombre.forEach(function (membre) {
     let option = document.createElement('option');
     
    option.innerHTML = membre.nom;
    option.value = membre.id;
    payeur.appendChild(option);
    
})
 newMombre.forEach(function (membre) {
     let option = document.createElement('option');
     
    option.innerHTML = membre.nom;
    option.value = membre.id;
    membresConcernes.appendChild(option);

   })
})





 