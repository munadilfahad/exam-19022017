$(document).ready(function(){

		// username checker
	$("#login").click(function(){

		var username=$("#username").val();
		var userlength=username.length;

		var password=$("#password").val();
		var passlength=password.length;

		if(userlength==0){

			$("#usernamechecker").text("Username can't be empty");

		}
		else{
			$("#usernamechecker").text("Username Ok");			
		}

		if(passlength==0){

			$("#passwordchecker").text("Password can't be empty");

		}


	});
	// username checker

	

	// password checker
	$("#password").keyup(function(){

		var password=$("#password").val();
		var passlength=password.length;
		if(passlength<6){

			$("#passwordchecker").text("Password must be at least 6 characters long");

		}
		else{
			$("#passwordchecker").text("Password Ok");			
		}

	});
	// password checker


	// Reset action
	$("#reset").click(function(){

			$("#username").val("");
			$("#password").val("");	
			$("#passwordchecker").text("");			

	});
	// reset action

	// admin action
		$("#login").click(function(){

			var username=$("#username").val();
			var password=$("#password").val();

			if (username=="admin"&&password=="admin")
			window.location.href="profile.html";		

	});



});