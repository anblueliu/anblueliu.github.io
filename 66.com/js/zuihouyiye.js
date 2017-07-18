$(document).ready(function(){
		$(".daohuang1 li").click(function(){
			 $(".inbox-left>div").eq($(this).index()).show().siblings().hide()
		});	
});