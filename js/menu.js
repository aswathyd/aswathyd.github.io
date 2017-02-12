$(function(){
	workLoad();
//	workSlider();
});
//
//function workSlider(){
//	$('project-unit').click(function(){
//		$('.work-slider').css('left','-100%');
//	});
//	
//	$('work-return').click(function(){
//	$('.work-slider').css('left','0%');
//
//	});
//}

$(document).ready(function(){
	
//	$(".toggle_menu").click(function(){
//		$(".sidebar_menu").removeClass("hide_menu");
//		$(".toggle_menu").removeClass("opacity_one");
//	});
//	
//	$(".fa-times").click(function(){
//		$(".sidebar_menu").addClass("hide_menu");
//		$(".toggle_menu").addClass("opacity_one");
//
//	});
//	
		$(".toggle_menu").click(function(){
		$(".sidebar_menu").addClass("show_menu");
		$(".toggle_menu").addClass("opacity_zero");
	});
	
	$(".fa-times,header,.inside,footer").click(function(){
		
		$(".sidebar_menu").removeClass("show_menu");
		$(".toggle_menu").removeClass("opacity_zero");
	});
	
		
	//Work section
	
	$(".project-unit").click(function(){
		$(".work-slider").css("left","-100%");
		$(".work-container").show();
	});
	
	$('.work-return').click(function(){
	$('.work-slider').css('left','0%');
	$(".work-container").hide();

	});

	
});

function workLoad(){
	
	$.ajaxSetup({cache: false});
	$(".project-unit").click(function(){
		var $this = $(this),
		newTitle = $this.find('strong').text(),
		spinner = '<div class="loader">Loading...</div>',
		newHTML='/work/'+ newTitle +'.html';
		$('.project-load').html(spinner).load(newHTML);
		$('.project-title').text(newTitle);
	});
}