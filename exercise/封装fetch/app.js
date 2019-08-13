let http = new Http();
const url = "http://192.168.0.116:9000/api/bms/category?id=01";
//请求数据
http.get(url)
	.then(data => console.log(data))
	.catch(err => reject(err));

//发送数据
// const data = {
// 	name:"韩梦瑶",
// 	job:"饰 小美",
// 	image:"/source/actor/hnn.jpg" 
// }
// http.post(url,data)
// 	.then(data => console.log(data))
// 	.catch(err => reject(err));

