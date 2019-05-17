$("#more_nav_btn").click(function () {
    const more_nav = document.getElementById('more_nav');
    if (more_nav.style.display === 'none') {
        $("#more_nav_btn").html("<span>접기 </span><img src=\"file/icon/up_arr.png\">");
        more_nav.style.display = 'block';
    }else {
        $("#more_nav_btn").html("<span>더보기 </span><img src=\"file/icon/down_arr.png\">");
        more_nav.style.display = 'none';
    }
});