function doDisplayH(){
    const Hcon = document.getElementById("Hcon");
    if(Hcon.style.display == 'none'){
        Hcon.style.display = 'block';
		Scon.style.display = 'none';
		Ycon.style.display = 'none';
    }else{
        Hcon.style.display = 'none';
    }
}

function doDisplayS(){
    const Scon = document.getElementById("Scon");
    if(Scon.style.display == 'none'){
        Scon.style.display = 'block';
		Hcon.style.display = 'none';
		Ycon.style.display = 'none';
    }else{
        Scon.style.display = 'none';
    }
}

function doDisplayY(){
    const Ycon = document.getElementById("Ycon");
    if(Ycon.style.display == 'none'){
        Ycon.style.display = 'block';
		Hcon.style.display = 'none';
		Scon.style.display = 'none';
    }else{
        Ycon.style.display = 'none';
    }
}