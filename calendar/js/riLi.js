(function($){
	
	var pation = {
		week:['日','一','二','三','四','五','六'],
		line:['/','/'],
		der :['←','→']
	}
	
	var setting = {};
	var parent =null;
	var num= 0;
	
	function riLi(obj){
		var obj = obj||{};
		setting = $.extend({},pation,obj);
		console.log(setting,pation,obj)
		parent = this;
		
		createDemo();
		nowDate();
		createLi();
		next();
		
	}
	
	function createDemo(){
		var html='<div id="header">'+
				'<p></p>'+
				'<p></p>'+
			'</div>'+
			'<div id="mid">'+
				'<p></p>'+
				'<span>'+setting.der[0]+'</span>'+
				'<span>'+setting.der[1]+'</span>'+
				'<ul>';
					for(var i=0;i<setting.week.length;i++){
						html += '<li>'+setting.week[i]+'</li>';
					}
			html+= '</ul>'+
			'</div>'+
			'<div class="box">'+
				'<ul id="riLi">'+
					
				'</ul>'+
			'</div>'
		parent.html(html);
	}
	
	function nowDate(){
		changeTime();
		setInterval(changeTime,1000);
		
		function changeTime(){
			var nowdate = new Date();
			var headerP1 = $('#header p').eq(0);
			var headerP2 = $('#header p').eq(1);
			
			var nowHours = nowdate.getHours();
			var nowMin = nowdate.getMinutes();
			var nowSec = nowdate.getSeconds();
			
			var nowYear = nowdate.getFullYear();
			var nowMon = nowdate.getMonth();
			var nowDate = nowdate.getDate();
			var nowDay = nowdate.getDay();
			
			headerP1.html(toTime(nowHours)+':'+toTime(nowMin)+':'+toTime(nowSec));
			headerP2.html(nowYear+setting.line[0]+toTime(nowMon)+setting.line[1]+toTime(nowDate)+', 星期  '+setting.week[nowDay]);
		}
	}
	
	function createLi(){
		var list = $('#riLi');
		list.html('');
		
		var date = new Date();
		date.setMonth(date.getMonth()+1+num);
		date.setDate(0);
		var nowDays = date.getDate();
		
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		
		var item2 = $('#mid p');
		var y = date.getFullYear();
		var mon = date.getMonth()+1;
		var str = y +'年'+toTime(mon)+'月';
		item2.html(str);
		
		
		date.setDate(1);
		var n = date.getDay();
		
		date.setDate(0);
		var prevDay = date.getDate();
		for(var i=(prevDay-n);i<prevDay;i++){
			var li = $('<li>'+(i+1)+'</li>');
			li.addClass('a');
			list.append(li);
		}
		
		
		
		var date = new Date();
		var nowDate = date.getDate();
		for(var i=0;i<nowDays;i++){
			var li = $('<li>'+(i+1)+'</li>');
			if(i==nowDate-1&&num==0){
				li.css({'width':'48px','height':'61px'});
				li.addClass('sel');
			}
			list.append(li);
		}
		
		var len = 42;
		var yet = list.find('li').length;
		for(var i=0;i<(len-yet);i++){
			var li = $('<li>'+(i+1)+'</li>');
			li.addClass('a');
			list.append(li);
		}
	}
	
	function next(){
		var As = $('#mid span');
		As.eq(0).on('click',function(){
			num--;
			createLi();
		});
		As.eq(1).on('click',function(){
			num++;
			createLi();
		});
	}
	
	function toTime(n){
		return n>=10?''+n:'0'+n;
	}
	
	$.fn.extend({
		riLi:riLi
	})
})(jQuery)
