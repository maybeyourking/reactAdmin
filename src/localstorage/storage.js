let localStorage = window.localStorage;
if( localStorage ){//若浏览器支持localstorage，走localstorage方法
    let Storage = {
        getItem(key){//获取方法，传入一个key值
            let storage = JSON.parse(localStorage.getItem(key))
            if(!storage){return false}
            let savetime = storage.savetime//存入时间
            let outtime = storage.outtime//预设超时时间
            let nowtime = Date.now()
            if( nowtime > savetime + outtime ){//若此条storage超时
                localStorage.removeItem(key);//删除此条storage
                return false
            }else{
                return storage
            }

        },
        setItem(key,obj){//设置方法，传入key值和key的value（一个对象）
           let itemObj = {
               data:obj,//传入的value
               savetime:Date.now(),//设置存储时间
               outtime:60*1000//设置预设超时时间 ，暂时设置1分钟
           } 
           localStorage.setItem(key,JSON.stringify(itemObj)) 
        }
   
    }
    module.exports=Storage//抛出封装好的Storage对象
}else{//若浏览器不支持localstorage，走cookie方法
    var cookies = {
        getItem(key){
            var cookie = document.cookie;
            if(!cookie){return false}
            var str = cookie.replace( /\s+/g , "");//将cookie中的空格替换成空字符串
            var arr = str.split(";");
            for( var i = 0 ; i < arr.length ; i++ ){//遍历数组 根据键找到对应的值 
                var item = arr[i].split("=")
                if( item[0] == key ){
                    return JSON.parse(item[1]); //找到了key对应的值返回对象
                }
            }
            return false;//循环结束后 如果没有找到key 就返回false
        },
        setItem(key,obj){
            var outtime = 60*1000;//设置预设超时时间 ，暂时设置1分钟
            var date = new Date();
            date.setTime(date.getTime()+outtime)
            //console.log(date.toUTCString());//注存入生存周期时需要把日期转换为世界时 UTC
            var val = JSON.stringify(obj)
		    document.cookie = key+"="+val+";expires="+date.toUTCString();
        }
    }
    module.exports = cookies
}