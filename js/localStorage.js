function login(){
  function saveName()
  {
  	var newName = document.getElementById('fullName');
  	localStorage.setItem('fullName',newName.value); //session gets cleared when browser is closed but in local user can delete the value
  }

  function saveEmail()
  {
  	var newEmail =document.getElementById('loginemail');
  	localStorage.setItem('logemail',newEmail.value);
  }

  saveEmail();//funcion call within the login function 
  saveName();
}

function displayMsg(){
	if(localStorage.getItem('fullName') !== null){
		alert( localStorage.getItem('fullName') + 'Your table has been reserved!');
	}
}

function clearMsg(){
	localStorage.clear();

}

