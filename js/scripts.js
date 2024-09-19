/************************Underline hover **********************************/
$(document).ready(function(){ 
	$('.under-hover a ').append("<em></em>");  
  $('.under-hover a ').not('.active').hover(function(){
     $(this).stop(true,false).animate({color:"#ee1194"}, {duration: 300});
    },function(){
     $(this).stop(true,false).animate({color:"#ee1194"}, {duration: 300});
   });
  $('.under-hover a ').not('.active')
  .hover(function(){
   $(this).find('em')
   .stop().animate({width:'100%', left:'0'}, {duration:200})
  }, function(){
   $(this).find('em')
   .stop().animate({width:'0', left:'50%'}, {duration:200})
  });
  
  
  $('.list-1 a ').append("<em></em>");  
  $('.list-1 a ').not('.active').hover(function(){
     $(this).stop(true,false).animate({color:"#79aa05"}, {duration: 300});
    },function(){
     $(this).stop(true,false).animate({color:"#63615E"}, {duration: 300});
   });
  $('.list-1 a ').not('.active')
  .hover(function(){
   $(this).find('em')
   .stop().animate({width:'100%', left:'0'}, {duration:200})
  }, function(){
   $(this).find('em')
   .stop().animate({width:'0', left:'50%'}, {duration:200})
  });
  
  
  $('.list a ').append("<em></em>");  
  $('.list a ').not('.active').hover(function(){
     $(this).stop(true,false).animate({color:"#63615E"}, {duration: 300});
    },function(){
     $(this).stop(true,false).animate({color:"#79aa05"}, {duration: 300});
   });
  $('.list a ').not('.active')
  .hover(function(){
   $(this).find('em')
   .stop().animate({width:'100%', left:'0'}, {duration:200})
  }, function(){
   $(this).find('em')
   .stop().animate({width:'0', left:'50%'}, {duration:200})
  });
  
  
  $('.color-2 ').append("<em></em>");  
  $('.color-2 ').not('.active').hover(function(){
     $(this).stop(true,false).animate({color:"#79aa05 "}, {duration: 300});
    },function(){
     $(this).stop(true,false).animate({color:"#63615E"}, {duration: 300});
   });
  $('.color-2 ').not('.active')
  .hover(function(){
   $(this).find('em')
   .stop().animate({width:'0', left:'50%'}, {duration:200})
  }, function(){
   $(this).find('em')
   .stop().animate({width:'100%', left:'0'}, {duration:200})
  });
  
  
  $('.color-1  ').append("<em></em>");  
    $('.color-1  ').not('.active')
  .hover(function(){
   $(this).find('em')
   .stop().animate({width:'100%', left:'0'}, {duration:200})
  }, function(){
   $(this).find('em')
   .stop().animate({width:'0', left:'50%'}, {duration:200})
  });
  


  
  
  $('.button ').append("<span></span>");  
  $('.button')
	.hover(function(){
		$(this).find('span')
		.stop().animate({width:'100%', left:'0%', top:'0%',height:'100%'}, {duration:200})
	}, function(){
		$(this).find('span')
		.stop().animate({width:'0', left:'50%',top:'50%',height:'0'}, {duration:200})
	})
	
$('.button-1 ').append("<span></span>");  
  $('.button-1')
	.hover(function(){
		$(this).find('span')
		.stop().animate({width:'100%', left:'0%', top:'0%',height:'100%'}, {duration:200})
	}, function(){
		$(this).find('span')
		.stop().animate({width:'0', left:'50%',top:'50%',height:'0'}, {duration:200})
	})
  
	
	});  


