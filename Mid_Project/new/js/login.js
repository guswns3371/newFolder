function confirmValidate() {
    var  id = document.getElementById("id");
    var  pw = document.getElementById("pw");
    var err_id = document.getElementById("err_empty_id");
    var err_pw = document.getElementById("err_empty_pw");
    var isOk = true;

    if (id.value ==="" && pw.value ===""){
        err_id.innerText="아이디를 입력하세요";
        err_pw.innerText="패스워드를 입력하세요";
        isOk=false;
    } else if (id.value !=="" && pw.value ==="" ){
        err_id.innerText="";
        err_pw.innerText="패스워드를 입력하세요";
        isOk=false;
    } else if (id.value ==="" && pw.value !==""){

        err_id.innerText="아이디를 입력하세요";
        err_pw.innerText="";
        isOk=false;
    } else if (id.value !=="" && pw.value !==""){
        err_id.innerText="";
        err_pw.innerText="";
        isOk=true;
    }

    return isOk;
}