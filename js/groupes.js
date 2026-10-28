let carteGroup = JSON.parse(localStorage.getItem('infoPartagee')) || [];

let groupConter = carteGroup.length + 1;

function creerGroup() {
    

    const nomGroupe = document.getElementById('nomGroupe');
    const description = document.getElementById('description');
    const devise = document.getElementById('devise');
    const date = document.getElementById('date');




    let objetGroup = {
        id: groupConter,
        nom: nomGroupe.value,
        description: description.value,
        devise: devise.value,
        date: date.value,
        cloture: false,
    };
    groupConter++;
    carteGroup.push(objetGroup);
    console.log(carteGroup);
    localStorage.setItem('infoPartagee', JSON.stringify(carteGroup));
    window.location.href = 'groupe.html';
    

}

function afficherGroupe() {
    let groupes = document.getElementById('groupes');
    const valeursRecue = localStorage.getItem('infoPartagee');
    if(valeursRecue){
        const tableInfo = JSON.parse(valeursRecue);
        console.log(tableInfo);
        groupes.innerHTML = "";
        tableInfo.forEach(function (item) {
            groupes.innerHTML += `<div class="carte">
                    <div class="icones">
                        <i class="fa-solid fa-people-pulling"
                            style="background-color: #BBD1FB; padding: 10px; border-radius: 50%;color: blue;"></i>
                        <div>
                            <button class="modifier"><i class="fa-solid fa-pen"></i></button>
                            <button class="supprimer"><i class="fa-sharp fa-solid fa-trash"></i></button>
                        </div>
                    </div>


                    <h2>${item.nom}</h2>
                    <h3><i class="fa-solid fa-user"></i> 3 Membres</h3>
                    <h4 style="color: rgb(72, 70, 70);">540 € dépensés</h4>
                    <span>Ouvert</span>
                    <h6>Depuis le ${item.date}</h6>

                </div>`});
    }else{
        groupes.textContent = "aucun groupe";
    }



}
document.addEventListener("DOMContentLoaded", afficherGroupe);