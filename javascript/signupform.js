function validate()
{
	//Declare all the variable here
	var firstname= document.getElementById("firstname").value;
	var surname= document.getElementById("surname").value;
	var email= document.getElementById("email").value;
	
	var emailreg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
	
	if(firstname!="" && surname!="" && email!="")
	{
		if(email.match(emailreg))
		{
			if(document.getElementById("useragreement").checked)
			{
				alert("All Entered values are valid. Form Validate Successfully.");
				return true;
			}
			else
			{
				alert("Please select User Agreement");
				return false;
			}
		}
		else
		{
			alert("Enter a valid Email");
			return false;
			}
	else
	{
		alert("All Fields are required");
		return false;
	}
}