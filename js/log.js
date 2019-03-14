function Register(options){
	this.btn = options.btn;
	this.user = options.user;
	this.pass = options.pass;
	this.url = options.url;
	
	this.init()
}

	Register.prototype.init = function(){
		var that = this;
		this.btn.onclick = function(){
			that.load()
		}
	}
	
	Register.prototype.load = function(){
		ajaxPost(this.url,{
			user:this.user.value,
			pass:this.pass.value
		}).then(function(res){
			switch(res){
				case "0":alert("用户名或者密码错误，请重试！");break;
				case "1":alert("登录失效，请重新登录");break;
				default:alert("登录成功，欢迎会员");
				
			}
		},function(code){
			console.log("失败")
		})
	}


new Register({
	btn:document.getElementById("btn"),
	user:document.getElementById("user"),
	pass:document.getElementById("psw"),
	url:"http://www.liyangyf.com/ctrl/login.php"
})