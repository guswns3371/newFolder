{
    //news stand
    let item = document.getElementsByClassName("news_stand");
    var a ="";
    for (let i=1; i<=18; i++){
        a+= "<th><a href=\"\"><img src=\"file/img/main/news/news_logo%20("+i+").png\"></a></th>";
        if (i%6 ===0) {
            item[(i/6)-1].innerHTML = a;
            a="";
        }
    }

   //ul_content
    let ul_content = document.getElementById("ul_content");
    var b = "                    <li class=\"li_title\">\n" +
        "                        <span class=\"td_title\">리빙</span>\n" +
        "                    </li>\n";
    for (let i=1; i<=14; i++){
        b += "                    <li class=\"li_default\">\n" +
            "                        <a href=\"html/main.html\">\n" +
            "                        <span class=\"td_img\"></span>\n" +
            "                            <span class=\"td_desc\"></span>\n" +
            "                        </a>\n" +
            "                    </li>";
    }
    ul_content.innerHTML = b;

    let td_img = document.getElementsByClassName("td_img");
    let td_desc = document.getElementsByClassName("td_desc");
    for (let i =1; i <= td_img.length; i++){
        td_img[i-1].innerHTML= "<img src=\"file/img/main/living/living%20("+i+").jpg\">"
        td_desc[i-1].innerHTML = i+".  리빙 관련기사입니다";
    }

    //shopping_ul
    let shopping_ul = document.getElementById("shopping_ul");
    for (let i=1; i<=9; i++){
        shopping_ul.innerHTML += "                    <li class=\"li_default\">\n" +
            "                        <a href=\"html/main.html\">\n" +
            "                            <span class=\"td_img_shop\"><img src=\"file/img/main/shopping/shopping%20("+i+").jpg\"></span>\n" +
            "                            <span class=\"td_desc_shop\">"+i+"너무 이쁘다 이건 꼭 사야하는 옷!</span>\n" +
            "                        </a>\n" +
            "                    </li>";
    }
}
function MoreNavBtn(obj){
    const more_nav = document.getElementById('more_nav');
    if (more_nav.style.display === 'none' || more_nav.style.display === ''){
        obj.innerHTML="<span>접기</span><img src=\"file/icon/up_arr.png\">";
        more_nav.style.display= 'block';
    } else {
        obj.innerHTML="<span>더보기</span><img src=\"file/icon/down_arr.png\">";
        more_nav.style.display= 'none';
    }
}

function ArticleHead(obj){
    // obj.style.fontWeight='bold';
    // obj.style.color='white';
    const  title = obj.text;
    const  title_eng = obj.title;

    //ul_content
    let ul_content = document.getElementById("ul_content");
    var b = "                    <li class=\"li_title\">\n" +
        "                        <span class=\"td_title\">"+title+"</span>\n" +
        "                    </li>\n";
    for (let i=1; i<=14; i++){
        b += "                    <li class=\"li_default\">\n" +
            "                        <a href=\"html/main.html\">\n" +
            "                        <span class=\"td_img\"><img src=\"file/img/main/"+title_eng+"/"+title_eng+"%20("+i+").jpg\"></span>\n" +
            "                            <span class=\"td_desc\">"+i+". "+title+" 관련 기사입니다</span>\n" +
            "                        </a>\n" +
            "                    </li>";
    }
    ul_content.innerHTML = b;
}
