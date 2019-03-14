class Goods{
	constructor(options){
		this.cont = options.cont;
		this.url = options.url;
		//1.准备读取数据
		this.load()
		// 4使用事件委托绑定事件.
		this.addEvent()
	    
	}
	load(){
		var that = this;
		ajaxGet(this.url).then(function(res){
			//2.解析并保存数据
			that.res = JSON.parse(res);
			//3.准备渲染页面
			that.display()
		})
	}
	display(){
		var str = ""
		this.res.forEach(function(value){
			str +=`<div class="box" index="${value.goodsId}">
				<img src="${value.src}">
				<span>RMB ${value.price}</span>
				<p>${value.name}</p>
				<em>加入购物车</em>
			</div>`
		})
		this.cont.innerHTML = str;
	}
	addEvent(){
		var that = this;
		this.cont.addEventListener("click",function(eve){
			var e = eve || window.event;
			var target = e.target || e.srcElement;
			if(target.nodeName == "EM"){
				// 5.拿到当前点击的货号
				that.id = target.parentNode.getAttribute("index");
				// 6.准备存coolie
				that.setGoods()
			}
		})
	}
	setGoods(){
		// 判断是否为第一次存取cookie
		
		//6.1储存前先读取，确定是否第一次存储
		this.goods = getCookie("goods")==="" ? [] :JSON.parse(getCookie("goods"));
		// 6.2在6.1中判断，如果是第一次，直接存，goods是数组，长度为0
		if(this.goods.length < 1){
			//6.3第一次存，直接存
			this.goods.push({
				id:this.id,
				num:1,
			})
			
		}else{
			var onoff = true;		//开关
			//6.4非第一次,先判断书否有重复1，存在就增加数量，修改开关，结束循环
			for(var i=0;i<this.goods.length;i++){
				if(this.goods[i].id === this.id){
					this.goods[i].num++
					onoff = false;
					break;
				}
			}
			//6.5，无重复，循环后开关没有被关闭，直结新增数据到cookie
			if(onoff){
				this.goods.push({
					id:this.id,
					num:1
				})
			}
		}
		
		// 6.6以上步骤都只是在修改读取并编译之后的数组，没有操作cookie，现在转成字符，设置给cookie
			setCookie("goods",JSON.stringify(this.goods));
	}
}

new Goods({
	cont:document.getElementById("cont"),
	url:"ctrl/select.php",
});