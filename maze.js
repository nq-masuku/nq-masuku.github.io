var flag ="Won";

$(document).ready(function(){
	$(".boundary").mouseover(function() {
         $(".boundary").addClass("youlose");
		 flag =0;
	});
	
	$("#end").mouseover(function() {
		if(flag){
			 alert("You win!:]");
		}else{
			alert("Sorry, you lost. :[");
			flag ="Won"
		}
			
        
	});
	
	$("#start").click(function() {
         $(".boundary").addClass("reset");
		 flag ="Won"
	});
	
});