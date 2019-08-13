function Index(){
	this.wra=document.getElementsByClassName("wrapper")[0].children[0];
	this.wralen=document.getElementsByClassName("wrapper")[0].offsetWidth;
	this.create();
	this.arr=new Array();
	this.load();
	this.change();
	this.resize();
}
Index.prototype.create=function(){
	var wra=this.wra;
	(function(){
		for(var i=0;i<16;i++){
			var list=document.createElement("li");
			var img=document.createElement("img");
			img.src="image/img"+ (i+5) +".jpg";
			list.appendChild(img);
			wra.appendChild(list);
		}
	}())
}
Index.prototype.change=function(){
	var self=this;
	console.log(111);
	setTimeout(function(){	
	var list=document.getElementsByTagName("li");
		wra=self.wra;
		coln=Math.floor(wra.offsetWidth/list[0].offsetWidth);
		arr=new Array();
	//先求出来有多少列
	for(var i=0;i<coln;i++){
		arr.push(list[i].offsetHeight);
		list[i].style = "";
	}
	//将除了第一列的的li排列
	for(var i=coln;i<list.length;i++){
		var min=findmin(arr);
			index=findindex(arr,min);
		list[i].style.position = 'absolute';
		list[i].style.left=index*list[i].offsetWidth+'px';
		list[i].style.top=min+'px';
		arr[index]+=list[i].offsetHeight;
		}
	},200);
	
}
Index.prototype.resize = function(){
	var self = this;
	var timer = null;
	window.onresize = function(){
		//节流，每隔多少时间做一次
		clearTimeout(timer);
		timer = setTimeout(function(){
			self.change();
		}, 200);
	}
}
Index.prototype.checkwillload=function(){
	var list=document.getElementsByTagName("li");
	var length=list[list.length-1].offsetHeight+list[list.length-1].offsetTop;
	return length<=scroll().top+document.body.clientHeight;
}
Index.prototype.load=function(){
	var self = this;
	var timer = null;//节流
	console.log(this.checkwillload());
	window.onscroll=function(){
		if(self.checkwillload()){
			var data=[
				{"src":"img21.jpg"},
				{"src":"img22.jpg"},
				{"src":"img23.jpg"},
				{"src":"img24.jpg"},
				{"src":"img25.jpg"},
				{"src":"img26.jpg"},
				{"src":"img27.jpg"},
				{"src":"img28.jpg"},
				{"src":"img29.jpg"},
				{"src":"img30.jpg"},
				{"src":"img31.jpg"}
			];
			//延迟，节流
			clearTimeout(timer);
			timer = setTimeout(function(){
				for(var i=0;i<data.length;i++){
				var li=document.createElement("li");
				var img=document.createElement("img");
				img.src="image/"+data[i].src;
				li.appendChild(img);
				self.wra.appendChild(li);
				}
				self.change();
			}, 200);
		}
	}
}
function findmin(arr){
	var value=arr[0];
	for(var i=1;i<arr.length;i++){
		if(arr[i]<value){
			value=arr[i];
		}
	}
	return value;
}
function findindex(arr,value){
	for(var i=0;i<arr.length;i++){
		if(arr[i]==value){
			return i;
		}
	}
}
var wralen;
new Index();