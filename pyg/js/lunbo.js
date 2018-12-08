// JavaScript Document
var i=0;
var timer;
$(function(){
	$(".ig").eq(0).show().siblings().hide();
	ShowTime();

	$(".tab").hover(function(){
	  i=$(this).index();
	  Show();
	  clearInterval(timer);
	},function(){
		ShowTime();
    });
	
	$(".btn1").click(function(){
		clearInterval(timer);
		if(i==0){
			i=7;
		}
		i--;
		Show();
		ShowTime();
	});
	$(".btn2").click(function(){
		clearInterval(timer);
		if(i==5){
			i=-1
		}
		i++;
		Show();
		ShowTime();
	});
});

function Show(){
	$(".ig").eq(i).fadeIn(500).siblings().fadeOut(500);
		$(".tab").eq(i).addClass("bg").siblings().removeClass("bg");
}
function ShowTime(){
	timer=setInterval(function(){
		i++;
		if(i==6)
		{
			i=0;
		}
		Show();
	},3000);
}