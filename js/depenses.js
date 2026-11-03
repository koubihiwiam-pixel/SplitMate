let depenses = [];
let groupeConter = 1;

function addDepense() {
    const ajouter = document.getElementById('ajouter');
    const titre = document.getElementById('titre');
    const montant = document.getElementById('montant');
    const groupe = document.getElementById('Groupe')
    const categorie = document.getElementById('categorie');
    const date = document.getElementById('date2');
    const payeur = document.getElementById('payeur');
    const membresConcernes = document.getElementById('membres-concernes');
    ajouter.addEventListener('click', function(e){
        e.preventDefault();
        let objetDepenses = {};
   if(titre.value && montant.value && date.value ){
        objetDepenses.id = groupeConter;
        objetDepenses.titre = titre.value;
        objetDepenses.montant = montant.value;
        objetDepenses.Groupe = groupe.value
        objetDepenses.categorie = categorie.value;
        objetDepenses.date = date.value;
        objetDepenses.payeur = payeur.value;
        objetDepenses.membres = membresConcernes.value;
        groupeConter++;

        depenses.push(objetDepenses);
        console.log(objetDepenses);
        console.log(depenses);
   }
   else{
    alert('remplir les champs');
   }
   localStorage.setItem('information', JSON.stringify(depenses));
   window.location.href = 'depense.html';
    })
    
}

function afficherDepense(){
    
}



addDepense();