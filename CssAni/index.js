$(function(){
	var i=0;
	var time=setInterval(function(){
		$(".progress").css({
			"width": i+'px'
		});
		i+=1;
		console.log(i);
		if($(".progress").width()==200){
		$(".mask").addClass('complete');
		setTimeout(function(){
			$(".content").html("We&nbsp;are<br>SQUARE<br>MONSTER!<br><h4>Ahhhh&nbsp;We'll&nbsp;eat&nbsp;you</h4>");
		},3000);
			clearInterval(time);

		}
	},20);
})