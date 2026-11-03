let nomImput = document.getElementById('nom');
let pseudoImput = document.getElementById('pseudo');
let selectedGroupe = document.getElementById('groupes');
let buttonAjoute = document.getElementById('button-ajoute');

let tablaux = document.getElementById('table');

//console.log(buttonAjoute);
let listeGroupes = JSON.parse(localStorage.getItem('infoPartagee')) || [];


let members = JSON.parse(localStorage.getItem('tableMomber')) || [];
let memberConter= Date.now();
// console.log(listeGroupes);

 let groupsSelect = document.getElementById('groupes');
 //console.log(groupsSelect);

 
 listeGroupes.forEach((element)=> {
   
  //  console.log(element.id);
   // console.log(element.nom);
    let optionGroup = document.createElement('option');
   // console.log(optionGroup);
    
    optionGroup.innerHTML = element.nom;
    optionGroup.value = element.id;
    selectedGroupe.appendChild(optionGroup);
    //console.log(selectedGroupe.value);
    
  })


function creeUnMembre() {
  
    
  let nomValue = nomImput.value;
  //console.log(nomValue);
  
  let pseudoValue = pseudoImput.value;
  //console.log(pseudoValue);
    
 let selectGroup = selectedGroupe.value;
 //console.log(selectGroup);
 
  
  if (!nomValue ) {
    alert('Ecrire un nom')
    return
  }
  if (!pseudoValue) {
    alert('Ecrire un pseudo')
    return
  }
  if (!selectGroup) {
  alert('selectione un groupe')
      return
  }
 
  let objectMembers = {
       id : memberConter,
       groupeId : selectGroup,
       nom : nomValue,
       pseudo: pseudoValue
}     

      
   // console.log(objectMembers);
        members.push(objectMembers);
        localStorage.setItem('tableMomber',JSON.stringify(members));
   
    window.location.href = "member.html";
   
   
  }
   


  function afficheMembers() {
    let momberss = localStorage.getItem('tableMomber');
    let momber = JSON.parse(momberss) || [];
   // console.log(momber);

   tablaux.innerHTML = "";
    momber.forEach(element => {
      let groupTrouve = listeGroupes.find((group)=> {
         console.log(element.groupeId);
          //console.log(group.id);
          
           return element.groupeId == group.id;
           

      })
     // console.log("Groupe trouvé :", groupTrouve);  
      let nomGroupe;
      if (groupTrouve) {
        nomGroupe = groupTrouve.nom;
      }else{
        nomGroupe = "Groupe introuvable"
      }
      
      var row = `<tr>
                    <td>${element.nom}</td>
                    <td>${element.pseudo}</td>
                    <td> ${nomGroupe}</td>
                    <td>
                        <button class="edit"><i data-id = "${element.id}" class="fa-solid fa-pen" style="border:0px"></i></button>
                        <button class="delet"><i  data-id = "${element.id}" class="fa-regular fa-trash-can" ></i></button>
                    </td>
                </tr>`
                
                
                
      tablaux.innerHTML += row;
    deleteMember();
     

    }
    )};

function deleteMember(){
    let btnDeletMember = tablaux.querySelectorAll('.delet');
    
    //console.log(btnDeletMember);
    btnDeletMember.forEach((btn) => {
      btn.addEventListener('click',function (delet) {
       
        let deletedMembreId = delet.target.getAttribute("data-id");
        console.log(deletedMembreId);

        members = members.filter((membre) =>membre.id != deletedMembreId)
        localStorage.setItem('tableMomber',JSON.stringify(members));
        let table = localStorage.getItem('tableMomber');

        let tableMombre = JSON.parse(table);
       // console.log(tableMombre);
      afficheMembers();
        
        
        });
      });
       
    }



    function modifierUnMombre() {
         let btnEditMember = tablaux.querySelectorAll('.edit');
         console.log(btnEditMember);
         
         btnEditMember.forEach((btn)=> {
          btn.addEventListener('click',function (edit) {
            let editMembreId = edit.target.getAttribute("data-id");
           console.log(editMembreId);
           let memberModifie = members.find((member)=> {
            return editMembreId == member.id;

           })
           console.log(memberModifie);
          
           
          })
         })
         let membreEdit = localStorage.getItem('momberModifier');
        console.log(membreEdit);
     
    }

         afficheMembers();

   
 


 

   


   
    modifierUnMombre();





 

 





       
       
       
       
       
        
        
  
    
    
        
      

 
 
   
    
   
  
  