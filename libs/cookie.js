// 增改：指定名字和值，几天之后过期，可选，没传就是会话级
function setCookie(key,value,day){
    var d = new Date();
    d.setDate(d.getDate()+day);
    document.cookie = key + "=" + value + ";expires=" + d;
}

// 删：设置过去的日期就是删除
function removeCookie(key){
    setCookie(key,"asdad",-1)
}

// 查：根据名字，返回值
function getCookie(key){
    var arr = document.cookie.split("; ");
    for(var i=0;i<arr.length;i++){
        if(arr[i].split("=")[0] == key){
            return arr[i].split("=")[1]
        }
    }
    return "";
}