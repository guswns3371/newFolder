{
    Music_domestic();
}
function Music_domestic(){
    var str="";
    var music_artist = ['스트릿건즈(Street guns)','산들(B1A4)','마레','이하이',
        '투모로우바이투게더'];
    var music_name=['오래된 무언가','날씨 좋은 날','무슨 소용이 있나','누구 없소(NO ONE)','별의 낮잠'];
    for(let i=0;i<5;i++)
    {
        str += "<div class=\"music_video_box\" >\n" +
    "            <img src=\"file/img/Music/music_video("+(i+1)+").png\" ><p>"+music_artist[i]+"<br>"+music_name[i]+"</p>\n" +
    "</div>";
    }
    var music_video="";
    music_video=document.getElementById("music_video");
    music_video=str;
}
function Music_foreign(){
    var str="";
    var music_artist = ['Iceyys','IIVU(이브)','DJ Snake,shec..','Kevin Morby',
        'Ciara'];
    var music_name=['Volatile(Radio Edit.)','Enzo(Feat. Offset,21,Savage,Gucci Mane','OMG Rock N Roll','누구 없소(NO ONE)','Thinkin Bout you'];
    for(let i=0;i<5;i++)
    {
        str += "<div class=\"music_video_box\" >\n" +
            "            <img src=\"file/img/Music/music_video_foreign("+(i+1)+").png\" ><p>"+music_artist[i]+"<br>"+music_name[i]+"</p>\n" +
            "</div>";
    }
    var music_video_foreign="";
    music_video_foreign=document.getElementById("music_video");
    music_video_foreign=str;
}