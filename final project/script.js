$(document).ready(function(){

	// Source for the "typed" function: http://www.mattboldt.com/demos/typed-js/ 
	$(".head").hover(function() {
		$(this).css("background-color", "rgb(2, 95, 244)");
	}, function() {
		$(this).css("background-color", "rgb(60, 120, 216)")});

	$(function(){
		$("#name").typed({
			strings: ["Ananth Agarwal"],
			typeSpeed: 100
		});
	});

	$(function() {
    $("#briefIntro, #seal").hide().fadeIn(1000);
		});
    

    $("#show").click(function() {
    	$("#blazer1").removeClass("hidden");
    	$("#blazer2").removeClass("hidden");
    });
    $("#action").click(function() {
    	$("#senior").fadeIn(1000);
    	$("#group").fadeIn(3000);
    });
    $("#snapp").click(function() {
    	$("#snap").removeClass("hidden");
    });
    $("#data").click(function() {
    	$(function(){
	 	$("#select").typed({
			strings: ["select year from nbachampions where team == \"blazers\""],
			typeSpeed: 50
	 	});
	 });
    });
    $("#data").click(function() {
    	$(function(){
	 	$("#select").typed({
			strings: ["select year from nbachampions where team == \"blazers\""],
			typeSpeed: 50
	 	});
	 });
    });
    $("#interpret").click(function() {
    	$(function(){
	 	$("#select3").typed({
			strings: ["(cons 'c (cons 's (cons '6 (cons '1 (cons 'a nil))))) -> (c s 6 1 a)"],
			typeSpeed: 50
	 	});
	 });
    });
    $("#study").click(function() {
    	$("#list").removeClass("hidden");
    	$("#printList").removeClass("hidden");

    	$(function(){
	 	$("#printList").typed({
			strings: ["\"cs61a\""],
			typeSpeed: 100
	 	});
	 });

    });

    $(window).scroll( function() {
 	$(".typed").each(function(i) {
 	var bottom = $(this).offset().top + $(this).outerHeight();
    		var bottom_window = $(window).scrollTop() + $(window).height();
     

     	if (bottom_window > bottom) {
     		$(function(){
	 	$("#python2").typed({
			strings: ["Hello World!"],
			typeSpeed: 100
	 	});
	 });
     		$(function(){
	 	$("#python").typed({
			strings: [">>> print(\"Hello World!\")"],
			typeSpeed: 100
	 	});
	 });
     	}
    	
     });
     });
    	
		
});