let depenses = [];
let groupeConter = 1;

function addDepense() {
    const ajouter = document.getElementById('ajouter');
    const titre = document.getElementById('titre');
    const montant = document.getElementById('montant');
    const groupe = document.getElementById('Groupe');
    const categorie = document.getElementById('categorie');
    const date = document.getElementById('date2');
    const payeur = document.getElementById('payeur');
    const membresConcernes = document.getElementById('membres-concernes');

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
console.log(depenseTable);

function afficherDepense(){
    
}



function selectGroup (){
    const groupe = document.getElementById('Groupe');
let valeursRecue = localStorage.getItem('infoPartagee');
let tableInfo = JSON.parse(valeursRecue);

console.log(tableInfo);
tableInfo.forEach(function(element){
    //console.log(element.id);
    let option = document.createElement('option');
    option.innerHTML = element.nom;
    option.value = element.id;
    groupe.appendChild(option);
    
    
});
}


addDepense();