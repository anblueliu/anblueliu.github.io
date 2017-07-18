$(document).ready(function(){
     $.fn.fullpage({
     	anchors:["page1","page2","page3"],
     	"menu": '#menu',
     	navigation:true,
     	loopBottom:true,
     	    afterLoad: function(anchorLink,index) {
						if(index == 2) {
							$('.section2').find('.shouji1').delay(500).animate({
								bottom: '-120%'
							}, 1500, 'easeOutExpo');
							$(".section2").find(".wenzi").delay(600).animate({
								top:"-60%"
							}, 1500, 'easeOutExpo');
							$(".sanren").delay(300).animate({
								left:"-60%"
							}, 1500, 'easeOutExpo');
							
							$(".yiren").delay(300).animate({
								right:"-60%"
							}, 1500, 'easeOutExpo');
							$(".wen").delay(600).animate({
								top:"20%"
							}, 1500, 'easeOutExpo');
							
							$(".xin").delay(300).animate({
								left:"20%"
							}, 1500, 'easeOutExpo');
							
							$('.shou').delay(500).animate({
								top: "10%"
							}, 1500, 'easeOutExpo');
							
						}
			},
     	    onLeave: function(index, direction) {
						if(index == '2') {
							$('.section2').find('.shouji1').delay(500).animate({
								bottom: '0'
							}, 1500, 'easeOutExpo');
							$(".section2").find(".wenzi").delay(600).animate({
								top:"0%"
							}, 1500, 'easeOutExpo');
							$(".sanren").delay(300).animate({
								left:"40%"
							}, 1500, 'easeOutExpo');
							$(".yiren").delay(300).animate({
								right:"20%"
							}, 1500, 'easeOutExpo');
							$(".wen").delay(600).animate({
								top:"0%"
							}, 1500, 'easeOutExpo');
							
							$(".xin").delay(300).animate({
								left:"120%"
							}, 1500, 'easeOutExpo');
							
							$('.shou').delay(500).animate({
								top: '-110%'
							}, 1500, 'easeOutExpo');
						}
     	  }
     	  
     	
    });
  $("#menu a").click(function(){
 	for(var i=0;i<$("#menu a").length;i++){  
 	 $("#menu a").css({"background-color":"#ffcc00","color":"#000000"});
  	}
  	$(this).css({"background-color":"black","color":"#ffcc00"});
  	
   })
   $(".sanren1, .sanren2, .sanren3").css({"opacity":"1"});
   
   console.log(window.location.hash)   
   
});