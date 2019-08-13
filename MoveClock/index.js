$(function(){
	function Index(dom,isHours){
		this.class=['normal','far','far','distance','distance','distance','distance','distance','distance','distance'];
		this.isHours=isHours;
		this.dom=Array.from(dom);
		this.createcolnmn();
		this.start();
	}
	Index.prototype.start=function(){
		var self=this;
		setInterval(function(){
			var s=self.getclock();
			for(var i=0;i<self.dom.length;i++){
				self.dom[i].style.transform="translateY(calc(50vh - "+ 86*s[i] + "px - 43px)";
				Array.from(self.dom[i].children).forEach(function(ele,index){
					var classname=self.getClass(parseInt(s[i]),index);
					$(ele).attr('class',classname);
				});
			}
		},500);
	}
	Index.prototype.getclock=function(){
		var d=new Date();
		return [this.isHours ? d.getHours() : d.getHours()%12||d.getHours(),d.getMinutes(),d.getSeconds()].reduce(function(p,n){
			return p+("0"+n).slice(-2);
		},"");
	}
	Index.prototype.createcolnmn=function(){
		for(var i=0;i<6;i++){
			var s="<div>"+ i +"</div>";
			$(".six").append(s);	
		}
		for(var i=0;i<10;i++){
			var s="<div>"+ i +"</div>";
			$(".ten").append(s);
		}
	}
	Index.prototype.getClass=function(n,i){
		var className=this.class.find(function(ele,index){
			return i - index === n || i+index === n ;
		}); 
		return className || "";
	}
	new Index($(".colnmn"),true);
});