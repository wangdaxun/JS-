function scroll(){
	if(window.pageYOffset!==null){
		return{
			top:window.pageYOffset,
			left:window.pageXOffset
		}
	}else if(document.compatMode==="CSS1Compat"){
		return{
			top:document.documentElement.scrollTop,
			left:document.documentElement.scrollLeft
		}
	}
	return{
		top:document.body.scrollTo,
		left:document.body.scrollLeft
	}
}