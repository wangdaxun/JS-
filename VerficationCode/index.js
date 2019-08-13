$(function(){
	//保存所有0-9数字，a-z,A-Z字母到数组arr;
	window.arr = [];
	window.ard = "";
	init();
	//26+26+10
	function init(){
		for(var i=0;i<=9;i++){
			arr.push(i);
		}	
		for(var i=65;i<=90;i++){
			var s = "%" + i.toString(16);
			s = unescape(s);
			arr.push(s);
		}
		for(var i=97;i<=122;i++){
			var s = "%" + i.toString(16);
			s = unescape(s);
			arr.push(s);
		}
	}
	//先将验证码数据清空，再从arr数组中随机抽6个到验证码中
	function creatRandom(){
		ard = "";
		for(var i=0;i<6;i++){
			var random = Math.floor(Math.random()*62);
			ard+=arr[random];
		}
	}
	creatCanvas();
	creatRandom();
	function creatCanvas(){
		var myCanvas = document.getElementsByClassName("myCanvas")[0];
		var ctx = myCanvas.getContext("2d");//画笔
		var oImg = new Image();
		oImg.src="./images/background.jpg";
		oImg.onload = function(){
			var pattern = ctx.createPattern(oImg,'repeat');
			ctx.fillStyle = pattern;
			ctx.fillRect(0,0,myCanvas.width,myCanvas.height);
			ctx.fillStyle = "#ccc";
			ctx.textAlign = 'center';
			ctx.font = "46px Roboto Slab";
			ctx.setTransform(1,-0.12,0.3,1,0,0.12);
			ctx.fillText(ard,myCanvas.width/2-40,100);
		}
	}
	//提交按钮点击函数，1.匹配成功 2.匹配失败
	$(".btn").click(function(event) {
		//1.获取input,随机数数据
		console.log($.ard);
		var inval = $("input").val();
		var ard = window.ard;
		console.log("inval"+inval);
		console.log("ard",ard);
		//匹配成功
		if(inval == ard){
			//将inputBox类中的span添加类smright
			$(".inputBox span").removeClass().addClass("smright");
			//p标签改成不显示
			$(".error").css("display","none");
		}//匹配失败则改为smerror,并且显示error
		else{
			//添加smerror
			$(".inputBox span").removeClass().addClass("smerror");
			//显示p标签
			$(".error").css("display","inline");
		}
		//creatCanvas();
	});
	//刷新按钮点击函数，改变随机数，重新画画笔
	$(".refresh").click(function(event){
		creatRandom();
		creatCanvas();
	})
});