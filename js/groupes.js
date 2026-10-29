let carteGroup = JSON.parse(localStorage.getItem('infoPartagee')) || [];

let groupConter = carteGroup.length + 1;

function creerGroup() {
    

    const nomGroupe = document.getElementById('nomGroupe');
    const description = document.getElementById('description');
    const devise = document.getElementById('devise');
    const date = document.getElementById('date');


let objetGroup ={};
if(nomGroupe.value && devise.value && date.value ){
        objetGroup.id = groupConter;
        objetGroup.nom = nomGroupe.value;
        objetGroup.description = description.value;
        objetGroup.devise = devise.value;
        objetGroup.date = date.value;
        objetGroup.cloture = false;
        groupConter++;

        carteGroup.push(objetGroup);
}else {
        alert(`Veuillez remplir les champs`);
    }
    
    console.log(carteGroup);
    nomGroupe.value="";
    description.value="";
    date.value="";
    localStorage.setItem('infoPartagee', JSON.stringify(carteGroup));
    window.location.href = 'groupe.html';
    

}
let groupes = document.getElementById('groupes');
let valeursRecue = localStorage.getItem('infoPartagee');
let tableInfo = JSON.parse(valeursRecue);
function afficherGroupe() {
    
    
    if(valeursRecue){
        groupes.innerHTML = "";
        tableInfo.forEach(function (item) {
            groupes.innerHTML += `<div class="carte">
                    <div class="icones">
                        <i class="fa-solid fa-people-pulling"
                            style="background-color: #BBD1FB; padding: 10px; border-radius: 50%;color: blue;"></i>
                        <div>
                            <button class="modifier"><i class="fa-solid fa-pen"></i></button>
                            <button data-id="${item.id}" class="supprimer" ><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </div>
                    </div>


                    <h2>${item.nom}</h2>
                    <h3>${item.description}</h3>
                    <h4 style="color: rgb(72, 70, 70);">540 € dépensés</h4>
                    <span>ouvert</span>
                    <h6>Depuis le ${item.date}</h6>
                    

                </div>`
                console.log(item.id);
            });
                
    }else{
        groupes.textContent = "aucun groupe";
    }
    supprimerCarte();
    
    
}


function supprimerCarte(){
    let deleteCarte = groupes.querySelectorAll('.supprimer');
    

    deleteCarte.forEach(function(btn){
        btn.addEventListener("click",function(e){
            let idCarte = this.dataset.id;
            tableInfo = tableInfo.filter(function(carte){
                return carte.id != idCarte;
            });
        localStorage.setItem('infoPartagee', JSON.stringify(tableInfo));
        afficherGroupe();
        });

    });
}
afficherGroupe();