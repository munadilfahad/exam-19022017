$(document).ready(function(){

$( "#datepicker" ).datepicker();

	$("#bgchange").click(function(){

		$("#profile").addClass("bgcolor");
	});

	 $( "#tabs" ).tabs();

	 $("#text").keyup(function(){
	 	
	 var text=$("#text").val();
	 var textlength=text.length;

	 var remchar=50-textlength;

	 $("#textcount").text(remchar);
	 	
	 });

$('.parallax-window').parallax({imageSrc: 'images/image.jpg'});


});