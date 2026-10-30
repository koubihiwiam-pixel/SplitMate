let nomImput = document.getElementById('nom');
let pseudoImput = document.getElementById('pseudo');
let selectedGroupe = document.getElementById('groupes');
let buttonAjoute = document.getElementById('button-ajoute');

let tablaux = document.getElementById('table');

//console.log(buttonAjoute);


//let idgroupe = objetGroup.forEach(element => {
  //console.log(element.id);
  
//});
let members = JSON.parse(localStorage.getItem('tableMomber')) || [];
let memberConter= members.length +1;

function creeUnMembre() {
  

  if (buttonAjoute) {
    
  
    
  let nomValue = nomImput.value;
  console.log(nomValue);
  
  let pseudoValue = pseudoImput.value;
  console.log(pseudoValue);
    
  let selectValue = selectedGroupe.value;
  console.log(selectValue);
  
  if (!nomValue ) {
    alert('Ecrire un nom')
    return
  }
  if (!pseudoValue) {
    alert('Ecrire un pseudo')
    return
  }
  //if (!selectValue) {
  //  alert('select un groupe')
  //}
 
  
  let objectMembers = {
       id : memberConter,
       groupeId : selectValue,
       
       nom : nomValue,
       pseudo: pseudoValue
}     

      memberConter++;
    console.log(objectMembers);
        members.push(objectMembers);
        localStorage.setItem('tableMomber',JSON.stringify(members));
   
    window.location.href = "member.html";
    afficheMembers();
   
  }
  
}

  function afficheMembers() {
    let momberss = localStorage.getItem('tableMomber');
    let momber = JSON.parse(momberss) || [];
    console.log(momber);

   tablaux.innerHTML = "";
    momber.forEach(element => {
      
      var row = `<tr>
                    <td>${element.nom}</td>
                    <td>${element.pseudo}</td>
                    <td>voyage marakech</td>
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

        members = members.filter((membre) =>membre.id != deletedMembreId);

        localStorage.setItem('nouveuTable',JSON.stringify(members));
        let table = localStorage.getItem('nouveuTable');
        let tableMombre = JSON.parse(table);
        console.log(tableMombre);
      
        
        
        });
      });
       
    }

afficheMembers();

    function modifierUnMombre() {
         let btnEditMember = tablaux.querySelectorAll('.edit');
         //console.log(btnEditMember);
         
         btnEditMember.forEach((btn)=> {
          btn.addEventListener('click',function (edit) {
            let editMembreId = edit.target.getAttribute("data-id");
           // console.log(editMembreId);
            
        
        
          })
         })
    }

    modifierUnMombre();
 








 

 





       
       
       
       
       
        
        
  
    
    
        
      

 
 
   
    
   
  
  