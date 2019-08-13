function Index(){
	this.main=document.getElementsByClassName("main")[0];
	this.star=document.getElementsByTagName("a")[0];
	this.wra=document.getElementsByClassName("wrapper")[0];
	this.numb=0;
	this.speed=5;
	this.timer=null;
	this.color=['red','blue','yellow','green'];
	this.start();
	this.flag=true;
}
Index.prototype.start=function(){
	var star=this.star;
	var self=this;
	//游戏开始
	star.addEventListener("click", function(){
		var start=document.getElementsByClassName('start')[0];
		start.style.display = 'none';
		self.play();
	}, false)
}
Index.prototype.create=function(){
	var main=this.main;
	var block=document.createElement("div");
	block.setAttribute("class", "block");
	var random=Math.floor(Math.random()*4);
	for(var i=0;i<4;i++){
		var odiv=document.createElement("div");
		odiv.setAttribute("class","odiv");                                             
		block.appendChild(odiv);		
	}
	block.children[random].classList.add("i");
	block.children[random].style.background = this.color[random];
	if(main.childNodes.length==0){
		main.appendChild(block);
	}else{
		main.insertBefore(block,main.childNodes[0]);
	}
}
Index.prototype.move=function(){
	var self=this;
	self.main=main;
	self.timer=setInterval(function(){
		var step=main.offsetTop+self.speed;
		main.style.top=step+'px';
	}, 20)
}
Index.prototype.play=function(){
	var self=this;
		main=self.main;
	clearInterval(self.timer);
	main.style.top='-150px';
	self.timer=setInterval(function(){
		var step=main.offsetTop+self.speed;
		main.style.top=step+'px';
		if(main.offsetTop>=0){
			main.style.top='-150px';
			self.create();
		}
		var len=main.childNodes.length;
		if(len>=6){
			for(var i=0;i<4;i++){
				if(main.childNodes[len-1].childNodes[i].classList.contains("i")){
					clearInterval(self.timer);
					self.flag=false;
					alert("你得的分数为："+self.numb);
				}
			}
			main.removeChild(main.childNodes[len-1])
		}
	 },20);
	self.monitor();
}
Index.prototype.monitor=function(){
	var main=this.main;
	var self=this;
	main.addEventListener("click", function(e){
		if(self.flag){
			if(e.target.classList.contains('i')){
				self.numb++;
				console.log(e.target);
				e.target.style.background = '#ccc';
				e.target.classList.remove("i");
				//this.style.color="#ccc";
			}else{
				clearInterval(self.timer);
				self.flag=false;
				alert("你得的分数为："+self.numb);
			}
		}
		console.log(self.numb);
	});
	if(self.numb%10==0){
		self.speed+=2;
		console.log(self.speed);
	}
	
}
new Index();