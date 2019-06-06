{
    domestic();
    showimg();
    Music_domestic();
}

function domestic()
{
    var music_artist = ['산들(B1A4)','솔지(EXID)','준(JUNE)','9와숫자들',
        '명재 a.k.a MJ','우주히피','마레','DAWN.A(던아)','최예근',
        '오타르(OTAR)','달탐사소년단'];
    var music_name = ['날씨 좋은 날','퍼퓸 OST Part 1','Today\'s','서울시 여러분 Part 1',
        'blu','Rich','무슨 소용이 있나요','바람이 분다 OST Part 1',
        '초면에 사랑합니다 OST Part 9','오늘의 아름다움','Reset'];
    var str="";


    for (let i=0; i<11; i++ ){
        str += "        <div class=\"music_content\" >\n" +
            "            <img src=\"file/img/Music/domestic_music ("+(i+1)+").png\" ><p>"+music_artist[i]+"<br>"+music_name[i]+"</p>\n" +
            "        </div>";
    }
    var music_list = document.getElementById("music_list");
    music_list.innerHTML =str;
}
function foreign() {
    var music_artist2 = ['Forward Motion(From The Original Motion','World War Joy...Call You','Tucson Train',
        'All Alone(Feat. Linger)','Nights Like This','Maria','Cosmotion'
        ];
    var music_name2 = ['Daya','The  Chainsmokers','Bruce Springsteen','Lucian','Jack Gray','Grandson','Pehoz'
        ];
    var str="";

    for (let a=0; a<7; a++ ){
        str += "        <div class=\"music_content\" >\n" +
            "            <img src=\"file/img/Music/foreign_music ("+(a+1)+").png\" ><p>"+music_artist2[a]+"<br>"+music_name2[a]+"</p>\n" +
            "        </div>";
    }
    var music_list = document.getElementById("music_list");
    music_list.innerHTML ="";
    music_list.innerHTML =str;
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
    const music_video = document.getElementById("music_video");
    music_video.innerHTML=str;
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
    var music_video_foreign=document.getElementById("music_video");
    music_video_foreign.innerHTML=str;
}