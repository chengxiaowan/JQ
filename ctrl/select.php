<?php
	//连接数据库
	$link = @mysql_connect("localhost:3306","root","gy920902");
	if(!$link){
		echo mysql_error($link);
	}

	//选择数据库
	$db = @mysql_select_db("drool");
	if(!$db){
		echo mysql_errno($link);
	}
	
	//设置字符集
	$utf = @mysql_query("set names utf8");
	if(!$utf){
		echo mysql_error($link);
	}
	
	// 读取数据
	$q = @mysql_query("SELECT * FROM goods");
	if($q){
		$str = "";
		while($arr = mysql_fetch_assoc($q)){
			$str = $str . json_encode($arr) . ",";
		}
		echo "[" . substr($str,0,-1) . "]";
	}else{
		echo mysql_error($link);
	}
?>