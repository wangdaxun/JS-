//原始数据
const datas = [
	{
		name: '韩小美',
		age: 18,
		gender: '女',
		location: '哈尔滨',
		hobby: '唱，跳',
		image: 'source/hnn1.jpg'
	},
	{
		name: '鞠卫南',
		age: 9,
		gender: '男',
		location: '赤峰',
		hobby: '吃',
		image: 'source/jwn.jpg'
	},
	{
		name: '张奇',
		age: 5,
		gender: '男',
		location: '福州',
		hobby: '说撒女内',
		image: 'source/zq.png'
	}
];
//生成数据函数
function* generator(data){
	var i = 0;
	while(true){
		yield data[i];
		i == data.length-1 ? i = 0 : i++;
	}
}
//得到数据
const data = generator(datas);
create();
//绑定事件
document.getElementsByClassName("next")[0].addEventListener("click", create);
//绑定事件的函数
function create(){
	const show = data.next().value;
	document.getElementsByClassName("text")[0].innerHTML = 
	`	
		<ul class="list-group">
			<li class="list-group-item">姓名:${show.name}</li>
			<li class="list-group-item">性别:${show.gender}</li>
			<li class="list-group-item">年龄:${show.age}</li>
			<li class="list-group-item">位置:${show.location}</li>
			<li class="list-group-item">爱好:${show.hobby}</li>
		</ul>
	`
	;
	document.getElementsByClassName("img")[0].src = show.image;
}