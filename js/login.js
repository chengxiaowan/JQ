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
			tel:this.user.value,
			pass:this.pass.value
		}).then(function(res){
			switch(res){
				case "0":alert("用户名重复，请重试！");break;
				case "1":alert("注册成功！请到登录页面进行登录。");break;
				
			}
		},function(code){
			console.log("失败")
		})
	}


new Register({
	btn:document.getElementById("btn"),
	user:document.getElementById("user"),
	pass:document.getElementById("psw"),
	url:"http://www.liyangyf.com/ctrl/register.php"
})