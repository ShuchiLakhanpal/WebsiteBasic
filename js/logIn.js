 function login() {
     var emailTextBox = document.getElementById("registeremail");//
     var email = emailTextBox.value;//holds email value
	 var emailRegEx =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				//emailRegular Expression object has test method to test email value to true or false
		if(emailRegEx.test(email))
		{
			emailTextBox.style.backgroundColor = "green";

		}
		else
		{
			emailTextBox.style.backgroundColor = "red";
			return false;
		}
}

