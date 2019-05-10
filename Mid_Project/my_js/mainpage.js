{
    let item = document.getElementsByClassName("container");
    let a="";
    for (let i=0; i<10;i++){
        a += "                <div class=\"box\">\n" +
            "                    <a href=\"/Mid_Project/my_html/innerpage.html?article_num="+i+"\">\n" +
            "                        <img src=\"/Mid_Project/my_file/icon/userimg.jpg\" alt=\"img\">\n" +
            "                        <div class=\"box_des\">\n" +i+
            "                            ___This is an example of a multi-line ellipsis. We just set the number of lines we want to display before the ellipsis takes\n" +
            "                        </div>\n" +
            "                    </a>\n" +
            "                    <div class=\"box_info\">\n" +
            "                        조회수 <span class=\"views\"></span>회 &middot; <span class=\"time\"></span>주 전\n" +
            "                    </div>\n" +
            "                </div>"
    }
    item[0].innerHTML = a;
}
{
    //조회수 시간 랜덤표시
    const  views = document.getElementsByClassName("views");
    const  time = document.getElementsByClassName("time");
    for (let i=0; i<views.length;i++){
        views[i].innerHTML =Math.floor(Math.random() * 10000) + 1;
    }
    for (let i=0; i<time.length;i++){
        time[i].innerHTML =Math.floor(Math.random() * 20) + 1;
    }
}


function menu_btn() {
     const nav = document.getElementsByClassName('nav');
     for (let i=0; i<nav.length; i++){
        nav[i].style.display === 'none' ? nav[i].style.display = 'block' : nav[i].style.display = 'none';
    }
}
