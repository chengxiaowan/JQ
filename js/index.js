$("#banner").banner({
				items: $("#banner").children(".imgbox").children("img"),
				left: $("#banner").children(".btns").children("#left"),
				right: $("#banner").children(".btns").children("#right"),
				list: $("#banner").children(".banner-t").children("span"),
				moveTime: 500,
				autoPlay: true,
				delayTime: 3000,
			});

			$(function() {
				$("#tab li").mouseenter(function() {
					//获取点击的元素给其添加样式，讲其兄弟元素的样式移除
					$(this).addClass("tab-active").siblings().removeClass("tab-active");
					//获取选中元素的下标
					var index = $(this).index();
					$(this).parent().siblings().children().eq(index).addClass("cont-active")
						.siblings().removeClass("cont-active");
				});
			});
			
			$.ajax({
				url:"data/data.json",
				success:function(res){
					var str = ""
					for(var i=0;i<res.length;i++){
						str+=`
						<div class="goods">
							<img src="${res[i].url}" alt="">
							<a href="#">
								${res[i].name}<br>
								<span>${res[i].name2}</span>
							</a>
							<i>￥${res[i].price}<b>￥${res[i].price2}</b></i>
						</div>
						`
					}
					$("#c1").append(str);
				}
			})
			
			$.ajax({
				url:"data/data2.json",
				success:function(res){
					var str = ""
					for(var i=0;i<res.length;i++){
						str+=`
						<div class="goods">
							<img src="${res[i].url}" alt="">
							<a href="#">
								${res[i].name}<br>
								<span>${res[i].name2}</span>
							</a>
							<i>￥${res[i].price}<b>￥${res[i].price2}</b></i>
						</div>
						`
					}
					$("#c2").append(str);
				}
			})
			
			$.ajax({
				url:"data/data3.json",
				success:function(res){
					var str = ""
					for(var i=0;i<res.length;i++){
						str+=`
						<div class="goods">
							<img src="${res[i].url}" alt="">
							<a href="#">
								${res[i].name}<br>
								<span>${res[i].name2}</span>
							</a>
							<i>￥${res[i].price}<b>￥${res[i].price2}</b></i>
						</div>
						`
					}
					$("#c3").append(str);
				}
			})
			
			$.ajax({
				url:"data/data4.json",
				success:function(res){
					var str = ""
					for(var i=0;i<res.length;i++){
						str+=`
						<div class="goods">
							<img src="${res[i].url}" alt="">
							<a href="#">
								${res[i].name}<br>
								<span>${res[i].name2}</span>
							</a>
							<i>￥${res[i].price}<b>￥${res[i].price2}</b></i>
						</div>
						`
					}
					$("#c4").append(str);
				}
			})
			
			$.ajax({
				url:"data/data5.json",
				success:function(res){
					var str = ""
					for(var i=0;i<res.length;i++){
						str+=`
						<div class="goods">
							<img src="${res[i].url}" alt="">
							<a href="#">
								${res[i].name}<br>
								<span>${res[i].name2}</span>
							</a>
							<i>￥${res[i].price}<b>￥${res[i].price2}</b></i>
						</div>
						`
					}
					$("#c5").append(str);
				}
			})