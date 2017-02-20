$(document).ready(function(){

$('.parallax-window').parallax({imageSrc: 'images/image.jpg'});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$( "#datepicker" ).datepicker();

var color=0;
	$("#bgchange").click(function(){

		if(color==0){
			$("#profile").addClass("bgcolor");
			color=1;
			}
		else{
			$("#profile").removeClass("bgcolor");
			color=0;
		}


	});

	 $( "#tabs" ).tabs();

	 $("#text").keyup(function(){
	 	
		 var text=$("#text").val();
		 var textlength=text.length;

		 var remchar=50-textlength;

		 $("#textcount").text(remchar);
	 	
	 });

	// $('.parallax-window').parallax({imageSrc: 'images/image.jpg'});


});