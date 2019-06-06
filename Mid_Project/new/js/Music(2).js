{
    showimg();
}
function showimg(){
    var str="";
    for(let c=0;c<3;c++)
    {
        str+="          <div class=\"commercial_content\">\n"+
            "    <img src=\"file/img/Music/commercial("+(c+1)+").png \"height=\"150px\" width=\"300px\">"+
            "       </div>";
    }
    var commercial_list=document.getElementById("commercial_list");
    commercial_list.innerHTML="";
    commercial_list.innerHTML=str;
}
function displaynone(){
    var commercial_list=document.getElementById("commercial_list");
    commercial_list.innerHTML="";
}