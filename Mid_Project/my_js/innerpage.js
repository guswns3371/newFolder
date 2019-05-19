{
    let aside = document.getElementsByClassName("aside_content_body");
    let a="";
    for(let i=1; i<15; i++){
        a +="                        <tr class=\"aside_content_single\">\n" +
            "                            <td><div class=\"single_num\">"+i+"</div></td>\n" +
            "                            <td> \n" +
            "                                <a href=\"/Mid_Project/my_html/innerpage.html?innerNum="+i+"\" >\n" +
            "                                    <img src=\"/Mid_Project/my_file/icon/userimg.food (14).jpg\" alt=\"img\">\n" +
            "                               </a>\n" +
            "                            </td>\n" +
            "                            <td>\n" +
            "                                <a href=\"/Mid_Project/my_html/innerpage.html?innerNum="+i+"\"  >\n" +
            "                                <span>[올림픽채널] 과르디올라와 클롭. 리그를 마친 소감 - EPL 인터뷰</span>\n" +
            "                                </a>\n" +
            "                            </td>\n" +
            "                        </tr>";
    }
    aside[0].innerHTML = a;
}