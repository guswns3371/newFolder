{
    국내최신();
}


function 국내최신()
{
    var music_artist = ['산들(B1A4)','솔지(EXID)','준(JUNE)','9와숫자들',
        '명재 a.k.a MJ','우주히피','마레','DAWN.A(던아)','최예근',
        '오타르(OTAR)','달탐사소년단'];
    var music_name = ['날씨 좋은 날','퍼퓸 OST Part 1','Today\'s','서울시 여러분 Part 1',
        'blu','Rich','무슨 소용이 있나요','바람이 분다 OST Part 1',
        '초면에 사랑합니다 OST Part 9','오늘의 아름다움','Reset'];
    var str="";

    for (let i=1; i<=10; i++ ){
        str += "        <div class=\"music_content\" >\n" +
            "            <img src=\"file/img/Music/domestic_music ("+i+").png\" ><p>"+music_artist[i]+"<br>"+music_name[i]+"</p>\n" +
            "        </div>";
    }
    var music_list = document.getElementById("music_list");
    music_list.innerHTML =str;
}
function 해외최신() {
    var music_artist = ['산들(B1A4)','솔지(EXID)','준(JUNE)','9와숫자들',
        '명재 a.k.a MJ','우주히피','마레','DAWN.A(던아)','최예근',
        '오타르(OTAR)','달탐사소년단'];
    var music_name = ['날씨 좋은 날','퍼퓸 OST Part 1','Today\'s','서울시 여러분 Part 1',
        'blu','Rich','무슨 소용이 있나요','바람이 분다 OST Part 1',
        '초면에 사랑합니다 OST Part 9','오늘의 아름다움','Reset'];
    var str="";

    for (let i=1; i<=9; i++ ){
        str += "        <div class=\"music_content\" >\n" +
            "            <img src=\"file/img/Music/foreign_music ("+i+").png\" ><p>"+music_artist[i]+"<br>"+music_name[i]+"</p>\n" +
            "        </div>";
    }
    var music_list = document.getElementById("music_list");
    music_list.innerHTML =str;
}
