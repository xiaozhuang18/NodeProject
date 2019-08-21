/**
 * Created by 14486 on 2019/8/20.
 */
window.onload = function () {
    document.onclick = function () {
        alert(1);
        let xhr = new XMLHttpRequest();
        xhr.open("post","http://localhost:3000/postDateShow",true);
        // send里面的内容就是前端发送给后台的的数据;
        xhr.send("你好");
        xhr.onreadystatechange = function () {
            if(this.readyState === 4 && this.status === 200){
                box.innerHTML = this.responseText;
            }
        }
    }
};