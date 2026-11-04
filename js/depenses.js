
let depenses = JSON.parse(localStorage.getItem('depense')) || [];
    const ajouter = document.getElementById('ajouter');
    const titre = document.getElementById('titre');
    const montant = document.getElementById('montant');
    const groupe = document.getElementById('Groupe');
    const categorie = document.getElementById('categorie');
    const date = document.getElementById('date2');
    const payeur = document.getElementById('payeur');

function addDepense() {

    
    selectGroup();

    ajouter.addEventListener('click', function (e) {

        e.preventDefault();

        if (titre.value && montant.value && date.value) {

            let objetDepenses = {};

            objetDepenses.id = Date.now();
            objetDepenses.groupId = groupe.value;
            objetDepenses.titre = titre.value;
            objetDepenses.montant = montant.value;
            objetDepenses.categorie = categorie.value;
            objetDepenses.date = date.value;
            objetDepenses.payeurId = payeur.value;

            depenses.push(objetDepenses);

            localStorage.setItem('depense', JSON.stringify(depenses));
            window.location.href = 'depense.html'

            titre.value = "";
            montant.value = "";
            date.value = "";

            afficherDepense();

        } else {

            alert('Remplir les champs');

        }

    });

}

function selectGroup() {

    const groupesLocal = JSON.parse(localStorage.getItem('infoPartagee')) || [];

    groupe.innerHTML = '';

    groupesLocal.forEach(function (element) {

        let option = document.createElement('option');

        option.innerHTML = element.nom;
        option.value = element.id;

        groupe.appendChild(option);

    });

}


function afficherDepense() {

    const listeDepense = document.getElementById('listeDepense');

    if (listeDepense){
        listeDepense.innerHTML = "";

    depenses.forEach(function (item) {

        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${item.titre}</td>
            <td>${item.montant}</td>
            <td>${item.categorie}</td>
            <td>Karim</td>
            <td>${item.date}</td>

            <td>
                <button type="button" style="background-color: transparent; border: 0; cursor: pointer;">
                    <i class="fa-solid fa-pen" style="color: blue; font-size: 16px;"></i>
                </button>

                <button type="button" style="background-color: transparent; border: 0; cursor: pointer;">
                    <i class="fa-solid fa-trash" style="color: red;"></i>
                </button>
            </td>
        `;

        listeDepense.appendChild(tr);

    });
    }

    

}






    afficherDepense();

    addDepense();


